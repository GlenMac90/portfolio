"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

import {
  laptopTemplate,
  iphoneTemplate,
} from "@/public/png-icons/featured-projects-images";
import {
  demoButtonLight,
  demoButtonDark,
  arrowlight,
  arrowDark,
  githubButtonLight,
  githubButtonDark,
} from "@/public/svg-icons/case-study-icons";
import React from "react";

import { CaseStudyHeaderProps } from "@/utils/interfaces";

const CaseStudyHeader: React.FC<CaseStudyHeaderProps> = ({ mainProject }) => {
  const { theme } = useTheme();
  return (
    <section className="flex w-full flex-col items-center">
      <p className="mt-28 text-sm font-semibold tracking-widest text-primaryLight dark:text-primaryDark md:mt-40 md:text-xl">
        WEB DEV PROJECT
      </p>
      <div className="mx-2 mt-2.5 flex flex-col justify-center lg:mt-7 lg:flex-row">
        <div className="relative ml-4 flex w-fit flex-col self-center">
          <p className="z-20 text-4xl font-bold text-black200 dark:text-white900 md:text-[3rem]">
            {mainProject?.title}
          </p>
          <div className="absolute z-10 h-[1rem] w-full translate-y-[1.6rem] bg-orange-200 md:h-[1.358rem] md:translate-y-[1.7rem]" />
        </div>
        <p className="mt-0 text-center text-4xl font-bold text-black200 dark:text-white900 md:mt-4 md:text-[3rem] lg:mt-0">
          {" "}
          - {mainProject?.description}
        </p>
      </div>
      <div className="mt-6 flex lg:mt-[3.5rem]">
        {mainProject?.desktopImage && (
          <div className="relative z-30 flex h-[10.6rem] w-[17rem] sm:h-[19.5rem] sm:w-[32.35rem]">
            <Image src={laptopTemplate} alt="laptop template image" />
            <div className="absolute left-6 top-[0.3rem] flex h-[9.7rem] w-[14.1rem] overflow-hidden rounded sm:left-12 sm:h-[18rem] sm:w-[26.6rem] sm:rounded-t-xl">
              <Image
                src={mainProject?.desktopImage}
                alt="desktop image of project"
                objectFit="cover"
                className="h-full"
              />
            </div>
          </div>
        )}
        {mainProject?.mobileImage && (
          <div className="relative z-20 flex h-28 w-16 -translate-x-4 self-end sm:h-[17rem] sm:w-[7.8rem] sm:-translate-x-6">
            <Image
              src={iphoneTemplate}
              alt="iphone template image"
              className="z-20"
            />
            <div className="absolute left-1 top-1 z-10 flex h-[6.5rem] w-[3.5rem] overflow-hidden rounded-md sm:left-2 sm:top-2 sm:h-[16rem] sm:w-[6.8rem] sm:rounded-2xl">
              <Image
                src={mainProject?.mobileImage}
                alt="mobile image of project"
                objectFit="cover"
              />
            </div>
          </div>
        )}
      </div>
      <div className="mb-12 mt-6 flex justify-between gap-10 md:mb-16 md:mt-[4.5rem] md:gap-24">
        <div className="flex items-center gap-1 text-sm font-semibold text-primaryLight dark:text-primaryDark md:text-xl">
          <Image
            src={theme === "light" ? demoButtonLight : demoButtonDark}
            alt="Link to live site"
          />
          <p>Demo Site</p>
          <Image
            src={theme === "light" ? arrowlight : arrowDark}
            alt="Link to live site"
          />
        </div>
        <div className="flex items-center gap-1 text-sm font-semibold text-primaryLight dark:text-primaryDark md:text-xl">
          <Image
            src={theme === "light" ? githubButtonLight : githubButtonDark}
            alt="Link to source code"
          />
          <p>Source Code</p>
          <Image
            src={theme === "light" ? arrowlight : arrowDark}
            alt="Link to source code"
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHeader;
