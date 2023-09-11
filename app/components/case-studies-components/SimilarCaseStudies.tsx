import React from "react";

import { CaseStudyHeaderProps } from "@/utils/interfaces";

import { SimilarProjectSmallCard } from ".";

const SimilarCaseStudies: React.FC<CaseStudyHeaderProps> = ({
  similarProjects,
}) => {
  return (
    <section className="flex w-full flex-col items-center bg-white800 px-6 py-9 dark:bg-black300 md:py-[4.5rem]">
      <div className="w-full max-w-4xl">
        <p className="text-xs font-semibold text-primaryLight dark:text-primaryDark md:text-sm">
          Projects
        </p>
        <p className="mt-2.5 text-[1.75rem] font-semibold text-black200 dark:text-white900 md:text-[2rem]">
          Other Case Studies
        </p>
        <div className="mt-9 flex w-full max-w-4xl flex-col gap-6 md:mt-10 md:flex-row">
          {similarProjects?.map((project) => (
            <SimilarProjectSmallCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarCaseStudies;
