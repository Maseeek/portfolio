"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "./scroll-reveal";
import { useEffect, useState } from "react";
import { 
  Code2, Cpu, Globe, Database, 
  Terminal, Sparkles, Binary, Zap,
  Activity, ShieldCheck, Box
} from "lucide-react";

const skillCategories = [
  {
    title: "Core Languages",
    icon: Code2,
    skills: ["TypeScript", "Python", "C++", "Java", "SQL"],
    level: 95,
    color: "from-blue-500 to-cyan-400",
    glow: "shadow-[0_0_15px_rgba(59,130,246,0.3)]"
  },
  {
    title: "Engineering",
    icon: Cpu,
    skills: ["Predictive Models", "Computer Vision", "FSM", "Docker"],
    level: 88,
    color: "from-purple-500 to-pink-400",
    glow: "shadow-[0_0_15px_rgba(168,85,247,0.3)]"
  },
  {
    title: "Cloud & Data",
    icon: Database,
    skills: ["GCP", "MySQL", "MongoDB", "Auth / JWT"],
    level: 92,
    color: "from-orange-500 to-amber-400",
    glow: "shadow-[0_0_15px_rgba(249,115,22,0.3)]"
  },
  {
    title: "Frontend Architecture",
    icon: Globe,
    skills: ["Next.js", "React", "Tailwind", "Framer Motion"],
    level: 98,
    color: "from-emerald-500 to-teal-400",
    glow: "shadow-[0_0_15px_rgba(16,185,129,0.3)]"
  }
];

export const SkillsSection = () => {
  const [activeLog, setActiveLog] = useState<string[]>([]);
  
  useEffect(() => {
    const logs = [
      "Optimizing React tree...",
      "Syncing with Google Cloud...",
      "Refining CV algorithms...",
      "Updating JWT protocols...",
      "Scaling MySQL instances...",
      "Deploying Vercel edge..."
    ];
    
    const interval = setInterval(() => {
      setActiveLog(prev => {
        const next = [logs[Math.floor(Math.random() * logs.length)], ...prev].slice(0, 3);
        return next;
      });
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Premium Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent -z-10" />
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />

      <div className="max-w-[1400px] mx-auto px-[clamp(1.5rem,4vw,4rem)]">
        <div className="section-header">
          <span className="section-label">Capabilities</span>
          <span className="section-label">03</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 md:gap-24 items-start">
          <ScrollReveal>
            <div className="sticky top-32">
              <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-8 uppercase">
                ENGINEERING <br />
                <span className="text-accent underline decoration-accent/30 underline-offset-8">PRECISION</span>
              </h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed mb-12 max-w-md">
                Mastering the full-stack lifecycle with a focus on performance, scalability, and predictive intelligence.
              </p>

              {/* Enhanced Skills Card */}
              <div className="relative p-1 rounded-3xl bg-gradient-to-br from-white/10 to-transparent shadow-2xl">
                <div className="relative p-8 rounded-[22px] border border-white/5 bg-black/40 backdrop-blur-3xl overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[100px] pointer-events-none" />
                  
                  <div className="relative z-10 space-y-8">
                    <div className="flex items-center justify-between border-b border-white/5 pb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/20">
                          <Activity className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <span className="font-black text-lg tracking-tight block">CORE_SYSTEMS</span>
                          <span className="text-[10px] text-muted-foreground font-mono">ID: MASEEEK_PROTO_01</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-[10px] font-bold text-green-500 uppercase tracking-tighter">Live Activity</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {skillCategories.map((cat, i) => (
                        <div key={i} className="space-y-3">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <cat.icon className="w-4 h-4 text-white/40" />
                              <span className="text-[11px] font-bold uppercase tracking-widest text-white/60">{cat.title}</span>
                            </div>
                            <span className="text-[11px] font-mono text-accent">{cat.level}%</span>
                          </div>
                          <div className="h-2 w-full bg-white/5 rounded-full p-[1px]">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${cat.level}%` }}
                              transition={{ duration: 2, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                              className={`h-full bg-gradient-to-r ${cat.color} rounded-full relative ${cat.glow}`}
                            >
                              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.4)_50%,transparent_100%)] animate-shimmer" />
                            </motion.div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Live Feed Terminal */}
                    <div className="mt-8 pt-6 border-t border-white/5">
                      <div className="flex items-center gap-2 mb-4">
                        <Terminal className="w-3 h-3 text-muted-foreground" />
                        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Live Activity Log</span>
                      </div>
                      <div className="space-y-2 font-mono text-[11px]">
                        {activeLog.map((log, idx) => (
                          <motion.div 
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            key={idx} 
                            className="flex items-center gap-3 text-white/40"
                          >
                            <span className="text-accent/50 opacity-50">&gt;</span>
                            <span>{log}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, idx) => (
              <ScrollReveal key={idx}>
                <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 group relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />
                  
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center group-hover:scale-110 group-hover:border-accent/30 transition-all duration-500 shadow-xl">
                      <category.icon className="w-7 h-7 text-white/80 group-hover:text-accent transition-colors" />
                    </div>
                    <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em] group-hover:text-accent/40 transition-colors">
                      Module_{idx + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-black mb-6 tracking-tight text-white/90">{category.title}</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className="px-4 py-1.5 text-[12px] font-medium border border-white/5 rounded-xl bg-black/20 text-white/40 group-hover:border-accent/20 group-hover:text-white/90 transition-all duration-300 hover:bg-accent/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
