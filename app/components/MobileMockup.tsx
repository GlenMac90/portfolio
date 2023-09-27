import Image from "next/image";

import { iphoneTemplate } from "@/public/png-icons/featured-projects-images";
import { MockupProps } from "@/utils/interfaces";

const mobileMockupStyles = {
  homepageParent: "lg:h-[17rem] lg:w-[8.7rem] lg:-translate-x-6",
  otherPageParent: "sm:h-[17rem] sm:w-[8.6rem] sm:-translate-x-6",
  homepageChild:
    "left-[5%] rounded-[10%] h-[95%] w-[90%] top-[0.2rem] lg:left-2 lg:top-2 lg:h-[16.3rem] lg:w-[7.5rem] lg:rounded-2xl",
  otherPageChild:
    "left-[9%] rounded-[10%] h-[95%] w-[83%] top-[0.2rem] sm:left-[0.6rem] sm:top-2 sm:h-[15.6rem] sm:w-[7rem] sm:rounded-2xl",
};

const MobileMockup = ({
  imageSrc,
  isHomepage = false,
  isCaseStudyPage = false,
}: MockupProps) => {
  const { homepageParent, otherPageParent, homepageChild, otherPageChild } =
    mobileMockupStyles;
  const parentDivStyles = isHomepage ? homepageParent : otherPageParent;
  const childDivSytles = isHomepage ? homepageChild : otherPageChild;
  return (
    <div
      className={`relative z-20 flex min-w-[3rem] -translate-x-4 self-end overflow-hidden ${parentDivStyles} ${
        isCaseStudyPage && "w-full max-w-[20%]"
      }`}
    >
      <Image
        src={iphoneTemplate}
        alt="iphone template image"
        className="z-20 h-auto w-auto"
      />
      <div
        className={`absolute z-10 flex overflow-hidden rounded-md ${childDivSytles}`}
      >
        <Image
          src={imageSrc}
          alt="mobile image of project"
          style={{ objectFit: "cover" }}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default MobileMockup;
