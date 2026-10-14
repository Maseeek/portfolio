export const metrics = {
  performance: { label: "Score", unit: "", minimum: true },
  fcp: { label: "FCP", unit: "ms", audit: "first-contentful-paint" },
  lcp: { label: "LCP", unit: "ms", audit: "largest-contentful-paint" },
  tbt: { label: "TBT", unit: "ms", audit: "total-blocking-time" },
  cls: { label: "CLS", unit: "", audit: "cumulative-layout-shift" },
  speedIndex: { label: "Speed index", unit: "ms", audit: "speed-index" },
};

export function extractMetrics(lhr) {
  const values = { performance: lhr.categories.performance.score === null ? NaN : lhr.categories.performance.score * 100 };
  for (const [key, metric] of Object.entries(metrics)) {
    if (metric.audit) values[key] = lhr.audits[metric.audit]?.numericValue;
    if (!Number.isFinite(values[key])) throw new Error(`Lighthouse did not measure ${metric.label}.`);
  }
  return values;
}

export function median(values) {
  const sorted = [...values].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
}

export function summarize(samples, budgets) {
  const values = Object.fromEntries(Object.keys(metrics).map((key) => [key, median(samples.map((sample) => sample.metrics[key]))]));
  const violations = Object.entries(budgets).flatMap(([key, target]) => {
    if (!metrics[key] || !Number.isFinite(target)) throw new Error(`Invalid budget: ${key}`);
    const fails = metrics[key].minimum ? values[key] < target : values[key] > target;
    return fails ? [{ metric: key, value: values[key], target }] : [];
  });
  return { metrics: values, violations };
}

export function format(key, value) {
  return key === "cls" ? value.toFixed(3) : `${Math.round(value)}${metrics[key].unit ? ` ${metrics[key].unit}` : ""}`;
}

function escape(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

export function renderReport(report) {
  const rows = report.results.map((result) => `<tr><th scope="row">${escape(result.path)}<br><small>${escape(result.profile)}</small></th>${Object.keys(metrics).map((key) => `<td>${escape(format(key, result.metrics[key]))}</td>`).join("")}<td>${result.violations.length ? `<strong class="warn">Needs improvement</strong><ul>${result.violations.map(({ metric, value, target }) => `<li>${metrics[metric].label}: ${escape(format(metric, value))}; target ${metrics[metric].minimum ? "≥" : "≤"} ${escape(format(metric, target))}</li>`).join("")}</ul>` : "Within targets"}</td><td>${result.samples.map((sample, i) => `<a href="${escape(sample.html)}">Run ${i + 1}</a>`).join("<br>")}</td></tr>`).join("");
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Portfolio performance report</title>
<style>body{font:16px/1.6 system-ui,sans-serif;color:#172033;background:#f6f8fb;margin:0;padding:24px}main{max-width:1400px;margin:auto}h1{margin:0}small{font-weight:400}a{color:#174db5}table{border-collapse:collapse;width:100%;background:white}th,td{padding:12px;text-align:left;border-bottom:1px solid #d8dfeb;vertical-align:top}thead{background:#e7edf6}td{font-variant-numeric:tabular-nums}ul{padding-left:20px}.scroll{overflow-x:auto}.warn{color:#9a3500}code{overflow-wrap:anywhere}li{margin:4px 0}</style></head><body><main>
<h1>Portfolio performance report</h1><p>${escape(report.createdAt)} · <code>${escape(report.baseUrl)}</code> · Lighthouse ${escape(report.lighthouseVersion || "unknown")}</p>
<p>Each number is the median of ${report.runs} cold-load runs per page and profile. Lower timings and CLS are better; higher scores are better. Open a run for Lighthouse's diagnostics and suggested fixes.</p>
<ul>${Object.entries(report.profiles).map(([name, profile]) => `<li><strong>${escape(name)}</strong>: ${escape(profile.label)} (${profile.settings.screenEmulation.width} × ${profile.settings.screenEmulation.height})</li>`).join("")}</ul>
<p>Targets: ${Object.entries(report.budgets).map(([key, target]) => `${metrics[key].label} ${metrics[key].minimum ? "≥" : "≤"} ${escape(format(key, target))}`).join(" · ")}. Targets use unrounded medians.</p>
<div class="scroll"><table><thead><tr><th scope="col">Page / profile</th>${Object.values(metrics).map(({ label }) => `<th scope="col">${label}</th>`).join("")}<th scope="col">Targets</th><th scope="col">Diagnostics</th></tr></thead><tbody>${rows}</tbody></table></div>
${report.errors.length ? `<h2>Failed audits</h2><ul>${report.errors.map((error) => `<li class="warn">${escape(error)}</li>`).join("")}</ul>` : ""}
<p>These are simulated Chrome load tests. TBT measures main-thread blocking during load; it does not measure INP. Test scrolling, menus, filters, and typing on real Android and iOS devices too. Compare runs on the same machine with the same Lighthouse version and conditions.</p>
</main></body></html>`;
}

export function renderMarkdown(report) {
  const headings = ["Page", "Profile", ...Object.values(metrics).map(({ label }) => label), "Targets"];
  const rows = report.results.map((result) => [result.path, result.profile, ...Object.keys(metrics).map((key) => format(key, result.metrics[key])), result.violations.length ? result.violations.map(({ metric }) => metrics[metric].label).join(", ") : "Pass"]);
  const safe = (value) => String(value).replace(/\|/g, "\\|").replace(/[\r\n]/g, " ");
  return `## Performance audit\n\n${report.runs} runs per page/profile; medians shown. Download the performance-reports artifact and open index.html for diagnostics.\n\n| ${headings.join(" | ")} |\n| ${headings.map(() => "---").join(" | ")} |\n${rows.map((row) => `| ${row.map(safe).join(" | ")} |`).join("\n")}\n\n${report.errors.map((error) => `- Failed audit: ${safe(error)}`).join("\n")}\n\nSimulated Chrome load tests. TBT is not INP. Real-device interactions need separate checks.\n`;
}
