import Image from "next/image";
import Link from "next/link";

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  author: string;
  role: string;
  headshot: string;
  thumbnail: string;
};

type BlogCardProps = {
  post: BlogPost;
};

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link className="" href={`/blog/${post.slug}`}>
      <div className="">
        <Image
          alt={post.title}
          className="h-80 w-full rounded-md object-cover"
          height={250}
          src={post.thumbnail}
          width={400}
        />
        <div>
          <h2 className="mt-4 text-pretty px-4 font-medium text-xl tracking-tight">
            {post.title}
          </h2>
          <div className="mt-2 flex items-center justify-between px-4 text-muted-foreground text-sm">
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
