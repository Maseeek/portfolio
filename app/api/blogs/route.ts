import { NextResponse } from "next/server";
import { getAllBlogPosts } from "@/lib/blog-store";

export async function GET() {
  const posts = await getAllBlogPosts(false); // Only published posts
  return NextResponse.json({ posts }, { status: 200 });
}
