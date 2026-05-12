"use client";
import { useState } from "react";
import { ContentSwitcher } from "./switcher/ContentSwitcher";
import {
  AwardIcon,
  BookOpenIcon,
  CodeIcon
} from "lucide-react";
import { SwitchButton } from "./switcher/SwitchButton";
import { Certificates } from "./views/Certificates";
import { Projects } from "./views/Projects";
import { Stack } from "./views/Stack";
import { Section } from "../Section";
import { Heading } from "../Heading";
type Portfolio = "projetos" | "certificados" | "stack";

export function PortfolioSwitcher() {
  const [isActive, setIsActive] = useState<Portfolio>("projetos");

  const title: Record<Portfolio, string> = {
    projetos: "Projetos Desenvolvidos",
    certificados: "Certificados",
    stack: "Stack Tecnológica",
  };

  return (
    <Section className="flex flex-col gap-6" id="portfolio">
      <Heading>{title[isActive]}</Heading>
      <ContentSwitcher>
        <SwitchButton
          isActive={isActive === "projetos"}
          onClick={() => setIsActive("projetos")}
        >
          Projetos <CodeIcon />
        </SwitchButton>

        <SwitchButton
          isActive={isActive === "certificados"}
          onClick={() => setIsActive("certificados")}
        >
          Certificados <AwardIcon />
        </SwitchButton>

        <SwitchButton
          isActive={isActive === "stack"}
          onClick={() => setIsActive("stack")}
        >
          Stack <BookOpenIcon />
        </SwitchButton>
      </ContentSwitcher>
      {isActive === "projetos" && <Projects />}
      {isActive === "certificados" && <Certificates />}
      {isActive === "stack" && <Stack />}
    </Section>
  );
}
