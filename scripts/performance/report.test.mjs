import assert from "node:assert/strict";
import test from "node:test";
import { extractMetrics, renderReport, summarize } from "./report.mjs";

const budgets = { performance: 90, lcp: 2500, cls: 0.1, tbt: 200 };
const sample = (values = {}) => ({ metrics: { performance: 90, fcp: 1000, lcp: 2500, tbt: 200, cls: 0.1, speedIndex: 2000, ...values }, html: "1-phone-1.html" });

test("one slow outlier does not fail a three-run audit with passing medians", () => {
  const result = summarize([sample(), sample({ performance: 95, lcp: 2000, cls: 0, tbt: 100 }), sample({ performance: 20, lcp: 9000, cls: 0.8, tbt: 3000 })], budgets);
  assert.deepEqual(result.violations, []);
  assert.equal(result.metrics.lcp, 2500);
});

test("budgets fail in the correct direction using unrounded numbers", () => {
  const result = summarize([sample({ performance: 89.99, lcp: 2500.01, cls: 0.10001, tbt: 200.01 })], budgets);
  assert.deepEqual(result.violations.map(({ metric }) => metric), ["performance", "lcp", "cls", "tbt"]);
});

test("missing Lighthouse measurements cannot be reported as passing", () => {
  assert.throws(() => extractMetrics({ categories: { performance: { score: null } }, audits: {} }), /did not measure Score/);
  assert.throws(() => extractMetrics({ categories: { performance: { score: 0.9 } }, audits: {} }), /did not measure FCP/);
});

test("HTML keeps diagnostic links and escapes untrusted audit errors", () => {
  const report = renderReport({ createdAt: "2026-10-11", baseUrl: "https://example.com", runs: 1, profiles: {}, budgets, results: [{ path: "/", profile: "phone", ...summarize([sample()], budgets), samples: [sample()] }], errors: ['<script>alert("oops")</script>'] });
  assert.ok(report.includes('href="1-phone-1.html"'));
  assert.ok(report.includes("Within targets"));
  assert.ok(report.includes("&lt;script&gt;"));
  assert.ok(!report.includes("<script>"));
});
