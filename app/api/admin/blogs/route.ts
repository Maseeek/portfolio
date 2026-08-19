import { NextResponse, NextRequest } from "next/server";
import { getAllBlogPosts, createBlogPost } from "@/lib/blog-store";
import { verifySession, getSessionCookieName } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const token = req.cookies.get(getSessionCookieName())?.value;
  const isAuth = await verifySession(token);

  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized. Owner access required." }, { status: 401 });
  }

  const posts = await getAllBlogPosts(true);
  return NextResponse.json({ posts }, { status: 200 });
}

export async function POST(req: NextRequest) {
  const token = req.cookies.get(getSessionCookieName())?.value;
  const isAuth = await verifySession(token);

  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized. Owner access required." }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { title, summary, content, tags, coverImage, published, slug } = body;

    if (!title || typeof title !== "string" || !title.trim()) {
      return NextResponse.json({ error: "Title is required." }, { status: 400 });
    }

    if (!content || typeof content !== "string") {
      return NextResponse.json({ error: "Content is required." }, { status: 400 });
    }

    const newPost = await createBlogPost({
      title: title.trim(),
      summary: (summary || "").trim(),
      content,
      tags: Array.isArray(tags) ? tags : [],
      coverImage: coverImage || undefined,
      published: Boolean(published),
      slug: slug ? slug.trim() : undefined,
    });

    return NextResponse.json({ success: true, post: newPost }, { status: 201 });
  } catch (error) {
    console.error("Error creating blog post:", error);
    return NextResponse.json({ error: "Failed to create blog post." }, { status: 500 });
  }
}
