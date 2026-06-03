import { CardActions } from "@/src/components/CardActions";
import { PortfolioCard } from "../../cards/PortfolioCard";
import { useProjectsContext } from "@/src/context/useProjectContext";
import { ProjectInfoCard } from "@/src/components/ProjectPage/ProjectInfoCard";

export function Projects() {
  const { projects } = useProjectsContext();
  return (
    <section className="flex flex-col items-center gap-10 xl:grid xl:grid-cols-2 xl:gap-12 xl:items-stretch">
      {projects.map((project) => (
        <PortfolioCard
          key={project.title}
          cardImgUrl={project.imagesCarousel.desktop[0].src}
          cardImgPosition={project.imagesCarousel.desktop[0].imagePosition}
          cardType="project"
          cardTitle={project.title}
        >
          {
            <>
              <div className="hidden gap-3 md:grid md:grid-cols-4">
                {project.techUsed.slice(0, 4).map((tech) => {
                  return (
                    <ProjectInfoCard key={tech} className="p-2! text-sm">
                      {tech}
                    </ProjectInfoCard>
                  );
                })}
              </div>
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
