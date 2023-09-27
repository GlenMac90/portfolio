"use client";

import { CaseStudyType, WorkProcessSymbolType } from "@/types";
import { createContext, useContext } from "react";

interface CaseStudyContextType {
  mainProject?: CaseStudyType;
  similarProjects?: CaseStudyType[];
  workProcess?: WorkProcessSymbolType[];
}

export const CaseStudyContext = createContext<CaseStudyContextType | undefined>(
  undefined
);

export function useCaseStudyContext() {
  const context = useContext(CaseStudyContext);

  if (!context) {
    throw new Error(
      "useCaseStudyContext must be used within a CaseStudyContextProvider that provides data"
    );
  }

  const { mainProject, similarProjects, workProcess } = context;

  if (
    mainProject === undefined ||
    similarProjects === undefined ||
    workProcess === undefined
  ) {
    throw new Error(
      "useCaseStudyContext must be used within a CaseStudyContextProvider that provides data"
    );
  }

  return { mainProject, similarProjects, workProcess };
}
