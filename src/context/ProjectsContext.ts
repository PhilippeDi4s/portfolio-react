"use client"

import { createContext } from "react";
import { ProjectModel } from "../models/projectModel";

type ProjectsContextType = {
  projects: ProjectModel[];
};

export const projectsData: ProjectModel[] = [
  {
    title: "Chronos Pomodoro",
    cardImageSrc: "/images/projects-images/chronos_pomodoro-1.png",
    cardDescription:
      "Aplicação SPA de cronômetro Pomodoro feita com React e Vite, com ciclos de foco/descanso, histórico de tarefas, temas personalizáveis, notificações com React Toastify e contagem precisa via Web Worker.",
    projectShortDescription: [
      "Aplicação web SPA de produtividade baseada na técnica Pomodoro. O usuário pode configurar os tempos de foco e descanso, registrar a tarefa atual e acompanhar o histórico dos ciclos realizados. O cronômetro roda em segundo plano com Web Worker, mantendo a contagem correta mesmo com a aba minimizada.",
      "O projeto utiliza React, Context API e useReducer para gerenciamento global de estado, React Router DOM para navegação entre páginas e React Toastify para notificações visuais. Os dados são salvos no Local Storage e a interface permite personalização de temas para melhorar a experiência do usuário.",
    ],
    projectDescription: [
      "O gerenciamento de estado global é realizado com Context API e useReducer, estruturando as regras de negócio de forma escalável. O cronômetro funciona em segundo plano por meio de um Web Worker, mantendo a contagem precisa mesmo com a aba minimizada e sem bloquear a thread principal da aplicação.",
      "A aplicação utiliza React Toastify para notificações e feedbacks visuais, além de alertas interativos. Os dados de tarefas e configurações são persistidos no Local Storage, preservando o histórico entre sessões. O sistema também inclui temas personalizáveis e feedback sonoro ao final dos ciclos, reforçando a experiência do usuário.",
    ],
    techUsed: [
      "Vite",
      "React",
      "Context Api",
      "Worker JS",
      "TypeScript",
      "JavaScript",
    ],
    projectSource: "Curso Udemy",
    projectType: "Projeto",
    imagesCarousel: [
      {
        src: "/images/projects-images/chronos_pomodoro-1.png",
        alt: "Imagem 1 do projeto",
      },
      {
        src: "/images/projects-images/chronos_pomodoro-2.png",
        alt: "Imagem 2 do projeto",
      },
      {
        src: "/images/projects-images/chronos_pomodoro-3.png",
        alt: "Imagem 3 do projeto",
      },
      {
        src: "/images/projects-images/chronos_pomodoro-4.png",
        alt: "Imagem 4 do projeto",
      },
    ],
    gitRepositoryLink: "https://github.com/PhilippeDi4s/chronos-pomodoro",
    detailsLink: "/projects/chronosPomodoro",
    liveDemoLink: "https://chronos-pomodoro-amber.vercel.app/",
  },
  {
    title: "Menu com Carrinho",
    cardImageSrc: "/images/projects-images/menu_cart.png",
    cardDescription:
      "Projeto de menu interativo com carrinho funcional, permitindo adicionar, remover e ajustar itens, confirmar pedidos via modal e navegar em uma interface responsiva e acessível.",
    projectShortDescription: [
      "Menu interativo desenvolvido com JavaScript, utilizando fetch() para consumir dados de um JSON local e manipulação do DOM para gerar dinamicamente os itens do menu. O projeto conta com carrinho funcional, controle de quantidades, atualização automática de valores e modal de confirmação, mantendo um layout adaptável e uma navegação clara em diferentes tamanhos de tela.",
    ],
    projectDescription: [
      "Projeto de menu interativo com carrinho de compras desenvolvido em HTML, CSS e JavaScript, no qual os dados dos itens foram armazenados em um arquivo JSON local e consumidos via fetch(). A partir desses dados, os itens do menu foram renderizados dinamicamente por meio da manipulação do DOM, criando automaticamente os cards com nome, categoria, preço e imagens responsivas.",
      "O carrinho permite adicionar, remover e ajustar quantidades, com cálculo automático de valores, contador de itens e modal de confirmação de pedido, tudo em uma interface responsiva, com estados de hover e foco e atenção à experiência do usuário.",
    ],
    techUsed: ["HTML", "CSS", "JavaScript", "JSON"],
    projectSource: "FrontEndMentor",
    projectType: "Desafio",
    imagesCarousel: [
      {
        src: "/images/projects-images/menu_cart.png",
        alt: "Imagem do projeto",
      },
    ],
    gitRepositoryLink: "https://github.com/PhilippeDi4s/product-list-with-cart",
    detailsLink: "/projects/menuCarrinho",
    liveDemoLink: "https://philippedi4s.github.io/product-list-with-cart/",
  },
  {
    title: "Gerador de Ticket",
    cardImageSrc: "/images/projects-images/ticket_generator.png",
    cardDescription:
      "Gerador de ingressos para conferência com formulário acessível e responsivo, incluindo validações de campos, suporte a navegação por teclado, feedback para leitores de tela e geração do ingresso após o envio bem-sucedido.",
    projectShortDescription: [
      "Gerador de ingressos com formulário validado em JavaScript, incluindo upload e preview de avatar, persistência de dados com localStorage e geração dinâmica do ticket por meio da manipulação do DOM, em uma interface responsiva e acessível.",
    ],
    projectDescription: [
      "Projeto de gerador de ingressos para conferência desenvolvido com HTML, CSS e JavaScript, com foco em validação de formulários, acessibilidade e manipulação do DOM. O sistema permite que o usuário preencha seus dados pessoais, faça upload de um avatar e receba feedback em tempo real durante a digitação, exibindo ou ocultando mensagens de erro conforme a validação dos campos.",
    ],
    techUsed: ["HTML", "CSS", "JavaScript"],
    projectSource: "FrontEnd Mentor",
    projectType: "Desafio",
    imagesCarousel: [
      {
        src: "/images/projects-images/ticket_generator.png",
        alt: "Imagem do projeto",
      },
    ],
    gitRepositoryLink:
      "https://github.com/PhilippeDi4s/conference-ticket-generator",
    detailsLink: "/projects/geradorTicket",
    liveDemoLink:
      "https://philippedi4s.github.io/conference-ticket-generator/pages/form.html",
  },
  {
    title: "Dashboard Interativo",
    cardImageSrc: "/images/projects-images/dashboard_python.png",
    cardDescription:
      "Dashboard interativo desenvolvido em Python a partir de dados tratados, com foco em análise de dados, visualização clara e layout responsivo.",
    projectShortDescription: [
      "Dashboard interativo desenvolvido em Python, com uso de Pandas para análise de dados e Streamlit para criação de uma interface responsiva, incluindo filtros dinâmicos, KPIs e gráficos interativos que facilitam a exploração dos dados salariais na área de dados.",
    ],
    projectDescription: [
      "Dashboard interativo de análise de salários na área de dados, desenvolvido inteiramente em Python, utilizando Pandas para carregamento, limpeza e filtragem do dataframe, Streamlit para construção da interface e Plotly para visualizações interativas. O projeto conta com filtros dinâmicos na barra lateral (ano, senioridade, tipo de contrato e tamanho da empresa), permitindo análises personalizadas em tempo real.",
      "O dashboard apresenta métricas principais (KPIs), como salário médio, salário máximo, total de registros e cargo mais frequente, além de gráficos interativos (ranking de cargos, distribuição salarial, proporção de trabalho remoto e mapa de salários por país). A aplicação foi construída com layout responsivo, organização em colunas e foco na exploração e interpretação dos dados.",
    ],
    techUsed: ["Python", "Pandas", "Streamlit", "Plotly"],
    projectSource: "Alura",
    projectType: "Projeto",
    imagesCarousel: [
      {
        src: "/images/projects-images/dashboard_python.png",
        alt: "Imagem do projeto",
      },
    ],
    gitRepositoryLink: "https://github.com/PhilippeDi4s/dashboard_interativo",
    detailsLink: "/projects/dashboardInterativo",
    liveDemoLink: "https://dashboardinterativo-2025.streamlit.app/",
  },
];

export const ProjectsContext = createContext<ProjectsContextType | null>(null);
