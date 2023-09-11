import Link from "next/link";
import React from "react";
import Image from "next/image";

import { laptopTemplate } from "@/public/png-icons/featured-projects-images";
import { CaseStudyHeaderProps } from "@/utils/interfaces";

const CaseStudyCard: React.FC<CaseStudyHeaderProps> = ({ mainProject }) => {
  return (
    <Link
      key={mainProject?.title}
      href={`/case-studies/${mainProject?.caseStudyLink}`}
    >
      <div className="flex flex-col">
        <div
          className="flex rounded-xl px-7 pt-12 sm:rounded-2xl sm:pt-20 "
          style={{
            backgroundColor: mainProject?.backgroundColour,
          }}
        >
          <div className="relative z-30 flex h-40 w-[17rem] translate-y-1 sm:h-[20rem] sm:w-[35rem]">
            <Image src={laptopTemplate} alt="laptop template image" />
            {mainProject?.desktopImage && (
              <div className="absolute left-[1.55rem] top-1 flex h-[9.2rem] w-[14rem] overflow-hidden rounded sm:left-[3rem] sm:h-[18.7rem] sm:w-[29.27rem] sm:rounded-t-[10px] xl:left-[2.93rem] xl:w-[28.38rem]">
                <Image
                  src={mainProject?.desktopImage}
                  alt="desktop image of project"
                  objectFit="cover"
                  className="h-full"
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex w-full flex-col px-6">
          <p className="mt-5 text-xl font-semibold text-black200 sm:mt-8 sm:text-[2rem]">
            {mainProject?.title}
          </p>
          <p className="mt-1.5 text-sm text-white500 sm:mt-2.5 sm:text-xl">
            {mainProject?.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CaseStudyCard;
