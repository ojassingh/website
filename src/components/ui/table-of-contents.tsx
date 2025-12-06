"use client";

import { AlignLeft } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

type Heading = {
  id: string;
  text: string;
  level: number;
};

type Props = {
  headings: Heading[];
};

export function TableOfContents({ headings }: Props) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const headingElements = document.querySelectorAll("h1, h2, h3");

    for (const el of headingElements) {
      const text = el.textContent || "";
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      el.id = id;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          const topEntry = visibleEntries.reduce((prev, current) =>
            prev.boundingClientRect.top < current.boundingClientRect.top
              ? prev
              : current
          );
          setActiveId(topEntry.target.id);
        }
      },
      {
        rootMargin: "-10% 0px -80% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    for (const el of headingElements) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <div className="prose dark:prose-invert fixed top-20 right-4 hidden w-64 xl:block">
      <div className="rounded-lg">
        <h4 className="mb-3 flex items-center gap-2 font-medium text-sm tracking-tight">
          <AlignLeft className="size-4" /> On this page
        </h4>
        <div className="space-y-1 text-sm">
          {headings.map((heading) => {
            const isActive = activeId === heading.id;
            return (
              <div className="flex items-center" key={heading.id}>
                {isActive && (
                  <motion.div
                    className="h-4 w-[1.5px] rounded-full bg-white"
                    layoutId="activeIndicator"
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  />
                )}
                <button
                  className={`ml-3 py-1 tracking-tight transition-colors hover:text-foreground ${
                    isActive
                      ? "font-medium text-foreground"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => scrollTo(heading.id)}
                  type="button"
                >
                  {heading.text}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
