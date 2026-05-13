type IconLinkProps = {
  type: "minimal" | "filled";
  href: string;
  icon: React.ReactNode;
};

export function IconLink({ type, href, icon }: IconLinkProps) {
  const linkStyles = {
    minimal: "text-[2.7rem] transition hover:scale-105 duration-300 md:text-[3.3rem]",
    filled:
      "transition-colors duration-500 bg-(--gray) p-3 rounded-4xl hover:bg-(--primary-color) hover:text-(--blue-500)",
  };
  return (
    <a
      className={linkStyles[type]}
      href={href}
      target="_blank"
    >
      {icon}
    </a>
  );
}
