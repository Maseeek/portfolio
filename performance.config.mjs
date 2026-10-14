// Representative public page types. Add other case studies or published posts here.
export const paths = [
  "/",
  "/blog",
  "/blog/nothing-but-net",
  "/blog/architecting-distributed-ai-inference",
];

export const runs = 3;

// Lighthouse simulated network/CPU conditions, not claims about specific hardware.
// Phone and tablet use mobile scoring. Desktop uses Lighthouse's desktop preset.
export const profiles = {
  phone: {
    label: "Phone · slow 4G · 4× CPU slowdown",
    settings: {
      formFactor: "mobile",
      screenEmulation: { mobile: true, width: 390, height: 844, deviceScaleFactor: 3, disabled: false },
      throttling: { rttMs: 150, throughputKbps: 1638.4, cpuSlowdownMultiplier: 4 },
    },
  },
  tablet: {
    label: "Tablet · slow 4G · 4× CPU slowdown",
    settings: {
      formFactor: "mobile",
      screenEmulation: { mobile: true, width: 820, height: 1180, deviceScaleFactor: 2, disabled: false },
      throttling: { rttMs: 150, throughputKbps: 1638.4, cpuSlowdownMultiplier: 4 },
    },
  },
  desktop: {
    label: "Desktop · broadband · 1× CPU",
    desktop: true,
    settings: {
      screenEmulation: { mobile: false, width: 1440, height: 900, deviceScaleFactor: 1, disabled: false },
    },
  },
};

// Score is a minimum (0–100); other budgets are maximums in milliseconds, except CLS.
// These are improvement targets, not a baseline of the site's current performance.
export const budgets = {
  performance: 90,
  lcp: 1000,
  cls: 0.1,
  tbt: 200,
};
