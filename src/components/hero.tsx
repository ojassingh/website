"use client";
import React, { useEffect } from "react";
import { FC } from "react";
import Description from "./description";
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
    <section id="hero" className="relative grid h-screen grid-cols-3">
      <div className="col-span-2 row-span-full grid grid-rows-12 px-6 sm:px-10">
        <Nav />
        <div className="row-start-8">
          <BlurFade inView delay={0.1}>
            <Sparkles fill="white" className="size-10" />
          </BlurFade>
        </div>
        <div className="row-span-4 row-start-9">
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
      </div>

      <div className="relative col-span-1 grid grid-rows-12">
        <Description className="row-span-full row-start-9 text-left" />
        {/* <div className="absolute bottom-0 left-0 translate-x-[-50%] translate-y-[50%]">
          <Plus />
        </div> */}
      </div>

      <div className="absolute bottom-0 h-[150px] w-full bg-black [mask-image:linear-gradient(to_bottom,transparent,black)]" />

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
