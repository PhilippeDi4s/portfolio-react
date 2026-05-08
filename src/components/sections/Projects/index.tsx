import { PortfolioCard } from "../../PortfolioCard";
import { CardActions } from "../../CardActions";

export function Projects() {
  return (
    <section className="flex flex-col items-center gap-10 xl:grid xl:grid-cols-2 xl:gap-12 xl:items-stretch">
      <PortfolioCard
        cardImgUrl={"/images/projects-images/chronos_pomodoro.png"}
        cardTitle="Chronos Pomodoro"
        cardType="project"
      >
        {
          <>
            <p>
              Aplicação SPA de cronômetro Pomodoro feita com React e Vite, com
              ciclos de foco/descanso, histórico de tarefas, temas
              personalizáveis, notificações com React Toastify e contagem
              precisa via Web Worker.
            </p>
            <CardActions detailsLink="" liveDemoLink="" />
          </>
        }
      </PortfolioCard>

      <PortfolioCard
        cardImgUrl={"/images/projects-images/menu_cart.png"}
        cardTitle="Menu com Carrinho"
        cardType="project"
      >
        {
          <>
            <p>
              Projeto de menu interativo com carrinho funcional, permitindo
              adicionar, remover e ajustar itens, confirmar pedidos via modal e
              navegar em uma interface responsiva e acessível.
            </p>
            <CardActions detailsLink="" liveDemoLink="" />
          </>
        }
      </PortfolioCard>

      <PortfolioCard
        cardImgUrl={"/images/projects-images/tickect_generator.png"}
        cardTitle="Gerador de Tickect"
        cardType="project"
      >
        {
          <>
            <p>
              Gerador de ingressos para conferência com formulário acessível e
              responsivo, incluindo validações de campos, suporte a navegação
              por teclado, feedback para leitores de tela e geração do ingresso
              após o envio bem-sucedido.
            </p>
            <CardActions detailsLink="" liveDemoLink="" />
          </>
        }
      </PortfolioCard>

      <PortfolioCard
        cardImgUrl={"/images/projects-images/dashboard_python.png"}
        cardImgPosition="left"
        cardTitle="Dashboard Interativo"
        cardType="project"
      >
        {
          <>
            <p>
              Dashboard interativo desenvolvido em Python a partir de dados
              tratados, com foco em análise de dados, visualização clara e
              layout responsivo.
            </p>
            <CardActions detailsLink="" liveDemoLink="" />
          </>
        }
      </PortfolioCard>
    </section>
  );
}
