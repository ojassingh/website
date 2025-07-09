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
        className="relative grid h-screen grid-cols-3 grid-rows-12 px-6 sm:px-10"
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

        <div className="col-span-1 row-start-11 z-10">
          <p className="text-left text-base text-gray-400">
            I&apos;m a developer based in Toronto. <br/> Studied Physics and Statistics at the University of Toronto.
            I&apos;m passionate about design engineering and AI to augment our
            current capabilities.
            <br />
          </p>
        </div>

        <div className="absolute bottom-0 left-0 translate-x-[-50%] translate-y-[50%]">
          <Plus className="size-3 text-neutral-400" />
        </div>
        <div className="absolute right-0 bottom-0 translate-x-[50%] translate-y-[50%]">
          <Plus className="size-3 text-neutral-400" />
        </div>
        <div className="absolute bottom-0 z-0 h-40 w-full bg-line ar-to-b from-transparent to-black"></div>
      </section>
      
      <video
        src="/gradient.mp4"
        loop
        autoPlay
        muted
        playsInline
        className="absolute inset-0 -z-10 mx-auto h-screen w-full object-cover opacity-40 sm:max-w-7xl"
      ></video>
    </>
  );
};

export default Hero;
