import Image from "next/image";

import { laptopTemplate } from "@/public/png-icons/featured-projects-images";

import { MockupProps } from "@/utils/interfaces";

const laptopMockupStyles = {
  homepageParent: "h-40 w-64 lg:h-[21rem] lg:w-[34.5rem]",
  otherPageParent: "h-[10.6rem] w-[17rem] sm:h-[19.5rem] sm:w-[32.35rem]",
  homepageChild:
    "top-[0.2rem] h-[9.25rem] w-[13.28rem] left-[1.423rem] lg:left-12 lg:h-[19.4rem] lg:w-[28.75rem] lg:rounded-t-[10px] lg:top-[0.29rem]",
  otherPageChild:
    "top-[0.25rem] h-[9.7rem] left-[1.55rem] sm:top-[0.36rem] w-[14rem] sm:left-[2.9rem] sm:h-[18rem] sm:w-[26.8rem] sm:rounded-t-lg",
};

const LaptopMockup = ({ imageSrc, isHomepage = false }: MockupProps) => {
  const { homepageParent, otherPageParent, homepageChild, otherPageChild } =
    laptopMockupStyles;

  const parentDivStyles = isHomepage ? homepageParent : otherPageParent;
  const childDivSytles = isHomepage ? homepageChild : otherPageChild;

  return (
    <div className={`relative z-30 flex ${parentDivStyles}`}>
      <Image src={laptopTemplate} alt="laptop template image" />
      <div
        className={`absolute flex overflow-hidden rounded ${childDivSytles}`}
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
