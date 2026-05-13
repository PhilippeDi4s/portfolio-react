"use client" 
import { ReactNode } from "react"; 
import { ProjectsContext, projectsData } from "./ProjectsContext";

type ProjectsProviderProps = {
  children: ReactNode; 
};

export function ProjectsProvider({ children }: ProjectsProviderProps) {
  return (
    <ProjectsContext.Provider value={{ projects: projectsData }}>
      {children}
    </ProjectsContext.Provider>
  );
}