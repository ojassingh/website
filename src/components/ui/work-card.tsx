import { FC } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const WorkCard: FC<{
  title: string;
  description: string;
  image: string;
  className?: string;
  date: string;
}> = ({ title, description, image, className, date }) => {
  return (
    <div className={cn("flex flex-col", ` ${className}`)}>
      <a
        target="_blank"
        className="group relative flex h-full w-full items-center justify-center overflow-hidden rounded-sm bg-gray-100 object-cover shadow-lg ring-1 ring-white/5 transition-all duration-300"
      >
        <Image
          width={1000}
          height={1000}
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-all duration-300"
        />
      </a>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-base text-white">{title}</p>
        <span className="rounded-md px-1 text-sm text-gray-500">{date}</span>
      </div>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

export default WorkCard;
