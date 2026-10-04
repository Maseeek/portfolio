"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type BentoShape = "hero" | "tall" | "wide" | "compact";

interface ProjectBentoCardProps {
  project: {
    title: string;
    stack: readonly string[];
    description: string;
    size: string;
    color?: string;
    image?: string;
    url?: string;
    event?: string;
  };
  shape?: BentoShape;
  className?: string;
}

export const ProjectBentoCard = ({
  project,
  shape = "compact",
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

  const themeColor = project.color || "#6366f1";
  const isInternal = project.url && project.url.startsWith("/");
  const isShowcase = shape === "hero" || shape === "tall";
  const maxPills =
    shape === "hero" ? 6 : shape === "wide" ? 5 : shape === "tall" ? 4 : 3;
  const shapeBadge =
    shape === "hero"
      ? "Flagship System"
      : shape === "tall"
      ? "Architecture Deep Dive"
      : project.event || "Case Study";

  const cardContent = (
    <>
      {/* Background Color Glow */}
      <div
        className="absolute inset-0 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 0% 0%, ${themeColor}25 0%, transparent 65%), 
                      radial-gradient(circle at 100% 100%, ${themeColor}15 0%, transparent 60%)`,
          opacity: 0.75,
        }}
      />

      {/* Hardware-Accelerated Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100 spotlight-effect"
        style={
          {
            "--spotlight-color": `${themeColor}30`,
          } as React.CSSProperties
        }
      />

      {/* Ambient Background Image for all cards */}
      {project.image && (
        <div
          className={cn(
            "absolute inset-0 transition-all duration-700 pointer-events-none",
            isShowcase
              ? "opacity-[0.04] group-hover:opacity-[0.12]"
              : "opacity-[0.07] group-hover:opacity-[0.24]"
          )}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
            className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}

      {/* Framed Visual Preview Window for Multi-Row Showcase Shapes (Hero 4x2 & Tall 2x2) */}
      {isShowcase && project.image && (
        <div
          className={cn(
            "relative z-10 w-full overflow-hidden rounded-2xl border border-white/10 bg-black/50 mb-5 shrink-0",
            shape === "hero" ? "h-44 md:h-56" : "h-36 md:h-44"
          )}
        >
          <Image
            src={project.image}
            alt={`${project.title} architecture preview`}
            fill
            sizes="(max-width: 768px) 100vw, 66vw"
            className="object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-transparent to-transparent opacity-80" />
          <div className="absolute top-3 left-3 flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/75 border border-white/15 backdrop-blur-md">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: themeColor }}
            />
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-200 font-semibold">
              {shapeBadge}
            </span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end flex-grow">
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-2 min-w-0">
            <span
              className="text-[0.65rem] uppercase tracking-[0.2em] font-bold truncate"
              style={{ color: themeColor }}
            >
              {project.stack[0]}
            </span>
            <div
              className="w-1.5 h-[1px] rounded-full shrink-0"
              style={{ backgroundColor: `${themeColor}60` }}
            />
            <span className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-400 font-medium truncate">
              {shapeBadge}
            </span>
          </div>
          <span className="opacity-60 group-hover:opacity-100 transition-all duration-300 text-xs font-mono font-bold text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0">
            ↗
          </span>
        </div>

        <h3
          className={cn(
            "font-black tracking-tighter uppercase mb-2.5 leading-[0.96] transition-transform duration-500 group-hover:translate-x-1 text-white",
            shape === "hero"
              ? "text-[clamp(1.5rem,3vw,2.35rem)]"
              : shape === "tall" || shape === "wide"
              ? "text-[clamp(1.25rem,2.1vw,1.65rem)]"
              : "text-[clamp(1.1rem,1.7vw,1.35rem)]"
          )}
        >
          {project.title}
        </h3>

        <p
          className={cn(
            "text-slate-300/90 text-xs md:text-sm leading-relaxed font-light group-hover:text-white transition-colors",
            shape === "hero"
              ? "max-w-2xl line-clamp-3"
              : shape === "tall"
              ? "max-w-md line-clamp-3"
              : "max-w-xl line-clamp-2"
          )}
        >
          {project.description}
        </p>

        {/* Tech stack pills & Case Study CTA */}
        <div className="flex items-center justify-between gap-2 mt-5 pt-2">
          <div className="flex flex-wrap gap-1.5 opacity-90 group-hover:opacity-100 transition-all duration-300">
            {project.stack.slice(0, maxPills).map((tech) => (
              <span
                key={tech}
                className="text-[0.62rem] uppercase tracking-wider text-slate-200 px-2.5 py-1 rounded-lg border font-mono font-medium shadow-sm transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundColor: `${themeColor}18`,
                  borderColor: `${themeColor}40`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <span
            className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono font-bold uppercase tracking-wider opacity-75 group-hover:opacity-100 transition-all duration-300 transform translate-x-1 group-hover:translate-x-0 shrink-0"
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
          boxShadow: `inset 0 0 35px ${themeColor}25`,
        }}
      />
    </>
  );

  const sharedClasses = cn(
    "p-card group relative flex flex-col justify-between h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-card/40 backdrop-blur-xl p-5 md:p-7",
    "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
    "hover:border-accent/50 hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(99,102,241,0.2)] hover:bg-card/70",
    "focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none",
    className
  );

  if (isInternal && project.url) {
    return (
      <Link
        href={project.url}
        onMouseMove={handleMouseMove}
        className={sharedClasses}
        style={{ backgroundColor: `rgba(15, 18, 25, 0.45)` }}
      >
        {cardContent}
      </Link>
    );
  }

  if (project.url) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        onMouseMove={handleMouseMove}
        className={sharedClasses}
        style={{ backgroundColor: `rgba(15, 18, 25, 0.45)` }}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className={sharedClasses}
      style={{ backgroundColor: `rgba(15, 18, 25, 0.45)` }}
    >
      {cardContent}
    </div>
  );
};
