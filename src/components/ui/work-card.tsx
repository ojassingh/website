import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import { cn } from "@/lib/utils";

const WorkCard: FC<{
  title: string;
  description: string;
  image: string;
  className?: string;
  date: string;
  link: string;
}> = ({ title, description, image, className, date, link }) => (
  <div className={cn("flex flex-col", ` ${className}`)}>
    <Link
      className="group relative flex h-full w-full items-center justify-center overflow-hidden rounded-sm object-cover shadow-lg transition-all duration-300"
      href={link}
    >
      <Image
        alt={title}
        className="h-70 w-full object-cover transition-all duration-300 sm:h-84"
        height={1000}
        src={image}
        width={1000}
      />
    </Link>
    <div className="mt-4 flex items-center justify-between">
      <p className="text-base text-white">{title}</p>
      <span className="rounded-md px-1 text-muted-foreground text-sm">
        {date}
      </span>
    </div>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export default WorkCard;
