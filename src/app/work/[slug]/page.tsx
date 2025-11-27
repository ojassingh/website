import Image from "next/image";
import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
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
    <div className="mx-auto text-white max-w-3xl p-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground"
          >
            <ArrowLeft className="size-4" /> Back
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href={frontmatter.website}
              target="_blank"
              className="flex items-center gap-2 text-muted-foreground"
            >
              Website <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
        <div className="py-14 grid place-content-center">
          <article className="">
            <div className="tracking-tight">
              <h1 className="text-center text-white text-2xl font-medium">
                {frontmatter.title}
              </h1>
              <p className="mt-2 text-center text-lg text-muted-foreground">
                {frontmatter.type}, {frontmatter.date}
              </p>
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
          <div className="grid sm:grid-cols-3 items-start gap-6 mt-14">
            <div className="col-span-1 flex flex-col gap-2">
              <h4 className="text-lg font-medium">Stack</h4>
              <ul className="text-muted-foreground tracking-tight">
              {frontmatter.stack.map((stack: string, index: number) => (
                <li key={index}>{stack}</li>
              ))}
            </ul>
            </div>
            <div className="col-span-2">
              <p className="text-lg font-medium">TLDR</p>
            <p className="text-muted-foreground tracking-tight whitespace-pre-line">{frontmatter.tldr}</p>
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
