import { NextResponse, NextRequest } from "next/server";
import { getBlogPostById, updateBlogPost, deleteBlogPost } from "@/lib/blog-store";
import { verifySession, getSessionCookieName } from "@/lib/auth";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const token = req.cookies.get(getSessionCookieName())?.value;
  const isAuth = await verifySession(token);

  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized. Owner access required." }, { status: 401 });
  }

  const { id } = await params;
  const post = await getBlogPostById(id);

  if (!post) {
    return NextResponse.json({ error: "Blog post not found." }, { status: 404 });
  }

  return NextResponse.json({ post }, { status: 200 });
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const token = req.cookies.get(getSessionCookieName())?.value;
  const isAuth = await verifySession(token);

  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized. Owner access required." }, { status: 401 });
  }

  const { id } = await params;

  try {
    const body = await req.json();
    const { title, summary, content, tags, coverImage, published, slug } = body;

    const updated = await updateBlogPost(id, {
      ...(title !== undefined ? { title: title.trim() } : {}),
      ...(summary !== undefined ? { summary: summary.trim() } : {}),
      ...(content !== undefined ? { content } : {}),
      ...(tags !== undefined ? { tags: Array.isArray(tags) ? tags : [] } : {}),
      ...(coverImage !== undefined ? { coverImage } : {}),
      ...(published !== undefined ? { published: Boolean(published) } : {}),
      ...(slug !== undefined ? { slug: slug.trim() } : {}),
    });

    if (!updated) {
      return NextResponse.json({ error: "Blog post not found or update failed." }, { status: 404 });
    }

    return NextResponse.json({ success: true, post: updated }, { status: 200 });
  } catch (error) {
    console.error(`Error updating blog post ${id}:`, error);
    return NextResponse.json({ error: "Failed to update blog post." }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const token = req.cookies.get(getSessionCookieName())?.value;
  const isAuth = await verifySession(token);

  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized. Owner access required." }, { status: 401 });
  }

  const { id } = await params;
  const success = await deleteBlogPost(id);

  if (!success) {
    return NextResponse.json({ error: "Blog post not found or delete failed." }, { status: 404 });
  }

  return NextResponse.json({ success: true, message: "Blog post deleted." }, { status: 200 });
}
