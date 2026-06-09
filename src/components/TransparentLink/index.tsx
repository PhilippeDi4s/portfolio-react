import clsx from "clsx";
import Link from "next/link";

type TransparentLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function TransparentLink({
  href,
  className,
  children,
  ...props
}: TransparentLinkProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "flex",
        "gap-3",
        "justify-center",
        "whitespace-nowrap",
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
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
