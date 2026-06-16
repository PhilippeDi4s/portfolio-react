import {
  GraduationCap,
  University,
  MonitorSmartphone,
  ChartColumn,
  Trophy,
  Bot,
  Atom,
  Layers3,
} from "lucide-react";

import { ElementType } from "react";

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
  icon: ElementType; 
  position: "top" | "bottom"; 
}

export const timelineItems: TimelineItem[] = [
  {
    date: "12/2024",
    title: "Técnico Concluído",
    description:
      "Concluí o curso Técnico em Desenvolvimento de Sistemas pela ETEC Sales Gomes.",
    icon: GraduationCap,
    position: "bottom",
  },
  {
    date: "02/2025",
    title: "Início da Graduação",
    description:
      "Iniciei a graduação em Análise e Desenvolvimento de Sistemas na UNISO.",
    icon: University,
    position: "top",
  },
  {
    date: "07/2025",
    title: "Web Front-End",
    description:
      "Aprofundei HTML, CSS e JavaScript, fortalecendo lógica e desenvolvimento web.",
    icon: MonitorSmartphone,
    position: "bottom",
  },
  {
    date: "07/2025",
    title: "Certificação em Dados",
    description:
      "Conquistei a certificação em Análise de Dados com Python através de projeto prático.",
    icon: ChartColumn,
    position: "top",
  },
  {
    date: "10/2025",
    title: "Aluno Top",
    description:
      "Recebi o prêmio Aluno Top pelo desempenho acadêmico na universidade.",
    icon: Trophy,
    position: "bottom",
  },
  {
    date: "10/2025",
    title: "Certificação em IA",
    description:
      "Obtive certificação em IA desenvolvendo agentes com LLMs e LangChain.",
    icon: Bot,
    position: "top",
  },
  {
    date: "02/2026",
    title: "React & Next.js",
    description:
      "Iniciei especialização em React, Next.js e TypeScript para aplicações modernas.",
    icon: Atom,
    position: "bottom",
  },
  {
    date: "03/2026",
    title: "Full Stack Moderno",
    description:
      "Consolidei conhecimentos full stack com APIs, ORM, PostgreSQL e deploy.",
    icon: Layers3,
    position: "top",
  },
];
