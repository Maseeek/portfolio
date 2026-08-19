import React from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, Clock, Calendar, ArrowUpRight, Tag, Sparkles, Shield } from "lucide-react";
import { getAllBlogPosts } from "@/lib/blog-store";
import { resumeData } from "@/app/data/resume";

export const metadata = {
  title: "Engineering Blog & Technical Case Studies | Maciek Geneja",
  description:
    "Architectural deep dives, systems engineering benchmarks, and full-stack software insights by Maciek Geneja.",
};

export default async function BlogIndexPage() {
  const dynamicPosts = await getAllBlogPosts(false); // Only published

  return (
    <div className="space-y-12 md:space-y-16 font-sans selection:bg-accent/30">
      {/* Top Navigation */}
      <Link
        href="/"
        className="inline-flex items-center text-xs font-mono font-bold text-muted-foreground hover:text-accent transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Portfolio
      </Link>

      {/* Header */}
      <header className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
          <BookOpen className="w-3.5 h-3.5 text-accent" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">
            Technical Knowledge Base
          </span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase">
          Engineering <span className="text-accent">Blog</span> & Case Studies
        </h1>
        <p className="text-lg text-muted-foreground font-light max-w-2xl">
          Deep architectural explorations, systems design breakdowns, algorithmic benchmarks, and project postmortems.
        </p>
      </header>

      {/* Authored Dynamic Articles Section (if any published) */}
      {dynamicPosts.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-b border-white/10 pb-4">
            <Sparkles className="w-4 h-4 text-accent" />
            <h2 className="text-xl font-bold text-white uppercase tracking-tight">
              Authored Articles & Technical Notes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dynamicPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-accent/40 hover:bg-white/[0.04] transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                    <span className="flex items-center gap-1 text-accent">
                      <Clock className="w-3 h-3" /> {post.readingTime}
                    </span>
                    {post.publishedAt && (
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors leading-snug">
                    {post.title}
                  </h3>

                  {post.summary && (
                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                      {post.summary}
                    </p>
                  )}
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-mono text-accent flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read Article →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Flagship Case Studies Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-b border-white/10 pb-4">
          <Shield className="w-4 h-4 text-cyan-400" />
          <h2 className="text-xl font-bold text-white uppercase tracking-tight">
            Flagship Project Case Studies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resumeData.projects.map((project) => (
            <Link
              key={project.title}
              href={project.url}
              className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.04] transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-white/5 text-white/70 border border-white/10">
                    Flagship Deep Dive
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
