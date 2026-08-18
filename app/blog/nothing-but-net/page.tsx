import Link from "next/link";
import { ArrowLeft, ExternalLink, Cpu, Layout, Sparkles, CreditCard, Zap, Activity, Server, ShieldCheck } from "lucide-react";
import { ProjectPagination } from "@/components/project-pagination";

export default function NothingButNetBlog() {
  return (
    <div className="space-y-12 md:space-y-16 font-sans selection:bg-accent/30">
      <Link href="/" className="inline-flex items-center text-sm font-bold text-foreground/60 hover:text-accent transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Portfolio
      </Link>

      <header className="space-y-6">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
            <Sparkles className="w-3 h-3 text-accent" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">Production CV Studio</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none">
            nothing<span className="text-accent">but</span>net
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-tight max-w-2xl">
            A production-ready full-stack application (nothingbutnet.online) providing real-time analytics on basketball shots via custom computer vision and polynomial regression.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 pt-4">
          <a href="https://nothingbutnet.online" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-white text-black hover:bg-accent hover:text-white rounded-full text-sm font-bold transition-all transform hover:scale-105">
            <ExternalLink className="w-4 h-4 mr-2" />
            Visit Live Site
          </a>
        </div>
      </header>

      {/* Production Architecture Alert */}
      <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20 flex gap-4 items-start">
        <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0">
          <Server className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-bold text-white mb-1">Decoupled Microservice Architecture & Concurrency</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Engineered with a clean separation of concerns: a Node.js API gateway coordinates client sessions and Stripe billing, while computationally intensive video analysis is delegated to a dedicated Python engine with asynchronous background worker threads to keep the REST API completely non-blocking.
          </p>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent" />
            Core Engineering Features
          </h2>
          <ul className="space-y-4">
            {[
              { icon: Cpu, title: "Dynamic ROI Tracking", desc: "Drastically reduced CPU load per frame by bounding detection to dynamic Regions of Interest with full-frame fallback." },
              { icon: Activity, title: "Trajectory Modeling (>90% Precision)", desc: "Custom polynomial regression engine in Python modeling 3D parabolic curves and release angles." },
              { icon: ShieldCheck, title: "Physics-Based False-Positive Filter", desc: "Nearest-circle selection rejecting unnatural >300px frame jumps caused by court background noise." },
              { icon: Server, title: "Asynchronous Concurrency", desc: "Multi-threaded worker pipelines in Node.js/Python ensuring sub-second response times during heavy video encoding." },
              { icon: Layout, title: "Analytics Dashboard", desc: "Interactive React 19 frontend visualizing make/miss clusters, trajectory arcs, and shooting consistency metrics." },
              { icon: CreditCard, title: "Monetization & Auth", desc: "Integrated Stripe webhooks and JWT authentication powering Guest, Free, and Pro subscription tiers." },
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
            Technology Stack & CI/CD
          </h2>
          <div className="rounded-2xl border border-white/10 overflow-hidden">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-white/10">
                {[
                  ["Frontend SPA", "React 19, Vite 6, Framer Motion, Tailwind CSS"],
                  ["Backend Services", "Node.js (Express), Threading, Stripe SDK"],
                  ["CV Engine", "Python 3.x, OpenCV, NumPy, Polynomial Regression"],
                  ["Cloud Deployment", "Vercel (Frontend CI/CD), Render (Backend Microservices)"],
                  ["Database", "MongoDB Atlas"],
                ].map(([label, tech]) => (
                  <tr key={label} className="bg-white/5 hover:bg-white/10 transition-colors">
                    <td className="p-4 font-bold text-accent w-36">{label}</td>
                    <td className="p-4 text-gray-400">{tech}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 rounded-2xl bg-orange-500/10 border border-orange-500/20 space-y-3">
            <h3 className="font-bold text-orange-400 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Algorithmic Performance Optimizations
            </h3>
            <ul className="text-xs text-gray-300 space-y-1.5 list-disc list-inside">
              <li>Dynamic Region of Interest (ROI) tracking cutting frame evaluation time by over 65%.</li>
              <li>Intelligent frame sampling to process key trajectory segments without sacrificing curve accuracy.</li>
              <li>Physics-based velocity constraints discarding erroneous non-ball contours.</li>
            </ul>
          </div>
        </div>
      </section>

      <article className="prose prose-invert prose-lg max-w-none space-y-8 text-gray-300">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">The Mission</h2>
          <p>
            Nothing But Net was born from the intersection of competitive basketball and computer vision engineering. The goal was to build a production-grade analytics platform that provides elite-level intelligence to any player with a smartphone.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">Computer Vision Pipeline & Physics Filter</h2>
          <p>
            In outdoor basketball courts, lighting conditions change rapidly, and spectators or rim colors can easily fool classical color masks. To achieve &gt;90% trajectory accuracy:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li>
              <strong>Nearest-Circle Selection:</strong> Uses spatial proximity heuristics across sequential frames to maintain ball identity even through occlusions.
            </li>
            <li>
              <strong>Physics-Based Jump Filter:</strong> Discards any detection that jumps more than 300 pixels within a single frame interval—physically impossible for human shooting velocities.
            </li>
            <li>
              <strong>Polynomial Trajectory Modeling:</strong> Fits detected coordinates to a second-order polynomial curve, allowing precise calculation of the entry angle into the basket cylinder.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">Deployment & Continuous Integration</h2>
          <p>
            The entire platform is deployed across a modern CI/CD pipeline: GitHub Actions triggers automated preview and production deployments to Vercel for the React frontend, while the containerized Node.js and Python microservices are deployed on Render with automated health check monitoring.
          </p>
        </section>
      </article>

      {/* Project Pagination */}
      <ProjectPagination currentSlug="nothing-but-net" />
    </div>
  );
}
