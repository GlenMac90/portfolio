import Image from "next/image";

import { laptopTemplate } from "@/public/png-icons/featured-projects-images";

import { MockupProps } from "@/utils/interfaces";

const laptopMockupStyles = {
  homepageParent: "min-h-40 min-w-64 lg:h-[21rem] lg:w-[35rem]",
  otherPageParent:
    "min-h-[10.6rem] min-w-[17.9rem] sm:h-[19.5rem] sm:w-[32.8rem]",
  homepageChild:
    "top-[1.7%] h-[92%] rounded-t-[3%] rounded w-[83%] left-[8.9%]",
  otherPageChild: "top-[1.7%] h-[92%] rounded-[3%] left-[8.8%] w-[83.1%]",
};

const LaptopMockup = ({
  imageSrc,
  isHomepage = false,
  isCaseStudyPage = false,
}: MockupProps) => {
  const { homepageParent, otherPageParent, homepageChild, otherPageChild } =
    laptopMockupStyles;

  const parentDivStyles = isHomepage ? homepageParent : otherPageParent;
  const childDivSytles = isHomepage ? homepageChild : otherPageChild;

  return (
    <div
      className={`relative z-30 flex ${parentDivStyles} ${
        isCaseStudyPage && "w-full max-w-[80%]"
      }`}
    >
      <Image
        src={laptopTemplate}
        alt="laptop template image"
        width={555}
        height={329}
        className="lg:w-[35rem]"
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
