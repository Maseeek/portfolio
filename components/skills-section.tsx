"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "./scroll-reveal";
import { useEffect, useState, useRef, memo } from "react";
import { 
  Code2, Cpu, Globe, Database, 
  Terminal
} from "lucide-react";
import { BrandLogo } from "./ui/brand-logo";

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

const LiveActivityTerminal = memo(function LiveActivityTerminal() {
  const [activeLog, setActiveLog] = useState<string[]>([
    "Optimizing React tree...",
    "Syncing with Google Cloud...",
    "Refining CV algorithms..."
  ]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const logs = [
      "Optimizing React tree...",
      "Syncing with Google Cloud...",
      "Refining CV algorithms...",
      "Updating JWT protocols...",
      "Scaling MySQL instances...",
      "Deploying Vercel edge..."
    ];

    let interval: NodeJS.Timeout | null = null;
    let isIntersecting = true;

    const startTimer = () => {
      if (!interval && isIntersecting && !document.hidden) {
        interval = setInterval(() => {
          setActiveLog((prev) => [logs[Math.floor(Math.random() * logs.length)], ...prev].slice(0, 3));
        }, 5000);
      }
    };

    const stopTimer = () => {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopTimer();
      } else {
        startTimer();
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      isIntersecting = entry.isIntersecting;
      if (isIntersecting) {
        startTimer();
      } else {
        stopTimer();
      }
    }, { threshold: 0.1 });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      stopTimer();
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div ref={containerRef} className="mt-6 pt-5 border-t border-white/5">
      <div className="flex items-center gap-2 mb-3">
        <Terminal className="w-3 h-3 text-muted-foreground" />
        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Live Activity Log</span>
      </div>
      <div className="space-y-1.5 font-mono text-[11px]">
        {activeLog.map((log, idx) => (
          <div 
            key={idx} 
            className="flex items-center gap-2.5 text-white/60 transition-opacity duration-300"
          >
            <span className="text-accent/50 opacity-50">&gt;</span>
            <span>{log}</span>
          </div>
        ))}
      </div>
    </div>
  );
});

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 md:py-24 lg:py-28 relative overflow-hidden">
      {/* Premium Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent -z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-[clamp(1.25rem,4vw,3.5rem)]">
        <div className="section-header">
          <span className="section-label">Capabilities</span>
          <span className="section-label">03</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.8fr] gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Main Dashboard Interactive Card */}
          <ScrollReveal>
            <div className="relative group rounded-3xl p-1 bg-gradient-to-b from-white/10 to-transparent border border-white/10 hover:border-accent/40 transition-all duration-700 shadow-2xl">
              <div className="bg-card/90 backdrop-blur-2xl rounded-[22px] p-6 md:p-8 overflow-hidden relative">
                {/* Background ambient lighting */}
                <div className="absolute -right-20 -top-20 w-60 h-60 bg-accent/20 rounded-full blur-[80px] pointer-events-none transform-gpu" />
                
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between border-b border-white/5 pb-5">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-accent/10 flex items-center justify-center border border-accent/20">
                        <BrandLogo variant="fluid-monolith" size={22} glow={false} />
                      </div>
                      <div>
                        <span className="font-black text-base md:text-lg tracking-tight block">CORE_SYSTEMS</span>
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

                  <div className="space-y-5">
                    {skillCategories.map((cat, i) => (
                      <div key={i} className="space-y-2.5">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <cat.icon className="w-4 h-4 text-white/50" />
                            <span className="text-[11px] font-bold uppercase tracking-widest text-white/70">{cat.title}</span>
                          </div>
                          <span className="text-[11px] font-mono text-accent">{cat.level}%</span>
                        </div>
                        <div className="h-2 w-full bg-white/5 rounded-full p-[1px]">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${cat.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                            className={`h-full bg-gradient-to-r ${cat.color} rounded-full relative ${cat.glow}`}
                          >
                            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.4)_50%,transparent_100%)] animate-shimmer" />
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Live Feed Terminal (Isolated sub-component) */}
                  <LiveActivityTerminal />
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {skillCategories.map((category, idx) => (
              <ScrollReveal key={idx}>
                <div className="p-6 md:p-7 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 group relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 transform-gpu`} />
                  
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center group-hover:scale-110 group-hover:border-accent/30 transition-all duration-500 shadow-xl">
                      <category.icon className="w-6 h-6 text-white/80 group-hover:text-accent transition-colors" />
                    </div>
                    <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em] group-hover:text-accent/40 transition-colors">
                      Module_{idx + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-black mb-4 tracking-tight text-white/90">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className="px-3.5 py-1 text-[11px] md:text-[12px] font-medium border border-white/5 rounded-xl bg-black/20 text-white/70 group-hover:border-accent/20 group-hover:text-white/90 transition-all duration-300 hover:bg-accent/5"
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
