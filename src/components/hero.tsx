'use client'
import React, { useEffect } from "react";
import { FC } from "react";
import Description from "./description";
import BlurFade from "./ui/blur-fade";
import { ArrowDown, ArrowUpRight, Plus, Sparkles } from "lucide-react";
import Link from "next/link";
import ComesInGoesOutUnderline from "./ui/underline";
import { EmailButton } from "./ui/email-button";

const Hero: FC = () => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();

      switch (key) {
        case "l":
          window.open("https://www.linkedin.com/in/ojas-singh/", "_blank");
          break;
        case "g":
          window.open("https://github.com/ojassingh", "_blank");
          break;
        case "w":
          document
            .querySelector("#work")
            ?.scrollIntoView({ behavior: "smooth" });
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

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

      <div className="col-span-4 col-start-9 row-start-9">
        <Description />
      </div>

      <div className="col-span-1 col-start-8 row-span-12 border-r-[1px]" />

      <div className="col-start-1 row-start-8">
        <BlurFade inView delay={0.1}>
          <Sparkles fill="white" className="size-10" />
        </BlurFade>
      </div>

      {/* <div className="col-span-4 col-start-9 row-start-10"> */}
      <div className="col-span-6 col-start-1 row-start-2 flex gap-1">
        <BlurFade inView delay={0.4}>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/ojas-singh/"
            className="group flex max-w-max items-center"
          >
            <ComesInGoesOutUnderline label="[L] linkedin" />
            <ArrowUpRight className="mr-1 size-4 rotate-45 opacity-0 duration-300 group-hover:ml-1 group-hover:rotate-0 group-hover:opacity-100" />
          </Link>
        </BlurFade>
        <BlurFade inView delay={0.4 + 0.05}>
          <Link
            target="_blank"
            href="https://github.com/ojassingh"
            className="group flex items-center"
          >
            <ComesInGoesOutUnderline label="[G] github" />
            <ArrowUpRight className="mr-1 size-4 rotate-45 opacity-0 duration-300 group-hover:ml-1 group-hover:rotate-0 group-hover:opacity-100" />
          </Link>
        </BlurFade>
        <BlurFade inView delay={0.4 + 0.1}>
          <EmailButton />
        </BlurFade>
        <BlurFade inView delay={0.4 + 0.15}>
          <Link href="#work" className="group flex items-center">
            <ComesInGoesOutUnderline label="[W] work" />
            <ArrowDown className="mr-1 size-4 rotate-45 opacity-0 duration-300 group-hover:ml-1 group-hover:rotate-0 group-hover:opacity-100" />
          </Link>
        </BlurFade>
      </div>
      <div className="absolute bottom-0 left-0 translate-x-[-50%] translate-y-[50%]">
        <Plus />
      </div>
      <div className="absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%]">
        <Plus />
      </div>
    </section>
  );
};

export default Hero;
