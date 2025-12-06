const LAST_UPDATED = "10th November, 2024";

const Footer = () => (
  <footer className="px-7 sm:px-10">
    <div className="mt-2 flex items-center justify-end gap-2">
      <span className="relative flex size-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex size-2 rounded-full bg-green-500" />
      </span>
      <p className="text-muted-foreground text-sm">
        Last updated: {LAST_UPDATED}
      </p>
    </div>
  </footer>
);

export default Footer;
