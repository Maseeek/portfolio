import Link from "next/link";
import { 
  ArrowLeft, Shield, Lock, Activity, Database, Sparkles, 
  Terminal, Cpu, FileCheck, AlertTriangle, Scale 
} from "lucide-react";
import { ProjectPagination } from "@/components/project-pagination";

export default function ValdrisBlog() {
  return (
    <div className="space-y-12 md:space-y-16 font-sans selection:bg-accent/30">
      <Link 
        href="/" 
        className="inline-flex items-center text-sm font-bold text-foreground/60 hover:text-accent transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Portfolio
      </Link>

      <header className="space-y-6">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
            <Shield className="w-3 h-3 text-accent" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">Flagship Architecture</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none break-all sm:break-normal">
            valdris<span className="text-accent">sports</span>analytics
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-tight max-w-3xl">
            High-performance sports science multi-tenant analytics platform providing deterministic athlete readiness scoring, GDPR Article 9 compliance, and AI legal firewalls.
          </p>
        </div>
      </header>

      {/* Compliance & Security Callout */}
      <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20 flex gap-4 items-start">
        <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0">
          <Scale className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-bold text-white mb-1">Architected for Strict Medical & Data Compliance</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Engineered from day one with defense-in-depth: PostgreSQL Row-Level Security (RLS) guarantees tenant isolation at the storage layer, dynamic server-side masking enforces GDPR Article 9 health data boundaries, and a post-generation regex firewall prevents LLMs from making unlicensed clinical inferences.
          </p>
        </div>
      </div>

      {/* Core Architectural Pillars Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Lock className="w-5 h-5 text-accent" />
            Architectural Highlights
          </h2>
          <ul className="space-y-4">
            {[
              { 
                icon: Database, 
                title: "PostgreSQL Row-Level Security (RLS)", 
                desc: "Database-enforced tenant isolation bound directly to JWT app_metadata claims (tenant_id, role)." 
              },
              { 
                icon: Shield, 
                title: "GDPR Article 9 Data Masking", 
                desc: "Dynamic server-side filters stripping sensitive health markers from JSON payloads based on consent states." 
              },
              { 
                icon: Activity, 
                title: "Deterministic 28-Day z-Score Engine", 
                desc: "Decoupled calculation engine computing Composite Load Scores (CLS) against individualized baselines." 
              },
              { 
                icon: AlertTriangle, 
                title: "Physiological Override Rules", 
                desc: "Sport-scoped flags (jump spikes, sleep deficits) that programmatically override and cap readiness bands." 
              },
              { 
                icon: Sparkles, 
                title: "Legal AI Firewall Integration", 
                desc: "Claude SDK pipeline with anonymized fact-extraction and regex firewalls rejecting clinical diagnoses." 
              },
              { 
                icon: FileCheck, 
                title: "Cross-Tenant Automated Test Harness", 
                desc: "Automated Playwright and Vitest test suites continuously asserting multi-tenant data boundaries." 
              },
            ].map((feature, i) => (
              <li key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                <div className="p-2 h-fit rounded-lg bg-white/5 text-accent shrink-0">
                  <feature.icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{feature.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Cpu className="w-5 h-5 text-accent" />
            Technology Stack
          </h2>
          <div className="rounded-2xl border border-white/10 overflow-hidden">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-white/10">
                {[
                  ["Database", "PostgreSQL with Native Row-Level Security (RLS)"],
                  ["Backend Layer", "TypeScript, Node.js, Express, Microservices"],
                  ["AI Orchestration", "Anthropic Claude SDK with Regex Firewall Layer"],
                  ["Testing & QA", "Vitest, Playwright (Cross-Tenant Verification)"],
                  ["Compliance", "GDPR Article 9, UTC-Anchored Under-18 Age Gating"],
                  ["Data Formats", "Catapult GPS telemetry, Rolling 28-day biometric baselines"],
                ].map(([label, tech]) => (
                  <tr key={label} className="bg-white/5 hover:bg-white/10 transition-colors">
                    <td className="p-4 font-bold text-accent w-40">{label}</td>
                    <td className="p-4 text-gray-400">{tech}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 space-y-3">
            <h3 className="font-bold text-indigo-400 flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              Cross-Tenant Security Assertion
            </h3>
            <pre className="text-xs text-gray-300 leading-relaxed font-mono whitespace-pre-wrap">
              <code>{`// Automated verification script snippet
await expect(async () => {
  await clientA.from('athlete_wellness').select('*');
}).resolves.toHaveTenantId(tenantA.id);
// Strict zero-bleed policy verified across 100+ concurrent mutations.`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Deep-Dive Technical Case Study */}
      <article className="prose prose-invert prose-lg max-w-none space-y-10 text-gray-300">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">
            1. Multi-Tenant Isolation via PostgreSQL RLS
          </h2>
          <p>
            Traditional SaaS applications often rely on application-level filtering (e.g. appending <code>WHERE tenant_id = ?</code> to queries). This is notoriously error-prone. In sports science, where contracts, physiological data, and biometric markers carry immense confidentiality risks, application-level checks are insufficient.
          </p>
          <p>
            In Valdris, data isolation is enforced at the database kernel level using PostgreSQL <strong>Row-Level Security (RLS)</strong>. JWT tokens issued to authenticated users contain signed claims in <code>app_metadata</code> specifying <code>tenant_id</code> and <code>role</code>. Every database transaction sets session variables corresponding to these claims, causing PostgreSQL to automatically filter rows before any result sets can be read or modified.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">
            2. GDPR Article 9 Health Data Masking & Age Gating
          </h2>
          <p>
            Athlete biometric data constitutes special category health data under GDPR Article 9. Different organizational roles have strictly distinct access rights: a medical doctor requires granular heart rate variability (HRV) and recovery telemetry, whereas a tactical head coach should only receive high-level availability status.
          </p>
          <p>
            I engineered dynamic server-side masking filters that evaluate the requester&apos;s role, athlete consent state, and data category before serializing JSON responses. If a non-medical role queries squad records, sensitive biometric markers are stripped from the payload upstream. Furthermore, UTC-anchored age verification triggers and adults-only attestation gates prevent processing and storage of athletic data for individuals under 18 years old.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">
            3. Deterministic Analytics Engine & 28-Day z-Score Baselines
          </h2>
          <p>
            Athletic readiness cannot be computed using arbitrary fixed thresholds because an elite athlete&apos;s baseline differs dramatically across training cycles. The Valdris computation engine calculates an individualized <strong>28-day rolling z-score baseline</strong> for each athlete across GPS metrics (Catapult format) and daily wellness entries.
          </p>
          <p>
            The Composite Load Score (CLS) combines normalized acute-to-chronic workload ratios with physiological decision rules. If acute jump-load spikes or acute sleep deficits cross critical standard deviation boundaries, the engine fires deterministic override rules that programmatically cap the overall readiness band—preventing coaches from overtraining compromised athletes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">
            4. Legal AI Regex Firewall
          </h2>
          <p>
            To assist coaches in reviewing complex squad logs, we integrated Anthropic&apos;s Claude SDK to generate natural language squad summaries. However, generating medical advice without medical licensing presents substantial legal risk.
          </p>
          <p>
            I designed a two-stage pipeline: first, an anonymized fact-extraction layer strips all Personally Identifiable Information (PII). Second, a post-generation regex firewall validates the narrative output. If the model outputs clinical inferences (such as injury diagnoses, prognosis estimations, or definitive return-to-play verdicts), the response is rejected and regenerated under deterministic factual constraints.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">
            5. Automated Testing & Verification Harness
          </h2>
          <p>
            To guarantee zero data bleed between competing sports organizations, I authored extensive test suites using <strong>Vitest</strong> and <strong>Playwright</strong>. A specialized automated cross-tenant verification script creates concurrent sessions across distinct tenant accounts, executes simultaneous read and write mutations, and asserts that no record from Tenant A is ever visible to Tenant B under any circumstance.
          </p>
        </section>
      </article>

      {/* Project Pagination */}
      <ProjectPagination currentSlug="valdris" />
    </div>
  );
}
