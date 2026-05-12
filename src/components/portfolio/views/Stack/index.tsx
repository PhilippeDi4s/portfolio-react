import {
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { SiMysql, SiNextdotjs, SiPhp, SiVite } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import clsx from "clsx";
import { StackCard } from "../../cards/StackCard";
import { Section } from "@/src/components/Section";

export function Stack() {
  return (
    <Section
      className={clsx(
        "grid",
        "grid-cols-[repeat(2,max-content)]",
        "justify-center",
        "items-center",
        "gap-x-12",
        "gap-y-4",
        "md:gap-y-6",
        "md:grid-cols-3",
        "lg:grid-cols-4",
        "xl:grid-cols-5",
      )}
    >
      <StackCard icon={FaHtml5} text="HTML" iconColor="#e34f26" />
      <StackCard icon={FaCss3} text="CSS" iconColor="#1572b6" />
      <StackCard icon={FaJs} text="JavaScript" iconColor="#f7df1e" />
      <StackCard icon={SiVite} text="Vite" iconColor="#1572b6" />
      <StackCard icon={FaReact} text="React" iconColor="#61dafb" />
      <StackCard
        icon={BiLogoTypescript}
        text="TypeScript"
        iconColor="#007acc"
      />
      <StackCard icon={SiNextdotjs} text="Next.js" iconColor="#c4c4cc" />
      <StackCard icon={SiPhp} text="PHP" iconColor="#777bb4" />
      <StackCard icon={FaPython} text="Python" iconColor="#3776ab" />
      <StackCard icon={SiMysql} text="MySQL" iconColor="#4479a1" />
      <StackCard icon={FaGithub} text="Github" />
      <StackCard icon={FaGitAlt} text="Git" iconColor="#f05133" />
    </Section>
  );
}
