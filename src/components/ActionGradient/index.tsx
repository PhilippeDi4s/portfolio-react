import clsx from "clsx";
import { ElementType, ComponentPropsWithoutRef } from "react";

type Props<T extends ElementType> = {
  as?: T;
  children: React.ReactNode
  className?: string;
} & ComponentPropsWithoutRef<T>;

export function ActionGradient<T extends ElementType = "button">({
  className = "",
  as,
  children,
  ...props
}: Props<T>) {
  const Component = as || "button";

  return (
    <Component
      {...props}
      className={clsx(
        "cursor-pointer",
        "p-2",
        "rounded-xl",
        "border",
        "border-white/50",
        "font-semibold",
        "transition-[filter]",
        "duration-1000",
        "bg-[radial-gradient(circle,rgba(17,53,159,1)_0%,rgba(13,43,156,1)_24%,rgba(10,32,153,1)_49%,rgba(19,0,52,1)_94%)]",
        "flex",
        "items-center",
        "justify-center",
        "gap-1",
        "disabled:opacity-50",
        "disabled:cursor-not-allowed",
        "hover:brightness-120",
        "md:gap-3",
        className,
      )}
    >
      {children}
    </Component>
  );
}