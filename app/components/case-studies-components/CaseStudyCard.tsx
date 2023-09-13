import Link from "next/link";

import { CaseStudyHeaderProps } from "@/utils/interfaces";
import LaptopMockup from "../LaptopMockup";

const CaseStudyCard = ({ mainProject }: CaseStudyHeaderProps) => {
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
          {mainProject?.desktopImage && (
            <LaptopMockup imageSrc={mainProject?.desktopImage} />
          )}
        </div>
        <div className="flex w-full flex-col px-6">
          <p className="mt-5 text-xl font-semibold text-black200 dark:text-white900 sm:mt-8 sm:text-[2rem]">
            {mainProject?.title}
          </p>
          <p className="mt-1.5 text-sm text-white500 dark:text-black400 sm:mt-2.5 sm:text-xl">
            {mainProject?.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CaseStudyCard;
