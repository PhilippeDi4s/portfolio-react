import {
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { TechCard } from "../../TechCard";
import { SiMysql, SiNextdotjs, SiPhp, SiVite } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import clsx from "clsx";

export function Stack() {
  return (
    <section
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
      <TechCard icon={FaHtml5} text="HTML" iconColor="#e34f26" />
      <TechCard icon={FaCss3} text="CSS" iconColor="#1572b6" />
      <TechCard icon={FaJs} text="JavaScript" iconColor="#f7df1e" />
      <TechCard icon={SiVite} text="Vite" iconColor="#1572b6" />
      <TechCard icon={FaReact} text="React" iconColor="#61dafb" />
      <TechCard icon={BiLogoTypescript} text="TypeScript" iconColor="#007acc" />
      <TechCard icon={SiNextdotjs} text="Next.js" iconColor="#c4c4cc" />
      <TechCard icon={SiPhp} text="PHP" iconColor="#777bb4" />
      <TechCard icon={FaPython} text="Python" iconColor="#3776ab" />
      <TechCard icon={SiMysql} text="MySQL" iconColor="#4479a1" />
      <TechCard icon={FaGithub} text="Github" />
      <TechCard icon={FaGitAlt} text="Git" iconColor="#f05133" />
    </section>
  );
}
