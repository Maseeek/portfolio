"use client";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ArrowUpRight, Code, Sparkles, Layout } from "lucide-react";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Full-Stack Web Engineering",
    icon: Code,
    desc: "Production-ready, highly responsive web platforms built with modern frameworks like Next.js 16, React 19, and Node.js with strict sub-450ms performance targets.",
    tags: ["Next.js App Router", "React 19", "TypeScript", "Tailwind CSS", "API Design"],
  },
  {
    num: "02",
    title: "AI Systems & Computer Vision",
    icon: Sparkles,
    desc: "Integrating edge computer vision pipelines, multi-modal LLMs (Gemini), trajectory physics modeling, and real-time inference into intuitive web applications.",
    tags: ["OpenCV / Vision", "Gemini API", "Predictive Physics", "Flask / FastAPI", "Python"],
  },
  {
    num: "03",
    title: "High-Performance Architecture",
    icon: Layout,
    desc: "Crafting scalable cloud infrastructure, secure JWT authentication architectures, and hardware-accelerated fluid UI interactions.",
    tags: ["Docker / Cloud", "JWT & RBAC", "MySQL & SQLite", "Core Web Vitals", "WASM / .NET"],
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-28 relative">
      <div className="max-w-[1400px] mx-auto px-[clamp(1.25rem,4vw,3.5rem)]">
        <div className="section-header">
          <span className="section-label">Services</span>
          <span className="section-label">05</span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10 md:mb-12">
          <div>
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-black tracking-[-0.04em] leading-[1.05] text-white">
              Areas of Expertise
            </h2>
            <p className="text-slate-400 text-sm md:text-base mt-2 max-w-xl font-light">
              From low-level system design and CV algorithms to full-scale web platforms.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <ScrollReveal key={svc.num}>
                <div className="svc-card group border border-white/10 bg-card/40 backdrop-blur-md rounded-2xl md:rounded-3xl p-7 md:p-8 transition-all duration-700 hover:border-accent/40 hover:-translate-y-1.5 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] hover:bg-card/70 relative overflow-hidden flex flex-col justify-between h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-transparent group-hover:from-accent/10 transition-colors duration-700 pointer-events-none" />
                  
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="text-4xl md:text-5xl font-black text-white/10 group-hover:text-accent/30 transition-all duration-500 font-mono tracking-tighter">
                        {svc.num}
                      </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-accent transition-colors duration-300">
                      {svc.title}
                    </h3>
                    
                    <p className="text-slate-300 text-sm leading-relaxed font-light">
                      {svc.desc}
                    </p>

                    {/* Skill / Scope Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {svc.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-slate-300 group-hover:border-accent/20 group-hover:text-white transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10 pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-accent group-hover:text-white transition-colors"
                    >
                      <span>Discuss Scope</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
