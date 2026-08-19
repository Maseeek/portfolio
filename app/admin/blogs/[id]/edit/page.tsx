import React from "react";
import { notFound } from "next/navigation";
import BlogPostEditor from "@/components/admin/blog-post-editor";
import { getBlogPostById } from "@/lib/blog-store";

export const metadata = {
  title: "Edit Blog Post | Owner Control Panel",
};

export default async function EditBlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getBlogPostById(id);

  if (!post) {
    notFound();
  }

  return (
    <BlogPostEditor
      initialData={{
        id: post.id,
        title: post.title,
        slug: post.slug,
        summary: post.summary,
        content: post.content,
        tags: post.tags,
        coverImage: post.coverImage,
        published: post.published,
      }}
      isEditing={true}
    />
  );
}
