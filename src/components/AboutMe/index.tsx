import { RESUME } from "@/src/lib/const";
import { BlueLink } from "../BlueLink";
import { Heading } from "../Heading";
import { SplitLayout } from "../layout/SplitLayout";

export function AboutMe() {
  return (
    <SplitLayout
      sectionId="sobreMim"
      alignComponents="start"
      alignComponentsDesktop="center"
    >
      <SplitLayout.Left flex={0.5} className="items-start xl:items-center">
        <Heading>Sobre mim</Heading>
      </SplitLayout.Left>

      <SplitLayout.Right className="gap-3 indent-2 lg:indent-4">
        <h3 className="hidden md:block text-(--secondary-color) font-extrabold text-[1.5rem] indent-0">
          Desenvolvedor Full-Stack
        </h3>
        <p className="leading-8 hyphens-auto text-justify md:leading-10">
          Sou estudante de Análise e Desenvolvimento de Sistemas e Técnico em
          Desenvolvimento de Sistemas pela ETEC, com foco em desenvolvimento web
          full stack.
        </p>
        <p className="leading-8 hyphens-auto text-justify md:leading-10">
          Tenho experiência com{" "}
          <strong>
            React, Next.js, TypeScript, JavaScript, PHP, Python, MySQL,
            PostgreSQL e Drizzle ORM
          </strong>
          , desenvolvendo aplicações modernas desde o front-end até a integração
          com bancos de dados e APIs. Também possuo experiência com Inteligência
          Artificial utilizando LLMs e LangChain, além de versionamento com Git
          e desenvolvimento de soluções para clientes reais.
        </p>
        <p className="leading-8 hyphens-auto text-justify font-bold md:leading-10">
          Busco oportunidades onde possa contribuir com projetos reais, evoluir
          junto a um time e entregar soluções que gerem impacto.
        </p>
        <nav className="flex flex-wrap gap-6 justify-center mt-5 indent-0 md:gap-8 md:justify-start">
          <BlueLink href="./about">Mais Sobre Mim</BlueLink>
          <BlueLink href={RESUME}>Meu currículo</BlueLink>
        </nav>
      </SplitLayout.Right>
    </SplitLayout>
  );
}
