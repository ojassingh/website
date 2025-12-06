import Link from "next/link";
import type { FC } from "react";
import WorkCard from "./ui/work-card";

type work = {
  title: string;
  description: string;
  image: string;
  date: string;
  link: string;
};

const works: work[] = [
  {
    title: "Newt",
    description: "Agentic animation engine for mathematical visualizations",
    image: "/newt.png",
    date: "2025",
    link: "/work/newt",
  },
  {
    title: "swe-resume",
    description: "Cursor for SWE job applications (400+ MOA)",
    date: "2024",
    image: "/sweresume.jpeg",
    link: "/work/swe-resume",
  },
];

const Work: FC = () => (
  <section className="px-7 py-6 sm:px-10 sm:py-10" id="work">
    <div className="flex justify-between">
      <h1 className="font-medium text-lg tracking-tight">Work</h1>
      <Link
        className="text-muted-foreground underline"
        href={
          "https://drive.google.com/file/d/1GlmBlC-k5E97bl54c0OACVr6iuMmppKM/view?usp=sharing"
        }
        target="_blank"
      >
        Resume
      </Link>
    </div>
    <div className="mt-2 flex items-center gap-2">
      <span className="relative flex size-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex size-2 rounded-full bg-green-500" />
      </span>
      <p className="text-muted-foreground">
        Software Engineer @ Finni Health (YC W23)
      </p>
    </div>
    <div className="">
      <p className="text-muted-foreground">
        Previously I was doing contract work for Deskhead, Cove, and Flow
        Robotics
      </p>
    </div>
    <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2">
      {works.map(({ title, description, image, date, link }, index) => (
        <WorkCard
          date={date}
          description={description}
          image={image}
          key={index.toString()}
          link={link}
          title={title}
        />
      ))}
    </div>
  </section>
);

export default Work;
