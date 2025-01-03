"use client";
import { useToast } from "@/hooks/use-toast";
// import { useState } from "react";
import ComesInGoesOutUnderline from "./underline";
import { Copy } from "lucide-react";

export function EmailButton() {
  const { toast } = useToast();
  const handleCopy = () => {
    navigator.clipboard.writeText("");
    toast({
      title: "Email Copied!",
      description: "Shoot me a message.",
    });
  };

  return (
    <div className="group flex items-center" onClick={handleCopy}>
      <ComesInGoesOutUnderline label="ojas.singh02@gmail.com" />
      <Copy className="size-4 rotate-45 opacity-0 duration-300 group-hover:ml-1 group-hover:rotate-0 group-hover:opacity-100" />
    </div>
  );
}
