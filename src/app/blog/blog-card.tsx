import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  role: string;
  headshot: string;
  thumbnail: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="">
        <div className="">
          <Image
            src={post.thumbnail}
            alt={post.title}
            width={400}
            height={250}
            className="h-80 w-full rounded-md object-cover"
          />
          <div>
          <h2 className="mt-4 px-4 text-xl text-pretty font-medium tracking-tight">
            {post.title}
          </h2>
          <div className="flex mt-2 px-4 items-center justify-between text-sm text-muted-foreground">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
          </div>
        </div>
    </Link>
  );
}
