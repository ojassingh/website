"use client";
import { useEffect, useRef } from "react";
import ScrambleIn, { ScrambleInHandle } from "./ui/scramble-text";
import { cn } from "@/lib/utils";

export default function Description({ className }: { className?: string }) {
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
    <div
      className={cn(
        "flex h-full w-full flex-col text-base text-gray-400 sm:px-10 px-6",
        ` ${className}`,
      )}
    >
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
