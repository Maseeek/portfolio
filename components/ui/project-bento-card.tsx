"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRef, useState } from "react";

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLAnchorElement & HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const Wrapper = project.url ? "a" : "div";
  const linkProps = project.url
    ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  // Convert hex to rgba for backgrounds
  const themeColor = project.color || "#ffffff";
  const bgGlow = `${themeColor}08`; // 3% opacity
  const hoverGlow = `${themeColor}15`; // 8% opacity

  return (
    <Wrapper
      {...linkProps}
      ref={cardRef as any}
      onMouseMove={handleMouseMove}
      className={cn(
        "p-card group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-white/5 bg-card/40 backdrop-blur-md p-6 md:p-8",
        "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "hover:border-accent/40 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(var(--accent-rgb),0.08)] hover:bg-card/60",
        project.size === "large" && "md:col-span-2 md:row-span-2",
        project.size === "wide" && "md:col-span-2 md:row-span-1",
        project.size === "tall" && "md:col-span-1 md:row-span-2",
        project.size === "medium" && "md:col-span-1 md:row-span-1",
        project.size === "small" && "md:col-span-1 md:row-span-1",
        className
      )}
      style={{
        backgroundColor: `rgba(20, 20, 20, 0.4)`,
      }}
    >
      {/* Background Color Glow */}
      <div 
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle at 0% 0%, ${themeColor}15 0%, transparent 50%), 
                      radial-gradient(circle at 100% 100%, ${themeColor}08 0%, transparent 50%)`,
          opacity: 0.5
        }}
      />

      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${themeColor}15, transparent 40%)`,
        }}
      />

      {/* Background image */}
      {project.image && (
        <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.15] transition-all duration-700">
          <Image
            src={project.image}
            alt=""
            fill
            className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[0.55rem] uppercase tracking-[0.2em] font-bold" style={{ color: themeColor }}>
            {project.stack[0]}
          </span>
          <div className="w-1.5 h-[1px] rounded-full" style={{ backgroundColor: `${themeColor}40` }} />
          <span className="text-[0.55rem] uppercase tracking-[0.2em] text-muted-foreground/60 font-medium">
            Project
          </span>
        </div>
        
        <h3 className={cn(
          "font-black tracking-tighter uppercase mb-3 leading-[0.95] transition-transform duration-500 group-hover:translate-x-1",
          project.size === "large" ? "text-[clamp(1.5rem,4vw,2.5rem)]" : "text-[clamp(1.25rem,2.5vw,1.75rem)]"
        )}>
          {project.title}
        </h3>
        
        <p className="text-muted-foreground/70 text-xs md:text-sm leading-relaxed font-light max-w-md line-clamp-2 group-hover:text-muted-foreground transition-colors">
          {project.description}
        </p>

        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-1.5 mt-6 opacity-60 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[0.5rem] uppercase tracking-[0.05em] text-foreground/80 glass px-2.5 py-1 rounded-full border-white/5 font-semibold"
              style={{ 
                backgroundColor: `${themeColor}08`,
                borderColor: `${themeColor}20`
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Border Glow */}
      <div 
        className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-2xl transition-all duration-500 pointer-events-none"
        style={{
          boxShadow: `inset 0 0 20px ${themeColor}10`
        }}
      />
    </Wrapper>
  );
};

