import Image from "next/image";
import type { Metadata } from "next";
import { Dot } from "lucide-react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";

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
  const filePath = path.join(
    process.cwd(),
    "src/content",
    `${params.slug}.mdx`,
  );
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data: frontmatter } = matter(fileContent);

  return {
    title: frontmatter.title || "Untitled",
    description:
      frontmatter.description || "A compliance law company based in India",
  };
}

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const filePath = path.join(
    process.cwd(),
    "src/content",
    `${params.slug}.mdx`,
  );
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data: frontmatter } = matter(fileContent);

  const { default: Post } = await import(`@/content/${params.slug}.mdx`);

  return (
    <div className="">
      <Head>
        <title>{frontmatter.title} | Vandana Singh & Associates</title>
        <meta name="description" content={frontmatter.description} />
      </Head>
      <article className="grid gap-6">
        <ul className="flex gap-2">
          <p>{frontmatter.date}</p>
          <Dot />
          <p>5 min read</p>
        </ul>
        <h1 className="font-heading text-3xl sm:text-5xl">
          {frontmatter.title}
        </h1>
        <div className="flex items-center gap-2">
          <Image
            alt={frontmatter.author}
            src={frontmatter.headshot}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover shadow-md"
          />
          <div className="grid gap-0">
            <p>{frontmatter.author}</p>
            <span className="text-sm text-gray-500">{frontmatter.role}</span>
          </div>
        </div>
        <Image
          alt={frontmatter.title + ` ${frontmatter.description}`}
          src={frontmatter.thumbnail}
          width={1000}
          height={1000}
          className="h-[20rem] w-full rounded-lg object-cover shadow-md object-center"
        />
      </article>
      <Post />
    </div>
  );
}

export const dynamicParams = false;
