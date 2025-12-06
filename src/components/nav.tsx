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
        toast("Email copied!");
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
        <p className="font-medium text-xl">Ojas Singh</p>
      </div>
      <div className="flex items-center gap-2">
        {links.map((link, index) => (
          <div key={index.toString()}>
            {link.href ? (
              <Link
                className="group flex max-w-max items-center"
                href={link.href}
                target="_blank"
              >
                <p className="flex items-center gap-2 text-muted-foreground">
                  {link.label}
                </p>
                <link.icon className="mr-1 hidden h-4 w-4 rotate-45 text-muted-foreground opacity-0 duration-300 group-hover:ml-1 group-hover:rotate-0 group-hover:opacity-100 sm:block" />
              </Link>
            ) : (
              <button
                className="group flex cursor-pointer items-center"
                onClick={link.onClick}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    link.onClick?.();
                  }
                }}
                tabIndex={0}
                type="button"
              >
                <p className="flex items-center gap-2 text-muted-foreground">
                  {" "}
                  {link.label}
                </p>
                <link.icon className="mr-1 hidden h-4 w-4 rotate-45 text-muted-foreground opacity-0 duration-300 group-hover:ml-1 group-hover:rotate-0 group-hover:opacity-100 sm:block" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
