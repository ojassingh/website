import { ArrowUpRight, Copy } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function Nav() {
  const links = [
    {
      href: "https://www.linkedin.com/in/ojas-singh/",
      label: "linkedin",
      icon: ArrowUpRight,
    },
    {
      href: "https://github.com/ojassingh",
      label: "github",
      icon: ArrowUpRight,
    },
    {
      label: "email",
      icon: Copy,
      onClick: () => {
        navigator.clipboard.writeText("ojas.singh02@gmail.com");
        toast("Email copied!")
      },
    },
    {
      href: "https://x.com/ojassinghh",
      label: "X",
      icon: ArrowUpRight,
      newTab: false,
    },
  ];

  return (
    <div className="z-20 flex place-content-between pt-10">
      <div>
        <p className="text-xl font-medium">Ojas Singh</p>
      </div>
      <div className="flex items-center gap-2">
      {links.map((link, index) => (
        <div key={index}>
          {link.href ? (
            <Link
              target="_blank"
              href={link.href}
              className="group flex max-w-max items-center"
            >
              <p className="text-neutral-400 flex items-center gap-2">{link.label}</p>
              <link.icon className="mr-1 text-neutral-400 hidden h-4 w-4 rotate-45 opacity-0 duration-300 group-hover:ml-1 group-hover:rotate-0 group-hover:opacity-100 sm:block" />
            </Link>
          ) : (
            <div onClick={link.onClick} className="group flex items-center cursor-pointer">
              <p className="text-neutral-400 flex items-center gap-2"> {link.label}</p>
              <link.icon className="mr-1 text-neutral-400 hidden h-4 w-4 rotate-45 opacity-0 duration-300 group-hover:ml-1 group-hover:rotate-0 group-hover:opacity-100 sm:block" />
            </div>
          )}
        </div>
      ))}
      </div>
    </div>
  );
}