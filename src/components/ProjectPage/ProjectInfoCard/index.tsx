import clsx from "clsx";
import { CodeIcon } from "lucide-react";

type ProjectInfoCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function ProjectInfoCard({ children, className }: ProjectInfoCardProps) {
  return (
    <span
      className={clsx(
        "flex",
        "flex-1",
        "items-center",
        "justify-center",
        "justify-center",
        "whitespace-nowrap",
        "gap-2",
        "px-2",
        "py-2",
        "bg-(--surface-card)",
        "font-bold",
        "border",
        "border-white/20",
        "rounded",
        "cursor-default",
        "transition",
        "hover:text-(--secondary-color)",
        "md:px-3",
        "md:py-6",
        className,
      )}
    >
      <CodeIcon /> {children}
    </span>
  );
}
