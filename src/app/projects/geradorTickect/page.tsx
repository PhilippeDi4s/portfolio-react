import { ProjectPage } from "@/src/components/ProjectPage";
import { ProjectCarousel } from "@/src/components/ProjectPage/carousel/ProjectCarousel";
import { ProjectActions } from "@/src/components/ProjectPage/ProjectActions";
import { ProjectInfoCard } from "@/src/components/ProjectPage/ProjectInfoCard";
import { ProjectInfoSection } from "@/src/components/ProjectPage/ProjectInfoSection";
import { ProjectSummary } from "@/src/components/ProjectPage/ProjectSummary";

import { Metadata } from "next";

const projectTitle = "Gerador de Tickect";

export const metadata: Metadata = {
  title: projectTitle,
};

type ProjectInfoProps = { as: "div" | "section" };

const technologies = ["HTML", "CSS", "JavaScript"];

function ProjectInfo({ as }: ProjectInfoProps) {
  const className = as === "div" ? "hidden xl:grid" : "grid xl:hidden";

  return (
    <ProjectInfoSection as={as} className={className}>
      {technologies.map((tech) => (
        <ProjectInfoCard key={tech}>{tech}</ProjectInfoCard>
      ))}
    </ProjectInfoSection>
  );
}

export default function Home() {
  return (
    <ProjectPage
      projectTitle={projectTitle}
      left={
        <>
          <p className="block leading-8 indent-2 md:hidden">
            Gerador de ingressos com formulário validado em JavaScript,
            incluindo upload e preview de avatar, persistência de dados com
            localStorage e geração dinâmica do ticket por meio da manipulação do
            DOM, em uma interface responsiva e acessível.
          </p>

          <p className="hidden md:block leading-8 indent-2 md:indent-5">
            Projeto de gerador de ingressos para conferência desenvolvido com
            HTML, CSS e JavaScript, com foco em validação de formulários,
            acessibilidade e manipulação do DOM. O sistema permite que o usuário
            preencha seus dados pessoais, faça upload de um avatar e receba
            feedback em tempo real durante a digitação, exibindo ou ocultando
            mensagens de erro conforme a validação dos campos.
          </p>

          <p className="hidden md:block leading-8 indent-2 md:indent-5">
            Projeto de gerador de ingressos para conferência desenvolvido com
            HTML, CSS e JavaScript, com foco em validação de formulários,
            acessibilidade e manipulação do DOM. O sistema permite que o usuário
            preencha seus dados pessoais, faça upload de um avatar e receba
            feedback em tempo real durante a digitação, exibindo ou ocultando
            mensagens de erro conforme a validação dos campos.
          </p>

          <p className="hidden md:block leading-8 indent-2 md:indent-5">
            Projeto de gerador de ingressos para conferência desenvolvido com
            HTML, CSS e JavaScript, com foco em validação de formulários,
            acessibilidade e manipulação do DOM. O sistema permite que o usuário
            preencha seus dados pessoais, faça upload de um avatar e receba
            feedback em tempo real durante a digitação, exibindo ou ocultando
            mensagens de erro conforme a validação dos campos.
          </p>

          <ProjectSummary
            projectType="Desafio"
            source="FrontEnd Mentor"
            technologiesCount={technologies.length}
          />

          <ProjectInfo as="div" />
        </>
      }
      right={
        <>
          <ProjectCarousel
            images={[
              {
                src: "/images/projects-images/tickect_generator.png",
                alt: "Imagem 1",
              },
            ]}
          />
          <ProjectActions
            gitRepositoryUrl="https://github.com/PhilippeDi4s/conference-ticket-generator"
            liveDemoUrl="https://philippedi4s.github.io/conference-ticket-generator/pages/form.html"
          />
          <ProjectInfo as="section" />
        </>
      }
    />
  );
}
