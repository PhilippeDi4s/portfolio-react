import { AwardIcon, Code2Icon } from "lucide-react";

type ProjectSummaryProps = {
  technologiesCount: number;
  projectType: string;
  source: string;
};

export function ProjectSummary({
  technologiesCount,
  projectType,
  source,
}: ProjectSummaryProps) {
  const cardStyle =
    "flex items-center gap-5 p-2 text-[1rem] bg-(--surface-card-hover) cursor-default rounded-xl flex-1 border border-white/20 transition hover:text-(--secondary-color)";

  const iconsStyle = "bg-[#031a5dbd] rounded-full p-3 w-[3.5rem] h-[3.5rem]";

  const transparentText = "text-white/30 text-[0.9rem]";
  return (
    <div className="hidden gap-8 p-4 w-full bg-(--surface-card) rounded-xl xl:flex">
      <div className={cardStyle}>
        <Code2Icon className={iconsStyle} />
        <div className="flex flex-col gap-.5">
          <span className="font-bold">{technologiesCount}</span>
          <span className={transparentText}>Tecnologias usadas</span>
        </div>
      </div>
      <div className={cardStyle}>
        <AwardIcon className={iconsStyle} />
        <div className="flex flex-col gap-.5">
          <span className="font-bold">{projectType}</span>
          <span className={transparentText}>{source}</span>
        </div>
      </div>
    </div>
  );
}
