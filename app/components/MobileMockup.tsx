import { FC } from "react";
import Image from "next/image";

import { iphoneTemplate } from "@/public/png-icons/featured-projects-images";
import { MockupProps } from "@/utils/interfaces";

import { mobileMockupStyles } from "@/constants";

const MobileMockup: FC<MockupProps> = ({ imageSrc, isHomepage = false }) => {
  const { homepageParent, otherPageParent, homepageChild, otherPageChild } =
    mobileMockupStyles;
  const parentDivStyles = isHomepage ? homepageParent : otherPageParent;
  const childDivSytles = isHomepage ? homepageChild : otherPageChild;
  return (
    <div
      className={`relative z-20 flex h-28 w-16 -translate-x-4 self-end ${parentDivStyles}`}
    >
      <Image
        src={iphoneTemplate}
        alt="iphone template image"
        className="z-20"
      />
      <div
        className={`absolute left-1 top-1 z-10 flex h-[6.5rem] w-[3.5rem] overflow-hidden rounded-md ${childDivSytles}`}
      >
        <Image src={imageSrc} alt="mobile image of project" objectFit="cover" />
      </div>
    </div>
  );
};

export default MobileMockup;
