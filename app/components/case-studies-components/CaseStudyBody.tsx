"use client";

import { CaseStudyType, WorkProcessSymbolType } from "@/types";
import {
  CaseStudyHeader,
  CaseStudyTechStack,
  CaseStudyProblemStatement,
  CaseStudyChallengesAndLearnings,
  SimilarCaseStudies,
} from ".";
import { GetInTouchCard } from "../homepage-components";
import CaseStudyFigmaDesign from "./CaseStudyFigmaDesign";

interface CaseStudyBodyProps {
  mainProject: CaseStudyType;
  similarProjects: CaseStudyType[];
  workProcess: WorkProcessSymbolType[];
}

const CaseStudyBody = ({
  mainProject,
  similarProjects,
  workProcess,
}: CaseStudyBodyProps) => {
  return (
    <main className="flex w-full flex-col items-center overflow-hidden bg-white800 dark:bg-black300">
      <CaseStudyHeader caseStudy={mainProject} />
      <CaseStudyTechStack caseStudy={mainProject} />
      <CaseStudyProblemStatement caseStudy={mainProject} />
      <CaseStudyFigmaDesign caseStudy={mainProject} workProcess={workProcess} />
      <CaseStudyChallengesAndLearnings caseStudy={mainProject} />
      <SimilarCaseStudies caseStudies={similarProjects} />
      <GetInTouchCard />
    </main>
  );
};

export default CaseStudyBody;
