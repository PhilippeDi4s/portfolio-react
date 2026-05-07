type TextPositionOptions = "left" | "center" | "end";

type HeadingProps = {
  children: React.ReactNode;
  textPosition?: TextPositionOptions;
  className?: string;
};

export function Heading({ children, textPosition='center', className='' }: HeadingProps) {
  return (
    <h1
      className={`uppercase text-[2.7rem] md:text-[4.5rem] leading-12  md:mb-4 lg:mb-6 ${className}`}
      style={{ textAlign: textPosition }}
    >
      {children}
    </h1>
  );
}
