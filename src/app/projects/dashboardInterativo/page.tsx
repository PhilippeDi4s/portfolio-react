import { ProjectPage } from "@/src/components/ProjectPage";
import { ProjectCarousel } from "@/src/components/ProjectPage/carousel/ProjectCarousel";
import { ProjectActions } from "@/src/components/ProjectPage/ProjectActions";
import { ProjectDescription } from "@/src/components/ProjectPage/ProjectDescription";
import { ProjectInfoCard } from "@/src/components/ProjectPage/ProjectInfoCard";
import { ProjectInfoSection } from "@/src/components/ProjectPage/ProjectInfoSection";
import { ProjectSummary } from "@/src/components/ProjectPage/ProjectSummary";

import { Metadata } from "next";

const projectTitle = "Dashboard Interativo";

export const metadata: Metadata = {
  title: projectTitle,
};

type ProjectInfoProps = { as: "div" | "section" };

const technologies = ["Python", "Pandas", "Streamlit", "Plotly"];

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
          <ProjectDescription>
            <ProjectDescription.ShortDescription>
              <p>
                Dashboard interativo desenvolvido em Python, com uso de Pandas
                para análise de dados e Streamlit para criação de uma interface
                responsiva, incluindo filtros dinâmicos, KPIs e gráficos
                interativos que facilitam a exploração dos dados salariais na
                área de dados.
              </p>
            </ProjectDescription.ShortDescription>

            <ProjectDescription.Description>
              <p>
                Dashboard interativo de análise de salários na área de dados,
                desenvolvido inteiramente em Python, utilizando Pandas para
                carregamento, limpeza e filtragem do dataframe, Streamlit para
                construção da interface e Plotly para visualizações interativas.
                O projeto conta com filtros dinâmicos na barra lateral (ano,
                senioridade, tipo de contrato e tamanho da empresa), permitindo
                análises personalizadas em tempo real.
              </p>

              <p>
                O dashboard apresenta métricas principais (KPIs), como salário
                médio, salário máximo, total de registros e cargo mais
                frequente, além de gráficos interativos (ranking de cargos,
                distribuição salarial, proporção de trabalho remoto e mapa de
                salários por país). A aplicação foi construída com layout
                responsivo, organização em colunas e foco na exploração e
                interpretação dos dados.
              </p>
            </ProjectDescription.Description>
          </ProjectDescription>

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
                src: "/images/projects-images/menu_cart.png",
                alt: "Imagem 1",
              },
            ]}
          />
          <ProjectActions
            gitRepositoryUrl="https://github.com/PhilippeDi4s/dashboard_interativo"
            liveDemoUrl="https://dashboardinterativo-2025.streamlit.app/"
          />
          <ProjectInfo as="section" />
        </>
      }
    />
  );
}
