"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, PlusCircle, ArrowUpRight, BookOpen, Layers, ShieldCheck } from "lucide-react";
import { BrandLogo } from "@/components/ui/brand-logo";

export default function AdminDashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono text-accent uppercase tracking-widest flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> Owner Workspace
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            Administrative Control Panel
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Private management suite for brandmark prototyping and dynamic technical blog publishing.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/blogs/new"
            className="px-4 py-2 rounded-xl bg-accent hover:bg-accent/90 text-white font-bold text-xs font-mono uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-accent/25 transition-all"
          >
            <PlusCircle className="w-4 h-4" /> Create Blog Post
          </Link>
          <Link
            href="/admin/brand-lab"
            className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-all"
          >
            <Sparkles className="w-4 h-4 text-accent" /> Brand Lab
          </Link>
        </div>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Brand Lab Card */}
        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
              <BrandLogo variant="fluid-monolith" size={32} glow={false} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white uppercase">Brand Identity & Logo Lab</h2>
              <p className="text-xs font-mono text-accent mt-0.5">Private Prototyping Environment</p>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Explore geometric Fluid-M iterations, test responsive scale renders (16px to 128px), run in-situ navigation bar glass simulations, and copy ready-to-use JSX components.
            </p>
          </div>

          <Link
            href="/admin/brand-lab"
            className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white flex items-center justify-center gap-2 transition-colors group"
          >
            <span>Open Brand Lab</span>
            <ArrowUpRight className="w-4 h-4 text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Blog Publisher Card */}
        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white uppercase">Dynamic Blog Publisher</h2>
              <p className="text-xs font-mono text-cyan-400 mt-0.5">Markdown Authoring & Management</p>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Draft, preview, publish, and manage rich technical articles with custom tags, SEO summaries, read time calculations, and code syntax highlighting.
            </p>
          </div>

          <Link
            href="/admin/blogs/new"
            className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white flex items-center justify-center gap-2 transition-colors group"
          >
            <span>New Blog Article</span>
            <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
