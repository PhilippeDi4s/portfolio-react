import { ProjectPage } from "@/src/components/ProjectPage";
import { ProjectCarousel } from "@/src/components/ProjectPage/carousel/ProjectCarousel";
import { ProjectActions } from "@/src/components/ProjectPage/ProjectActions";
import { ProjectInfoCard } from "@/src/components/ProjectPage/ProjectInfoCard";
import { ProjectInfoSection } from "@/src/components/ProjectPage/ProjectInfoSection";
import { ProjectSummary } from "@/src/components/ProjectPage/ProjectSummary";

import { Metadata } from "next";

const projectTitle = "Menu com Carrinho";

export const metadata: Metadata = {
  title: projectTitle,
};

type ProjectInfoProps = { as: "div" | "section" };

const technologies = ["HTML", "CSS", "JavaScript", "JSON"];

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
            Menu interativo desenvolvido com JavaScript, utilizando fetch() para
            consumir dados de um JSON local e manipulação do DOM para gerar
            dinamicamente os itens do menu. O projeto conta com carrinho
            funcional, controle de quantidades, atualização automática de
            valores e modal de confirmação, mantendo um layout adaptável e uma
            navegação clara em diferentes tamanhos de tela.
          </p>

          <p className="hidden md:block leading-8 indent-2 md:indent-5">
            Projeto de menu interativo com carrinho de compras desenvolvido em
            HTML, CSS e JavaScript, no qual os dados dos itens foram armazenados
            em um arquivo JSON local e consumidos via fetch(). A partir desses
            dados, os itens do menu foram renderizados dinamicamente por meio da
            manipulação do DOM, criando automaticamente os cards com nome,
            categoria, preço e imagens responsivas.
          </p>

          <p className="hidden md:block leading-8 indent-2 md:indent-5">
            O carrinho permite adicionar, remover e ajustar quantidades, com
            cálculo automático de valores, contador de itens e modal de
            confirmação de pedido, tudo em uma interface responsiva, com estados
            de hover e foco e atenção à experiência do usuário.
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
                src: "/images/projects-images/menu_cart.png",
                alt: "Imagem 1",
              },
            ]}
          />
          <ProjectActions
            gitRepositoryUrl="https://github.com/PhilippeDi4s/product-list-with-cart"
            liveDemoUrl="https://philippedi4s.github.io/product-list-with-cart/"
          />
          <ProjectInfo as="section" />
        </>
      }
    />
  );
}
