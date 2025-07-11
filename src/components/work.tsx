import React from "react";
import { FC } from "react";
import WorkCard from "./ui/work-card";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type work = {
  title: string;
  description: string;
  image: string;
  date: string;
  link: string;
  type: string;
};

const works: work[] = [
  {
    title: "Newt",
    description: "Agentic animation engine for mathematical visualizations",
    image: "/newt.png",
    date: "2025",
    link: "https://getnewt.co/",
    type: "Project",
  },
  {
    title: "swe-resume",
    description: "Cursor for SWE job applications",
    date: "2024",
    image: "/sweresume.jpeg",
    link: "",
    type: "Project",
  },
];

const Work: FC = () => {
  return (
    <section id="work" className="px-10 py-20 border-b-[1px] border-dashed border-neutral-600">
      <div className="flex justify-between">
        <h1 className="text-xl font-medium tracking-tight">Work</h1>
        <Link
          target="_blank"
          href="https://drive.google.com/file/d/1zx_sCsEw3hhd_dpzntUsGQIWsL_aHLsm/view?usp=sharing"
          className="group flex max-w-max items-center"
        >
          <p className="underline">Resume</p>
          <ArrowUpRight className="ml-1 hidden h-4 w-4 rotate-45 opacity-0 duration-300 group-hover:ml-1 group-hover:rotate-0 group-hover:opacity-100 sm:block" />
        </Link>
      </div>
      <p className="mt-2 text-neutral-400">
        Previously a software engineer at {' '}
        <Link
          className="text-white underline"
          href="https://deskhead.ai/"
          target="_blank"
        >
          Deskhead
        </Link>{" "}
        , Flow Robotics, and Cove. <br /> Currently building an agentic animation engine called{" "}
        <Link
          className="text-white underline"
          href="https://getnewt.co/"
          target="_blank"
        >
          Newt
        </Link>
        , where we&apos;re creating cool math videos.
      </p>
      <div className="mt-10 grid grid-cols-2 gap-10">
        {works.map(({ title, description, image, date }, index) => {
          return (
            <WorkCard
              title={title}
              description={description}
              image={image}
              date={date}
              key={index}
              className=""
            />
          );
        })}
      </div>
    </section>
  );
};

export default Work;
