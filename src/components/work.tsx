import React from "react";
import { FC } from "react";
import WorkCard from "./ui/work-card";

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
    title: "Work 1",
    description: "AI-powered resume builder",
    image: "/sweresume.jpeg",
    date: "",
    link: "",
    type: "Project",
  },
  {
    title: "Work 2",
    description: "AI-powered resume builder",
    date: "",
    image: "/sweresume.jpeg",
    link: "",
    type: "Project",
  },
];

const Work: FC = () => {
  return (
    <section id="projects" className=" px-10 py-20">
      <div className="mt-10 grid grid-cols-2 gap-10">
        {works.map(({ title, description, image, type }, index) => {
          return (
            <WorkCard
              title={title}
              description={description}
              image={image}
              type={type}
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
