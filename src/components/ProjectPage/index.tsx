import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { TransparentLink } from "../TransparentLink";
import { Heading } from "../Heading";
import Image from "next/image";
import { ActionGradient } from "../ActionGradient";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

// type ProjectPageProps = {
//   projectName: string;
//   children: React.ReactNode;
//   imagesSrc: string[];
//   liveDemoLink: string;
//   repositoryLink: string;
// };

function ProjectPage() {
  return (
    <>
      <div className="flex items-center gap-4">
        <TransparentLink href="/">
          <ArrowLeftIcon /> Voltar
        </TransparentLink>
        <span>
          <span className="brightness-50">Projetos {">"}</span> Chronos Pomodoro
        </span>
      </div>

      <section>
        <Heading textPosition="left">Chronos Pomodoro</Heading>
        <p>
          Aplicação web SPA de produtividade baseada na técnica Pomodoro. O
          usuário pode configurar os tempos de foco e descanso, registrar a
          tarefa atual e acompanhar o histórico dos ciclos realizados. O
          cronômetro roda em segundo plano com Web Worker, mantendo a contagem
          correta mesmo com a aba minimizada.
        </p>
        <p>
          O projeto utiliza React, Context API e useReducer para gerenciamento
          global de estado, React Router DOM para navegação entre páginas e
          React Toastify para notificações visuais. Os dados são salvos no Local
          Storage e a interface permite personalização de temas para melhorar a
          experiência do usuário.
        </p>
        <Image
          src={"/images/projects-images/chronos_pomodoro.png"}
          alt="Imagem do projeto"
          width={500}
          height={500}
        />
        <div className="flex justify-around">
          <ActionGradient as={Link} href="#">
            <ArrowRightIcon className="rotate-320" />
            Live Demo
          </ActionGradient>
          
          <ActionGradient as={Link} href="#">
            <FaGithub size={25}/>
            GitHub
          </ActionGradient>
        </div>
      </section>
    </>
  );
}

function ShortDescription({ children }: { children: React.ReactNode }) {
  return <p className="block md:hidden">{children}</p>;
}

function Description({ children }: { children: React.ReactNode }) {
  return <p className="hidden md:block">{children}</p>;
}

ProjectPage.ShortDescription = ShortDescription;
ProjectPage.Description = Description;

export { ProjectPage };
