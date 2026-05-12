import { Children, cloneElement, isValidElement } from "react";

type ProjectDescriptionProps = {
  children: React.ReactNode;
};

type WithClassName = {
  className?: string;
};

const paragraphStyles = "leading-8";

function applyClass(children: React.ReactNode, className: string) {
  return Children.map(children, (child) => {
    if (!isValidElement<WithClassName>(child)) return child;

    return cloneElement(child, {
      className: `${className} ${child.props.className ?? ""}`.trim(),
    });
  });
}

function ProjectDescription({ children }: ProjectDescriptionProps) {
  return <>{children}</>;
}

function ShortDescription({ children }: ProjectDescriptionProps) {
  return <>{applyClass(children, `${paragraphStyles} indent-2 md:hidden`)}</>;
}

function Description({ children }: ProjectDescriptionProps) {
  return <>{applyClass(children, `hidden indent-5 ${paragraphStyles} md:block`)}</>;
}

ProjectDescription.ShortDescription = ShortDescription;
ProjectDescription.Description = Description;

export { ProjectDescription };