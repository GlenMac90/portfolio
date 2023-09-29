"use client";

import { CaseStudyContext } from "@/app/contexts/CaseStudyContext";
import {
  CaseStudyHeader,
  CaseStudyTechStack,
  CaseStudyProblemStatement,
  CaseStudyChallengesAndLearnings,
  SimilarCaseStudies,
} from ".";
import { GetInTouchCard } from "../homepage-components";
import CaseStudyFigmaDesign from "./CaseStudyFigmaDesign";
import { CaseStudyBodyProps } from "@/utils/interfaces";

const CaseStudyBody = ({
  mainProject,
  similarProjects,
  workProcess,
}: CaseStudyBodyProps) => {
  return (
    <main className="flex w-full flex-col items-center overflow-hidden bg-white800 dark:bg-black300">
      <CaseStudyContext.Provider
        value={{ mainProject, similarProjects, workProcess }}
      >
        <CaseStudyHeader />
        <CaseStudyTechStack />
        <CaseStudyProblemStatement />
        <CaseStudyFigmaDesign />
        <CaseStudyChallengesAndLearnings />
        <SimilarCaseStudies />
        <GetInTouchCard />
      </CaseStudyContext.Provider>
    </main>
  );
};

export default CaseStudyBody;
