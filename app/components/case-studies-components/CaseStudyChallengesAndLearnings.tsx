import React from "react";

import { CaseStudyHeaderProps } from "@/utils/interfaces";
import { challengeIcon, greenTick } from "@/public/svg-icons/case-study-icons";

import ChallengesAndLearningsCard from "./ChallengesAndLearningsCard";

const CaseStudyChallengesAndLearnings: React.FC<CaseStudyHeaderProps> = ({
  mainProject,
}) => {
  return (
    <article className="flex w-full flex-col items-center bg-white900 px-6 py-9 dark:bg-black200 md:py-[4.5rem]">
      <div className="flex w-full max-w-4xl flex-col">
        <p className="text-xs font-semibold text-primaryLight dark:text-primaryDark md:text-sm">
          Problem
        </p>
        <p className="mt-2 text-[1.75rem] font-semibold text-black200 dark:text-white900 md:text-[2rem]">
          Challenges & Learnings
        </p>
        <ChallengesAndLearningsCard
          image={challengeIcon}
          additionalStyles="my-6 md:my-7"
          textColour="text-challengeRed"
          text="CHALLENGES"
          listText={mainProject?.challenges}
        />
        <ChallengesAndLearningsCard
          image={greenTick}
          textColour="text-learningsGreen"
          text="LEARNINGS"
          listText={mainProject?.learnings}
        />
      </div>
    </article>
  );
};

export default CaseStudyChallengesAndLearnings;
