"use client";
import { cn } from "@/lib/utils";
import { Copy } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";

export function EmailButton({ className }: { className?: string }) {
  const handleCopy = () => {
    navigator.clipboard.writeText("ojas.singh@gmail.com");
    toast.success("Email Copied!");
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
      className={cn("group flex items-center cursor-pointer", ` ${className}`)}
      onClick={handleCopy}
    >
      <p>[E] email</p>

      <p className="block sm:hidden">[email]</p>
      <Copy className="hidden sm:block mr-1 size-4 rotate-45 opacity-0 duration-300 group-hover:ml-1 group-hover:rotate-0 group-hover:opacity-100" />
    </div>
  );
}
