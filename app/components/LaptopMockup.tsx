import { FC } from "react";
import Image from "next/image";

import { laptopTemplate } from "@/public/png-icons/featured-projects-images";

import { MockupProps } from "@/utils/interfaces";

const laptopMockupStyles = {
  homepageParent: "h-40 w-64 lg:h-[21rem] lg:w-[34.5rem]",
  otherPageParent: "h-[10.6rem] w-[17rem] sm:h-[19.5rem] sm:w-[32.35rem]",
  homepageChild:
    "top-1 h-36 w-[13.1rem] lg:left-12 lg:h-[19.4rem] lg:w-[28.75rem] lg:rounded-t-xl",
  otherPageChild:
    "top-[0.3rem] h-[9.7rem] w-[14.1rem] sm:left-[2.9rem] sm:h-[18rem] sm:w-[26.8rem] sm:rounded-t-xl",
};

const LaptopMockup: FC<MockupProps> = ({ imageSrc, isHomepage = false }) => {
  const { homepageParent, otherPageParent, homepageChild, otherPageChild } =
    laptopMockupStyles;

  const parentDivStyles = isHomepage ? homepageParent : otherPageParent;
  const childDivSytles = isHomepage ? homepageChild : otherPageChild;

  return (
    <div className={`relative z-30 flex ${parentDivStyles}`}>
      <Image src={laptopTemplate} alt="laptop template image" />
      <div
        className={`absolute left-6 flex overflow-hidden rounded ${childDivSytles}`}
      >
        <Image
          src={imageSrc}
          alt="desktop image of project"
          objectFit="cover"
          className="h-full"
        />
      </div>
    </div>
  );
};

export default LaptopMockup;
