// lib/blog-store.ts
// Structured File-Based Markdown Repository for Dynamic Blog Posts

import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { BlogPost, calculateReadingTime, generateSlug } from "@/lib/blog-utils";

export type { BlogPost };
export { calculateReadingTime, generateSlug };

const CONTENT_DIR = path.join(process.cwd(), "content", "blogs");

/**
 * Ensures the content/blogs directory exists
 */
async function ensureDirectory(): Promise<void> {
  try {
    await fs.mkdir(CONTENT_DIR, { recursive: true });
  } catch (error) {
    console.error("Error creating content directory:", error);
  }
}

/**
 * Serializes a BlogPost object into Markdown with YAML frontmatter
 */
function serializePost(post: BlogPost): string {
  const frontmatter = {
    id: post.id,
    slug: post.slug,
    title: post.title,
    summary: post.summary,
    tags: post.tags,
    coverImage: post.coverImage || "",
    published: post.published,
    readingTime: post.readingTime,
    publishedAt: post.publishedAt || "",
    createdAt: post.createdAt,
    updatedAt: post.updatedAt,
  };

  return matter.stringify(post.content, frontmatter);
}

/**
 * Parses raw file content into a BlogPost
 */
function parsePost(fileContent: string): BlogPost {
  const parsed = matter(fileContent);
  const data = parsed.data as Record<string, any>;

  return {
    id: data.id || "",
    slug: data.slug || "",
    title: data.title || "Untitled",
    summary: data.summary || "",
    content: parsed.content || "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    coverImage: data.coverImage || undefined,
    published: Boolean(data.published),
    readingTime: data.readingTime || calculateReadingTime(parsed.content || ""),
    publishedAt: data.publishedAt || undefined,
    createdAt: data.createdAt || new Date().toISOString(),
    updatedAt: data.updatedAt || new Date().toISOString(),
  };
}

/**
 * Fetches all blog posts from disk
 */
export async function getAllBlogPosts(includeDrafts = false): Promise<BlogPost[]> {
  await ensureDirectory();

  try {
    const files = await fs.readdir(CONTENT_DIR);
    const mdFiles = files.filter((file) => file.endsWith(".md"));

    const posts: BlogPost[] = [];

    for (const file of mdFiles) {
      const filePath = path.join(CONTENT_DIR, file);
      const content = await fs.readFile(filePath, "utf-8");
      const post = parsePost(content);

      if (includeDrafts || post.published) {
        posts.push(post);
      }
    }

    // Sort by publication date descending, fallback to createdAt
    return posts.sort((a, b) => {
      const dateA = new Date(a.publishedAt || a.createdAt).getTime();
      const dateB = new Date(b.publishedAt || b.createdAt).getTime();
      return dateB - dateA;
    });
  } catch (error) {
    console.error("Error reading blog posts:", error);
    return [];
  }
}

/**
 * Fetches a single blog post by slug
 */
export async function getBlogPostBySlug(slug: string, includeDrafts = false): Promise<BlogPost | null> {
  const posts = await getAllBlogPosts(true);
  const post = posts.find((p) => p.slug === slug);

  if (!post) return null;
  if (!post.published && !includeDrafts) return null;

  return post;
}

/**
 * Fetches a single blog post by ID
 */
export async function getBlogPostById(id: string): Promise<BlogPost | null> {
  const posts = await getAllBlogPosts(true);
  return posts.find((p) => p.id === id) || null;
}

/**
 * Creates a new blog post
 */
export async function createBlogPost(
  data: Omit<BlogPost, "id" | "createdAt" | "updatedAt" | "readingTime"> & { slug?: string }
): Promise<BlogPost> {
  await ensureDirectory();

  const id = `post_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
  const slug = data.slug ? generateSlug(data.slug) : generateSlug(data.title);
  const now = new Date().toISOString();
  const readingTime = calculateReadingTime(data.content);

  const post: BlogPost = {
    ...data,
    id,
    slug,
    readingTime,
    publishedAt: data.published ? (data.publishedAt || now) : undefined,
    createdAt: now,
    updatedAt: now,
  };

  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  const fileContent = serializePost(post);
  await fs.writeFile(filePath, fileContent, "utf-8");

  return post;
}

/**
 * Updates an existing blog post
 */
export async function updateBlogPost(
  id: string,
  updates: Partial<Omit<BlogPost, "id" | "createdAt">>
): Promise<BlogPost | null> {
  await ensureDirectory();

  const existing = await getBlogPostById(id);
  if (!existing) return null;

  const oldSlug = existing.slug;
  const newSlug = updates.slug ? generateSlug(updates.slug) : (updates.title ? generateSlug(updates.title) : existing.slug);
  const now = new Date().toISOString();
  const content = updates.content !== undefined ? updates.content : existing.content;

  const updated: BlogPost = {
    ...existing,
    ...updates,
    slug: newSlug,
    content,
    readingTime: calculateReadingTime(content),
    publishedAt: updates.published && !existing.published && !updates.publishedAt ? now : (updates.publishedAt || existing.publishedAt),
    updatedAt: now,
  };

  // If slug changed, delete old file
  if (oldSlug !== newSlug) {
    const oldPath = path.join(CONTENT_DIR, `${oldSlug}.md`);
    try {
      await fs.unlink(oldPath);
    } catch {
      // Ignore if file doesn't exist
    }
  }

  const filePath = path.join(CONTENT_DIR, `${newSlug}.md`);
  const fileContent = serializePost(updated);
  await fs.writeFile(filePath, fileContent, "utf-8");

  return updated;
}

/**
 * Deletes a blog post by ID
 */
export async function deleteBlogPost(id: string): Promise<boolean> {
  await ensureDirectory();

  const post = await getBlogPostById(id);
  if (!post) return false;

  const filePath = path.join(CONTENT_DIR, `${post.slug}.md`);
  try {
    await fs.unlink(filePath);
    return true;
  } catch (error) {
    console.error(`Error deleting blog post ${id}:`, error);
    return false;
  }
}
