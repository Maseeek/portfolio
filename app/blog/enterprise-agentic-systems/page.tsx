import Link from "next/link";
import { 
  ArrowLeft, Terminal, Cpu, Network, Server, HardDrive, 
  Layers, GitBranch, CheckCircle2, Laptop, ExternalLink,
  Shield, Code2, Workflow, Database, RefreshCw, Zap
} from "lucide-react";
import { SiGithub, SiX } from "react-icons/si";
import { ProjectPagination } from "@/components/project-pagination";

export default function EnterpriseAgenticSystemsBlog() {
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
            <Zap className="w-3 h-3 text-accent" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">The Software Factory & The Lab</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none">
            enterprise<span className="text-accent">agentic</span>systems
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-tight max-w-3xl">
            Bringing deterministic agentic software engineering to enterprise teams, paired with <strong className="text-white font-medium">The Software Factory</strong> running across <strong className="text-white font-medium">The Lab</strong> over Tailscale & SSH on a student budget.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-2">
          <a 
            href="https://x.com/maseeek" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-6 py-3 bg-white text-black hover:bg-accent hover:text-white rounded-full text-sm font-bold transition-all transform hover:scale-105"
          >
            <SiX className="w-4 h-4 mr-2" />
            Follow @maseeek on X
          </a>
          <a 
            href="https://github.com/Maseeek" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-6 py-3 bg-white/10 text-white hover:bg-white/20 border border-white/15 rounded-full text-sm font-bold transition-all transform hover:scale-105"
          >
            <SiGithub className="w-4 h-4 mr-2" />
            View GitHub Repositories
          </a>
        </div>
      </header>

      {/* Philosophy Callout */}
      <div className="p-6 md:p-8 rounded-2xl bg-accent/5 border border-accent/20 space-y-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0">
            <Shield className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-white text-lg">Beyond "Vibe Coding": Deterministic Agentic Engineering</h3>
        </div>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
          In enterprise codebases and multi-repository microservices, ad-hoc AI chat prompting rapidly degenerates into context drift, broken contracts, and unvetted regressions. To achieve 5–10× developer velocity without sacrificing reliability, autonomous agents must be treated as a <strong className="text-white">deterministic distributed system</strong>: bounded by in-repo ubiquitous language, constrained by deep module interfaces, executed in isolated git worktrees, and gated by non-negotiable verification suites.
        </p>
      </div>

      {/* Part 1: Enterprise Agentic Methodology */}
      <section className="space-y-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent font-bold">
            Part 01
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white uppercase">
            Enterprise Architecture & Team Enablement
          </h2>
          <p className="text-muted-foreground max-w-2xl text-sm md:text-base">
            The four architectural pillars engineered to standardize how engineering teams and autonomous agents ship production software together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: Database,
              title: "In-Repo Context & Domain Codification",
              artifact: "CONTEXT.md · AGENTS.md · docs/adr/",
              desc: "Implicit tribal team knowledge is codified into version-controlled ubiquitous language, entity glossaries, and Architectural Decision Records. New human engineers and autonomous agents share identical, durable ground truth without hallucinating domain boundaries.",
            },
            {
              icon: Layers,
              title: "Deep Modules & Blast-Radius Containment",
              artifact: "Ousterhout Interfaces · dependency-cruiser",
              desc: "Codebases are structured around deep modules: simple, narrow interfaces that hide extensive implementation complexity. Static boundaries and strict type contracts prevent agents from producing leaky abstractions or introducing cross-boundary coupling.",
            },
            {
              icon: Workflow,
              title: "Composable Skill Workflows & Spec Execution",
              artifact: "grill-me → to-spec → to-tickets → TDD",
              desc: "Requirements undergo automated Socratic stress-testing before code is written. Features are broken into orthogonal, file-isolated vertical slices executed concurrently by parallel subagents across isolated worktrees, verified against strict red-green test suites.",
            },
            {
              icon: RefreshCw,
              title: "Developer Onboarding & Adoption (Next plc)",
              artifact: "Internal Briefings · Playbooks · PR Gates",
              desc: "Developing playbooks to upskill developers at Next plc: progressing from single-turn autocomplete to structured multi-agent orchestration, establishing hard commit pre-checks (npm run check, Vitest), and maintaining strict human-in-the-loop review standards.",
            },
          ].map((pillar, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-accent/30 transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-white/5 text-accent border border-white/10">
                    <pillar.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-md bg-white/5 text-muted-foreground border border-white/5">
                    {pillar.artifact}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Part 2: Distributed Multi-Computer Infrastructure */}
      <section className="space-y-8 pt-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent font-bold">
            Part 02 · The Lab
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white uppercase">
            The Lab: Distributed Multi-Computer Compute Setup
          </h2>
          <p className="text-muted-foreground max-w-2xl text-sm md:text-base">
            Running the Software Factory on a student budget: linking the computers I already own (portable Linux development + desktop CUDA compute) over a private Tailscale and SSH network before spending on paid cloud credits.
          </p>
        </div>

        {/* Hardware Nodes Table */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
          <div className="p-4 md:p-6 border-b border-white/10 bg-white/[0.02] flex items-center justify-between">
            <h3 className="font-bold text-white text-base flex items-center gap-2">
              <HardDrive className="w-4 h-4 text-accent" />
              The Lab — Hardware Nodes
            </h3>
            <span className="text-xs font-mono text-muted-foreground">Tailscale Private Network</span>
          </div>

          <div className="divide-y divide-white/5 text-sm">
            <div className="p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white">Main Windows Workstation</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold uppercase">
                    Active
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Intel i5-10400F · NVIDIA RTX 3060 Ti · 32GB DDR4 · 500GB SSD + 2TB HDD
                </p>
              </div>
              <div className="text-xs font-mono text-muted-foreground md:text-right">
                GPU-intensive tasks, full-stack compilation & local LLM inference host
              </div>
            </div>

            <div className="p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white">Lenovo IdeaPad Pro 5</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold uppercase">
                    Active
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Pop!_OS Linux · AMD Ryzen 7 7940HS · NVIDIA RTX 4050 · 16GB RAM
                </p>
              </div>
              <div className="text-xs font-mono text-muted-foreground md:text-right">
                Primary portable development environment & remote agent orchestration node
              </div>
            </div>

            <div className="p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white">2× Legacy HP Pavilion Laptops</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold uppercase">
                    Planned / In Prep
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  10+ year old x86_64 hardware scheduled for lightweight headless Linux installation
                </p>
              </div>
              <div className="text-xs font-mono text-muted-foreground md:text-right">
                Dedicated persistent agent hosts for uninterrupted 24/7 background tasks & automation
              </div>
            </div>
          </div>
        </div>

        {/* Current State vs Planned Roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
              <CheckCircle2 className="w-4 h-4" />
              <span>Current Status (Operational Today)</span>
            </div>
            <ul className="space-y-3 text-xs md:text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span><strong>Tailscale Mesh & Remote SSH:</strong> Seamless cross-network SSH access established between the Pop!_OS laptop and the Windows workstation.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span><strong>Software Factory Orchestration:</strong> Planning, building, and verifying projects across machines using <strong>Oh My Pi (OMP)</strong> and <strong>T3 Code</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span><strong>Framework Exploration:</strong> Actively evaluating <strong>Hermes Agent</strong> and specialized autonomous subagent DAG runners.</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
              <RefreshCw className="w-4 h-4" />
              <span>Planned Features & Experimental Roadmap</span>
            </div>
            <ul className="space-y-3 text-xs md:text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-1">•</span>
                <span><strong>Hybrid Cost-Aware Model Routing:</strong> Routing simple tasks to smaller local models (RTX 3060 Ti) while escalating complex architecture to frontier cloud models across ChatGPT, Gemini, and Copilot.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-1">•</span>
                <span><strong>Persistent Background Worker Nodes:</strong> Repurposing the 2 older laptops into headless Linux agent hosts for background research and continuous repository maintenance.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-1">•</span>
                <span><strong>Unified Cross-Device Orchestrator:</strong> Submitting high-level objectives from any device with automatic dispatch across machines, models, and isolated worktrees.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pagination */}
      <ProjectPagination currentSlug="enterprise-agentic-systems" />
    </div>
  );
}
