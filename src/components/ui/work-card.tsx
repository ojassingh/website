import { FC } from "react";
import { cn } from "@/lib/utils";

const WorkCard: FC<{
  title: string;
  description: string;
  //   link: string;
  type: string;
  image: string;
  className?: string;
}> = ({ title, description, image, className, type }) => {
  return (
    <div className={cn("flex flex-col", ` ${className}`)}>
      <a
        // href={link}
        target="_blank"
        className="group relative flex h-full w-full items-center justify-center overflow-hidden rounded-sm bg-gray-100 object-cover shadow-lg ring-1 ring-white/10 transition-all duration-300"
      >
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-all duration-300"
        />
      </a>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-base text-white">{title}</p>
        <span className="rounded-md px-1 text-sm text-gray-500">{type}</span>
      </div>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

export default WorkCard;
