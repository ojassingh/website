"use client";
import { useEffect, useRef } from "react";
import ScrambleIn, { ScrambleInHandle } from "./ui/scramble-text";

export default function Description() {
  const titles = [
    "Hi! I'm Ojas - a developer based in Toronto",
    "I'm passionate about tools that augment our current capabilities.",
    "My goal is to build products that amplify productivity and creativity.",
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
    <div className="flex h-full w-full flex-col px-10 text-base text-gray-300">
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
