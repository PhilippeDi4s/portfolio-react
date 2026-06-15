import { twMerge } from "tailwind-merge";

type TextPositionOptions = "left" | "center" | "end";
type HeadingTagOptions = "h1" | "h2" | "h3";

type HeadingProps = {
  children: React.ReactNode;
  textPosition?: TextPositionOptions;
  className?: string;
  as?: HeadingTagOptions;
};

const tagStyles: Record<HeadingTagOptions, string> = {
  h1: "text-[2.7rem] md:text-[4.5rem]", 
  h2: "text-[2.2rem] md:text-[3.5rem]", 
  h3: "text-[1.8rem] md:text-[2.5rem]",
};

export function Heading({
  children,
  textPosition = "center",
  className = "",
  as: Component = "h1", 
}: HeadingProps) {
  return (
    <Component
      className={twMerge(
        "uppercase leading-12 md:mb-4 lg:mb-6 font-title", 
        tagStyles[Component], 
        className,
      )}
      style={{ textAlign: textPosition }}
    >
      {children}
    </Component>
  );
}
