import React from "react";
import Image from "next/image";

import { CaseStudyHeaderProps } from "@/utils/interfaces";
import { challengeIcon, greenTick } from "@/public/svg-icons/case-study-icons";

const CaseStudyChallengesAndLearnings: React.FC<CaseStudyHeaderProps> = ({
  mainProject,
}) => {
  return (
    <section className="flex w-full flex-col items-center bg-white900 px-6 py-9 dark:bg-black200 md:py-[4.5rem]">
      <div className="flex w-full max-w-4xl flex-col">
        <p className="text-xs font-semibold text-primaryLight dark:text-primaryDark md:text-sm">
          Problem
        </p>
        <p className="mt-2 text-[1.75rem] font-semibold text-black200 dark:text-white900 md:text-[2rem]">
          Challenges & Learnings
        </p>
        <div className="my-6 flex flex-col rounded-[10px] bg-white800 px-3.5 py-6 dark:bg-black300 md:my-7 md:px-10 md:py-9">
          <p className="text-lg font-semibold text-challengeRed md:text-xl">
            CHALLENGES
          </p>
          <div className="mt-6 flex flex-col gap-5 md:mt-[1.75rem]">
            {mainProject?.challenges?.map((challenge, index) => (
              <div key={index} className="flex gap-2.5">
                <Image
                  src={challengeIcon}
                  height={20}
                  width={20}
                  alt="challenge symbol"
                  className="mt-1 self-start"
                />
                <p className="text-sm font-light text-white500 dark:text-white800 md:text-lg">
                  {challenge}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col rounded-[10px] bg-white800 px-3.5 py-6 dark:bg-black300 md:px-10 md:py-9">
          <p className="text-lg font-semibold text-learningsGreen md:text-xl">
            LEARNINGS
          </p>
          <div className="mt-6 flex flex-col gap-5 md:mt-[1.75rem]">
            {mainProject?.learnings?.map((learning, index) => (
              <div key={index} className="flex gap-2.5">
                <Image
                  src={greenTick}
                  height={20}
                  width={20}
                  alt="success symbol"
                  className="mt-1 self-start"
                />
                <p className="text-sm font-light text-white500 dark:text-white800 md:text-lg">
                  {learning}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyChallengesAndLearnings;
