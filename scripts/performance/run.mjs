import { spawn } from "node:child_process";
import { appendFile, mkdir, writeFile } from "node:fs/promises";
import { createServer } from "node:net";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs } from "node:util";
import { setTimeout as delay } from "node:timers/promises";
import * as config from "../../performance.config.mjs";
import { extractMetrics, renderMarkdown, renderReport, summarize } from "./report.mjs";

const root = fileURLToPath(new URL("../../", import.meta.url));
const children = new Set();
let chrome;
let interrupted = false;

function interrupt() {
  interrupted = true;
  for (const child of children) child.kill("SIGTERM");
  void chrome?.kill().catch(() => {});
}

function startNode(args) {
  const child = spawn(process.execPath, args, { cwd: root, stdio: "inherit" });
  children.add(child);
  child.once("exit", () => children.delete(child));
  return child;
}

async function stop(child) {
  if (!child || child.exitCode !== null || child.signalCode !== null) return;
  child.kill("SIGTERM");
  for (let attempt = 0; attempt < 50; attempt++) {
    if (child.exitCode !== null || child.signalCode !== null) return;
    await delay(100);
  }
  child.kill("SIGKILL");
}

async function freePort(requestedPort = 0) {
  const server = createServer();
  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(requestedPort, "127.0.0.1", resolve);
  });
  const port = server.address().port;
  await new Promise((resolve) => server.close(resolve));
  return port;
}

async function waitForServer(baseUrl, child) {
  let spawnError;
  const onError = (error) => { spawnError = error; };
  child.on("error", onError);
  try {
    const deadline = Date.now() + 60000;
    while (Date.now() < deadline) {
      if (spawnError) throw spawnError;
      if (interrupted) throw new Error("Audit interrupted.");
      if (child.exitCode !== null || child.signalCode !== null) throw new Error("Production server stopped before it was ready. Check the Next.js output above.");
      try {
        const response = await fetch(baseUrl, { signal: AbortSignal.timeout(1000) });
        await response.body?.cancel();
        if (response.ok) return;
      } catch { /* The server may still be starting. */ }
      await delay(500);
    }
    throw new Error("Production server did not become ready within 60 seconds.");
  } finally {
    child.off("error", onError);
  }
}

function selection(value, fallback) {
  const selected = value === undefined ? fallback : value.split(",").map((item) => item.trim());
  if (!selected.length || selected.some((item) => !item)) throw new Error("Selections must be nonempty comma-separated lists.");
  return [...new Set(selected)];
}

async function main() {
  const { values } = parseArgs({ options: {
    url: { type: "string" }, profiles: { type: "string" }, paths: { type: "string" },
    runs: { type: "string" }, port: { type: "string" },
    "no-build": { type: "boolean", default: false },
    strict: { type: "boolean", default: false }, help: { type: "boolean", default: false },
  } });
  if (values.help) {
    console.log(`Usage: npm run perf -- [options]
  --url https://example.com   Audit a deployed site; skip local build/server
  --profiles phone,tablet,desktop
  --paths /,/blog             Override paths in performance.config.mjs
  --runs 3                   Runs per page/profile (1–10)
  --port 3100                Local server port (default: a free port)
  --no-build                 Reuse the existing production build
  --strict                   Exit nonzero when any median exceeds a target
Reports: reports/performance/<timestamp>/index.html`);
    return;
  }
  const runs = values.runs === undefined ? config.runs : Number(values.runs);
  if (!Number.isInteger(runs) || runs < 1 || runs > 10) throw new Error("--runs must be an integer from 1 to 10.");
  const names = selection(values.profiles, Object.keys(config.profiles));
  for (const name of names) if (!Object.hasOwn(config.profiles, name)) throw new Error(`Unknown profile '${name}'. Choose ${Object.keys(config.profiles).join(", ")}.`);
  const paths = selection(values.paths, config.paths);
  for (const route of paths) {
    if (!route.startsWith("/") || route.startsWith("//") || route.includes("\\") || /[?#]/.test(route)) throw new Error(`Invalid page path '${route}'. Use a pathname such as /blog.`);
  }
  const requestedPort = values.port === undefined ? undefined : Number(values.port);
  if (requestedPort !== undefined && (!Number.isInteger(requestedPort) || requestedPort < 1 || requestedPort > 65535)) throw new Error("--port must be an integer from 1 to 65535.");
  let baseUrl;
  if (values.url !== undefined) {
    const url = new URL(values.url);
    if (!["http:", "https:"].includes(url.protocol) || url.username || url.password || url.pathname !== "/" || url.search || url.hash) throw new Error("--url must be an HTTP(S) origin without credentials, a path, query, or fragment.");
    baseUrl = url.origin;
  }

  let server;
  process.on("SIGINT", interrupt);
  process.on("SIGTERM", interrupt);
  try {
    if (!baseUrl) {
      if (!values["no-build"]) {
        console.log("Building production site…");
        const build = startNode(["node_modules/next/dist/bin/next", "build"]);
        await new Promise((resolve, reject) => {
          build.once("error", reject);
          build.once("exit", (code) => code === 0 ? resolve() : reject(new Error("Production build failed. Fix the build before auditing.")));
        });
      }
      const port = await freePort(requestedPort ?? 0);
      baseUrl = `http://127.0.0.1:${port}`;
      server = startNode(["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", String(port)]);
      await waitForServer(baseUrl, server);
    }
    const { default: lighthouse } = await import("lighthouse");
    const { default: desktopConfig } = await import("lighthouse/core/config/desktop-config.js");
    const { launch } = await import("chrome-launcher");
    // Chrome uses a temporary profile; the user's cookies and browser stay untouched.
    chrome = await launch({ chromeFlags: ["--headless", "--disable-dev-shm-usage"], chromePath: process.env.CHROME_PATH });
    const createdAt = new Date().toISOString();
    const output = path.join(root, "reports", "performance", createdAt.replace(/[:.]/g, "-"));
    await mkdir(output, { recursive: true });
    const report = { createdAt, baseUrl, runs, profiles: Object.fromEntries(names.map((name) => [name, config.profiles[name]])), budgets: config.budgets, results: [], errors: [] };
    console.log(`Auditing ${paths.length} pages × ${names.length} profiles × ${runs} runs. Reports: ${output}`);
    try {
      for (const [pageIndex, route] of paths.entries()) {
        for (const name of names) {
          if (interrupted) throw new Error("Audit interrupted.");
          const profile = config.profiles[name];
          const samples = [];
          try {
            const url = new URL(route, baseUrl).href;
            // A 404 or redirect must not masquerade as a fast successful page.
            const response = await fetch(url, { redirect: "manual", signal: AbortSignal.timeout(15000) });
            await response.body?.cancel();
            if (response.status !== 200) throw new Error(`Expected HTTP 200 at ${url}; received ${response.status}.`);
            for (let run = 1; run <= runs; run++) {
              if (interrupted) throw new Error("Audit interrupted.");
              console.log(`${route} · ${name} · run ${run}/${runs}`);
              const result = await lighthouse(url, { port: chrome.port, logLevel: "error", output: "html" }, {
                extends: "lighthouse:default",
                settings: { ...(profile.desktop ? desktopConfig.settings : {}), ...profile.settings, onlyCategories: ["performance"], throttlingMethod: "simulate" },
              });
              if (!result) throw new Error("Lighthouse returned no result.");
              const stem = `${pageIndex + 1}-${name}-${run}`;
              await writeFile(path.join(output, `${stem}.html`), result.report);
              await writeFile(path.join(output, `${stem}.json`), JSON.stringify(result.lhr, null, 2));
              if (result.lhr.runtimeError) throw new Error(`${result.lhr.runtimeError.code}: ${result.lhr.runtimeError.message}`);
              const finalUrl = new URL(result.lhr.finalDisplayedUrl);
              if (finalUrl.origin !== new URL(baseUrl).origin || finalUrl.pathname !== new URL(url).pathname) throw new Error(`Lighthouse navigated to ${finalUrl.href} instead of ${url}.`);
              report.lighthouseVersion = result.lhr.lighthouseVersion;
              samples.push({ html: `${stem}.html`, json: `${stem}.json`, metrics: extractMetrics(result.lhr), warnings: result.lhr.runWarnings });
            }
            report.results.push({ path: route, profile: name, ...summarize(samples, config.budgets), samples });
          } catch (error) {
            if (interrupted) throw error;
            const message = `${route} · ${name}: ${error.message}`;
            console.error(message);
            report.errors.push(message);
          }
        }
      }
    } finally {
      await writeFile(path.join(output, "summary.json"), JSON.stringify(report, null, 2));
      await writeFile(path.join(output, "summary.md"), renderMarkdown(report));
      await writeFile(path.join(output, "index.html"), renderReport(report));
      if (process.env.GITHUB_STEP_SUMMARY) await appendFile(process.env.GITHUB_STEP_SUMMARY, renderMarkdown(report));
      console.table(report.results.map((result) => ({ page: result.path, profile: result.profile, score: Math.round(result.metrics.performance), "LCP (ms)": Math.round(result.metrics.lcp), "TBT (ms)": Math.round(result.metrics.tbt), CLS: result.metrics.cls.toFixed(3), "missed targets": result.violations.map(({ metric }) => metric).join(", ") || "none" })));
      console.log(`Open ${path.join(output, "index.html")}`);
    }
    const failures = report.results.filter((result) => result.violations.length).length;
    if (failures) console.log(`${failures} page/profile combinations missed targets.${values.strict ? " Strict check failed." : " Use --strict to enforce targets."}`);
    if (report.errors.length || (values.strict && failures)) process.exitCode = 1;
  } finally {
    try {
      await chrome?.kill();
    } finally {
      await stop(server);
    }
    process.off("SIGINT", interrupt);
    process.off("SIGTERM", interrupt);
  }
}

main().catch((error) => {
  console.error(`Performance audit failed: ${error.message}`);
  process.exitCode = 1;
});
