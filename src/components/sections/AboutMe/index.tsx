import { BlueLink } from "../../BlueLink";
import { Heading } from "../../Heading";
import { SplitLayout } from "../../layout/SplitLayout";

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

      <SplitLayout.Right>
        <h3 className="hidden md:block text-(--secondary-color) font-extrabold text-[1.5rem]">
          Desenvolvedor Full-Stack com técnico em Desenvolvimento de Sistemas
        </h3>
        <p className="leading-10 md:hidden">
          <strong>Sou estudante de Análise e Desenvolvimento de Sistemas e Técnico em
          Desenvolvimento de Sistemas, com foco em desenvolvimento web front-end
          e back-end. Tenho experiência com HTML, CSS, JavaScript, PHP, Python,
          MySQL e GitHub</strong>, atuando na criação de soluções funcionais, bem
          estruturadas e centradas na experiência do usuário. Busco uma
          oportunidade no mercado desenvolvimento web para contribuir com
          projetos reais e evoluir profissionalmente.
        </p>
        <p className="leading-10 hidden md:block">
          <strong>Sou estudante de Análise e Desenvolvimento de Sistemas e Técnico em
          Desenvolvimento de Sistemas pela ETEC , com foco em desenvolvimento
          web front-end e back-end. Tenho experiência prática com HTML, CSS,
          JavaScript, PHP, Python e MySQL</strong>, atuando desde a modelagem de bancos
          de dados até a integração completa com interfaces funcionais e bem
          estruturadas. Participei do desenvolvimento de soluções para clientes
          reais, realizando levantamento de requisitos, versionamento com GitHub
          e aplicação de boas práticas de desenvolvimento. Busco uma
          oportunidade no mercado de desenvolvimento web onde eu possa
          contribuir com projetos reais, evoluir tecnicamente e gerar impacto
          por meio de soluções eficientes e centradas no usuário.
        </p>
        <nav className="flex gap-4 md:gap-8">
          <BlueLink href="#">Mais Sobre Mim</BlueLink>
          <BlueLink href="#">Meu currículo</BlueLink>
        </nav>
      </SplitLayout.Right>
    </SplitLayout>
  );
}
