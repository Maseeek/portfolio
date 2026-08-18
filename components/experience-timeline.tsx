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

const SpotlightCard = ({
  children,
  className = "",
  isFeatured = false,
}: {
  children: React.ReactNode;
  className?: string;
  isFeatured?: boolean;
}) => {
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
      className={`spotlight-card group relative rounded-2xl border ${
        isFeatured
          ? "border-accent/40 bg-accent/[0.03] shadow-[0_0_40px_rgba(99,102,241,0.12)] hover:border-accent/80 hover:bg-accent/[0.06]"
          : "border-white/10 bg-white/5 hover:border-white/20"
      } overflow-hidden shadow-2xl backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 spotlight-effect"
        style={{
          ['--spotlight-color' as any]: isFeatured
            ? "rgba(99, 102, 241, 0.15)"
            : "rgba(255, 255, 255, 0.08)",
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
      <div className="absolute left-[0px] md:left-[50%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent/60 via-white/20 to-transparent -translate-x-1/2 hidden md:block" />
      <div className="absolute left-[15px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent/60 via-white/20 to-transparent -translate-x-1/2 md:hidden" />

      {experiences.map((exp, index) => {
        const isFeatured = !!(exp.isCurrent || exp.isIncoming);
        return (
          <ScrollReveal key={exp.company}>
            <div
              className={`relative flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Node */}
              <div
                className={`absolute left-[0px] md:left-[50%] w-4 h-4 rounded-full bg-background border-2 ${
                  isFeatured
                    ? "border-accent shadow-[0_0_20px_rgba(99,102,241,0.8)] ring-4 ring-accent/20"
                    : "border-white/40 shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                } -translate-x-1/2 z-10 hidden md:block`}
              />
              <div
                className={`absolute left-[15px] top-[32px] w-4 h-4 rounded-full bg-background border-2 ${
                  isFeatured
                    ? "border-accent shadow-[0_0_20px_rgba(99,102,241,0.8)] ring-4 ring-accent/20"
                    : "border-white/40 shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                } -translate-x-1/2 z-10 md:hidden`}
              />

              {/* Content Side */}
              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:pl-10 lg:pl-14" : "md:pr-10 lg:pr-14"
                } pl-4 md:pl-0`}
              >
                <SpotlightCard
                  isFeatured={isFeatured}
                  className="p-6 md:p-8 h-full flex flex-col justify-center"
                >
                  <div className="flex flex-col gap-3.5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xl md:text-2xl font-black tracking-tight text-white">
                          {exp.company}
                        </span>
                        {exp.isCurrent && (
                          <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-300 border border-emerald-500/40 text-[0.65rem] px-2.5 py-1 rounded-full uppercase tracking-[0.1em] font-bold shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Active Position
                          </span>
                        )}
                        {exp.isIncoming && (
                          <span className="inline-flex items-center gap-1.5 bg-accent/15 text-cyan-300 border border-accent/40 text-[0.65rem] px-2.5 py-1 rounded-full uppercase tracking-[0.1em] font-bold shadow-[0_0_15px_rgba(99,102,241,0.25)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                            Placement Spotlight
                          </span>
                        )}
                      </div>
                      <span className="text-xs uppercase tracking-[0.15em] text-accent/90 font-mono font-medium px-3 py-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
                        {exp.period}
                      </span>
                    </div>

                    {exp.team && (
                      <span className="text-xs font-mono font-semibold text-accent/90 bg-accent/10 px-3 py-1 rounded-md border border-accent/30 self-start">
                        🎯 {exp.team}
                      </span>
                    )}

                    <div className="flex flex-col gap-2">
                      <strong className="text-base md:text-lg font-bold text-white">
                        {exp.role}
                      </strong>
                      <p className="text-slate-300 text-sm leading-relaxed font-light">
                        {exp.description}
                      </p>
                    </div>

                    {exp.skills && exp.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-white/10">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs font-mono font-medium text-slate-200 bg-white/5 px-3 py-1 rounded-md border border-white/10 transition-colors hover:text-white hover:bg-white/15 hover:border-accent/40"
                          >
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
        );
      })}
    </div>
  );
};
