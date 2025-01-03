"use client";
import { useEffect, useRef } from "react";
import ScrambleIn, { ScrambleInHandle } from "./ui/scramble-text";

export default function Description() {
  const titles = [
    "Hi, I'm Ojas Singh!",
    "I'm a developer based out of Toronto, Canada.",
    "I'm passionate about products that augment human capabilities.",
    "My goal is to build to amplify productivity and creativity.",
  ];

  const scrambleRefs = useRef<(ScrambleInHandle | null)[]>([]);

  useEffect(() => {
    titles.forEach((_, index) => {
      const delay = 1000 + index * 50;
      setTimeout(() => {
        scrambleRefs.current[index]?.start();
      }, delay);
    });
  }, []);

  return (
    <div className="w-full h-full flex flex-col text-gray-300 text-sm">
      {titles.map((model, index) => (
        <ScrambleIn
          key={index}
          ref={(el) => {
            scrambleRefs.current[index] = el;
          }}
          text={model}
          scrambleSpeed={25}
          scrambledLetterCount={5}
          autoStart={false}
        />
      ))}
    </div>
  );
}
