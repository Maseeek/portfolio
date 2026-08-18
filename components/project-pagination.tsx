"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Home, ArrowUp } from "lucide-react";
import { resumeData } from "@/app/data/resume";

interface ProjectPaginationProps {
  currentSlug: string;
}

export const ProjectPagination = ({ currentSlug }: ProjectPaginationProps) => {
  const projects = resumeData.projects;
  const currentIndex = projects.findIndex(
    (p) => p.url === `/blog/${currentSlug}` || p.url.endsWith(currentSlug)
  );

  if (currentIndex === -1) return null;

  const prevProject =
    currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="pt-12 mt-16 border-t border-white/10 space-y-8">
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
          Explore More Case Studies
        </span>
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer group"
          aria-label="Back to top"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Previous Project Card */}
        <Link
          href={prevProject.url}
          className="group p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 hover:border-accent/40 transition-all duration-300 flex flex-col justify-between"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2 group-hover:text-accent transition-colors">
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Previous Project</span>
          </div>
          <div>
            <h4 className="font-bold text-base text-white group-hover:text-accent transition-colors">
              {prevProject.title}
            </h4>
            <p className="text-xs text-slate-400 line-clamp-1 mt-1">
              {prevProject.stack.slice(0, 3).join(" • ")}
            </p>
          </div>
        </Link>

        {/* Next Project Card */}
        <Link
          href={nextProject.url}
          className="group p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 hover:border-accent/40 transition-all duration-300 flex flex-col justify-between text-right sm:text-right"
        >
          <div className="flex items-center justify-end gap-2 text-xs font-mono text-slate-400 mb-2 group-hover:text-accent transition-colors">
            <span>Next Project</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
          <div>
            <h4 className="font-bold text-base text-white group-hover:text-accent transition-colors">
              {nextProject.title}
            </h4>
            <p className="text-xs text-slate-400 line-clamp-1 mt-1">
              {nextProject.stack.slice(0, 3).join(" • ")}
            </p>
          </div>
        </Link>
      </div>

      <div className="flex justify-center pt-4">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-white transition-all hover:scale-105"
        >
          <Home className="w-3.5 h-3.5 text-accent" />
          <span>All Projects Grid</span>
        </Link>
      </div>
    </div>
  );
};
