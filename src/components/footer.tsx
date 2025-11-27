import React from "react";

const LAST_UPDATED = "10th November, 2024";

const Footer = () => {
  return (
    <footer className="sm:px-10 px-7">
      <div className="flex mt-2 items-center gap-2 justify-end">
        <span className="relative flex size-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex size-2 rounded-full bg-green-500"></span>
        </span>
        <p className="text-muted-foreground text-sm">Last updated: {LAST_UPDATED}</p>
      </div>
    </footer>
  );
};

export default Footer;
