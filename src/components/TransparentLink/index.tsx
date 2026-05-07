import clsx from "clsx";

type TransparentLinkProps = {
  link: string;
  text: string;
  icon?: React.ReactNode;
};

export function TransparentLink({ link, text, icon }: TransparentLinkProps) {
  return (
    <a
      href={link}
      className={clsx(
        "flex",
        "gap-3",
        "justify-center",
        "items-center",
        "text-[rgb(199,199,199)]",
        "bg-[rgba(1761761760.06)]",
        "cursor-pointer",
        "px-3",
        "py-2",
        "rounded-md",
        "transition",
        "duration-300",
        "border",
        "border-white/20",
        "hover:backdrop-brightness-150",
        "hover:text-white",
        "md:px-6",
        "md:py-3",
      )}
    >
      {text}
      {icon}
    </a>
  );
}
