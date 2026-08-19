"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import {
  ArrowLeft,
  Save,
  Eye,
  Edit3,
  Columns,
  Sparkles,
  Tag,
  Clock,
  FileText,
  CheckCircle2,
  AlertCircle,
  Code,
  Heading1,
  Heading2,
  List,
  Quote,
  Bold,
  Italic,
  Link as LinkIcon,
  Globe,
  Lock,
} from "lucide-react";
import { calculateReadingTime, generateSlug } from "@/lib/blog-utils";

interface BlogPostEditorProps {
  initialData?: {
    id?: string;
    title: string;
    slug: string;
    summary: string;
    content: string;
    tags: string[];
    coverImage?: string;
    published: boolean;
  };
  isEditing?: boolean;
}

export default function BlogPostEditor({
  initialData,
  isEditing = false,
}: BlogPostEditorProps) {
  const router = useRouter();

  const [title, setTitle] = useState(initialData?.title || "");
  const [slug, setSlug] = useState(initialData?.slug || "");
  const [autoSlug, setAutoSlug] = useState(!initialData?.slug);
  const [summary, setSummary] = useState(initialData?.summary || "");
  const [content, setContent] = useState(initialData?.content || "");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>(initialData?.tags || []);
  const [coverImage, setCoverImage] = useState(initialData?.coverImage || "");
  const [published, setPublished] = useState(initialData?.published || false);

  const [editorMode, setEditorMode] = useState<"write" | "preview" | "split">("split");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Auto-generate slug when title changes if autoSlug is true
  useEffect(() => {
    if (autoSlug && title) {
      setSlug(generateSlug(title));
    }
  }, [title, autoSlug]);

  const handleAddTag = () => {
    const trimmed = tagInput.trim();
    if (trimmed && !tags.includes(trimmed)) {
      setTags([...tags, trimmed]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((t) => t !== tagToRemove));
  };

  const handleTagKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      handleAddTag();
    }
  };

  const insertMarkdown = (before: string, after: string = "") => {
    const textarea = document.getElementById("markdown-editor") as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const previousContent = textarea.value;
    const selectedText = previousContent.substring(start, end);
    const replacement = `${before}${selectedText || "text"}${after}`;

    const newContent =
      previousContent.substring(0, start) +
      replacement +
      previousContent.substring(end);

    setContent(newContent);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + before.length,
        start + before.length + (selectedText ? selectedText.length : 4)
      );
    }, 50);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Please provide a title for the blog post.");
      return;
    }

    if (!content.trim()) {
      setError("Please provide markdown content.");
      return;
    }

    setSaving(true);
    setError(null);
    setSuccess(null);

    const payload = {
      title: title.trim(),
      slug: slug.trim() || generateSlug(title),
      summary: summary.trim(),
      content,
      tags,
      coverImage: coverImage.trim() || undefined,
      published,
    };

    try {
      const url = isEditing
        ? `/api/admin/blogs/${initialData?.id}`
        : "/api/admin/blogs";
      const method = isEditing ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to save blog post.");
        setSaving(false);
        return;
      }

      setSuccess(
        isEditing
          ? "Blog post updated successfully!"
          : "Blog post published successfully!"
      );
      setSaving(false);

      setTimeout(() => {
        router.push("/admin");
        router.refresh();
      }, 1200);
    } catch {
      setError("Network or server error occurred.");
      setSaving(false);
    }
  };

  const readTimeEstimate = calculateReadingTime(content);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Breadcrumb & Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-6">
        <div>
          <Link
            href="/admin"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors mb-2"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
          <h1 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
            {isEditing ? "Edit Blog Post" : "Compose New Blog Post"}
          </h1>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => setPublished(!published)}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 border transition-all cursor-pointer ${
              published
                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                : "bg-amber-500/10 border-amber-500/30 text-amber-400"
            }`}
          >
            {published ? <Globe className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
            <span>{published ? "Status: Published" : "Status: Draft"}</span>
          </button>

          <button
            onClick={handleSubmit}
            disabled={saving}
            className="flex-1 sm:flex-none px-6 py-2 rounded-xl bg-accent hover:bg-accent/90 text-white font-bold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-accent/25 transition-all disabled:opacity-50 cursor-pointer"
          >
            {saving ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>{isEditing ? "Update Post" : "Publish Post"}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Notifications */}
      {error && (
        <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-mono flex items-center gap-3">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {success && (
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono flex items-center gap-3">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{success}</span>
        </div>
      )}

      {/* Metadata Configuration Grid */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Post Title */}
          <div className="space-y-2">
            <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Article Title *
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Architecting Low-Latency Computer Vision Microservices"
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none text-sm text-white font-sans placeholder:text-white/30 transition-colors"
            />
          </div>

          {/* Post Slug */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground">
                URL Slug (/blog/[slug])
              </label>
              <button
                type="button"
                onClick={() => {
                  setAutoSlug(!autoSlug);
                  if (!autoSlug) setSlug(generateSlug(title));
                }}
                className="text-[10px] font-mono text-accent hover:underline cursor-pointer"
              >
                {autoSlug ? "Lock Slug" : "Auto-generate"}
              </button>
            </div>
            <input
              type="text"
              value={slug}
              onChange={(e) => {
                setAutoSlug(false);
                setSlug(e.target.value);
              }}
              placeholder="e.g. low-latency-cv-microservices"
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none text-sm text-accent font-mono placeholder:text-white/30 transition-colors"
            />
          </div>
        </div>

        {/* Post Summary */}
        <div className="space-y-2">
          <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground">
            Summary / Meta Description
          </label>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            rows={2}
            placeholder="A short punchy executive overview of this technical breakdown..."
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none text-sm text-white font-sans placeholder:text-white/30 transition-colors resize-none"
          />
        </div>

        {/* Tags & Cover Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tags */}
          <div className="space-y-2">
            <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-accent" /> Tags (Press Enter or Comma)
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleTagKeyDown}
                placeholder="Add tag (e.g. PyTorch, CUDA, Next.js)..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 focus:border-accent outline-none text-xs text-white font-mono placeholder:text-white/30"
              />
              <button
                type="button"
                onClick={handleAddTag}
                className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white cursor-pointer"
              >
                Add
              </button>
            </div>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-accent/10 border border-accent/20 text-[11px] font-mono text-accent"
                  >
                    <span>{t}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(t)}
                      className="text-accent/60 hover:text-white cursor-pointer"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Cover Image URL */}
          <div className="space-y-2">
            <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Cover Image URL (Optional)
            </label>
            <input
              type="text"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              placeholder="e.g. /images/nbn-dash.png or https://..."
              className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 focus:border-accent outline-none text-xs text-white font-mono placeholder:text-white/30"
            />
            <div className="flex items-center gap-3 pt-1 text-[11px] font-mono text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-accent" /> {readTimeEstimate}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <FileText className="w-3 h-3 text-cyan-400" /> {content.trim().split(/\s+/).filter(Boolean).length} words
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Markdown Content Editor & Live Preview */}
      <div className="space-y-4">
        {/* Editor Mode Header & Formatting Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/10">
          {/* Toolbar Buttons */}
          <div className="flex items-center gap-1 overflow-x-auto py-1">
            <button
              type="button"
              onClick={() => insertMarkdown("**", "**")}
              title="Bold"
              className="p-2 rounded-lg hover:bg-white/10 text-white/70 hover:text-white cursor-pointer"
            >
              <Bold className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => insertMarkdown("*", "*")}
              title="Italic"
              className="p-2 rounded-lg hover:bg-white/10 text-white/70 hover:text-white cursor-pointer"
            >
              <Italic className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => insertMarkdown("# ")}
              title="Heading 1"
              className="p-2 rounded-lg hover:bg-white/10 text-white/70 hover:text-white cursor-pointer"
            >
              <Heading1 className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => insertMarkdown("## ")}
              title="Heading 2"
              className="p-2 rounded-lg hover:bg-white/10 text-white/70 hover:text-white cursor-pointer"
            >
              <Heading2 className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => insertMarkdown("- ")}
              title="Bullet List"
              className="p-2 rounded-lg hover:bg-white/10 text-white/70 hover:text-white cursor-pointer"
            >
              <List className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => insertMarkdown("> ")}
              title="Blockquote"
              className="p-2 rounded-lg hover:bg-white/10 text-white/70 hover:text-white cursor-pointer"
            >
              <Quote className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => insertMarkdown("```typescript\n", "\n```")}
              title="Code Block"
              className="p-2 rounded-lg hover:bg-white/10 text-white/70 hover:text-white cursor-pointer"
            >
              <Code className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => insertMarkdown("[", "](https://)")}
              title="Link"
              className="p-2 rounded-lg hover:bg-white/10 text-white/70 hover:text-white cursor-pointer"
            >
              <LinkIcon className="w-4 h-4" />
            </button>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/10">
            <button
              type="button"
              onClick={() => setEditorMode("write")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer ${
                editorMode === "write"
                  ? "bg-white/10 text-white font-bold"
                  : "text-muted-foreground hover:text-white"
              }`}
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Write</span>
            </button>
            <button
              type="button"
              onClick={() => setEditorMode("split")}
              className={`hidden md:flex px-3 py-1.5 rounded-lg text-xs font-mono items-center gap-1.5 transition-colors cursor-pointer ${
                editorMode === "split"
                  ? "bg-white/10 text-white font-bold"
                  : "text-muted-foreground hover:text-white"
              }`}
            >
              <Columns className="w-3.5 h-3.5" />
              <span>Split</span>
            </button>
            <button
              type="button"
              onClick={() => setEditorMode("preview")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer ${
                editorMode === "preview"
                  ? "bg-white/10 text-white font-bold"
                  : "text-muted-foreground hover:text-white"
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Preview</span>
            </button>
          </div>
        </div>

        {/* Editor Panes */}
        <div
          className={`grid gap-6 ${
            editorMode === "split"
              ? "grid-cols-1 md:grid-cols-2"
              : "grid-cols-1"
          }`}
        >
          {/* Write Pane */}
          {(editorMode === "write" || editorMode === "split") && (
            <div className="space-y-2">
              <textarea
                id="markdown-editor"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your article in Markdown... (Supports headers, code snippets, lists, quotes, tables)"
                rows={24}
                className="w-full p-6 rounded-3xl bg-black/50 border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none text-sm text-slate-100 font-mono placeholder:text-white/30 resize-y leading-relaxed"
              />
            </div>
          )}

          {/* Preview Pane */}
          {(editorMode === "preview" || editorMode === "split") && (
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 overflow-y-auto max-h-[640px] space-y-6">
              {/* Preview Header */}
              <div className="border-b border-white/10 pb-6 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-accent/10 text-accent font-bold">
                    {published ? "Live Article" : "Draft Preview"}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">
                    {readTimeEstimate}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-white">
                  {title || "Untitled Blog Post"}
                </h1>
                {summary && (
                  <p className="text-sm text-muted-foreground font-light">
                    {summary}
                  </p>
                )}
                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-white/70 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Rendered Markdown Content */}
              <div className="prose prose-invert max-w-none text-slate-200 text-sm leading-relaxed space-y-4">
                {content ? (
                  <ReactMarkdown
                    components={{
                      h1: ({ children }) => (
                        <h1 className="text-xl sm:text-2xl font-bold text-white mt-6 mb-3">
                          {children}
                        </h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="text-lg sm:text-xl font-bold text-white mt-5 mb-2.5 border-b border-white/5 pb-2">
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="text-base font-bold text-white mt-4 mb-2">
                          {children}
                        </h3>
                      ),
                      p: ({ children }) => (
                        <p className="text-slate-300 leading-relaxed my-2.5">
                          {children}
                        </p>
                      ),
                      ul: ({ children }) => (
                        <ul className="list-disc list-inside space-y-1.5 text-slate-300 my-3">
                          {children}
                        </ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="list-decimal list-inside space-y-1.5 text-slate-300 my-3">
                          {children}
                        </ol>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="p-4 rounded-xl bg-accent/5 border-l-4 border-accent text-slate-300 italic my-4">
                          {children}
                        </blockquote>
                      ),
                      code: ({ className, children, ...props }) => {
                        const isInline = !className;
                        return isInline ? (
                          <code className="px-1.5 py-0.5 rounded-md bg-white/10 text-accent font-mono text-xs" {...props}>
                            {children}
                          </code>
                        ) : (
                          <pre className="p-4 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs text-slate-200 overflow-x-auto my-4">
                            <code>{children}</code>
                          </pre>
                        );
                      },
                    }}
                  >
                    {content}
                  </ReactMarkdown>
                ) : (
                  <div className="text-center py-12 text-xs font-mono text-muted-foreground">
                    Markdown preview will render here as you type...
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
