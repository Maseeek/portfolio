"use client";
import React, { useState } from "react";
import { ResumeData } from "@/app/data/resume";
import { Github, Linkedin, Mail, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export const Footer = ({ profile }: { profile: ResumeData["profile"] }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(profile.links.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <footer className="py-32 border-t border-white/5 bg-black/40 backdrop-blur-3xl">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="text-center md:text-left space-y-4">
                    <h3 className="text-4xl font-bold text-white tracking-tighter lowercase">
                        Let's Build <span className="text-accent text-glow">Something</span>
                    </h3>
                    <p className="text-neutral-400 text-lg max-w-sm">
                        Open for collaboration and interesting projects. Based in the UK.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-6">
                    <div className="flex gap-4">
                        <a
                            href={profile.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-5 rounded-[2rem] glass hover:bg-white/10 transition-all group"
                            aria-label="GitHub"
                        >
                            <Github className="w-6 h-6 text-neutral-400 group-hover:text-white group-hover:scale-110 transition-transform" />
                        </a>
                        <a
                            href={profile.links.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-5 rounded-[2rem] glass hover:bg-white/10 transition-all group"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-6 h-6 text-neutral-400 group-hover:text-white group-hover:scale-110 transition-transform" />
                        </a>
                    </div>

                    <button
                        onClick={handleCopy}
                        className={cn(
                            "flex items-center gap-4 px-10 py-5 rounded-[2rem] font-bold transition-all duration-500 text-base tracking-tight lowercase",
                            copied
                                ? "bg-green-500/20 text-green-400 border border-green-500/50 shadow-[0_0_30px_-5px_#22c55e]"
                                : "glass border-accent/30 text-white hover:bg-accent hover:border-accent hover:shadow-[0_0_40px_-10px_var(--accent)] hover:scale-105 active:scale-95"
                        )}
                    >
                        {copied ? <Check className="w-5 h-5" /> : <Mail className="w-5 h-5" />}
                        {copied ? "copied email" : "get in touch"}
                    </button>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-500 text-sm font-medium">
                <p>© {new Date().getFullYear()} Maciek Geneja. All rights reserved.</p>
                <p className="flex items-center gap-2">
                    Built with <span className="text-accent">♥</span> using Next.js & Framer Motion
                </p>
            </div>
        </footer>

    );
};
