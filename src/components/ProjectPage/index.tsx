"use client";

import {
  ArrowLeftIcon,
} from "lucide-react";

import {
  Children,
  isValidElement,
  ReactNode,
} from "react";

import { TransparentLink } from "../TransparentLink";
import { Heading } from "../Heading";
import { Section } from "../Section";
import { SplitLayout } from "../layout/SplitLayout";

type ProjectPageProps = {
  projectTitle: string;
  children: ReactNode;
};

type SlotProps = {
  children: ReactNode;
};

function Left({ children }: SlotProps) {
  return <>{children}</>;
}

function Right({ children }: SlotProps) {
  return <>{children}</>;
}

function Description({ children }: SlotProps) {
  return (
    <p className="leading-8 indent-2 md:indent-5">
      {children}
    </p>
  );
}

function ShortDescription({ children }: SlotProps) {
  return (
    <p className="block leading-8 indent-2 md:hidden">
      {children}
    </p>
  );
}

function ProjectPage({
  projectTitle,
  children,
}: ProjectPageProps) {
  const childrenArray = Children.toArray(children);

  const leftContent = childrenArray.find(
    (child) =>
      isValidElement(child) &&
      child.type === ProjectPage.Left
  );

  const rightContent = childrenArray.find(
    (child) =>
      isValidElement(child) &&
      child.type === ProjectPage.Right
  );

  return (
    <>
      <Section className="flex items-center gap-4">
        <TransparentLink href="/">
          <ArrowLeftIcon />
          Voltar
        </TransparentLink>

        <span>
          <span className="brightness-50">
            Projetos {">"}
          </span>{" "}
          {projectTitle}
        </span>
      </Section>

      <SplitLayout>
        <SplitLayout.Left flex={0.8}>
          <Heading textPosition="left">
            {projectTitle}
          </Heading>

          {leftContent}
        </SplitLayout.Left>

        <SplitLayout.Right>
          {rightContent}
        </SplitLayout.Right>
      </SplitLayout>
    </>
  );
}

ProjectPage.Left = Left;
ProjectPage.Right = Right;
ProjectPage.Description = Description;
ProjectPage.ShortDescription = ShortDescription;

export { ProjectPage };