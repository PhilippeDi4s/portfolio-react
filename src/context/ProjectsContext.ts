"use client";

import { createContext } from "react";
import { ProjectModel } from "../models/projectModel";

type ProjectsContextType = {
  projects: ProjectModel[];
};

export const projectsData: ProjectModel[] = [
  {
    title: "The Blog",
    cardDescription:
      "Plataforma de blog full-stack desenvolvida com Next.js 15, React 19 e PostgreSQL. Possui leitura pública de posts em Markdown e painel administrativo com autenticação JWT, upload de imagens via Cloudinary e Drizzle ORM.",
    projectShortDescription: [
      "The Blog é uma aplicação web de blog desenvolvida com Next.js (App Router), React 19 e Tailwind CSS v4, com persistência em PostgreSQL serverless via Neon e Drizzle ORM. A área pública exibe posts escritos em Markdown com renderização segura (react-markdown + rehype-sanitize), enquanto o painel administrativo oferece CRUD completo de posts com editor Markdown integrado (@uiw/react-md-editor) e upload de imagens de capa processadas com sharp e armazenadas no Cloudinary.",
      "A autenticação do painel admin é stateless, baseada em tokens JWT (jose) gravados em cookies httpOnly e verificados pelo middleware do Next.js antes de qualquer renderização de rota protegida. A arquitetura segue um modelo monolítico em camadas — Server Actions, Repository Pattern e queries cacheadas com revalidação por tag — sem a necessidade de uma API REST separada.",
    ],
    projectDescription: [
      "The Blog é uma aplicação web de blog full-stack desenvolvida com Next.js (App Router), React 19 e Tailwind CSS v4, com persistência em PostgreSQL serverless via Neon e Drizzle ORM. A área pública exibe posts escritos em Markdown com renderização segura por meio de react-markdown, rehype-sanitize e remark-gfm, destacando o post mais recente e apresentando a listagem completa dos publicados. O painel administrativo oferece CRUD completo de posts com editor Markdown integrado (@uiw/react-md-editor), upload de imagens de capa processadas localmente com sharp (redimensionamento para 800px em PNG) e armazenamento na nuvem via SDK do Cloudinary.",
      "A autenticação do painel admin é stateless, baseada em tokens JWT assinados com jose e gravados em cookies httpOnly, verificados pelo middleware.ts do Next.js antes de qualquer renderização de rota em /admin/*. As credenciais de acesso são gerenciadas exclusivamente via variáveis de ambiente, com a senha armazenada comohash bcrypt (bcryptjs) em Base64. A arquitetura segue um modelo monolítico emcamadas — Server Actions para mutações, Repository Pattern (PostRepository →DrizzlePostRepository) para desacoplamento da camada de dados, e queries públicase administrativas cacheadas com revalidação por tag após cada operação de escrita.Validações de entrada são feitas com Zod, e o projeto utiliza TypeScript strict emtodo o codebase, com alias de importação @/* apontando para src/.",
    ],
    techUsed: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Drizzle ORM",
      "Neon",
      "Cloudinary",
      "sharp",
      "JWT (jose)",
      "bcryptjs",
      "Zod",
      "react-markdown",
      "date-fns",
      "slugify",
      "uuid",
      "ESLint",
      "dotenv",
    ],
    projectSource: "Curso Udemy",
    projectType: "Projeto",
    imagesCarousel: {
      desktop: [
        {
          src: "/images/projects-images/blog/blog-1.png",
          alt: "Página inicial do blog com listagem de artigos sobre Server Actions, SSR vs CSR e deploy em Neon",
          imagePosition: "top",
        },
        {
          src: "/images/projects-images/blog/blog-2.png",
          alt: "Artigo sobre deploy gratuito do blog com Next.js, Neon, Cloudinary e Vercel",
          imagePosition: "top",
        },
        {
          src: "/images/projects-images/blog/blog-3.png",
          alt: "Formulário de login do painel administrativo com campos de usuário e senha",
          imagePosition: "top",
        },
        {
          src: "/images/projects-images/blog/blog-4.png",
          alt: "Mensagem de erro de validação no formulário de login indicando usuário ou senha inválidos",
          imagePosition: "center",
        },
        {
          src: "/images/projects-images/blog/blog-5.png",
          alt: "Painel administrativo mostrando lista de posts publicados e não publicados com opções de edição",
          imagePosition: "top",
        },
        {
          src: "/images/projects-images/blog/blog-6.png",
          alt: "Página do editor de posts do painel administrativo com formulário para criar novo post",
          imagePosition: "top",
        },
        {
          src: "/images/projects-images/blog/blog-7.png",
          alt: "Modal de confirmação para deletar um post do blog",
          imagePosition: "center",
        },
        {
          src: "/images/projects-images/blog/blog-8.png",
          alt: "Painel administrativo com navegação superior mostrando opções Home, Posts, Criar Post e Sair",
          imagePosition: "top",
        },
      ],
      mobile: [
        {
          src: "/images/projects-images/blog/blog_sm-1.png",
          alt: "Versão mobile da página inicial do blog mostrando artigos sobre Server Actions",
          imagePosition: "top",
        },
        {
          src: "/images/projects-images/blog/blog_sm-2.png",
          alt: "Versão mobile de um artigo completo do blog com conteúdo em Markdown",
          imagePosition: "top",
        },
        {
          src: "/images/projects-images/blog/blog_sm-3.png",
          alt: "Versão mobile do formulário de login do painel administrativo",
          imagePosition: "top",
        },
        {
          src: "/images/projects-images/blog/blog_sm-4.png",
          alt: "Versão mobile do painel administrativo com lista de posts",
          imagePosition: "center",
        },
        {
          src: "/images/projects-images/blog/blog_sm-5.png",
          alt: "Versão mobile do editor de posts com navegação completa",
          imagePosition: "top",
        },
        {
          src: "/images/projects-images/blog/blog_sm-6.png",
          alt: "Versão mobile do painel administrativo mostrando menu de navegação",
          imagePosition: "top",
        },
        {
          src: "/images/projects-images/blog/blog_sm-7.png",
          alt: "Versão mobile da página de informações do blog",
          imagePosition: "center",
        },
        {
          src: "/images/projects-images/blog/blog_sm-8.png",
          alt: "Versão mobile do blog em tema claro",
          imagePosition: "top",
        },
      ],
    },
    gitRepositoryLink: "https://github.com/PhilippeDi4s/blog-next-react",
    detailsLink: "/projects/theBlog",
    liveDemoLink: "https://blog.diasphilippe.dev.br/",
  },
  {
    title: "Chronos Pomodoro",
    cardDescription:
      "Aplicação SPA de cronômetro Pomodoro feita com React e Vite, com ciclos de foco/descanso, histórico de tarefas, temas personalizáveis, notificações com React Toastify e contagem precisa via Web Worker.",
    projectShortDescription: [
      "Aplicação web SPA de produtividade baseada na técnica Pomodoro. O usuário pode configurar os tempos de foco e descanso, registrar a tarefa atual e acompanhar o histórico dos ciclos realizados. O cronômetro roda em segundo plano com Web Worker, mantendo a contagem correta mesmo com a aba minimizada.",
      "O projeto utiliza React, Context API e useReducer para gerenciamento global de estado, React Router DOM para navegação entre páginas e React Toastify para notificações visuais. Os dados são salvos no Local Storage e a interface permite personalização de temas para melhorar a experiência do usuário.",
    ],
    projectDescription: [
      "Aplicação web SPA de produtividade baseada na técnica Pomodoro. O usuário pode configurar os tempos de foco e descanso, registrar a tarefa atual e acompanhar o histórico dos ciclos realizados. O cronômetro roda em segundo plano com Web Worker, mantendo a contagem correta mesmo com a aba minimizada.",
      "O projeto utiliza React, Context API e useReducer para gerenciamento global de estado, React Router DOM para navegação entre páginas e React Toastify para notificações visuais. Os dados são salvos no Local Storage e a interface permite personalização de temas para melhorar a experiência do usuário.",
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
    imagesCarousel: {
      desktop: [
        {
          src: "/images/projects-images/chronos_pomodoro/chronos_pomodoro-1_md.png",
          alt: "Tela inicial do Chronos Pomodoro com cronômetro zerado e controles de navegação",
          imagePosition: "top",
        },
        {
          src: "/images/projects-images/chronos_pomodoro/chronos_pomodoro-2_md.png",
          alt: "Chronos Pomodoro com tema claro mostrando cronômetro zerado",
          imagePosition: "top",
        },
        {
          src: "/images/projects-images/chronos_pomodoro/chronos_pomodoro-3_md.png",
          alt: "Chronos Pomodoro com tarefa ativa mostrando contador de ciclos completados",
          imagePosition: "top",
        },
        {
          src: "/images/projects-images/chronos_pomodoro/chronos_pomodoro-4_md.png",
          alt: "Página do histórico de tarefas do Chronos Pomodoro",
          imagePosition: "center",
        },
        {
          src: "/images/projects-images/chronos_pomodoro/chronos_pomodoro-5_md.png",
          alt: "Modal de confirmação para deletar histórico de tarefas no Chronos Pomodoro",
          imagePosition: "top",
        },
        {
          src: "/images/projects-images/chronos_pomodoro/chronos_pomodoro-6_md.png",
          alt: "Página de configurações do Chronos Pomodoro para ajustar tempos",
          imagePosition: "top",
        },
        {
          src: "/images/projects-images/chronos_pomodoro/chronos_pomodoro-7_md.png",
          alt: "Página de informações sobre o Chronos Pomodoro",
          imagePosition: "left",
        },
        {
          src: "/images/projects-images/chronos_pomodoro/chronos_pomodoro-8_md.png",
          alt: "Chronos Pomodoro em tema claro com interface adaptada",
          imagePosition: "top",
        },
      ],
    },
    gitRepositoryLink: "https://github.com/PhilippeDi4s/chronos-pomodoro",
    detailsLink: "/projects/chronosPomodoro",
    liveDemoLink: "https://chronos.diasphilippe.dev.br/",
  },
  {
    title: "Menu com Carrinho",
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
    imagesCarousel: {
      desktop: [
        {
          src: "/images/projects-images/menu_cart/menu_cart-1.png",
          alt: "Menu de sobremesas com lista de produtos, imagens, preços e carrinho de compras com itens adicionados",
          imagePosition: "center",
        },
        {
          src: "/images/projects-images/menu_cart/menu_cart-2.png",
          alt: "Modal de confirmação de pedido mostrando resumo dos itens, total e botão para iniciar novo pedido",
          imagePosition: "bottom",
        },
        {
          src: "/images/projects-images/menu_cart/menu_cart-3.png",
          alt: "Menu completo de sobremesas com vários produtos, controles de quantidade e opções de adicionar ao carrinho",
          imagePosition: "right",
        },
      ],

      mobile: [
        {
          src: "/images/projects-images/menu_cart/menu_cart_sm-1.png",
          alt: "Versão mobile do menu de sobremesas com lista de produtos",
          imagePosition: "top",
        },
        {
          src: "/images/projects-images/menu_cart/menu_cart_sm-2.png",
          alt: "Versão mobile do modal de confirmação de pedido com resumo dos itens",
          imagePosition: "bottom",
        },
        {
          src: "/images/projects-images/menu_cart/menu_cart_sm-3.png",
          alt: "Versão mobile do menu com controles de quantidade e adicionar ao carrinho",
          imagePosition: "right",
        },
        {
          src: "/images/projects-images/menu_cart/menu_cart_sm-4.png",
          alt: "Versão mobile mostrando carrinho com itens e resumo do pedido",
          imagePosition: "bottom",
        },
      ],
    },
    gitRepositoryLink: "https://github.com/PhilippeDi4s/product-list-with-cart",
    detailsLink: "/projects/menuCarrinho",
    liveDemoLink: "https://desserts-shop.diasphilippe.dev.br/",
  },
  {
    title: "Gerador de Ticket",
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
    imagesCarousel: {
      desktop: [
        {
          src: "/images/projects-images/ticket_generator/ticket_generator-1.png",
          alt: "Formulário de registro para Coding Conf 2025 com seções de upload de avatar, nome completo e email",
          imagePosition: "top",
        },
        {
          src: "/images/projects-images/ticket_generator/ticket_generator-2.png",
          alt: "Formulário de registro continuado mostrando informações de upload de avatar e campo de email",
          imagePosition: "top",
        },
        {
          src: "/images/projects-images/ticket_generator/ticket_generator-3.png",
          alt: "Gerador de ticket com formulário preenchido e validações exibidas",
          imagePosition: "top",
        },
      ],

      mobile: [
        {
          src: "/images/projects-images/ticket_generator/ticket_generator_sm-1.png",
          alt: "Versão mobile do formulário de registro para Coding Conf 2025",
          imagePosition: "top",
        },
        {
          src: "/images/projects-images/ticket_generator/ticket_generator_sm-2.png",
          alt: "Versão mobile do gerador de ticket com campos de upload e informações",
          imagePosition: "bottom",
        },
        {
          src: "/images/projects-images/ticket_generator/ticket_generator_sm-3.png",
          alt: "Versão mobile do formulário com validações ativas",
          imagePosition: "top",
        },
      ],
    },
    gitRepositoryLink:
      "https://github.com/PhilippeDi4s/conference-ticket-generator",
    detailsLink: "/projects/geradorTicket",
    liveDemoLink: "https://conference-ticket.diasphilippe.dev.br/",
  },
  {
    title: "Dashboard Interativo",
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
    imagesCarousel: {
      desktop: [
        {
          src: "/images/projects-images/dashboard_python/dashboard_python-1.png",
          alt: "Dashboard com KPIs e filtros de análise salarial",
          imagePosition: "left",
        },
        {
          src: "/images/projects-images/dashboard_python/dashboard_python-2.png",
          alt: "Gráfico de ranking de cargos mais frequentes",
          imagePosition: "center",
        },
        {
          src: "/images/projects-images/dashboard_python/dashboard_python-3.png",
          alt: "Distribuição salarial por faixa de valores",
          imagePosition: "center",
        },
        {
          src: "/images/projects-images/dashboard_python/dashboard_python-4.png",
          alt: "Proporção de trabalho remoto versus presencial",
          imagePosition: "center",
        },
        {
          src: "/images/projects-images/dashboard_python/dashboard_python-5.png",
          alt: "Mapa de salários por país na área de dados",
          imagePosition: "center",
        },
      ],

      mobile: [
        {
          src: "/images/projects-images/dashboard_python/dashboard_python_sm-1.png",
          alt: "Dashboard mobile com KPIs e filtros",
          imagePosition: "center",
        },
        {
          src: "/images/projects-images/dashboard_python/dashboard_python_sm-2.png",
          alt: "Gráfico mobile de ranking de cargos",
          imagePosition: "center",
        },
        {
          src: "/images/projects-images/dashboard_python/dashboard_python_sm-3.png",
          alt: "Gráfico mobile de distribuição salarial",
          imagePosition: "center",
        },
        {
          src: "/images/projects-images/dashboard_python/dashboard_python_sm-4.png",
          alt: "Gráfico mobile de trabalho remoto",
          imagePosition: "center",
        },
        {
          src: "/images/projects-images/dashboard_python/dashboard_python_sm-5.png",
          alt: "Mapa mobile de salários por país",
          imagePosition: "center",
        },
      ],
    },
    gitRepositoryLink: "https://github.com/PhilippeDi4s/dashboard_interativo",
    detailsLink: "/projects/dashboardInterativo",
    liveDemoLink: "https://dashboardinterativo-2025.streamlit.app/",
  },
];

export const ProjectsContext = createContext<ProjectsContextType | null>(null);
