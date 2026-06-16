"use client";
import { ProjectPage } from "@/src/components/ProjectPage";
import { ProjectCarousel } from "@/src/components/ProjectPage/carousel/ProjectCarousel";
import { ProjectActions } from "@/src/components/ProjectPage/ProjectActions";
import { ProjectDescription } from "@/src/components/ProjectPage/ProjectDescription";
import { ProjectInfo } from "@/src/components/ProjectPage/ProjectInfo";
import { ProjectSummary } from "@/src/components/ProjectPage/ProjectSummary";
import { useProjectsContext } from "@/src/context/useProjectContext";
import { use } from "react";

export default function ProjectDetails({
  params,
}: {
  params: Promise<{ detailsLink: string }>;
}) {
  const { detailsLink } = use(params);
  const { projects } = useProjectsContext();

  const project = projects.find(
    (p) => p.detailsLink === `/projects/${detailsLink}`,
  );

  //TODO:CRIAR PÁGINA PARA REDIRECIONAR USUÁRIO QUANDO NÃO ACHAR A PÁGINA
  //TODO: MUDAR TITLE DA PÁGINA, SEGUIDO O TEMPLETE "NOME PROJETO \ Philippe Dias"
  //TODO:ADICIONAR FUNCIONALIDADE DE CLICAR E A IMAGEM OCUPAR O ESPAÇO INTEIRO DA TELA

  if (!project) return <p>Projeto não encontrado</p>;

  const technologies = project.techUsed;

  return (
    <ProjectPage
      projectTitle={project.title}
      left={
        <>
          <ProjectDescription>
            <ProjectDescription.ShortDescription>
              {project.projectShortDescription.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </ProjectDescription.ShortDescription>

            <ProjectDescription.Description>
              {project.projectDescription.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </ProjectDescription.Description>
          </ProjectDescription>

          <ProjectSummary
            projectType={project.projectType}
            source={project.projectSource}
            technologiesCount={technologies.length}
          />

          <ProjectInfo as="div" technologies={technologies} />
        </>
      }
      right={
        <>
          <ProjectCarousel images={project.imagesCarousel} />
          <ProjectActions
            gitRepositoryUrl={project.gitRepositoryLink}
            liveDemoUrl={project.liveDemoLink}
          />

          <ProjectInfo as="section" technologies={technologies} />
        </>
      }
    />
  );
}
