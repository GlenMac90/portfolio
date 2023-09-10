"use client";
import React from "react";

import Image from "next/image";
import { Tooltip } from "@nextui-org/react";

import { CaseStudyHeaderProps } from "@/utils/interfaces";

const CaseStudyTechStack: React.FC<CaseStudyHeaderProps> = ({
  mainProject,
}) => {
  const startDate = mainProject?.startDate;
  const endDate = mainProject?.endDate;
  return (
    <section className="flex w-full flex-col bg-white900 px-6 py-10 dark:bg-black200 md:pb-[4.5rem] md:pt-[3.3rem]">
      <div className="flex w-full max-w-3xl flex-col justify-between gap-9 self-center md:flex-row md:gap-0">
        <div className="flex flex-col">
          <p className="text-sm font-medium text-black400 dark:text-white500 md:text-lg">
            My Role
          </p>
          <p className="mt-1 text-xl font-medium text-black200 dark:text-white900 md:text-2xl">
            {mainProject?.myRole}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-medium text-black400 dark:text-white500 md:text-lg">
            Start Date
          </p>
          <p className="mt-1 text-xl font-medium text-black200 dark:text-white900 md:text-2xl">
            {startDate?.getDate()}/{startDate?.getMonth()}/
            {startDate?.getFullYear()}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-medium text-black400 dark:text-white500 md:text-lg">
            End date
          </p>
          <p className="mt-1 text-xl font-medium text-black200 dark:text-white900 md:text-2xl">
            {endDate?.getDate()}/{endDate?.getMonth()}/{endDate?.getFullYear()}
          </p>
        </div>
      </div>
      <div className="mt-20 flex w-full max-w-3xl flex-col justify-center self-center md:mt-28">
        <p className="text-xs font-semibold text-primaryLight dark:text-primaryDark md:text-sm">
          Technologies Used
        </p>
        <p className="mt-1 text-[1.75rem] font-medium text-black200 dark:text-white900 md:text-[2rem]">
          Tech Stack
        </p>
        <div className="mt-6 flex max-w-md flex-wrap items-center justify-center gap-5 self-center md:mt-11 md:max-w-3xl md:justify-center md:gap-9">
          {mainProject?.techStackCaseStudy?.map((tech) => (
            <Tooltip content={tech.text} key={tech.text}>
              <div className="flex h-[3rem] w-[3rem] cursor-pointer rounded-full bg-white800 p-3 dark:bg-black300 sm:h-[5.75rem] sm:w-[5.75rem] sm:p-6">
                <Image
                  src={tech.image}
                  className="h-[1.5rem] w-[1.5rem] sm:h-[3rem] sm:w-[3rem]"
                  alt="image of tech stack used"
                />
              </div>
            </Tooltip>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyTechStack;
