import { ArrowUpRightIcon, ArrowRightIcon } from "lucide-react";
import { BlueLink } from "../../BlueLink";
import { Card } from "../../Card";
import { TransparentLink } from "../../TransparentLink";

export function Projects() {
  return (
    <section className="flex flex-col items-center gap-10 xl:grid xl:grid-cols-2 xl:gap-12 xl:items-stretch">
      <Card
        cardImgUrl={"/images/projects-images/chronos_pomodoro.png"}
        cardTitle="Chronos Pomodoro"
        cardText="Aplicação SPA de cronômetro Pomodoro feita com React e Vite, com ciclos de foco/descanso, histórico de tarefas, temas personalizáveis, notificações com React Toastify e contagem precisa via Web Worker."
        cardType="project"
      >
        {
          <div className="flex items-center justify-between">
            <BlueLink link="#" text="Live Demo" icon={<ArrowUpRightIcon />} />
            <TransparentLink
              link="#"
              text="Detalhes"
              icon={<ArrowRightIcon />}
            />
          </div>
        }
      </Card>

      <Card
        cardImgUrl={"/images/projects-images/menu_cart.png"}
        cardTitle="Menu com Carrinho"
        cardText="Projeto de menu interativo com carrinho funcional, permitindo adicionar, remover e ajustar itens, confirmar pedidos via modal e navegar em uma interface responsiva e acessível."
        cardType="project"
      >
        {
          <div className="flex items-center justify-between">
            <BlueLink link="#" text="Live Demo" icon={<ArrowUpRightIcon />} />
            <TransparentLink
              link="#"
              text="Detalhes"
              icon={<ArrowRightIcon />}
            />
          </div>
        }
      </Card>

      <Card
        cardImgUrl={"/images/projects-images/tickect_generator.png"}
        cardTitle="Tickect Generator"
        cardText="Gerador de ingressos para conferência com formulário acessível e responsivo, incluindo validações de campos, suporte a navegação por teclado, feedback para leitores de tela e geração do ingresso após o envio bem-sucedido."
        cardType="project"
      >
        {
          <div className="flex items-center justify-between">
            <BlueLink link="#" text="Live Demo" icon={<ArrowUpRightIcon />} />
            <TransparentLink
              link="#"
              text="Detalhes"
              icon={<ArrowRightIcon />}
            />
          </div>
        }
      </Card>

      <Card
        cardImgUrl={"/images/projects-images/dashboard_python.png"}
        cardImgPosition="left"
        cardTitle="Dashboard Interativo"
        cardText="Dashboard interativo desenvolvido em Python a partir de dados tratados, com foco em análise de dados, visualização clara e layout responsivo."
        cardType="project"
      >
        {
          <div className="flex items-center justify-between">
            <BlueLink link="#" text="Live Demo" icon={<ArrowUpRightIcon />} />
            <TransparentLink
              link="#"
              text="Detalhes"
              icon={<ArrowRightIcon />}
            />
          </div>
        }
      </Card>
    </section>
  );
}
