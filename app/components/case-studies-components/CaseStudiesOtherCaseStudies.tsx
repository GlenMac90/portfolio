import React from "react";
import Image from "next/image";
import Link from "next/link";

import { CaseStudyHeaderProps } from "@/utils/interfaces";

const truncateString = (str: string, num: number): string => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
};

const CaseStudiesOtherCaseStudies: React.FC<CaseStudyHeaderProps> = ({
  otherProjects,
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
          {otherProjects?.map((project) => (
            <div
              key={project.title}
              className="flex flex-col rounded-2xl bg-white900 dark:bg-black200 md:w-1/2 md:rounded-3xl"
            >
              {project.figmaBannerImage && (
                <div className="flex md:h-[16rem]">
                  <Image
                    src={project.figmaBannerImage}
                    alt="Image of similar case study"
                    className="h-full w-auto rounded-t-2xl md:rounded-t-3xl"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
              )}
              <div className="flex w-full flex-col px-5 pb-5 md:px-6 md:pb-6">
                <p className="mt-5 text-xl font-medium text-primaryLight dark:text-primaryDark md:mt-6 md:text-2xl">
                  {project.title}
                </p>
                {project?.caseStudyDescription && (
                  <p className="mt-1.5 font-light leading-7 text-white500 dark:text-white800">
                    {truncateString(project.caseStudyDescription[0], 150)}
                  </p>
                )}
                <Link
                  href={`/case-studies/${project.caseStudyLink}`}
                  className="mt-4 flex items-center justify-center rounded-full bg-primaryLight py-3.5 text-sm font-semibold text-white900 dark:bg-primaryDark"
                >
                  See Case Study
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesOtherCaseStudies;
