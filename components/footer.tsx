"use client";
import { ResumeData } from "@/app/data/resume";

export const Footer = ({ profile }: { profile: ResumeData["profile"] }) => {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-[1400px] mx-auto px-[clamp(1.5rem,4vw,4rem)] flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-8">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.75rem] uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.75rem] uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
        </div>
        <span className="text-[0.7rem] text-white/15">
          © {new Date().getFullYear()} Maciek Geneja
        </span>
      </div>
    </footer>
  );
};
