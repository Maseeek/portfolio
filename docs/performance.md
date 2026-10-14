# Checking website performance

Run the checks before and after a performance change. Start with the phone results, then check the other layouts for regressions.

## Run a local audit

Use Node.js 20+ and an installed Google Chrome or Chromium browser.

```bash
npm ci
npm run perf
```

The command builds the production site, starts it on a free loopback port, runs Lighthouse, and stops its server and temporary browser. It audits four representative public pages with phone, tablet, and desktop profiles, three times each. Expect several minutes for the full suite.

Open the printed `reports/performance/<timestamp>/index.html` path in your browser. The table shows median scores and timings, marks missed targets, and links to each Lighthouse HTML report. Open those reports to find expensive JavaScript, large images, render-blocking resources, layout shifts, and other suggested fixes. Raw Lighthouse JSON and `summary.json` are saved beside the HTML for comparisons. Each run gets its own directory and reports are ignored by Git.

For a quick check of the homepage on all three profiles:

```bash
npm run perf -- --paths / --runs 1
```

For a focused check after building:

```bash
npm run perf -- --no-build --profiles phone --paths /,/blog --runs 3
```

`--no-build` reuses `.next` and can measure stale code. Build first after changing the app. The tool starts `next start`, so it never silently audits a development server. Use `--port 3100` if you need a specific local port. Use `npm run perf -- --help` for every option.

If browser discovery fails, set its executable path:

```bash
CHROME_PATH=/usr/bin/chromium npm run perf
```

## Audit the deployed website

```bash
npm run perf -- --url https://maciekgeneja.me
```

`--url` skips the local build and server. Supply an HTTP(S) origin and select pages with `--paths`. Public pages must return HTTP 200 without redirecting or requiring login. Missing pages, redirects, Lighthouse runtime errors, and missing measurements fail the command even in report-only mode. A failing page/profile is listed in the summary; other combinations still run.

Local results help compare code changes. Deployed results also include hosting, CDN, and actual network costs. Compare like with like on the same machine, browser version, Lighthouse version, profiles, and page set. Close heavy background apps. Keep three runs for decisions; a single run is a quick signal.

## Profiles and targets

Edit [`performance.config.mjs`](../performance.config.mjs) to change the routes, repetition count, viewport sizes, simulated CPU/network conditions, or targets. Add every case study you want to track to `paths`, or pass it through `--paths`. The default suite covers the homepage, blog index, a bespoke case study, and a published Markdown post. It does not cover every route.

- Phone: 390 × 844, slow 4G, 4× CPU slowdown.
- Tablet: 820 × 1180, slow 4G, 4× CPU slowdown. It uses mobile scoring and a mobile user agent at a tablet-sized viewport.
- Desktop: 1440 × 900, Lighthouse's desktop network/CPU preset.

These are simulated Chrome profiles, not exact models of an iPhone, iPad, or Android device. Lighthouse's [emulation documentation](https://github.com/GoogleChrome/lighthouse/blob/main/docs/emulation.md) explains the distinction.

The initial targets are a performance score of at least 90, Largest Contentful Paint (LCP) of at most 2,500 ms, Cumulative Layout Shift (CLS) of at most 0.1, and Total Blocking Time (TBT) of at most 200 ms. First Contentful Paint and Speed Index are also reported. The targets are improvement goals rather than a record of current performance. Each target is evaluated against that metric's unrounded median across the requested runs.

```bash
# Report missed targets without failing for those targets
npm run perf

# Fail if any page/profile median misses a target
npm run perf:check

# Verify report calculations and failure boundaries
npm run perf:test
```

The GitHub Actions **Website performance** workflow runs on pull requests that affect the site or tooling. It writes a table to the workflow summary and saves downloadable reports as the `performance-reports` artifact. Download and extract the artifact, then open the timestamp directory's `index.html`. It initially reports missed targets without blocking the PR so you can establish a baseline. Infrastructure and audit errors still fail. Run the workflow manually with **strict** enabled to enforce targets, or change its `STRICT` environment setting to `"true"` to enforce them on PRs.

## Check interactions on real devices

Load audits do not establish performance for every device or browser. Lighthouse TBT measures blocking during load and does not measure Interaction to Next Paint (INP). Google's [Web Vitals guide](https://web.dev/articles/vitals) defines good real-user thresholds as LCP ≤ 2.5 seconds, INP ≤ 200 ms, and CLS ≤ 0.1 at the 75th percentile of visits.

On a slower Android phone, an iPhone/Safari, a tablet, and a desktop:

1. Open the deployed homepage over both Wi-Fi and mobile data, with a fresh load.
2. Scroll through the animated sections. Watch for stuttering, delayed input, and jumping content.
3. Open the navigation menu, switch project filters, and follow a case study link.
4. Type into the contact form without submitting it. Check that keystrokes stay responsive.
5. Repeat with reduced motion enabled and in landscape orientation.

Use Chrome DevTools' [Performance panel](https://developer.chrome.com/docs/devtools/performance) to record scrolling and these interactions, including a CPU-throttled session. Use Safari's Web Inspector for iOS. Track deployed URLs in [PageSpeed Insights](https://pagespeed.web.dev/) for real-user Chrome data when the site has enough traffic; absence of field data does not mean the site passes. Real-user monitoring would be a separate integration, and this tool does not collect visitor data.
