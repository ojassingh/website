import { ArrowUpRight, Copy } from "lucide-react";
import Link from "next/link";
import BlurFade from "./ui/blur-fade";
import { useEffect } from "react";
import { toast } from "sonner";

export default function Nav() {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();

      switch (key) {
        case "l":
          window.open("https://www.linkedin.com/in/ojas-singh/", "_blank");
          break;
        case "g":
          window.open("https://github.com/ojassingh", "_blank");
          break;
        case "x":
          window.open("https://x.com/ojassinghh", "_blank");
          break;
        case "e":
          navigator.clipboard.writeText("ojas.singh@gmail.com");
          toast.success("Email Copied!");
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div className="row-start-3 z-20 flex place-content-between pt-10 sm:col-span-6 sm:col-start-1 sm:row-start-2 sm:place-content-start sm:gap-1 sm:pt-0">
      <BlurFade delay={0.4} className="">
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/ojas-singh/"
          className="group flex max-w-max items-center"
        >
          <p>[L] linkedin</p>
          <span className="block sm:hidden">[linkedin]</span>
          <ArrowUpRight className="mr-1 hidden h-4 w-4 rotate-45 opacity-0 duration-300 group-hover:ml-1 group-hover:rotate-0 group-hover:opacity-100 sm:block" />
        </Link>
      </BlurFade>
      <BlurFade delay={0.4 + 0.05}>
        <Link
          target="_blank"
          href="https://github.com/ojassingh"
          className="group flex items-center"
        >
          <p>[G] github</p>

          <span className="block sm:hidden">[github]</span>
          <ArrowUpRight className="mr-1 hidden h-4 w-4 rotate-45 opacity-0 duration-300 group-hover:ml-1 group-hover:rotate-0 group-hover:opacity-100 sm:block" />
        </Link>
      </BlurFade>
      <BlurFade delay={0.4 + 0.1}>
        <div className="group flex items-center">
          <p>[E] email</p>
          <span className="block sm:hidden">[email]</span>
          <Copy className="mr-1 hidden h-4 w-4 rotate-45 opacity-0 duration-300 group-hover:ml-1 group-hover:rotate-0 group-hover:opacity-100 sm:block" />
        </div>
      </BlurFade>
      <BlurFade delay={0.4 + 0.15}>
        <Link
          target="_blank"
          href="https://x.com/ojassinghh"
          className="group flex items-center"
        >
          <p>[X] X</p>
          <span className="block sm:hidden">[x]</span>
          <ArrowUpRight className="mr-1 hidden h-4 w-4 rotate-45 opacity-0 duration-300 group-hover:ml-1 group-hover:rotate-0 group-hover:opacity-100 sm:block" />
        </Link>
      </BlurFade>
    </div>
  );
}
