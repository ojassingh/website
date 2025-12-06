import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TableOfContents } from "@/components/ui/table-of-contents";
import { extractHeadings } from "@/lib/headings";

export function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "src/work");
  const files = fs.readdirSync(postsDir);
  return files.map((file) => ({
    // biome-ignore lint/performance/useTopLevelRegex: it's a static file
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
    title: `${frontmatter.title || "Untitled"} | Ojas Singh`,
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
    <div className="mx-auto max-w-3xl p-6 text-white">
      <div className="flex items-center justify-between">
        <Link
          className="flex items-center gap-2 text-muted-foreground"
          href="/"
        >
          <ArrowLeft className="size-4" /> Back
        </Link>
        <div className="flex items-center gap-2">
          <Link
            className="flex items-center gap-2 text-muted-foreground"
            href={frontmatter.website}
            target="_blank"
          >
            Website <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
      <div className="grid place-content-center py-14">
        <article className="">
          <div className="tracking-tight">
            <h1 className="text-center font-medium text-2xl text-white">
              {frontmatter.title}
            </h1>
            <p className="mt-2 text-center text-lg text-muted-foreground">
              {frontmatter.type}, {frontmatter.date}
            </p>
          </div>
          <div className="relative mt-8">
            <div
              className="-z-10 -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 h-[150%] w-[105%]"
              style={{
                background: `radial-gradient(at 50% 50%, ${frontmatter.color} 0%, transparent 65%)`,
              }}
            />
            <Image
              alt={`${frontmatter.title} ${frontmatter.description}`}
              className="h-full w-3xl rounded-lg object-cover object-center shadow-md"
              height={1000}
              src={frontmatter.thumbnail}
              width={1000}
            />
          </div>
        </article>
        <div className="mt-14 grid items-start gap-6 sm:grid-cols-3">
          <div className="col-span-1 flex flex-col gap-2">
            <h4 className="font-medium text-lg">Stack</h4>
            <ul className="text-muted-foreground tracking-tight">
              {frontmatter.stack.map((stack: string, index: number) => (
                <li key={index.toString()}>{stack}</li>
              ))}
            </ul>
          </div>
          <div className="col-span-2">
            <p className="font-medium text-lg">TLDR</p>
            <p className="whitespace-pre-line text-muted-foreground tracking-tight">
              {frontmatter.tldr}
            </p>
          </div>
        </div>
        <div className="mt-14">
          <Post />
        </div>
      </div>
      <TableOfContents headings={headings} />
    </div>
  );
}

export const dynamicParams = false;
