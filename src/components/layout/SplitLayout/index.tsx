type ComponentsPosition = "center" | "start" | "end";

type SplitLayoutProps = {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  alignComponents?: ComponentsPosition;
  alignComponentsDesktop?: ComponentsPosition;
  leftContentPosition?: ComponentsPosition;
  rightContentPosition?: ComponentsPosition;
  contentSize?: [number, number];
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

export function SplitLayout({
  leftContent,
  rightContent,
  alignComponents = "center",
  alignComponentsDesktop = "start",
  leftContentPosition = "start",
  rightContentPosition = "start",
  contentSize = [1, 1],
}: SplitLayoutProps) {
  return (
    <section
      className={`
        w-full
        flex
        flex-col
        gap-8
        ${alignmentClasses[alignComponents]}
        md:gap-12
        xl:gap-6
        xl:flex-row
        xl:justify-between
        ${responsiveAlignmentClasses[alignComponentsDesktop]}
      `}
    >
      <div
        className={`w-full flex flex-col gap-6 ${alignmentClasses[leftContentPosition]}`}
        style={{ flex: contentSize[0] }}
      >
        {leftContent}
      </div>

      <div
        className={`w-full flex flex-col gap-6 ${alignmentClasses[rightContentPosition]}`}
        style={{ flex: contentSize[1] }}
      >
        {rightContent}
      </div>
    </section>
  );
}
