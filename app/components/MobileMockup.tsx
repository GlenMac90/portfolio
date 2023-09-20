import Image from "next/image";

import { iphoneTemplate } from "@/public/png-icons/featured-projects-images";
import { MockupProps } from "@/utils/interfaces";

const mobileMockupStyles = {
  homepageParent: "lg:h-[17rem] lg:w-[8.7rem] lg:-translate-x-6",
  otherPageParent: "sm:h-[17rem] sm:w-[8.6rem] sm:-translate-x-6",
  homepageChild: "lg:left-2 lg:top-2 lg:h-[16rem] lg:w-[7.5rem] lg:rounded-2xl",
  otherPageChild:
    "sm:left-[0.25rem] sm:top-2 sm:h-[15.5rem] sm:w-[8rem] sm:rounded-2xl",
};

const MobileMockup = ({ imageSrc, isHomepage = false }: MockupProps) => {
  const { homepageParent, otherPageParent, homepageChild, otherPageChild } =
    mobileMockupStyles;
  const parentDivStyles = isHomepage ? homepageParent : otherPageParent;
  const childDivSytles = isHomepage ? homepageChild : otherPageChild;
  return (
    <div
      className={`relative z-20 flex h-28 w-[4.2rem] -translate-x-4 self-end overflow-hidden ${parentDivStyles}`}
    >
      <Image
        src={iphoneTemplate}
        alt="iphone template image"
        className="z-20 h-auto w-auto"
      />
      <div
        className={`absolute left-[0.15rem] top-1 z-10 flex h-[6.2rem] w-[3.2rem] overflow-hidden rounded-md ${childDivSytles}`}
      >
        <Image
          src={imageSrc}
          alt="mobile image of project"
          style={{ objectFit: "fill" }}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default MobileMockup;
