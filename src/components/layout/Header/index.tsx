"use client";
import { useActiveSection } from "@/src/hook/useActiveSection";
import { RESUME } from "@/src/lib/const";
import clsx from "clsx";
import { ArrowUpIcon, MenuIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TransparentLink } from "../../TransparentLink";

export function Header() {
  const [menu, setMenu] = useState<boolean>(false);

  const navLinks = [
    { label: "Início", href: "/#inicio", id: "inicio" },
    { label: "Portfólio", href: "/#portfolio", id: "portfolio" },
    { label: "Sobre mim", href: "/#sobreMim", id: "sobreMim" },
    { label: "Contato", href: "/#contato", id: "contato" },
  ];

  const sectionIds = navLinks.map((link) => link.id);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    if (activeSection) {
      window.history.replaceState(null, "", `#${activeSection}`);
    }
  }, [activeSection]);

  function handleButtonMenu() {
    setMenu((prev) => !prev);
  }

  return (
    <header
      className={clsx(
        "sticky",
        "top-0",
        "left-0",
        "w-full",
        "flex",
        "justify-between",
        "items-center",
        "p-4",
        "overflow-hidden",
        "bg-[linear-gradient(60deg,#011140,#00020d,#000629,#00020d)]",
        "shadow-[-3px_13px_5px_-5px_rgba(7,19,69,0.77)]",
        "z-50",
        "lg:p-8",
      )}
    >
      <Link
        href="/#inicio"
        className={`leading-0 font-title text-(--secondary-color)/85 transition hover:text-(--blue-200)  uppercase text-2xl md:text-3xl lg:text-5xl`}
      >
        Philippe dias
      </Link>

      <button
        className={clsx(
          "lg:hidden",
          `${menu ? "rotate-45" : "rotate-0"}`,
          "transition-transform",
          "duration-500",
        )}
        style={{ color: `${menu ? "var(--blue-200)" : "white"}` }}
        onClick={handleButtonMenu}
      >
        <MenuIcon size={30} />
      </button>

      <nav
        className={clsx(
          "fixed",
          "top-0",
          "right-0",
          "z-10",
          "top-18",
          menu ? "translate-y-0 md:top-24" : "translate-y-[-150%]",
          "transition",
          "duration-500",
          "ease-in",
          "backdrop-blur-sm",
          "bg-[rgba(0,10,40,0.5)]",
          "w-full",
          "py-2",
          "pr-4",
          "shadow-[-3px_13px_5px_-5px_rgba(7,19,69,0.77)]",
          "lg:static",
          "lg:p-0",
          "lg:shadow-none",
          "lg:backdrop-blur-none",
          "lg:bg-transparent",
          "lg:w-auto",
          "lg:translate-y-0",
        )}
      >
        <ul className="flex flex-col items-end gap-6 lg:flex-row lg:gap-12">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className={clsx(
                    "transition lg:text-[1.2rem] block",
                    "hover:text-(--blue-200) text-white lg:pb-1 lg:border-b-2 lg:border-transparent",
                    isActive
                      ? "lg:text-(--blue-200) lg:border-b-(--blue-600)"
                      : "lg:text-white/65",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}

          <li className="lg:hidden">
            <Link
              href={RESUME}
              className="transition hover:text-(--blue-200) text-white"
            >
              Currículo
            </Link>
          </li>
        </ul>
      </nav>
      <TransparentLink
        href={RESUME}
        className="p-2! rounded-xl text-base text-white/70"
        target="_blank"
      >
        Currículo {<ArrowUpIcon className="rotate-45" />}
      </TransparentLink>
    </header>
  );
}
