import clsx from "clsx";

type BlueLinkProps = {
  link: string;
  text: string;
  icon?: React.ReactNode;
};

export function BlueLink({ link, text, icon, ...props }: BlueLinkProps) {
  return (
      <a
        href={link}
        className={clsx(
          "inline-flex",
          "items-center",
          "leading-none",
          "text-(--blue-200)",
          "uppercase",
          "font-bold",
          "border-b",
          "transition",
          "duration-300",
          "hover:text-(--secondary-color)",
          "hover:border-b-(--secondary-color)",
          "md:gap-3",
          {...props}
        )}
      >
        {text}
        {icon}
      </a>

  );
}
