import { ArrowDown, ArrowUpRight, Copy } from "lucide-react";
import Link from "next/link";
import BlurFade from "./ui/blur-fade";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Nav() {
  const router = useRouter();
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
        case "b":
          router.push("/blog")
          break;
        case "w":
          router.push("/#work")
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);
  
  const links = [
    {
      href: "https://www.linkedin.com/in/ojas-singh/",
      label: "[L] linkedin",
      icon: ArrowUpRight,
    },
    {
      href: "https://github.com/ojassingh",
      label: "[G] github",
      icon: ArrowUpRight,
    },
    {
      label: "[E] email",
      icon: Copy,
    },
    {
      href: "https://x.com/ojassinghh",
      label: "[X] X",
      icon: ArrowUpRight,
      newTab: false,
    },

    {
      href: "/#work",
      label: "[W] work",
      icon: ArrowDown,
      placement: "right",
    },
    {
      href: "/blog",
      label: "[B] blog",
      icon: ArrowUpRight,
      placement: "right",
    },
  ];

  return (
    <div className="row-start-3 z-20 flex place-content-between pt-10 sm:col-span-6 sm:col-start-1 sm:row-start-2 sm:place-content-start sm:gap-1 sm:pt-0">
      {links.map((link, index) => (
        <BlurFade key={index} delay={0.4 + index * 0.05}>
          {link.href ? (
            <Link
              target={link.newTab ? "_blank" : "_self"}
              href={link.href}
              className="group flex max-w-max items-center"
            >
              <p>{link.label}</p>
              <span className="block sm:hidden">[{link.label}]</span>
              <link.icon className="mr-1 hidden h-4 w-4 rotate-45 opacity-0 duration-300 group-hover:ml-1 group-hover:rotate-0 group-hover:opacity-100 sm:block" />
            </Link>
          ) : (
            <div className="group flex items-center">
              <p>{link.label}</p>
              <span className="block sm:hidden">[{link.label}]</span>
              <link.icon className="mr-1 hidden h-4 w-4 rotate-45 opacity-0 duration-300 group-hover:ml-1 group-hover:rotate-0 group-hover:opacity-100 sm:block" />
            </div>
          )}
        </BlurFade>
      ))}
    </div>
  );
}