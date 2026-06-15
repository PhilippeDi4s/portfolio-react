"use client";

import { Heading } from "@/src/components/Heading";
import { Section } from "@/src/components/Section";
import { SectionDivider } from "@/src/components/SectionDivider";
import Fade from "embla-carousel-fade";
import useEmblaCarousel from "embla-carousel-react";
import { X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export default function About() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Fade()]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    buttonRefs.current[selectedIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }, [selectedIndex]);

  useEffect(() => {
    if (lightboxSrc) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxSrc]);

  const paragraphStyle =
    "indent-2 leading-7 hyphens-auto text-justify md:leading-10 lg:indent-6 lg:flex-0.5";

  const carouselButtonStyle =
    "shrink-0 border border-white/60 py-3 px-6 rounded-sm transition hover:bg-(--gray) cursor-pointer text-[.8rem]";

  const carouselSelectedButtonStyle = `${carouselButtonStyle} grow bg-(--gray) font-semibold max-w-[20rem]`;

  const titles = [
    "Full-Stack",
    "Front-End",
    "Back-End",
    "Bancos de Dados e ORM",
    "Inteligência Artificial",
    "Análise e Visualização de Dados",
    "Cloud, Deploy e Ferramentas",
    "Competências Profissionais",
  ];

  const slides = [
    {
      title: titles[0],
      content: `Atuo no desenvolvimento completo de aplicações web, desde a construção de interfaces até a implementação da lógica de negócio e persistência de dados. Tenho experiência no desenvolvimento de aplicações modernas utilizando React, Next.js, JavaScript e TypeScript no front-end, além de PHP e Python no back-end. Também realizo integração com APIs, autenticação de usuários, validação de dados, modelagem de banco de dados e deploy de aplicações em ambientes cloud e serverless.`,
      image: "/images/about-images/full-stack.png",
    },
    {
      title: titles[1],
      content: `Desenvolvo interfaces modernas, responsivas e acessíveis utilizando HTML, CSS, JavaScript e TypeScript. Trabalho com React e Next.js para criação de aplicações componentizadas e escaláveis, aplicando conceitos como Context API, Hooks, gerenciamento de estado, roteamento e renderização otimizada. Também utilizo Tailwind CSS para construção de interfaces consistentes, focando em experiência do usuário, performance e manutenção do código.`,
      image: "/images/about-images/front-end.png",
    },
    {
      title: titles[2],
      content: `Possuo experiência no desenvolvimento de APIs e regras de negócio utilizando PHP e Python. Trabalho com autenticação baseada em JWT, controle de sessões através de cookies HttpOnly, validação de dados, arquitetura em camadas, separação de responsabilidades e integração com bancos de dados. Busco desenvolver aplicações seguras, organizadas e preparadas para crescimento e manutenção a longo prazo.`,
      image: "/images/about-images/back-end.png",
    },
    {
      title: titles[3],
      content: `Tenho experiência com MySQL e PostgreSQL, realizando modelagem de dados, criação de relacionamentos, consultas SQL e otimização de estruturas para aplicações web. Também utilizo Drizzle ORM para abstração da camada de persistência, gerenciamento de migrations, tipagem segura e desenvolvimento de aplicações mais organizadas e escaláveis.`,
      image: "/images/about-images/bd-orm.png",
    },
    {
      title: titles[4],
      content: `Desenvolvo soluções utilizando Large Language Models (LLMs), aplicando técnicas modernas de IA para automação de processos e construção de sistemas inteligentes. Possuo experiência com LangChain, LangGraph, FAISS, Pydantic e integração com modelos como Google Gemini. Também desenvolvo pipelines RAG (Retrieval-Augmented Generation), sistemas de busca semântica, classificação automática de solicitações e agentes baseados em inteligência artificial.`,
      image: "/images/about-images/ia.png",
    },
    {
      title: titles[5],
      content: `Utilizo Python para tratamento, transformação e análise de dados através das bibliotecas Pandas e NumPy. Possuo experiência na criação de dashboards interativos utilizando Streamlit, além de visualizações com Matplotlib, Seaborn e Plotly. Meu foco é transformar dados brutos em informações úteis, facilitando análises, identificação de padrões e tomada de decisões.`,
      image: "/images/about-images/dados.png",
    },
    {
      title: titles[6],
      content: `Trabalho com ferramentas modernas do ecossistema de desenvolvimento, incluindo Git e GitHub para versionamento e colaboração. Possuo experiência com Vercel para deploy de aplicações, Neon para bancos de dados PostgreSQL serverless e Cloudinary para armazenamento e gerenciamento de imagens. Também utilizo Vite, Node.js e outras ferramentas voltadas para produtividade, performance e escalabilidade.`,
      image: "/images/about-images/deploy.png",
    },
    {
      title: titles[7],
      content: `Além das competências técnicas, desenvolvi habilidades relacionadas ao trabalho em equipe, comunicação, organização e resolução de problemas. Participei de projetos acadêmicos e soluções para clientes reais, realizando levantamento de requisitos, alinhamento de expectativas, planejamento de funcionalidades e implementação de soluções focadas nas necessidades dos usuários.`,
      image: "/images/about-images/competencias.png",
    },
  ];

  return (
    <Section className="gap-3">
      <Heading>Sobre Mim</Heading>
      <SectionDivider />

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="flex flex-col w-full min-w-0 shrink-0 grow-0 basis-full gap-2"
            >
              <Heading as="h2">{slide.title}</Heading>
              <div className="flex justify-between gap-10">
                <p className={paragraphStyle}>{slide.content}</p>
                <Image
                  className="hidden lg:block rounded-xl cursor-zoom-in border border-white/40"
                  alt={slide.title}
                  src={slide.image}
                  width={700}
                  height={700}
                  onClick={() => setLightboxSrc(slide.image)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex justify-center gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {slides.map((slide, i) => (
          <button
            key={i}
            ref={(el) => {
              buttonRefs.current[i] = el;
            }}
            className={
              selectedIndex === i
                ? carouselSelectedButtonStyle
                : carouselButtonStyle
            }
            onClick={() => scrollTo(i)}
          >
            {i + 1}
            {selectedIndex === i && `. ${slide.title}`}
          </button>
        ))}
      </div>

      <SectionDivider />

      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setLightboxSrc(null)}
        >
          <button
            className="absolute top-4 right-4 text-white cursor-pointer p-2 rounded-full hover:bg-white/10 transition"
            onClick={() => setLightboxSrc(null)}
          >
            <X size={28} />
          </button>
          <div onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightboxSrc}
              alt="Imagem ampliada"
              width={1100}
              height={1100}
              className="rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </Section>
  );
}
