import { ArrowUpIcon } from "lucide-react";
import { ActionGradient } from "../../ActionGradient";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

type ProjectActionsProps = {
  liveDemoUrl: string;
  gitRepositoryUrl: string;
};

export function ProjectActions({
  liveDemoUrl,
  gitRepositoryUrl,
}: ProjectActionsProps) {
  return (
    <div className="flex items-center justify-around gap-6">
      <ActionGradient as={Link} href={liveDemoUrl} className="flex-1">
        <ArrowUpIcon className="rotate-45" />
        Live Demo
      </ActionGradient>
      <ActionGradient as={Link} href={gitRepositoryUrl} className="flex-1">
        <FaGithub />
        GitHub
      </ActionGradient >
    </div>
  );
}
