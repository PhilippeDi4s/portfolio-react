import { ArrowRightIcon, ArrowUpIcon } from "lucide-react";
import { BlueLink } from "../BlueLink";
import { TransparentLink } from "../TransparentLink";

type CardActionsProps = {
  liveDemoLink: string;
  detailsLink: string;
};

export function CardActions({ liveDemoLink, detailsLink }: CardActionsProps) {
  return (
    <div className="flex items-center justify-between">
      <BlueLink href={liveDemoLink}>Live Demo <ArrowUpIcon className="rotate-45"/></BlueLink>

      <TransparentLink href={detailsLink}>
        Detalhes <ArrowRightIcon />
      </TransparentLink>
    </div>
  );
}
