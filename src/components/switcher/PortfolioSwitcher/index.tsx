"use client";
import { useState } from "react";
import { ContentSwitcher } from "../ContentSwitcher";
import { SwitchButton } from "../SwitchButton";
import { Heading } from "../../Heading";
import { Projects } from "../../sections/Projects";
import { Certificates } from "../../sections/Certificates";
import { Stack } from "../../sections/Stack";
import { AwardIcon, BookOpenIcon, CodeIcon } from "lucide-react";
import { Section } from "../../Section";

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
