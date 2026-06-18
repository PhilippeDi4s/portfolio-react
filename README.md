# new-portfolio

[![Versão](https://img.shields.io/badge/versão-0.1.0-blue)](https://github.com/PhilippeDi4s/portfolio-react)
[![Build](https://img.shields.io/badge/build-N%2FA-lightgrey)](https://github.com/PhilippeDi4s/portfolio-react)
[![Cobertura de testes](https://img.shields.io/badge/cobertura-N%2FA-lightgrey)](#tecnologias-utilizadas)
[![Licença](https://img.shields.io/badge/licença-N%2FA-lightgrey)](#licença)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## 1. Visão Geral

**Nome do projeto:** `new-portfolio` (definido em `package.json`)

Portfólio pessoal de **Philippe Dias**, desenvolvedor Full Stack. A aplicação apresenta seções de apresentação, projetos, certificados, stack tecnológica, sobre mim e formulário de contato. Resolve a necessidade de centralizar a identidade profissional, demonstrar projetos reais com páginas de detalhe e permitir contato direto via e-mail.

**Motivação:** Servir como vitrine profissional para recrutadores, clientes e parceiros, consolidando trajetória acadêmica, habilidades técnicas e portfólio de projetos em uma única experiência web moderna e responsiva.


---

## 2. Tecnologias Utilizadas

### Frontend

| Tecnologia | Versão |
|---|---|
| [Next.js](https://nextjs.org/) (App Router) | 16.2.5 |
| [React](https://react.dev/) | 19.2.4 |
| [React DOM](https://react.dev/) | 19.2.4 |
| [TypeScript](https://www.typescriptlang.org/) | ^5 |
| [Tailwind CSS](https://tailwindcss.com/) | ^4 |
| [@tailwindcss/postcss](https://tailwindcss.com/) | ^4 |
| [Embla Carousel](https://www.embla-carousel.com/) (`embla-carousel-react`, `embla-carousel-autoplay`, `embla-carousel-fade`) | ^8.6.0 |
| [Lucide React](https://lucide.dev/) | ^1.14.0 |
| [React Icons](https://react-icons.github.io/react-icons/) | ^5.6.0 |
| [React Hook Form](https://react-hook-form.com/) | ^7.75.0 |
| [@hookform/resolvers](https://github.com/react-hook-form/resolvers) | ^5.2.2 |
| [Zod](https://zod.dev/) | ^4.4.3 |
| [React Toastify](https://fkhadra.github.io/react-toastify/) | ^11.1.0 |
| [clsx](https://github.com/lukeed/clsx) | ^2.1.1 |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) | ^3.6.0 |

### Backend (Server Actions / serviços externos)

| Tecnologia | Versão | Uso |
|---|---|---|
| [Next.js Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations) | 16.2.5 | Envio de e-mail via `sendEmail` |
| [Resend](https://resend.com/) | ^6.12.3 | Entrega de e-mails do formulário de contato |
| [@upstash/ratelimit](https://upstash.com/docs/redis/sdks/ratelimit-ts/overview) | ^2.0.8 | Rate limiting por IP (1 envio/dia) |
| [@upstash/redis](https://upstash.com/docs/redis/sdks/ts/overview) | ^1.38.0 | Armazenamento do contador de rate limit |

### Banco de dados

Não há banco de dados neste projeto. Os dados de projetos, certificados e stack são definidos estaticamente em `src/context/ProjectsContext.ts`.

### DevOps / Ferramentas

| Ferramenta | Versão | Uso |
|---|---|---|
| [Node.js](https://nodejs.org/) | ^20 (tipos `@types/node`) | Runtime |
| [ESLint](https://eslint.org/) | ^9 | Linting |
| [eslint-config-next](https://nextjs.org/docs/app/api-reference/config/eslint) | 16.2.5 | Regras ESLint para Next.js |
| [PostCSS](https://postcss.org/) | via `@tailwindcss/postcss` | Pipeline CSS |
| [Vercel](https://vercel.com/) | — | Plataforma de deploy referenciada em `.gitignore` (`.vercel`) |


---

## 3. Estrutura de Diretórios

```text
new-portfolio/
├── .vscode/
│   └── settings.json              # Configurações do editor VS Code/Cursor
├── public/
│   └── images/
│       ├── about-images/          # Ilustrações das áreas de competência (About)
│       ├── certificates-images/   # Imagens dos certificados exibidos no portfólio
│       ├── profile-picture/       # Foto de perfil do Hero
│       └── projects-images/       # Screenshots dos projetos (desktop e mobile)
│           ├── blog/
│           ├── chronos_pomodoro/
│           ├── dashboard_python/
│           ├── menu_cart/
│           └── ticket_generator/
├── src/
│   ├── adapters/
│   │   └── index.tsx              # Adaptador de notificações (react-toastify)
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx           # Página "Sobre Mim" (skills, timeline)
│   │   ├── actions/
│   │   │   └── sendEmail.ts       # Server Action: validação, rate limit e envio via Resend
│   │   ├── projects/
│   │   │   └── [detailsLink]/
│   │   │       └── page.tsx       # Página dinâmica de detalhe de cada projeto
│   │   ├── globals.css            # Estilos globais e variáveis CSS do tema
│   │   ├── icon.svg               # Favicon/ícone da aplicação
│   │   ├── layout.tsx             # Layout raiz (fontes, Header, Footer, Providers)
│   │   └── page.tsx               # Página inicial (Hero, Portfólio, About, Contact)
│   ├── components/
│   │   ├── about/                 # Componentes da página About (carousel, timeline)
│   │   ├── Contact/               # Seção e formulário de contato
│   │   ├── layout/                # Header, Footer, Container, SplitLayout
│   │   ├── portfolio/             # Switcher de Projetos/Certificados/Stack e views
│   │   ├── ProjectPage/           # Componentes da página de detalhe de projeto
│   │   ├── AboutMe/               # Resumo "Sobre Mim" na home
│   │   ├── Hero/                  # Seção hero com apresentação e links sociais
│   │   ├── ContactModal/          # Modal de confirmação LGPD antes do envio
│   │   └── ...                    # Componentes reutilizáveis (Button, Section, etc.)
│   ├── context/
│   │   ├── ProjectsContext.ts     # Dados estáticos dos projetos e tipo do contexto
│   │   ├── ProjectsProvider.tsx   # Provider React para compartilhar projetos
│   │   └── useProjectContext.ts   # Hook de acesso ao contexto de projetos
│   ├── hook/
│   │   ├── useActiveSection.ts    # Detecção da seção ativa no scroll (navegação)
│   │   ├── useIsMobile.ts         # Detecção de viewport mobile
│   │   └── useOverlay.ts          # Controle de modais/overlays
│   ├── lib/
│   │   ├── const.ts               # Constantes (LinkedIn, GitHub, currículo)
│   │   ├── contactSchema.ts       # Schema Zod do formulário de contato
│   │   └── ratelimit.ts           # Configuração do rate limit Upstash Redis
│   ├── models/
│   │   └── projectModel.ts        # Tipos TypeScript do modelo de projeto
│   └── utils/
│       ├── getIp.ts               # Extração do IP do cliente via headers HTTP
│       └── setDelay.ts            # Delay artificial no envio (anti-spam)
├── .gitignore                     # Arquivos ignorados pelo Git
├── eslint.config.mjs              # Configuração ESLint (flat config)
├── next.config.ts                 # Configuração do Next.js
├── next-env.d.ts                  # Tipos gerados pelo Next.js (auto)
├── package.json                   # Dependências e scripts npm
├── package-lock.json              # Lockfile de dependências
├── postcss.config.mjs             # Configuração PostCSS (Tailwind v4)
└── tsconfig.json                  # Configuração TypeScript (strict, alias @/*)
```

---

## 4. Variáveis de Ambiente

| Variável | Obrigatória | Descrição |
|---|---|---|
| `RESEND_API_KEY` | Sim | Chave de API do [Resend](https://resend.com/) para envio de e-mails pelo Server Action `sendEmail`. |
| `UPSTASH_REDIS_REST_URL` | Sim | URL REST do banco Redis Upstash. Lida automaticamente por `Redis.fromEnv()` em `src/lib/ratelimit.ts`. |
| `UPSTASH_REDIS_REST_TOKEN` | Sim | Token de autenticação REST do Redis Upstash. Usado junto com a URL para o rate limiting. |

### Exemplo `.env.example`

```bash
# ── Resend (envio de e-mail) ──────────────────────────────────
# Obrigatório. Obtenha em: https://resend.com/api-keys
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx

# ── Upstash Redis (rate limiting) ─────────────────────────────
# Obrigatórias. Obtenha em: https://console.upstash.com/
UPSTASH_REDIS_REST_URL=https://xxxxxxxx.upstash.io
UPSTASH_REDIS_REST_TOKEN=AXxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

> O arquivo `.env` está listado em `.gitignore` e não deve ser versionado.

### Scripts disponíveis

```bash
npm run dev      # Servidor de desenvolvimento (next dev)
npm run build    # Build de produção (next build)
npm run start    # Servidor de produção (next start)
npm run lint     # Linting com ESLint
```

---

## 5. Arquitetura e Decisões Técnicas

### Padrão arquitetural

A aplicação segue a arquitetura do **Next.js App Router** com separação em camadas:

- **Apresentação:** componentes React em `src/components/`, organizados por feature (portfolio, about, contact, layout).
- **Roteamento:** file-based routing em `src/app/` (`page.tsx`, rotas dinâmicas `[detailsLink]`).
- **Estado compartilhado:** React Context (`ProjectsProvider`) para dados de projetos acessíveis em toda a árvore de componentes.
- **Lógica de servidor:** Server Actions (`"use server"`) para operações que exigem segredos e validação server-side.
- **Modelo de dados:** tipos em `src/models/`; conteúdo estático em `src/context/ProjectsContext.ts`.

Não há API REST separada nem banco de dados — é um **monólito frontend-first** com backend mínimo via Server Actions.

### Principais decisões de design

| Decisão | Motivo |
|---|---|
| **Dados estáticos em Context** | Portfólio com conteúdo relativamente fixo; evita complexidade de CMS/banco para a fase atual. |
| **Server Action + Resend** | Mantém `RESEND_API_KEY` no servidor; o cliente nunca acessa credenciais sensíveis. |
| **Rate limit com Upstash Redis** | Limita a 1 envio por IP por dia (`slidingWindow(1, "1 d")`), mitigando spam no formulário de contato. |
| **Validação dupla (cliente + servidor)** | React Hook Form + Zod no cliente; `contactSchema.safeParse` no servidor antes do envio. |
| **Modal de privacidade** | Confirmação explícita do usuário antes do envio, alinhada a boas práticas de consentimento. |
| **Tailwind CSS v4 + CSS Modules** | Utility-first para layout responsivo; CSS Modules em componentes com animações específicas (portfolio, carousel). |
| **Embla Carousel** | Carrosséis leves e acessíveis para screenshots de projetos e certificados. |
| **Alias `@/*`** | Imports consistentes mapeados em `tsconfig.json` para a raiz do projeto. |

### Comunicação entre serviços

```text
Browser (React)
    │
    ├─► Server Action sendEmail()
    │       ├─► getIp() ── headers HTTP (x-forwarded-for / x-real-ip)
    │       ├─► ratelimit.limit(ip) ── Upstash Redis (REST)
    │       ├─► contactSchema.safeParse() ── validação Zod
    │       └─► resend.emails.send() ── API Resend
    │
    └─► ProjectsContext (dados estáticos em memória, sem I/O)
```

---

## 6. Licença

 O projeto está marcado como `"private": true`.

**[Licença não especificada]**

Autor: **Philippe Dias** (`PhilippeDi4s` / `lisboa.philippes@gmail.com`)  
Ano: **2026**
