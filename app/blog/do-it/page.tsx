import Link from "next/link";
import { 
  ArrowLeft, ExternalLink, ShieldCheck, Flame, Zap, Award, 
  Activity, Server, Database, KeyRound, Smartphone, RefreshCw 
} from "lucide-react";
import { SiGithub } from "react-icons/si";
import { ProjectPagination } from "@/components/project-pagination";

export default function DoItBlog() {
  return (
    <div className="space-y-12 md:space-y-16 font-sans selection:bg-emerald-500/30">
      <Link 
        href="/" 
        className="inline-flex items-center text-sm font-bold text-foreground/60 hover:text-emerald-400 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Portfolio
      </Link>

      <header className="space-y-6">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <Flame className="w-3 h-3 text-emerald-400" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-400 font-bold">
              Habit Parity Engine & Wearable Telemetry
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none">
            do<span className="text-emerald-400">it</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-tight max-w-3xl">
            Multi-tenant two-player habit accountability & competition platform featuring Supabase Row-Level Security, AES-256-GCM encrypted wearable sync adapters (Apple Health, Google Health, Strava, Hevy), and 12-week consistency heatmaps.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-4">
          <a 
            href="https://do-it-plum-seven.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-6 py-3 bg-white text-black hover:bg-emerald-400 hover:text-black rounded-full text-sm font-bold transition-all transform hover:scale-105"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Visit Live Application
          </a>
          <a 
            href="https://github.com/Maseeek/do-it" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-6 py-3 bg-white/10 text-white hover:bg-white/20 border border-white/15 rounded-full text-sm font-bold transition-all transform hover:scale-105"
          >
            <SiGithub className="w-4 h-4 mr-2" />
            View on GitHub
          </a>
        </div>
      </header>

      {/* Production Architecture Alert */}
      <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 flex gap-4 items-start">
        <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-bold text-white mb-1">Strict Isolation & Cryptographic Wearable Ingestion</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Engineered with a zero-compromise security posture: Supabase PostgreSQL Row-Level Security (RLS) ensures absolute duel boundary isolation across multi-tenant matchups, OAuth 2.0 refresh tokens for health providers are stored with AES-256-GCM symmetric envelope encryption, and telemetry verification pipelines calculate deterministic daily par across heterogeneous workouts.
          </p>
        </div>
      </div>

      {/* Core Architectural Pillars */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Zap className="w-5 h-5 text-emerald-400" />
            System Architecture Highlights
          </h2>
          <ul className="space-y-4">
            {[
              {
                icon: Database,
                title: "Duel-Level Supabase RLS Isolation",
                desc: "Granular database policies enforcing strict multi-tenant boundaries. Participants can only query and mutate duels where auth.uid() matches player_a or player_b."
              },
              {
                icon: KeyRound,
                title: "AES-256-GCM Encrypted Token Vault",
                desc: "Wearable OAuth tokens (refresh & access tokens) are symmetrically encrypted before persistence using AES-256-GCM with unique cryptographic initialization vectors (IVs)."
              },
              {
                icon: Award,
                title: "Equivalent Habit Parity (240 Daily Par)",
                desc: "Deterministic algorithmic normalization converting diverse workout intensities, running splits, and gym volume into standardized habit points with an unbending 240 Daily Par threshold."
              },
              {
                icon: Smartphone,
                title: "Multi-Source Wearable Adapters",
                desc: "Extensible connector ecosystem aggregating raw telemetry from Apple HealthKit, Google Health Connect, Strava API, and Hevy workout logs into unified JSON schema payloads."
              },
              {
                icon: RefreshCw,
                title: "Hybrid Offline-First Sync Engine",
                desc: "Optimistic UI mutations backed by client-side local caching and exponential backoff retry queues to guarantee habit completion during spotty gym connectivity."
              },
              {
                icon: Server,
                title: "Event-Driven Streak Verification",
                desc: "Atomic database triggers tracking 12-week consistency heatmaps, sudden-death tiebreakers, and rolling accountability streaks without distributed race conditions."
              },
            ].map((pillar, i) => (
              <li key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-colors">
                <div className="p-2 h-fit rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                  <pillar.icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{pillar.title}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{pillar.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Activity className="w-5 h-5 text-emerald-400" />
            Technology Stack & Operational Specs
          </h2>
          <div className="rounded-2xl border border-white/10 overflow-hidden">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-white/10">
                {[
                  ["Frontend Core", "Next.js 16 (App Router), React 19, TypeScript"],
                  ["Styling & UI", "Tailwind CSS v4, Radix UI Primitives, Lucide Icons"],
                  ["Database & Auth", "Supabase (PostgreSQL), Row-Level Security (RLS)"],
                  ["Cryptography", "Node.js Crypto, AES-256-GCM Envelope Encryption"],
                  ["Wearable OAuth", "Strava API, Apple HealthKit, Health Connect, Hevy"],
                  ["State & Cache", "Zustand, React Query, IndexedDB Offline Buffer"],
                  ["Deployment", "Vercel Edge Network, Supabase Managed Cloud"],
                ].map(([label, tech]) => (
                  <tr key={label} className="bg-white/5 hover:bg-white/10 transition-colors">
                    <td className="p-4 font-bold text-emerald-400 w-44">{label}</td>
                    <td className="p-4 text-gray-400">{tech}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-3">
            <h3 className="font-bold text-emerald-400 flex items-center gap-2">
              <Flame className="w-4 h-4" />
              1v1 Habit Parity Calibration
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Traditional habit trackers rely on subjective checkboxes, easily exploited by dishonesty. Do It enforces objective parity: running 5km, logging a 60-minute barbell session, or completing 45 minutes of cardiovascular conditioning all map to calibrated fractional par points. Neither competitor can gain an unfair advantage through volume spoofing.
            </p>
          </div>
        </div>
      </section>

      {/* Deep Dive Case Study Content */}
      <article className="prose prose-invert prose-lg max-w-none space-y-10 text-gray-300">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">The Mission & Competitive Psychology</h2>
          <p>
            Habit adherence collapses when accountability is solitary or subjective. Peer pressure and head-to-head competition remain the most effective behavioral incentives in sports science. Do It transforms daily habit execution into a high-stakes, real-time two-player duel. By bridging physical health telemetry directly with cryptographic accountability, players compete with absolute confidence that every rep, split, and milestone is validated.
          </p>
        </section>

        <section className="space-y-4 p-6 rounded-2xl bg-white/[0.02] border border-white/10">
          <h2 className="text-2xl font-bold text-white m-0">1. Multi-Tenant Isolation via Supabase Row-Level Security</h2>
          <p>
            Rather than relying exclusively on application-layer permission middleware, Do It delegates data boundary enforcement directly to the PostgreSQL kernel using Supabase Row-Level Security:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li>
              <strong>Duel Matchup Guard:</strong> Matches, logs, and scoreboards are inaccessible to external tenants. SELECT and UPDATE statements are filtered by <code className="text-emerald-300 font-mono text-xs">auth.uid() = player_a OR auth.uid() = player_b</code>.
            </li>
            <li>
              <strong>Audit Immutability:</strong> Historical completion records are cryptographically tagged with submission timestamps, preventing retro-active date modifications or artificial streak preservation.
            </li>
          </ul>
        </section>

        <section className="space-y-4 p-6 rounded-2xl bg-white/[0.02] border border-white/10">
          <h2 className="text-2xl font-bold text-white m-0">2. AES-256-GCM Wearable Sync & OAuth Token Vault</h2>
          <p>
            Handling third-party health integrations (Strava, Apple HealthKit, Google Health Connect, Hevy) requires handling long-lived sensitive OAuth refresh credentials. Do It isolates token storage using an envelope encryption schema:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li>
              Tokens are never stored in plaintext within database rows.
            </li>
            <li>
              Each payload is encrypted using AES-256-GCM with a server-side master key and a dynamically generated initialization vector (IV), verifying both confidentiality and authentication tag integrity upon decryption.
            </li>
            <li>
              Rate-limited asynchronous sync workers poll external APIs on configured cadences, normalizing disparate health units (kJ, kcal, meters, RPE) into standard metric representations.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">3. 12-Week Consistency Matrix & Micro-Interactions</h2>
          <p>
            The user interface pairs low-latency Next.js 16 App Router streaming with Tailwind CSS v4 styling. Interactive 12-week GitHub-style activity heatmaps visualize mutual progress, while real-time parity meters calculate who is leading the current week's 240 Par threshold, fueling healthy accountability and relentless consistency.
          </p>
        </section>
      </article>

      {/* Project Pagination */}
      <ProjectPagination currentSlug="do-it" />
    </div>
  );
}
