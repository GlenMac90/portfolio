import Image from "next/image";

import { laptopTemplate } from "@/public/png-icons/featured-projects-images";

import { MockupProps } from "@/utils/interfaces";

const laptopMockupStyles = {
  homepageParent: "h-40 w-64 lg:h-[21rem] lg:w-[35rem]",
  otherPageParent: "h-[10.6rem] w-[17.9rem] sm:h-[19.5rem] sm:w-[32.8rem]",
  homepageChild:
    "top-[0.3rem] h-[8.75rem] rounded-t w-[13.28rem] left-[1.423rem] lg:left-12 lg:h-[19rem] lg:w-[28.9rem] lg:rounded-t-[10px] lg:top-[0.4rem]",
  otherPageChild:
    "top-[0.37rem] h-[9.25rem] left-[1.61rem] sm:top-[0.72rem] w-[14.8rem] sm:left-[2.86rem] sm:h-[17.05rem] sm:w-[27.3rem]",
};

const LaptopMockup = ({ imageSrc, isHomepage = false }: MockupProps) => {
  const { homepageParent, otherPageParent, homepageChild, otherPageChild } =
    laptopMockupStyles;

  const parentDivStyles = isHomepage ? homepageParent : otherPageParent;
  const childDivSytles = isHomepage ? homepageChild : otherPageChild;

  return (
    <div className={`relative z-30 flex ${parentDivStyles}`}>
      <Image
        src={laptopTemplate}
        alt="laptop template image"
        width={555}
        height={329}
      />
      <div className={`absolute flex overflow-hidden ${childDivSytles}`}>
        <Image
          src={imageSrc}
          alt="desktop image of project"
          style={{
            objectFit: "cover",
            objectPosition: "top",
          }}
          width={600}
          height={400}
        />
      </div>
    </div>
  );
};

export default LaptopMockup;
