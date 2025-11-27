"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { AlignLeft } from "lucide-react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface Props {
  headings: Heading[];
}

export function TableOfContents({ headings }: Props) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const headingElements = document.querySelectorAll("h1, h2, h3");
    
    headingElements.forEach((el) => {
      const text = el.textContent || "";
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      el.id = id;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          const topEntry = visibleEntries.reduce((prev, current) => 
            prev.boundingClientRect.top < current.boundingClientRect.top ? prev : current
          );
          setActiveId(topEntry.target.id);
        }
      },
      { 
        rootMargin: "-10% 0px -80% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    );

    headingElements.forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  if (headings.length === 0) return null;

  return (
    <div className="hidden xl:block fixed right-4 top-20 w-64 prose dark:prose-invert">
      <div className="rounded-lg">
        <h4 className="font-medium tracking-tight text-sm mb-3 flex items-center gap-2">
          <AlignLeft className="size-4" /> On this page
        </h4>
        <div className="space-y-1 text-sm">
          {headings.map((heading) => {
            const isActive = activeId === heading.id;
            return (
              <div key={heading.id} className="flex items-center">
                {isActive && (
                  <motion.div
                    className="w-[1.5px] h-4 bg-white rounded-full"
                    layoutId="activeIndicator"
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  />
                )}
                <button
                  onClick={() => scrollTo(heading.id)}
                  className={`ml-3 tracking-tight py-1 hover:text-foreground transition-colors ${
                    isActive ? "text-foreground font-medium" : "text-muted-foreground"
                  }`}
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