import React from "react";
import { FC } from "react";
import Description from "./description";
import BlurFade from "./ui/blur-fade";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import ComesInGoesOutUnderline from "./ui/underline";
import { EmailButton } from "./ui/email-button";

const Hero: FC = () => {
  return (
    <section
      id="hero"
      className="relative grid grid-flow-col grid-cols-12 grid-rows-12 border-b-[1px] px-10 sm:h-screen"
    >
      <div className="col-span-7 row-start-9">
        <BlurFade inView delay={0.2}>
          <h2 className="text-xl">I like to build things for the web</h2>
        </BlurFade>
        <BlurFade inView delay={0.3}>
          <h1 className="font-serif text-9xl font-medium">ojas singh</h1>
        </BlurFade>
      </div>

      <div className="col-span-4 col-start-9 row-start-2">
        <Description />
      </div>

      <div className="col-span-1 col-start-8 row-span-12 border-l-[1px]" />

      <div className="col-start-1 row-start-8">
        <BlurFade inView delay={0.1}>
          <Sparkles fill="white" className="size-10" />
        </BlurFade>
      </div>

      <div className="col-span-4 col-start-9 row-start-10">
        <BlurFade inView delay={0.4}>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/ojas-singh/"
            className="group flex items-center"
          >
            <ComesInGoesOutUnderline label="linkedin" />
            <ArrowUpRight className="size-4 rotate-45 opacity-0 duration-300 group-hover:ml-1 group-hover:rotate-0 group-hover:opacity-100" />
          </Link>
        </BlurFade>
        <BlurFade inView delay={0.4 + 0.05}>
          <Link
            target="_blank"
            href="https://github.com/ojassingh"
            className="group flex items-center"
          >
            <ComesInGoesOutUnderline label="github" />
            <ArrowUpRight className="size-4 rotate-45 opacity-0 duration-300 group-hover:ml-1 group-hover:rotate-0 group-hover:opacity-100" />
          </Link>
        </BlurFade>
        <BlurFade inView delay={0.4 + 0.1}>
          <EmailButton />
        </BlurFade>
      </div>
    </section>
  );
};

export default Hero;
