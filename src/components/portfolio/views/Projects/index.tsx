import { CardActions } from "@/src/components/CardActions";
import { PortfolioCard } from "../../cards/PortfolioCard";
import { useProjectsContext } from "@/src/context/useProjectContext";

export function Projects() {
  const { projects } = useProjectsContext();
  return (
    <section className="flex flex-col items-center gap-10 xl:grid xl:grid-cols-2 xl:gap-12 xl:items-stretch">
      {projects.map((project) => (
        <PortfolioCard
          key={project.title}
          cardImgUrl={project.imagesCarousel[0].src}
          cardType="project"
          cardTitle={project.title}
        >
          {
            <>
              <p>{project.cardDescription}</p>
              <CardActions
                liveDemoLink={project.liveDemoLink}
                detailsLink={project.detailsLink}
              />
            </>
          }
        </PortfolioCard>
      ))}
    </section>
  );
}
