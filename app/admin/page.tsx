"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Sparkles,
  PlusCircle,
  ArrowUpRight,
  BookOpen,
  ShieldCheck,
  Edit2,
  Trash2,
  ExternalLink,
  Search,
  CheckCircle2,
  AlertCircle,
  FileText,
  Globe,
  Lock,
} from "lucide-react";
import { BrandLogo } from "@/components/ui/brand-logo";

interface BlogPostSummary {
  id: string;
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  published: boolean;
  readingTime: string;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export default function AdminDashboardPage() {
  const [posts, setPosts] = useState<BlogPostSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/blogs");
      const data = await res.json();
      if (res.ok && data.posts) {
        setPosts(data.posts);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"? This cannot be undone.`)) {
      return;
    }

    setDeletingId(id);
    setActionError(null);
    setActionSuccess(null);

    try {
      const res = await fetch(`/api/admin/blogs/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        setActionError(data.error || "Failed to delete post.");
        setDeletingId(null);
        return;
      }

      setActionSuccess("Blog post deleted successfully.");
      setPosts(posts.filter((p) => p.id !== id));
      setDeletingId(null);
    } catch {
      setActionError("Error deleting post.");
      setDeletingId(null);
    }
  };

  const filteredPosts = posts.filter((post) => {
    const query = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(query) ||
      post.slug.toLowerCase().includes(query) ||
      post.summary.toLowerCase().includes(query) ||
      post.tags.some((t) => t.toLowerCase().includes(query))
    );
  });

  const publishedCount = posts.filter((p) => p.published).length;
  const draftCount = posts.filter((p) => !p.published).length;

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

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/admin/blogs/new"
            className="px-4 py-2.5 rounded-xl bg-accent hover:bg-accent/90 text-white font-bold text-xs font-mono uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-accent/25 transition-all"
          >
            <PlusCircle className="w-4 h-4" /> Compose Post
          </Link>
          <Link
            href="/admin/brand-lab"
            className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-all"
          >
            <Sparkles className="w-4 h-4 text-accent" /> Brand Lab
          </Link>
        </div>
      </div>

      {/* Action alerts */}
      {actionSuccess && (
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>{actionSuccess}</span>
        </div>
      )}

      {actionError && (
        <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-mono flex items-center gap-2">
          <AlertCircle className="w-4 h-4" />
          <span>{actionError}</span>
        </div>
      )}

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 flex items-center justify-between">
          <div>
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest block">
              Total Articles
            </span>
            <span className="text-3xl font-black text-white mt-1 block">
              {posts.length}
            </span>
          </div>
          <div className="p-3 rounded-2xl bg-white/5 border border-white/5 text-white/70">
            <FileText className="w-6 h-6" />
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 flex items-center justify-between">
          <div>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block">
              Published
            </span>
            <span className="text-3xl font-black text-emerald-400 mt-1 block">
              {publishedCount}
            </span>
          </div>
          <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <Globe className="w-6 h-6" />
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 flex items-center justify-between">
          <div>
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block">
              Drafts
            </span>
            <span className="text-3xl font-black text-amber-400 mt-1 block">
              {draftCount}
            </span>
          </div>
          <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
            <Lock className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Articles Management Table & List */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-xl font-bold text-white uppercase">Authored Technical Articles</h2>
            <p className="text-xs font-mono text-muted-foreground mt-0.5">
              Manage published posts and work-in-progress drafts
            </p>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search posts or tags..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-black/40 border border-white/10 focus:border-accent text-xs font-mono text-white placeholder:text-white/30 outline-none"
            />
          </div>
        </div>

        {loading ? (
          <div className="py-16 text-center text-xs font-mono text-muted-foreground">
            <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            Loading blog posts...
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="py-16 text-center border border-dashed border-white/10 rounded-2xl p-8 space-y-3">
            <BookOpen className="w-8 h-8 text-muted-foreground mx-auto" />
            <p className="text-sm text-white font-medium">No blog posts found</p>
            <p className="text-xs text-muted-foreground max-w-sm mx-auto">
              {searchQuery
                ? "No articles matched your search query."
                : "You haven't authored any dynamic blog posts yet. Create your first post to publish technical insights."}
            </p>
            {!searchQuery && (
              <Link
                href="/admin/blogs/new"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent text-white font-mono text-xs font-bold uppercase tracking-wider mt-2"
              >
                <PlusCircle className="w-3.5 h-3.5" /> Write First Post
              </Link>
            )}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  <th className="py-3 px-4">Title & Slug</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Tags</th>
                  <th className="py-3 px-4">Read Time</th>
                  <th className="py-3 px-4">Updated</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs font-mono">
                {filteredPosts.map((post) => (
                  <tr key={post.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 font-sans">
                      <div className="font-bold text-white text-sm">{post.title}</div>
                      <div className="text-[11px] font-mono text-accent/80 mt-0.5">
                        /blog/{post.slug}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      {post.published ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase">
                          <Globe className="w-3 h-3" /> Published
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-bold uppercase">
                          <Lock className="w-3 h-3" /> Draft
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex flex-wrap gap-1 max-w-[200px]">
                        {post.tags.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] text-white/70"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-muted-foreground">
                      {post.readingTime}
                    </td>
                    <td className="py-4 px-4 text-muted-foreground text-[11px]">
                      {new Date(post.updatedAt).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/blog/${post.slug}`}
                          target="_blank"
                          title="Preview Article"
                          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </Link>
                        <Link
                          href={`/admin/blogs/${post.id}/edit`}
                          title="Edit Article"
                          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-accent transition-colors"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </Link>
                        <button
                          type="button"
                          onClick={() => handleDelete(post.id, post.title)}
                          disabled={deletingId === post.id}
                          title="Delete Article"
                          className="p-2 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition-colors disabled:opacity-50 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Brand Lab Showcase Banner */}
      <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
            <BrandLogo variant="fluid-monolith" size={36} glow={true} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white uppercase">Private Brand Identity & Logo Lab</h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              Explore aerodynamic Fluid-M ribbon geometry, in-situ header simulations, and copy JSX component assets.
            </p>
          </div>
        </div>

        <Link
          href="/admin/brand-lab"
          className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shrink-0 group"
        >
          <span>Launch Brand Lab</span>
          <ArrowUpRight className="w-4 h-4 text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
