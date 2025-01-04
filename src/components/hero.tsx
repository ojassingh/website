"use client";
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
      className="relative grid h-screen grid-flow-col grid-cols-12 grid-rows-12 border-b-[1px] px-6 sm:px-10"
    >
      <div className="col-start-1 row-start-5 sm:row-start-8">
        <BlurFade inView delay={0.1}>
          <Sparkles fill="white" className="size-10" />
        </BlurFade>
      </div>
      <div className="col-span-full row-start-6 sm:col-span-7 sm:row-start-9">
        <BlurFade inView delay={0.2}>
          <h2 className="text-left text-lg sm:text-xl">
            I like to build things for the web
          </h2>
        </BlurFade>
        <BlurFade inView delay={0.3}>
          <h1 className="text-left font-serif text-7xl font-medium sm:text-9xl">
            ojas singh
          </h1>
        </BlurFade>
      </div>

      <div className="col-span-full col-start-1 row-start-10 sm:col-span-4 sm:col-start-9 sm:row-start-9">
        <Description className="text-left" />
      </div>

      <div className="col-span-1 col-start-8 row-span-12 hidden border-r-[1px] sm:block" />

      {/* <div className="col-span-4 col-start-9 row-start-10"> */}
      <div className="col-span-full col-start-1 row-start-1 flex place-content-between pt-10 sm:col-span-6 sm:col-start-1 sm:row-start-2 sm:gap-1 sm:pt-0">
        <BlurFade inView delay={0.4}>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/ojas-singh/"
            className="group flex max-w-max items-center"
          >
            <ComesInGoesOutUnderline
              label="[L] linkedin"
              className="hidden sm:block"
            />
            <p className="block sm:hidden">[linkedin]</p>
            <ArrowUpRight className="mr-1 hidden size-4 rotate-45 opacity-0 duration-300 group-hover:ml-1 group-hover:rotate-0 group-hover:opacity-100 sm:block" />
          </Link>
        </BlurFade>
        <BlurFade inView delay={0.4 + 0.05}>
          <Link
            target="_blank"
            href="https://github.com/ojassingh"
            className="group flex items-center"
          >
            <ComesInGoesOutUnderline
              label="[G] github"
              className="hidden sm:block"
            />
            <p className="block sm:hidden">[github]</p>
            <ArrowUpRight className="mr-1 hidden size-4 rotate-45 opacity-0 duration-300 group-hover:ml-1 group-hover:rotate-0 group-hover:opacity-100 sm:block" />
          </Link>
        </BlurFade>
        <BlurFade inView delay={0.4 + 0.1}>
          <EmailButton />
        </BlurFade>
        <BlurFade inView delay={0.4 + 0.15}>
          <Link href="#work" className="group flex items-center">
            <ComesInGoesOutUnderline
              label="[W] work"
              className="hidden sm:block"
            />
            <p className="block sm:hidden">[work]</p>
            <ArrowDown className="mr-1 hidden size-4 rotate-45 opacity-0 duration-300 group-hover:ml-1 group-hover:rotate-0 group-hover:opacity-100 sm:block" />
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
