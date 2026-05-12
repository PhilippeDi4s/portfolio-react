import clsx from "clsx";
import Link from "next/link";

type BlueLinkProps = {
  href: string;
  children: React.ReactNode;
}& React.AnchorHTMLAttributes<HTMLAnchorElement> ;

export function BlueLink({ href, children, ...props }: BlueLinkProps) {
  return (
    <Link
      href={href}
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
      )}
      { ...props }
    >
      {children}
    </Link>
  );
}
