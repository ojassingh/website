import React from "react";
import { FC } from "react";
import WorkCard from "./ui/work-card";
import BlurFade from "./ui/blur-fade";

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

const Work: FC = () => {
  return (
    <section id="work" className="px-7 sm:px-10 py-6 sm:py-10">
      <div className="flex justify-between">
        <h1 className="text-lg font-medium tracking-tight">Work</h1>
      </div>
      <div className="flex mt-2 items-center gap-2">
      <span className="relative flex size-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
      <span className="relative inline-flex size-2 rounded-full bg-green-500"></span>
      </span>
        <p className="text-muted-foreground">Software Engineer @ Finni Health (YC W23)</p>
      </div>
      <div className="">
        <p className="text-muted-foreground">Previously I was doing contract work for Deskhead, Cove, and Flow Robotics</p>
      </div>
      <div className="mt-10 grid-cols-1 grid sm:grid-cols-2 gap-10">
        {works.map(({ title, description, image, date, link }, index) => {
          return (
            <BlurFade inView delay={0.1 + index * 0.1} key={index}>
              <WorkCard
              link={link}
              title={title}
              description={description}
              image={image}
              date={date}
              key={index}
            />
            </BlurFade>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
