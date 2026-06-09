import { ArrowLeftIcon } from "lucide-react";
import { Heading } from "../Heading";
import { SplitLayout } from "../layout/SplitLayout";
import { Section } from "../Section";
import { TransparentLink } from "../TransparentLink";

type ProjectPageProps = {
  projectTitle: string;
  left: React.ReactNode;
  right: React.ReactNode;
};

export function ProjectPage({ projectTitle, left, right }: ProjectPageProps) {
  return (
    <>
      <Section className="flex items-center gap-4 mb-8 mt-6 md:mt-12">
        <TransparentLink href="/#portfolio">
          <ArrowLeftIcon />
          Voltar
        </TransparentLink>

        <span>
          <span className="brightness-50">Projetos {">"}</span> {projectTitle}
        </span>
      </Section>
      <SplitLayout className="mb-6 md:mb-12">
        <SplitLayout.Left>
          <Heading textPosition="left">{projectTitle}</Heading>
          {left}
        </SplitLayout.Left>
        <SplitLayout.Right className="sticky top-35">{right}</SplitLayout.Right>
      </SplitLayout>
    </>
  );
}
