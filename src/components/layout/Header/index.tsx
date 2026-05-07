"use client";
import clsx from "clsx";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [menu, setMenu] = useState<boolean>(false);
  const linkStyles = "transition hover:text-(--blue-200)";

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
        "bg-[radial-gradient(circle,rgba(1,17,64,1)_0%,rgba(0,2,13,1)_100%)]",
        "shadow-[-3px_13px_5px_-5px_rgba(7,19,69,0.77)]",
        "z-10",
        "lg:p-8",
        "xl:mb-20",
      )}
    >
      <a
        href="#inicio"
        className={`font-title uppercase text-[2rem] md:text-[3rem] lg:text-5xl ${linkStyles}`}
      >
        philippe dias
      </a>

      <button
        className={clsx(
          "lg:hidden",
          `${menu ? "rotate-45" : "rotate-0"}`,
          "transition-transform",
          "duration-500",
        )}
        style={{ color: `${menu ? "var(--blue-200" : "white"}` }}
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
          `${menu ? "translate-y-0 md:top-24" : "translate-y-[-150%]"}`,
          "transition",
          "duration-500",
          "",
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
          <li className="">
            <a href="#inicio" className={linkStyles}>
              Início
            </a>
          </li>
          <li>
            <a href="#portfolio" className={linkStyles}>
              Portfólio
            </a>
          </li>
          <li>
            <a href="#sobre" className={linkStyles}>
              Sobre mim
            </a>
          </li>
          <li>
            <a href="#contato" className={linkStyles}>
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
