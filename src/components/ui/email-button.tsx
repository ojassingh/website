"use client";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
// import { useState } from "react";
import ComesInGoesOutUnderline from "./underline";
import { Copy } from "lucide-react";
import { useEffect } from "react";

export function EmailButton({ className }: { className?: string }) {
  const { toast } = useToast();
  const handleCopy = () => {
    navigator.clipboard.writeText("");
    toast({
      title: "Email Copied!",
      description: "Shoot me a message.",
      className: ""
    });
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "e") {
        handleCopy();
      }
    };

    window.addEventListener("keypress", handleKeyPress);
    return () => window.removeEventListener("keypress", handleKeyPress);
  }, []);

  return (
    <div
      className={cn("group flex items-center", ` ${className}`)}
      onClick={handleCopy}
    >
      <ComesInGoesOutUnderline label="[E] email" className="hidden sm:block"/>
      <p className="sm:hidden">[email]</p>
      <Copy className="hidden sm:block mr-1 size-4 rotate-45 opacity-0 duration-300 group-hover:ml-1 group-hover:rotate-0 group-hover:opacity-100" />
    </div>
  );
}
