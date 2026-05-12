import clsx from "clsx";
import { CodeIcon } from "lucide-react";

type ProjectInfoCardProps = {
  children: React.ReactNode;
};

export function   ProjectInfoCard({ children }: ProjectInfoCardProps) {
  return (
    <span
      className={clsx(
        "flex",
        "items-center",
        "justify-center",
        "gap-2",
        "px-2",
        "py-3",
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
      )}
    >
      <CodeIcon/> {children}
    </span>
  );
}
