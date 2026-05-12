import clsx from "clsx";
import { CodeIcon } from "lucide-react";
import { ElementType, ComponentPropsWithoutRef } from "react";

export type ProjectInfoSectionProps<T extends ElementType> = {
  as?: T;
  children: React.ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<T>;

export function ProjectInfoSection<T extends ElementType = "div">({
  as,
  children,
  className,
  ...props
}: ProjectInfoSectionProps<T>) {
  const Component = as || "div";

  return (
    <Component className={className}>
      <h3
        className={clsx(
          "flex",
          "gap-2",
          "items-center",
          "text-(--secondary-color)",
          "font-bold",
          "text-[1.125rem]",
          "mb-4",
          "md:text-[1.5rem]",
        )}
      >
        <CodeIcon />
        Tecnologias Usadas
      </h3>
      <div
        {...props}
        className={clsx(
          "w-full",
          "grid",
          "grid-cols-[repeat(auto-fit,minmax(180px,1fr))]",
          "gap-x-4",
          "gap-y-6",
        )}
      >
        {children}
      </div>
    </Component>
  );
}
