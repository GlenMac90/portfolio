"use client";
import { FC } from "react";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

import {
  demoButtonLight,
  demoButtonDark,
  arrowlight,
  arrowDark,
  githubButtonLight,
  githubButtonDark,
} from "@/public/svg-icons/case-study-icons";

import { CaseStudyHeaderProps } from "@/utils/interfaces";

import LaptopMockup from "../LaptopMockup";
import MobileMockup from "../MobileMockup";

import Button from "../Button";

const CaseStudyHeader: FC<CaseStudyHeaderProps> = ({ mainProject }) => {
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
          <LaptopMockup imageSrc={mainProject?.desktopImage} />
        )}
        {mainProject?.mobileImage && (
          <MobileMockup imageSrc={mainProject?.mobileImage} />
        )}
      </div>
      <div className="mb-12 mt-6 flex justify-between gap-10 md:mb-16 md:mt-[4.5rem] md:gap-24">
        <Link href="/" className="flex">
          <Button>
            <Image
              src={theme === "light" ? demoButtonLight : demoButtonDark}
              alt="Demo Icon"
            />
            <p>Demo Site</p>
            <Image
              src={theme === "light" ? arrowlight : arrowDark}
              alt="Link to live site"
            />
          </Button>
        </Link>
        <Link href="/" className="flex">
          <Button>
            <Image
              src={theme === "light" ? githubButtonLight : githubButtonDark}
              alt="Github logo"
            />
            <p>Source Code</p>
            <Image
              src={theme === "light" ? arrowlight : arrowDark}
              alt="Link to source code"
            />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CaseStudyHeader;
