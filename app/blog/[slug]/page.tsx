import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { ArrowLeft, Clock, Calendar, Tag, ShieldAlert, Edit2, Sparkles } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { getBlogPostBySlug } from "@/lib/blog-store";
import { verifySession, getSessionCookieName } from "@/lib/auth";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug, true);

  if (!post) {
    return {
      title: "Article Not Found | Maciek Geneja",
    };
  }

  return {
    title: `${post.title} | Maciek Geneja`,
    description: post.summary || `Technical article by Maciek Geneja: ${post.title}`,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default async function DynamicBlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Check if current user has an Owner session
  const cookieStore = await cookies();
  const token = cookieStore.get(getSessionCookieName())?.value;
  const isOwner = await verifySession(token);

  // Fetch post (allow drafts if Owner)
  const post = await getBlogPostBySlug(slug, isOwner);

  if (!post) {
    notFound();
  }

  return (
    <article className="space-y-10 md:space-y-12 font-sans selection:bg-accent/30">
      {/* Top Navigation & Draft Banner */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center text-xs font-mono font-bold text-muted-foreground hover:text-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Link>

        {isOwner && (
          <div className="flex items-center gap-3">
            {!post.published && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[11px] font-mono font-bold text-amber-400">
                <ShieldAlert className="w-3.5 h-3.5" /> Draft Preview (Owner Only)
              </span>
            )}
            <Link
              href={`/admin/blogs/${post.id}/edit`}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-mono text-white transition-colors"
            >
              <Edit2 className="w-3 h-3 text-accent" /> Edit in Admin
            </Link>
          </div>
        )}
      </div>

      {/* Article Header */}
      <header className="space-y-6 border-b border-white/10 pb-8">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold">
            <Sparkles className="w-3 h-3" /> Technical Article
          </div>

          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {post.readingTime}
          </span>

          {post.publishedAt && (
            <>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </>
          )}
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
          {post.title}
        </h1>

        {post.summary && (
          <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed">
            {post.summary}
          </p>
        )}

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/5"
              >
                <Tag className="w-3 h-3 text-accent" />
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Cover Image if present */}
      {post.coverImage && (
        <div className="w-full h-64 sm:h-96 rounded-3xl overflow-hidden border border-white/10 bg-black/40 relative">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Markdown Body Content */}
      <section className="prose prose-invert max-w-none text-slate-200 text-base leading-relaxed space-y-6">
        <ReactMarkdown
          components={{
            h1: ({ children }) => (
              <h1 className="text-2xl sm:text-3xl font-black text-white mt-10 mb-4 tracking-tight border-b border-white/10 pb-3">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-3 tracking-tight border-b border-white/5 pb-2">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-lg sm:text-xl font-bold text-white mt-6 mb-2">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="text-slate-300 leading-relaxed my-4 text-base">
                {children}
              </p>
            ),
            ul: ({ children }) => (
              <ul className="list-disc list-outside ml-6 space-y-2 text-slate-300 my-4">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal list-outside ml-6 space-y-2 text-slate-300 my-4">
                {children}
              </ol>
            ),
            li: ({ children }) => (
              <li className="leading-relaxed">{children}</li>
            ),
            blockquote: ({ children }) => (
              <blockquote className="p-6 rounded-2xl bg-accent/5 border-l-4 border-accent text-slate-200 italic my-6 shadow-lg">
                {children}
              </blockquote>
            ),
            hr: () => <hr className="my-8 border-white/10" />,
            a: ({ href, children }) => (
              <a
                href={href}
                target={href?.startsWith("http") ? "_blank" : undefined}
                rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-accent hover:underline font-medium inline-flex items-center gap-0.5"
              >
                {children}
              </a>
            ),
            code: ({ className, children, ...props }) => {
              const isInline = !className;
              return isInline ? (
                <code
                  className="px-2 py-0.5 rounded-md bg-white/10 text-accent font-mono text-xs"
                  {...props}
                >
                  {children}
                </code>
              ) : (
                <pre className="p-6 rounded-3xl bg-black/60 border border-white/10 font-mono text-xs text-slate-200 overflow-x-auto my-6 leading-relaxed shadow-xl">
                  <code>{children}</code>
                </pre>
              );
            },
          }}
        >
          {post.content}
        </ReactMarkdown>
      </section>

      {/* Author Footer Card */}
      <footer className="pt-10 mt-12 border-t border-white/10">
        <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="text-[10px] font-mono text-accent uppercase tracking-widest block">
              Author
            </span>
            <h4 className="text-base font-bold text-white mt-0.5">Maciek Geneja</h4>
            <p className="text-xs text-muted-foreground">
              Systems Placement Developer at Next plc • CS Honours at Loughborough
            </p>
          </div>

          <Link
            href="/"
            className="px-5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white transition-colors"
          >
            ← Back to All Work
          </Link>
        </div>
      </footer>
    </article>
  );
}
