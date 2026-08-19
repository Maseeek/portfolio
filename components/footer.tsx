"use client";
import { ResumeData } from "@/app/data/resume";
import { BrandLogo } from "./ui/brand-logo";
import Link from "next/link";

export const Footer = ({ profile }: { profile: ResumeData["profile"] }) => {
  return (
    <footer className="border-t border-border py-10 md:py-14 bg-black/30 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-[clamp(1.25rem,4vw,3.5rem)] flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand Emblem & Tagline */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-300">
              <BrandLogo variant="fluid-monolith" size={20} glow={true} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-black tracking-tight text-white uppercase group-hover:text-accent transition-colors">
                {profile.name}
              </span>
              <span className="text-[9px] font-mono text-muted-foreground">
                Software Engineer & Full Stack
              </span>
            </div>
          </Link>
        </div>

        {/* Links */}
        <div className="flex items-center gap-8">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.75rem] uppercase tracking-[0.15em] font-medium text-muted-foreground hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.75rem] uppercase tracking-[0.15em] font-medium text-muted-foreground hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>

        {/* Copyright */}
        <div className="flex items-center gap-2">
          <span className="text-[0.7rem] text-white/30 font-mono">
            © {new Date().getFullYear()} Maciek Geneja. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
