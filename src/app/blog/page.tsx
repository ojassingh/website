import React from "react";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ArrowLeft } from "lucide-react";
import BlogCard from "./blog-card";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  role: string;
  headshot: string;
  thumbnail: string;
}

async function getBlogPosts(): Promise<BlogPost[]> {
  const contentDir = path.join(process.cwd(), "src/content");
  const files = fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".mdx"));

  const posts = files.map((file) => {
    const filePath = path.join(contentDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data: frontmatter } = matter(fileContent);

    return {
      slug: file.replace(/\.mdx$/, ""),
      title: frontmatter.title || "Untitled",
      date: frontmatter.date || "",
      author: frontmatter.author || "",
      role: frontmatter.role || "",
      headshot: frontmatter.headshot || "",
      thumbnail: frontmatter.thumbnail || "",
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export default async function Page() {
  const posts = await getBlogPosts();

  return (
    <main className="mx-auto min-h-screen max-w-7xl border-x-[1px] border-dashed border-neutral-700">
      <div className="px-20">
        <Link
          href="/"
          className="flex items-center gap-2 pt-8 text-neutral-400 tracking-tight"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
        <div className="mt-16">
          <h1 className="mb-4 text-3xl font-medium tracking-tighter">Blog</h1>
          <p className="text-lg tracking-tight text-neutral-400">
            Trying to post more. Stay tuned weekly.
          </p>
          <div className="grid gap-6 grid-cols-3 mt-16">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>

        {posts.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-lg text-neutral-400">No blog posts found.</p>
          </div>
        )}
      </div>
    </main>
  );
}
