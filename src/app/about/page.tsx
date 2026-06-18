"use client";

import { SkillsSlidesContent } from "@/src/components/about/SkillsContent";
import { TextCarousel } from "@/src/components/about/TextCarousel";
import { TimeLine } from "@/src/components/about/TimeLine";
import { timelineItems } from "@/src/components/about/TimelineItems";
import { Heading } from "@/src/components/Heading";
import { Section } from "@/src/components/Section";
import { SectionDivider } from "@/src/components/SectionDivider";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const paragraphStyle =
    "indent-2 leading-7 hyphens-auto text-justify md:leading-10 lg:indent-4";

  return (
    <>
      <Section className="gap-3">
        <Heading>Sobre Mim</Heading>
        <p className={paragraphStyle}>
          Olá! Sou Philippe Dias, estudante de Análise e Desenvolvimento de
          Sistemas e apaixonado por tecnologia desde a infância. Há mais de
          quatro anos venho estudando programação e transformando minha
          curiosidade em conhecimento prático, sempre buscando entender como as
          tecnologias funcionam e como podem ser utilizadas para resolver
          problemas reais. Atualmente concentro meus estudos e projetos em
          desenvolvimento web full stack, Inteligência Artificial e análise de
          dados. Acredito no aprendizado contínuo e estou sempre explorando
          novas ferramentas, tecnologias e boas práticas para evoluir como
          desenvolvedor e criar soluções cada vez mais eficientes e impactantes.
        </p>
        <SectionDivider />
        <TextCarousel
          paragraphStyle={paragraphStyle}
          slides={SkillsSlidesContent}
        />
        <SectionDivider />
      </Section>
      <Section>
        <Heading as="h2">Experiência & Educação</Heading>
        <TimeLine timelineItems={timelineItems} />
      </Section>
    </>
  );
}
