import { useState, useEffect } from "react";

import { SimilarProjectSmallCard } from ".";
import { CaseStudyType } from "@/types";

interface SimilarProjectGalleryProps {
  caseStudies: CaseStudyType[];
  current: number;
}

const SimilarProjectsGallery = ({
  caseStudies,
  current,
}: SimilarProjectGalleryProps) => {
  const [isMdScreen, setIsMdScreen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkScreenSize = () => {
        setIsMdScreen(window.innerWidth >= 768);
      };
      checkScreenSize();
      window.addEventListener("resize", checkScreenSize);
      return () => window.removeEventListener("resize", checkScreenSize);
    }
  }, []);

  const carouselTranslateValue = isMdScreen
    ? `translateX(-${current * 100}%)`
    : "translateX(0)";

  return (
    <div
      className="mt-9 flex w-full max-w-xl flex-col gap-6 transition-transform duration-0 md:mt-10 md:flex-row md:gap-0 md:duration-1000 md:ease-out"
      style={{ transform: carouselTranslateValue }}
    >
      {caseStudies?.map((caseStudy) => (
        <div
          key={caseStudy.title}
          className="flex w-full px-4 md:shrink-0 md:grow-0 md:basis-full"
        >
          <SimilarProjectSmallCard caseStudy={caseStudy} />
        </div>
      ))}
    </div>
  );
};

export default SimilarProjectsGallery;
