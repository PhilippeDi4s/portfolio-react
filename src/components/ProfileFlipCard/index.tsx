"use client";

import Image from "next/image";
import clsx from "clsx";
import { useState } from "react";
import { Heading } from "../Heading";
import { Circle } from "lucide-react";

export function ProfileFlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const lineStyle =
    "flex justify-between border-b border-white/15 w-full pb-2 text-[.9rem] md:text-[1.1rem]";

  return (
    <button
      type="button"
      onClick={() => setIsFlipped((prev) => !prev)}
      aria-pressed={isFlipped}
      aria-label="Virar foto de perfil"
      className={clsx(
        "perspective-distant",
        "block",
        "w-full",
        "max-w-140",
        "mx-auto",
        "max-w-[clamp(35rem,6vw,40rem)]",
        "cursor-pointer",
        "lg:max-h-140",
      )}
    >
      <div
        className={clsx(
          "relative",
          "aspect-square",
          "w-full",
          "transform-3d",
          "transition-transform",
          "duration-700",
          "ease-in-out",
          isFlipped && "rotate-y-180",
        )}
      >
        {/* Frente */}
        <div className="absolute inset-0 overflow-hidden rounded-[30px] backface-hidden">
          <div
            className={clsx(
              "relative",
              "h-full",
              "w-full",
              "origin-center",
              "transition-transform",
              "duration-500",
              "ease-in-out",
              "hover:rotate-y-18",
              "hover:rotate-x-6",
            )}
          >
            <Image
              src="/images/profile-picture/profile-front.png"
              alt="Foto de perfil"
              fill
              className="object-cover object-top"
            />

            {/* Dica de clique: canto dobrado */}
            <div
              className={clsx(
                "absolute",
                "top-0",
                "right-0",
                "z-10",
                "h-0",
                "w-0",
                "border-t-0",
                "border-l-0",
                "border-r-64",
                "border-b-64",
                "border-solid",
                "border-t-transparent",
                "border-l-transparent",
                "border-r-white",
                "border-b-transparent",
                "drop-shadow-md",
                "animate-pulse",
                "pointer-events-none",
              )}
            >
              <span
                className={clsx(
                  "absolute",
                  "top-3",
                  "-right-18.5",
                  "rotate-45",
                  "text-[9px]",
                  "font-semibold",
                  "uppercase",
                  "tracking-wide",
                  "text-gray-700",
                  "whitespace-nowrap",
                  "p-2",
                  "xl:p-1",
                )}
              >
                Clique aqui
              </span>
            </div>
          </div>
        </div>

        {/* Verso */}
        <div className="absolute inset-0 rotate-y-180 backface-hidden">
          <div
            className={clsx(
              "flex",
              "flex-col",
              "rounded-[30px]",
              "bg-gray-900",
              "border",
              "border-white/20",
              "p-3",
              "w-full",
              "h-full",
              "origin-center",
              "transition-transform",
              "duration-500",
              "ease-in-out",
              "hover:rotate-y-18",
              "hover:rotate-x-6",
            )}
          >
            <Heading as="h3">Perfil</Heading>
            <div className="flex flex-col flex-1 justify-around items-start">
              <span className={lineStyle}>
                <strong>Dev:</strong> Full-Stack
              </span>
              <span className={lineStyle}>
                <strong>Foco:</strong> React & Next.JS
              </span>
              <span className={lineStyle}>
                <strong>Cursando:</strong> ADS
              </span>
              <span className={lineStyle}>
                <strong>Universidade:</strong> UNISO{" "}
              </span>
              <span className={lineStyle}>
                <strong>Modalidade:</strong> Remoto / Híbrido
              </span>
              <span className={lineStyle}>
                <strong>Status:</strong>{" "}
                <span className="flex gap-2 items-center animate-text-pulse-green text-[.9rem] md:text-[1.1rem]">
                  <Circle
                    stroke="currentColor"
                    fill="currentColor"
                    className="outline outline-offset-4 rounded-[50%] w-2 h-2 md:w-3 md:h-3"
                  />{" "}
                  Aberto para oportunidades
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
