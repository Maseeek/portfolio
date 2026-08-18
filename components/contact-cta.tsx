"use client";

import React, { useState } from "react";
import Magnetic from "@/components/ui/magnetic";
import { Check, Copy, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { ResumeData } from "@/app/data/resume";

export const ContactCTA = ({ profile }: { profile: ResumeData["profile"] }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(profile.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="relative text-center py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Abstract background elements - GPU Composited */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[600px] max-h-[600px] bg-accent/5 rounded-full blur-[80px] -z-10 pointer-events-none transform-gpu" />
      
      <div className="max-w-[1400px] mx-auto px-[clamp(1.25rem,4vw,3.5rem)] relative z-10">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8 md:mb-10 shadow-lg shadow-accent/5 backdrop-blur-md">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[0.7rem] uppercase tracking-[0.25em] text-accent font-bold">
            Available for high-impact roles & projects
          </span>
        </div>
        
        {/* Title */}
        <h2 className="text-[clamp(3.8rem,18vw,15rem)] font-black tracking-tighter leading-[0.8] mb-8 md:mb-12 text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-600 select-none">
          LET&apos;S
          <br />
          BUILD.
        </h2>
        
        {/* Main Email CTA */}
        <div className="flex flex-col items-center gap-5">
          <Magnetic>
            <a 
              href={`mailto:${profile.links.email}`} 
              className="cta-email text-[clamp(1.25rem,2.8vw,2.5rem)] font-bold tracking-tight inline-flex items-center gap-3 transition-all hover:text-accent"
            >
              <Mail className="w-6 h-6 md:w-8 md:h-8 text-accent" />
              <span>{profile.links.email}</span>
              <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Magnetic>

          {/* Quick Action Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-3">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-xs font-mono font-medium text-slate-300 hover:text-white transition-all shadow-sm active:scale-95"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">Email Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-accent" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-xs font-mono font-medium text-slate-300 hover:text-white transition-all shadow-sm"
            >
              <Github className="w-3.5 h-3.5 text-white/80" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-white/40" />
            </a>

            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-xs font-mono font-medium text-slate-300 hover:text-white transition-all shadow-sm"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-white/40" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
