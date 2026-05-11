import { ElementType, ComponentPropsWithoutRef } from "react";

type InfoSectionProps<T extends ElementType> = {
  as?: T;
  children: React.ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<T>;

export function InfoSection<T extends ElementType = "div">({
  as,
  children,
  className,
  ...props
}: InfoSectionProps<T>) {
  const Component = as || "div";

  return (
    <Component
      className={`className="w-full grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-x-4 gap-y-6" ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}