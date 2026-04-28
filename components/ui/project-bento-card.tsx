"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ProjectBentoCardProps {
  project: {
    title: string;
    stack: readonly string[];
    description: string;
    size: string;
    image?: string;
    url?: string;
  };
  className?: string;
}

export const ProjectBentoCard = ({
  project,
  className,
}: ProjectBentoCardProps) => {
  const Wrapper = project.url ? "a" : "div";
  const linkProps = project.url
    ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...linkProps}
      className={cn(
        "p-card group relative flex flex-col justify-end overflow-hidden rounded-3xl border border-white/5 bg-card/40 backdrop-blur-md p-8 md:p-10",
        "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "hover:border-accent/40 hover:-translate-y-1.5 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:bg-card/60",
        project.size === "large" && "md:col-span-2 md:row-span-2",
        project.size === "medium" && "md:row-span-1",
        className
      )}
    >
      {/* Background image */}
      {project.image && (
        <div className="absolute inset-0 opacity-[0.07] group-hover:opacity-[0.14] transition-opacity duration-500">
          <Image
            src={project.image}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}

      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        <span className="text-[0.6rem] uppercase tracking-[0.2em] text-accent font-semibold block mb-4">
          {project.stack.slice(0, 3).join(" · ")}
        </span>
        <h3 className="text-[clamp(1.5rem,3vw,2.5rem)] font-black tracking-[-0.03em] uppercase mb-3">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed font-light max-w-md">
          {project.description}
        </p>

        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-2 mt-6">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-[0.6rem] uppercase tracking-[0.1em] text-muted-foreground border border-border px-3 py-1 rounded-full group-hover:border-white/20 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};
