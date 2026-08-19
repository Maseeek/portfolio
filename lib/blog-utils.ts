// lib/blog-utils.ts
// Pure utility functions and shared types for Blog Posts (Safe for both Server and Client)

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  tags: string[];
  coverImage?: string;
  published: boolean;
  readingTime: string;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Calculates estimated reading time based on word count
 */
export function calculateReadingTime(text: string): string {
  if (!text) return "1 min read";
  const wordsPerMinute = 200;
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  return `${minutes} min read`;
}

/**
 * Generates a URL-friendly slug from a title
 */
export function generateSlug(title: string): string {
  if (!title) return "";
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
