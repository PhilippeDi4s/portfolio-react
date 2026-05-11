import clsx from "clsx";

type ProjectInfoCardProps = {
  children: React.ReactNode;
};

export function ProjectInfoCard({ children }: ProjectInfoCardProps) {
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
        "md:px-3",
        "md:py-6",
      )}
    >
      {children}
    </span>
  );
}
