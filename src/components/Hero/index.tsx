import { ArrowUpIcon } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import clsx from "clsx";
import { LINKEDIN, GITHUB } from "@/src/lib/const";
import { IconLink } from "../IconLink";
import { SplitLayout } from "../layout/SplitLayout";

export function Hero() {
  return (
    <SplitLayout sectionId="inicio" alignComponents="start">
      <SplitLayout.Left>
        <h1 className="text-[3.5rem]/15  uppercase md:text-[6.3rem]/25 lg:text-[6.3rem]/25">
          Olá, Eu Sou <br />
          Philippe Dias.
        </h1>
        <p className="text-[clamp(1rem,6vw,1.5rem)]">
          Técnico em Desenvolvimento de sistemas, programador Full-Stack.
          Atualmente, na faculdade, estou cursando Análise e Desenvolvimento de
          Sistemas.
        </p>
        <div className="flex items-center gap-4 md:gap-6">
          <span
            className={clsx(
              "group",
              "flex",
              "items-center",
              "gap-1",
              "bg-(--blue-500)",
              "px-4",
              "py-3",
              "rounded-4xl",
              "text-[clamp(0.9rem3vw1.3rem)]",
              "font-bold",
              "text-black",
              "select-none",
              "md:px-8",
              "md:py-4",
              "md:mr-2",
            )}
          >
            Me contate
            <ArrowUpIcon className="transition-transform duration-500 group-hover:rotate-90" />
          </span>
          <IconLink
            href={LINKEDIN}
            icon={<FaLinkedin className="text-[clamp(1.8rem,6vw,2.5rem)]" />}
            type="filled"
          />
          <IconLink
            href={GITHUB}
            icon={<FaGithub className="text-[clamp(1.8rem,6vw,2.5rem)]" />}
            type="filled"
          />
        </div>
      </SplitLayout.Left>
      <SplitLayout.Right>
        <div className="perspective-distant w-full">
          <Image
            src="/images/profile-picture/profile.jpeg"
            alt="Foto de perfil"
            width={800}
            height={800}
            className={clsx(
              "w-full",
              "max-w-140",
              "mx-auto",
              "max-w-[clamp(35rem6vw40rem)]",
              "object-cover",
              "rounded-[30px]",
              "origin-center",
              "transition-transform",
              "duration-500",
              "ease-in-out",
              "hover:rotate-y-18",
              "hover:rotate-x-6",
              "lg:max-h-140",
            )}
          />
        </div>
      </SplitLayout.Right>
    </SplitLayout>
  );
}
