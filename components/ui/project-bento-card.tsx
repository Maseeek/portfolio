"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface ProjectBentoCardProps {
  project: {
    title: string;
    stack: readonly string[];
    description: string;
    size: string;
    color?: string;
    image?: string;
    url?: string;
  };
  className?: string;
}

export const ProjectBentoCard = ({
  project,
  className,
}: ProjectBentoCardProps) => {
  const rafRef = React.useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
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

  const Wrapper = project.url ? "a" : "div";
  const linkProps = project.url
    ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  const themeColor = project.color || "#ffffff";

  return (
    <Wrapper
      {...linkProps}
      onMouseMove={handleMouseMove}
      className={cn(
        "p-card group relative flex flex-col justify-end overflow-hidden rounded-3xl border border-white/10 bg-card/40 backdrop-blur-xl p-6 md:p-8",
        "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "hover:border-accent/50 hover:-translate-y-1.5 hover:shadow-[0_0_50px_rgba(99,102,241,0.15)] hover:bg-card/70",
        project.size === "large" && "md:col-span-2 md:row-span-2",
        project.size === "wide" && "md:col-span-2 md:row-span-1",
        project.size === "tall" && "md:col-span-1 md:row-span-2",
        project.size === "medium" && "md:col-span-1 md:row-span-1",
        project.size === "small" && "md:col-span-1 md:row-span-1",
        className
      )}
      style={{
        backgroundColor: `rgba(15, 18, 25, 0.45)`,
      }}
    >
      {/* Background Color Glow */}
      <div 
        className="absolute inset-0 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 0% 0%, ${themeColor}20 0%, transparent 60%), 
                      radial-gradient(circle at 100% 100%, ${themeColor}10 0%, transparent 60%)`,
          opacity: 0.6
        }}
      />

      {/* Hardware-Accelerated Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100 spotlight-effect"
        style={{
          ['--spotlight-color' as any]: `${themeColor}25`,
        }}
      />

      {/* Background image */}
      {project.image && (
        <div className="absolute inset-0 opacity-[0.04] group-hover:opacity-[0.18] transition-all duration-700 pointer-events-none">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-[0.6rem] uppercase tracking-[0.2em] font-bold" style={{ color: themeColor }}>
              {project.stack[0]}
            </span>
            <div className="w-1.5 h-[1px] rounded-full" style={{ backgroundColor: `${themeColor}40` }} />
            <span className="text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground/60 font-medium">
              Featured Project
            </span>
          </div>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-white/70">
            ↗
          </span>
        </div>
        
        <h3 className={cn(
          "font-black tracking-tighter uppercase mb-3 leading-[0.95] transition-transform duration-500 group-hover:translate-x-1 text-white",
          project.size === "large" ? "text-[clamp(1.5rem,4vw,2.5rem)]" : "text-[clamp(1.25rem,2.5vw,1.75rem)]"
        )}>
          {project.title}
        </h3>
        
        <p className="text-muted-foreground/80 text-xs md:text-sm leading-relaxed font-light max-w-md line-clamp-2 group-hover:text-foreground/90 transition-colors">
          {project.description}
        </p>

        {/* Tech stack pills & Case Study CTA */}
        <div className="flex items-center justify-between gap-2 mt-6 pt-2">
          <div className="flex flex-wrap gap-1.5 opacity-80 group-hover:opacity-100 transition-all duration-300">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[0.6rem] uppercase tracking-wider text-slate-200 px-2.5 py-1 rounded-lg border font-mono font-medium shadow-sm"
                style={{ 
                  backgroundColor: `${themeColor}15`,
                  borderColor: `${themeColor}35`
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <span 
            className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0"
            style={{ color: themeColor }}
          >
            Case Study →
          </span>
        </div>
      </div>

      {/* Hover Border Glow */}
      <div 
        className="absolute inset-0 border border-white/0 group-hover:border-white/25 rounded-3xl transition-all duration-500 pointer-events-none"
        style={{
          boxShadow: `inset 0 0 35px ${themeColor}20`
        }}
      />
    </Wrapper>
  );
};


