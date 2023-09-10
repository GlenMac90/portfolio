"use client";

import React from "react";

import { featuredProjectsList } from "@/constants";
import CaseStudyHeader from "@/app/components/case-studies-components/CaseStudyHeader";
import CaseStudyTechStack from "@/app/components/case-studies-components/CaseStudyTechStack";
import CaseStudyProblemStatement from "@/app/components/case-studies-components/CaseStudyProblemStatement";
import CaseStudyChallengesAndLearnings from "@/app/components/case-studies-components/CaseStudyChallengesAndLearnings";
import CaseStudiesOtherCaseStudies from "@/app/components/case-studies-components/CaseStudiesOtherCaseStudies";
import GetInTouchCard from "@/app/components/homepage-components/GetInTouchCard";
interface CaseStudyProps {
  params: {
    details: string;
  };
}

const CaseStudy: React.FC<CaseStudyProps> = ({ params }) => {
  const mainProject = featuredProjectsList.find(
    (project) => project.caseStudyLink === params.details
  );

  const otherProjects = featuredProjectsList.filter(
    (project) => project.caseStudyLink !== params.details
  );

  return (
    <main className="flex w-full flex-col items-center bg-white800 dark:bg-black300">
      <CaseStudyHeader mainProject={mainProject} />
      <CaseStudyTechStack mainProject={mainProject} />
      <CaseStudyProblemStatement mainProject={mainProject} />
      <CaseStudyChallengesAndLearnings mainProject={mainProject} />
      <CaseStudiesOtherCaseStudies otherProjects={otherProjects} />
      <GetInTouchCard />
    </main>
  );
};

export default CaseStudy;
