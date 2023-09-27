import Link from "next/link";
import Image from "next/image";

import { CaseStudyCardProps } from "@/utils/interfaces";

const CaseStudyCard = ({ mainProject }: CaseStudyCardProps) => {
  return (
    <Link
      key={mainProject?.title}
      href={`/case-studies/${mainProject?.caseStudyLink}`}
    >
      <div className="flex flex-col">
        <div
          className="flex rounded-xl px-7 pt-[12%] sm:rounded-2xl"
          style={{
            backgroundColor: mainProject?.backgroundColour,
          }}
        >
          {mainProject?.desktopImage.image && (
            <Image
              src={mainProject?.desktopImage.image}
              alt="Laptop preview of website"
              height={600}
              width={600}
            />
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
