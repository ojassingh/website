"use client";
import React, { useEffect } from "react";
import { FC } from "react";
import BlurFade from "./ui/blur-fade";
import { Plus, Sparkles } from "lucide-react";
import Nav from "./nav";

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
    <>
      <section
        id="hero"
        className="grid h-screen grid-cols-3 grid-rows-12 px-6 sm:px-10"
      >
        <Nav />
        <div className="row-start-5">
          <div className="">
            <BlurFade inView delay={0.1}>
              <Sparkles fill="white" className="size-10" />
            </BlurFade>
            <BlurFade inView delay={0.2}>
              <h2 className="mt-8 text-left text-lg sm:text-xl">
                Building things for the web
              </h2>
            </BlurFade>
            <BlurFade inView delay={0.3}>
              <h1 className="min-w-max text-left font-serif text-7xl font-medium text-white sm:text-9xl">
                ojas singh
              </h1>
            </BlurFade>
          </div>
        </div>

        <div className="col-span-1 row-start-11">
          <p className="text-left text-base text-gray-400">
            Hey, I&apos;m Ojas - a developer based in Toronto.
            <br />
            I&apos;m passionate about building tools that use AI to augment our
            current capabilities.
            <br />
          </p>
        </div>

        <div className="absolute bottom-0 left-0 translate-x-[-50%] translate-y-[50%]">
          <Plus />
        </div>
        <div className="absolute right-0 bottom-0 translate-x-[50%] translate-y-[50%]">
          <Plus />
        </div>
      </section>
    </>
  );
};

export default Hero;
