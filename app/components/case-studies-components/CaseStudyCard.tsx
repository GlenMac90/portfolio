import Link from "next/link";
import Image from "next/image";

import { CaseStudyCardProps } from "@/utils/interfaces";
import { desktopFallback } from "@/public/png-icons";

const CaseStudyCard = ({ caseStudy }: CaseStudyCardProps) => {
  const imageSrc = caseStudy?.desktopImage.image || desktopFallback;

  return (
    <Link
      key={caseStudy?.title}
      href={`/case-studies/${caseStudy?.caseStudyLink}`}
    >
      <div className="flex flex-col">
        <div
          className="flex rounded-xl px-7 pt-[12%] sm:rounded-2xl"
          style={{
            backgroundColor: caseStudy?.backgroundColour,
          }}
        >
          <Image
            src={imageSrc}
            alt="Laptop preview of website"
            height={600}
            width={600}
          />
        </div>
        <div className="flex w-full flex-col px-6">
          <p className="mt-5 text-xl font-semibold text-black200 dark:text-white900 sm:mt-8 sm:text-[2rem]">
            {caseStudy?.title}
          </p>
          <p className="mt-1.5 text-sm text-white500 dark:text-black400 sm:mt-2.5 sm:text-xl">
            {caseStudy?.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CaseStudyCard;
