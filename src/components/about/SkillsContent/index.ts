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

const images = [
  "/images/about-images/full-stack.png",
  "/images/about-images/front-end.png",
  "/images/about-images/back-end.png",
  "/images/about-images/bd-orm.png",
  "/images/about-images/ia.png",
  "/images/about-images/dados.png",
  "/images/about-images/deploy.png",
  "/images/about-images/competencias.png",
];

export type SkillsSlidesContentType = {
  title: string;
  content: string;
  image: string;
}[];

export const SkillsSlidesContent: SkillsSlidesContentType = [
  {
    title: titles[0],
    content: `Atuo no desenvolvimento completo de aplicações web, desde a construção de interfaces até a implementação da lógica de negócio e persistência de dados. Tenho experiência no desenvolvimento de aplicações modernas utilizando React, Next.js, JavaScript e TypeScript no front-end, além de PHP e Python no back-end. Também realizo integração com APIs, autenticação de usuários, validação de dados, modelagem de banco de dados e deploy de aplicações em ambientes cloud e serverless.`,
    image: images[0],
  },
  {
    title: titles[1],
    content: `Desenvolvo interfaces modernas, responsivas e acessíveis utilizando HTML, CSS, JavaScript e TypeScript. Trabalho com React e Next.js para criação de aplicações componentizadas e escaláveis, aplicando conceitos como Context API, Hooks, gerenciamento de estado, roteamento e renderização otimizada. Também utilizo Tailwind CSS para construção de interfaces consistentes, focando em experiência do usuário, performance e manutenção do código.`,
    image: images[1],
  },
  {
    title: titles[2],
    content: `Possuo experiência no desenvolvimento de APIs e regras de negócio utilizando PHP e Python. Trabalho com autenticação baseada em JWT, controle de sessões através de cookies HttpOnly, validação de dados, arquitetura em camadas, separação de responsabilidades e integração com bancos de dados. Busco desenvolver aplicações seguras, organizadas e preparadas para crescimento e manutenção a longo prazo.`,
    image: images[2],
  },
  {
    title: titles[3],
    content: `Tenho experiência com MySQL e PostgreSQL, realizando modelagem de dados, criação de relacionamentos, consultas SQL e otimização de estruturas para aplicações web. Também utilizo Drizzle ORM para abstração da camada de persistência, gerenciamento de migrations, tipagem segura e desenvolvimento de aplicações mais organizadas e escaláveis.`,
    image: images[3],
  },
  {
    title: titles[4],
    content: `Desenvolvo soluções utilizando Large Language Models (LLMs), aplicando técnicas modernas de IA para automação de processos e construção de sistemas inteligentes. Possuo experiência com LangChain, LangGraph, FAISS, Pydantic e integração com modelos como Google Gemini. Também desenvolvo pipelines RAG (Retrieval-Augmented Generation), sistemas de busca semântica, classificação automática de solicitações e agentes baseados em inteligência artificial.`,
    image: images[4],
  },
  {
    title: titles[5],
    content: `Utilizo Python para tratamento, transformação e análise de dados através das bibliotecas Pandas e NumPy. Possuo experiência na criação de dashboards interativos utilizando Streamlit, além de visualizações com Matplotlib, Seaborn e Plotly. Meu foco é transformar dados brutos em informações úteis, facilitando análises, identificação de padrões e tomada de decisões.`,
    image: images[5],
  },
  {
    title: titles[6],
    content: `Trabalho com ferramentas modernas do ecossistema de desenvolvimento, incluindo Git e GitHub para versionamento e colaboração. Possuo experiência com Vercel para deploy de aplicações, Neon para bancos de dados PostgreSQL serverless e Cloudinary para armazenamento e gerenciamento de imagens. Também utilizo Vite, Node.js e outras ferramentas voltadas para produtividade, performance e escalabilidade.`,
    image: images[6],
  },
  {
    title: titles[7],
    content: `Além das competências técnicas, desenvolvi habilidades relacionadas ao trabalho em equipe, comunicação, organização e resolução de problemas. Participei de projetos acadêmicos e soluções para clientes reais, realizando levantamento de requisitos, alinhamento de expectativas, planejamento de funcionalidades e implementação de soluções focadas nas necessidades dos usuários.`,
    image: images[7],
  },
];
