import Image from "next/image";
import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import { TableOfContents } from "@/components/ui/table-of-contents";
import { extractHeadings } from "@/lib/headings";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "src/content");
  const files = fs.readdirSync(postsDir);
  return files.map((file) => ({
    slug: file.replace(/\.mdx$/, ""),
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const filePath = path.join(process.cwd(), "src/content", `${params.slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data: frontmatter } = matter(fileContent);

  return {
    title: frontmatter.title || "Untitled",
    description: frontmatter.description || "Ojas Singh",
  };
}

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const filePath = path.join(process.cwd(), "src/content", `${params.slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data: frontmatter, content } = matter(fileContent);
  const headings = extractHeadings(content);

  const { default: Post } = await import(`@/content/${params.slug}.mdx`);

  return (
    <>
      <Head>
        <title className="">{frontmatter.title} | Ojas Singh</title>
        <meta name="description" content={frontmatter.description} />
      </Head>
      <div className="mx-auto max-w-3xl p-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-neutral-400 tracking-tight"
          >
            <ArrowLeft className="size-4" /> Back
          </Link>
          <p className="text-neutral-400">{frontmatter.date}</p>
        </div>
        <div className="py-14 grid place-content-center">
          <article className="">
            <div className="tracking-tighter">
              <h1 className="text-center text-2xl font-medium">
                {frontmatter.title}
              </h1>
            </div>
            <div className="relative mt-8">
              <div 
                className="absolute top-1/2 left-1/2 -z-10 h-[150%] w-[105%] -translate-x-1/2 -translate-y-1/2"
                style={{
                  background: `radial-gradient(at 50% 50%, ${frontmatter.color} 0%, transparent 65%)`
                }}
              ></div>
              <Image
                alt={frontmatter.title + ` ${frontmatter.description}`}
                src={frontmatter.thumbnail}
                width={1000}
                height={1000}
                className="h-full w-3xl rounded-lg object-cover object-center shadow-md"
              />
            </div>
          </article>
          <div className="mt-14">
            <h4 className="text-xl font-medium">TLDR</h4>
            <p className="text-neutral-300 mt-2 tracking-tighter whitespace-pre-line">{frontmatter.tldr}</p>
          </div>
          <div className="mt-14">
            <Post />
          </div>
        </div>
        <TableOfContents headings={headings} />
      </div>
    </>
  );
}

export const dynamicParams = false;
