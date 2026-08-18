"use client";
import React from "react";
import { ScrollReveal } from "@/components/scroll-reveal";

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  isIncoming?: boolean;
  isCurrent?: boolean;
  team?: string;
  skills?: readonly string[];
}

const SpotlightCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const rafRef = React.useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      target.style.setProperty("--mouse-x", `${x}px`);
      target.style.setProperty("--mouse-y", `${y}px`);
      rafRef.current = null;
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`spotlight-card group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden shadow-2xl backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-white/20 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 spotlight-effect"
        style={{
          ['--spotlight-color' as any]: "rgba(255, 255, 255, 0.07)",
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};


export const ExperienceTimeline = ({
  experiences,
}: {
  experiences: readonly Experience[];
}) => {
  return (
    <div className="relative flex flex-col gap-8 md:gap-14 lg:gap-16 pl-6 md:pl-0 mt-4">
      {/* Vertical Line */}
      <div className="absolute left-[0px] md:left-[50%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2 hidden md:block" />
      <div className="absolute left-[15px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2 md:hidden" />

      {experiences.map((exp, index) => (
        <ScrollReveal key={exp.company}>
          <div className={`relative flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            {/* Timeline Node */}
            <div className="absolute left-[0px] md:left-[50%] w-3.5 h-3.5 rounded-full bg-background border-2 border-accent -translate-x-1/2 shadow-[0_0_15px_rgba(var(--accent-rgb),0.5)] z-10 hidden md:block" />
            <div className="absolute left-[15px] top-[32px] w-3.5 h-3.5 rounded-full bg-background border-2 border-accent -translate-x-1/2 shadow-[0_0_15px_rgba(var(--accent-rgb),0.5)] z-10 md:hidden" />

            {/* Content Side */}
            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-10 lg:pl-14' : 'md:pr-10 lg:pr-14'} pl-2 md:pl-0`}>
              <SpotlightCard className="p-6 md:p-8 h-full flex flex-col justify-center">
                <div className="flex flex-col gap-3.5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xl md:text-2xl font-black tracking-tight text-foreground">
                        {exp.company}
                      </span>
                      {exp.isCurrent && (
                        <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[0.65rem] px-2.5 py-1 rounded-full uppercase tracking-[0.1em] font-bold shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Active Position
                        </span>
                      )}
                      {exp.isIncoming && (
                        <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent border border-accent/20 text-[0.65rem] px-2.5 py-1 rounded-full uppercase tracking-[0.1em] font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                          Incoming
                        </span>
                      )}
                    </div>
                    <span className="text-xs uppercase tracking-[0.15em] text-accent/80 font-medium px-3 py-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
                      {exp.period}
                    </span>
                  </div>

                  {exp.team && (
                    <span className="text-xs font-mono font-semibold text-accent/90 bg-accent/5 px-3 py-1 rounded-md border border-accent/20 self-start">
                      🎯 {exp.team}
                    </span>
                  )}
                  
                  <div className="flex flex-col gap-2">
                    <strong className="text-base md:text-lg font-bold text-foreground/90">{exp.role}</strong>
                    <p className="text-muted-foreground text-sm leading-relaxed font-light">
                      {exp.description}
                    </p>
                  </div>

                  {exp.skills && exp.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-white/10">
                      {exp.skills.map(skill => (
                        <span key={skill} className="text-xs font-medium text-foreground/70 bg-white/5 px-3 py-1 rounded-md border border-white/5 transition-colors hover:text-foreground hover:bg-white/10">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </SpotlightCard>
            </div>
            {/* Empty Side for layout */}
            <div className="hidden md:block w-1/2" />
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
};
