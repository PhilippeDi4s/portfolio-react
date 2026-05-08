import { Section } from "../../Section";

type ComponentsPosition = "center" | "start" | "end";

type SplitLayoutProps = {
  sectionId?: string;
  children: React.ReactNode;
  alignComponents?: ComponentsPosition;
  alignComponentsDesktop?: ComponentsPosition;
};

const alignmentClasses = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
};

const responsiveAlignmentClasses = {
  start: "lg:items-start",
  center: "lg:items-center",
  end: "lg:items-end",
};

function SplitLayout({
  sectionId,
  children,
  alignComponents = "center",
  alignComponentsDesktop = "start",
}: SplitLayoutProps) {
  return (
    <Section
      id={sectionId}
      className={`
        w-full
        flex
        flex-col
        gap-8
        ${alignmentClasses[alignComponents]}
        md:gap-12
        xl:flex-row
        xl:justify-between
        ${responsiveAlignmentClasses[alignComponentsDesktop]}
      `}
    >
      {children}
    </Section>
  );
}

function Left({
  children,
  className = "",
  flex = 1,
}: {
  children: React.ReactNode;
  className?: string;
  flex?: number;
}) {
  return (
    <div className={`w-full flex flex-col gap-6 ${className}`} style={{ flex }}>
      {children}
    </div>
  );
}

function Right({
  children,
  className = "",
  flex = 1,
}: {
  children: React.ReactNode;
  className?: string;
  flex?: number;
}) {
  return (
    <div className={`w-full flex flex-col gap-6 ${className}`} style={{ flex }}>
      {children}
    </div>
  );
}

SplitLayout.Left = Left;
SplitLayout.Right = Right;

export { SplitLayout };
