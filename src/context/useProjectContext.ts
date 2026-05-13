import { useContext } from "react";
import { ProjectsContext } from "./ProjectsContext";

export function useProjectsContext() {
  const context = useContext(ProjectsContext);
  if (!context)
    throw new Error("useProjectsContext deve ser usado dentro de ProjectsProvider");
  return context;
}
