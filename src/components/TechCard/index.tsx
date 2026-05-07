import clsx from "clsx";
import type { IconType } from "react-icons";

type TechCardProps = {
  icon: IconType;
  iconColor?: string;
  text: string;
};

export function TechCard({
  icon: Icon,
  iconColor = "white",
  text,
}: TechCardProps) {
  return (
    <article
      className={clsx(
        "flex",
        "flex-col",
        "items-center",
        "justify-center",
        "gap-2",
        "w-[clamp(7rem,30vw,10rem)]",
        "h-[clamp(7rem,30vw,9rem)]",
        "bg-(--surface-card)",
        "rounded-lg",
        "group",
        "transition",
        "duration-300",
        "hover:scale-105",
        "hover:outline-1",
        "hover:outline-white",
        "hover:bg-(--surface-card-hover)",
        "md:w-[clamp(10rem,30vw,13rem)]",
        "md:h-[clamp(9rem,30vw,12rem)]",
      )}
    >
      <Icon
        className={clsx(
          "text-[3.75rem]",
          "transition",
          "duration-500",
          "group-hover:rotate-35",
          "md:text-[clamp(4rem,50vw,5rem)]",
        )}
        style={{ color: iconColor }}
      />
      <span
        className={clsx("text-(--secondary-color)", "group-hover:font-bold")}
      >
        {text}
      </span>
    </article>
  );
}