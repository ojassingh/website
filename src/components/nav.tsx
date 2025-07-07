import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import BlurFade from "./ui/blur-fade";
import { EmailButton } from "./ui/email-button";

export default function Nav() {
  return (
    <div className="row-start-3 flex place-content-between pt-10 sm:col-span-6 sm:col-start-1 sm:row-start-2 sm:place-content-start sm:gap-1 sm:pt-0">
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
        <EmailButton />
      </BlurFade>
    </div>
  );
}
