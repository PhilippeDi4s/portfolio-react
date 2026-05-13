import { ProjectInfoCard } from "../ProjectInfoCard";
import { ProjectInfoSection } from "../ProjectInfoSection";

type ProjectInfoProps = {
  as: "div" | "section";
  technologies: string[];
};

export function ProjectInfo({ as, technologies }: ProjectInfoProps) {
  const className = as === "div" ? "hidden xl:grid" : "grid xl:hidden";

  return (
    <ProjectInfoSection as={as} className={className}>
      {technologies.map((tech) => (
        <ProjectInfoCard key={tech}>{tech}</ProjectInfoCard>
      ))}
    </ProjectInfoSection>
  );
}
