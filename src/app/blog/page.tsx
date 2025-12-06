import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import BlogCard from "./blog-card";

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  author: string;
  role: string;
  headshot: string;
  thumbnail: string;
};

function getBlogPosts(): Promise<BlogPost[]> {
  const contentDir = path.join(process.cwd(), "src/content");
  const files = fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".mdx"));

  const posts = files.map((file) => {
    const filePath = path.join(contentDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data: frontmatter } = matter(fileContent);

    return {
      // biome-ignore lint/performance/useTopLevelRegex: it's a static file
      slug: file.replace(/\.mdx$/, ""),
      title: frontmatter.title || "Untitled",
      date: frontmatter.date || "",
      author: frontmatter.author || "",
      role: frontmatter.role || "",
      headshot: frontmatter.headshot || "",
      thumbnail: frontmatter.thumbnail || "",
    };
  });

  return Promise.resolve(
    posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  );
}

export const metadata: Metadata = {
  title: "Blog | Ojas Singh",
  description: "Blog posts by Ojas Singh",
};

export default async function Page() {
  const posts = await getBlogPosts();

  return (
    <main className="mx-auto min-h-screen border-neutral-700 border-x-[1px] border-dashed text-white sm:max-w-7xl">
      <div className="px-8 sm:px-20">
        <Link
          className="flex items-center gap-2 pt-8 text-muted-foreground tracking-tight"
          href="/"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
        <div className="mt-16">
          <h1 className="mb-4 font-medium text-3xl tracking-tighter">Blog</h1>
          <p className="text-lg text-muted-foreground tracking-tight">
            Trying to learn something new everyday. Will post about it once a
            week.
          </p>
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>

        {posts.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-lg text-muted-foreground">
              No blog posts found.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
