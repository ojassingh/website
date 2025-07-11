import Image from "next/image";
import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import { TableOfContents } from "@/components/ui/table-of-contents";
import { extractHeadings } from "@/lib/headings";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "src/work");
  const files = fs.readdirSync(postsDir);
  return files.map((file) => ({
    slug: file.replace(/\.mdx$/, ""),
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const filePath = path.join(process.cwd(), "src/work", `${params.slug}.mdx`);
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
  const filePath = path.join(process.cwd(), "src/work", `${params.slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data: frontmatter, content } = matter(fileContent);
  const headings = extractHeadings(content);

  const { default: Post } = await import(`@/work/${params.slug}.mdx`);

  return (
    <>
      <Head>
        <title className="">{frontmatter.title} | Ojas Singh</title>
        <meta name="description" content={frontmatter.description} />
      </Head>
      <div className="mx-auto max-w-2xl pt-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-neutral-400"
          >
            <ArrowLeft className="size-4" /> Back
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="flex items-center gap-2 text-neutral-400"
            >
              Website <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
        <div className="py-14">
          <article className="">
            <div className="tracking-tighter">
              <h1 className="text-center text-2xl font-medium">
                {frontmatter.title}
              </h1>
              <p className="mt-2 text-center text-lg text-neutral-400">
                {frontmatter.type}, {frontmatter.date}
              </p>
            </div>
            <div className="relative mt-8">
              <div className="absolute top-1/2 left-1/2 -z-10 h-[150%] w-[105%] -translate-x-1/2 -translate-y-1/2 bg-radial-[at_50%_50%] from-purple-800 to-transparent to-65%"></div>
              <Image
                alt={frontmatter.title + ` ${frontmatter.description}`}
                src={frontmatter.thumbnail}
                width={1000}
                height={1000}
                className="h-[20rem] w-full rounded-lg object-cover object-center shadow-md"
              />
            </div>
          </article>
          <div className="prose dark:prose-invert prose-headings:font-medium prose-headings:tracking-tighter prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg mt-14">
            <Post />
          </div>
        </div>
        <TableOfContents headings={headings} />
      </div>
    </>
  );
}

export const dynamicParams = false;
