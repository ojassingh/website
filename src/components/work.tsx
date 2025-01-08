import React from "react";
import { FC } from "react";
import WorkCard from "./ui/work-card";
// import work from '@/../public/work.png'

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
  // {
  //   title: "Work 3",
  //   description: "This is work 3",
  //   image: "/work.png",
  //   link: "",
  // },
];

const Work: FC = () => {
  return (
    <section id="projects" className="bg-black px-10 py-20">
      {/* <h1 className="text-4xl text-gray-400">[</h1> */}
      <div className="mt-10 grid grid-cols-2 gap-10">
        {works.map(({ title, description, image, type, link }, index) => {
          return (
            <WorkCard
              title={title}
              description={description}
              image={image}
              type={type}
              // link={link}
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
