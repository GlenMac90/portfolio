import { FC } from "react";
import Image from "next/image";

import { laptopTemplate } from "@/public/png-icons/featured-projects-images";

import { laptopMockupStyles } from "@/constants";

import { MockupProps } from "@/utils/interfaces";

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
