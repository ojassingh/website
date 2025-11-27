import { FC } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const WorkCard: FC<{
  title: string;
  description: string;
  image: string;
  className?: string;
  date: string;
  link: string;
}> = ({ title, description, image, className, date, link }) => {
  return (
    <div className={cn("flex flex-col", ` ${className}`)}>
      <Link
        href={link}
        className="group relative flex h-full w-full items-center justify-center overflow-hidden rounded-sm object-cover shadow-lg transition-all duration-300"
      >
        <Image
          width={1000}
          height={1000}
          src={image}
          alt={title}
          className="h-70 sm:h-84 w-full object-cover transition-all duration-300"
        />
      </Link>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-base text-white">{title}</p>
        <span className="rounded-md px-1 text-sm text-muted-foreground">{date}</span>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default WorkCard;
