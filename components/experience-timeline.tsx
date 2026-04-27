"use client";
import { ScrollReveal } from "@/components/scroll-reveal";

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  isIncoming?: boolean;
}

export const ExperienceTimeline = ({
  experiences,
}: {
  experiences: readonly Experience[];
}) => {
  return (
    <div className="flex flex-col">
      {experiences.map((exp) => (
        <ScrollReveal key={exp.company}>
          <div className="exp-item group relative grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-4 md:gap-8 py-8 md:py-12 border-b border-white/10 transition-all duration-500 hover:pl-8">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            <div className="flex flex-col gap-2">
              <span className="text-3xl font-black tracking-tight text-foreground group-hover:text-accent transition-colors duration-300">
                {exp.company}
              </span>
              {exp.isIncoming && (
                <span className="inline-block w-fit bg-accent/20 text-accent border border-accent/30 text-[0.6rem] px-3 py-1 rounded-full uppercase tracking-[0.1em] font-bold">
                  Incoming
                </span>
              )}
            </div>
            <span className="text-muted-foreground text-base font-light leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
              <strong className="font-semibold text-foreground">{exp.role}</strong> — {exp.description}
            </span>
            <span className="text-left md:text-right text-[0.8rem] uppercase tracking-[0.15em] text-muted-foreground font-medium self-start md:self-center">
              {exp.period}
            </span>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
};
