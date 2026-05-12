import { ProjectPage } from "@/src/components/ProjectPage";
import { ProjectCarousel } from "@/src/components/ProjectPage/carousel/ProjectCarousel";
import { ProjectActions } from "@/src/components/ProjectPage/ProjectActions";
import { ProjectInfoCard } from "@/src/components/ProjectPage/ProjectInfoCard";
import { ProjectInfoSection } from "@/src/components/ProjectPage/ProjectInfoSection";
import { ProjectSummary } from "@/src/components/ProjectPage/ProjectSummary";

import { Metadata } from "next";

const projectTitle = "Chronos Pomodoro";

export const metadata: Metadata = {
  title: projectTitle,
};

type ProjectInfoProps = { as: "div" | "section" };

const technologies = [
  "Vite",
  "React",
  "Context Api",
  "Worker JS",
  "TypeScript",
  "JavaScript",
];

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
            Aplicação web SPA de produtividade baseada na técnica Pomodoro. O
            usuário pode configurar os tempos de foco e descanso, registrar a
            tarefa atual e acompanhar o histórico dos ciclos realizados. O
            cronômetro roda em segundo plano com Web Worker, mantendo a contagem
            correta mesmo com a aba minimizada.
          </p>
          <p className="block leading-8 indent-2 md:hidden">
            O projeto utiliza React, Context API e useReducer para gerenciamento
            global de estado, React Router DOM para navegação entre páginas e
            React Toastify para notificações visuais. Os dados são salvos no
            Local Storage e a interface permite personalização de temas para
            melhorar a experiência do usuário.
          </p>

          <p className="hidden md:block leading-8 indent-2 md:indent-5">
            O gerenciamento de estado global é realizado com Context API e
            useReducer, estruturando as regras de negócio de forma escalável. O
            cronômetro funciona em segundo plano por meio de um Web Worker,
            mantendo a contagem precisa mesmo com a aba minimizada e sem
            bloquear a thread principal da aplicação.
          </p>

          <p className="hidden md:block leading-8 indent-2 md:indent-5">
            A aplicação utiliza React Toastify para notificações e feedbacks
            visuais, além de alertas interativos. Os dados de tarefas e
            configurações são persistidos no Local Storage, preservando o
            histórico entre sessões. O sistema também inclui temas
            personalizáveis e feedback sonoro ao final dos ciclos, reforçando a
            experiência do usuário.
          </p>

          <ProjectSummary
            projectType="Projeto"
            source="Curso Udemy"
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
                src: "/images/projects-images/chronos_pomodoro-1.png",
                alt: "Imagem 1",
              },
              {
                src: "/images/projects-images/chronos_pomodoro-2.png",
                alt: "Imagem 2",
              },
              {
                src: "/images/projects-images/chronos_pomodoro-3.png",
                alt: "Imagem 3",
              },
              {
                src: "/images/projects-images/chronos_pomodoro-4.png",
                alt: "Imagem 4",
              },
            ]}
          />
          <ProjectActions
            gitRepositoryUrl="https://github.com/PhilippeDi4s/chronos-pomodoro"
            liveDemoUrl="https://chronos-pomodoro-amber.vercel.app/"
          />

          <ProjectInfo as="section" />
        </>
      }
    />
  );
}
