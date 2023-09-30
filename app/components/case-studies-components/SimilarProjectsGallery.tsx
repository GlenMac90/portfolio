import { SimilarProjectSmallCard } from ".";
import { CaseStudyType } from "@/types";
import { useCaseStudyContext } from "@/app/contexts/CaseStudyContext";
import { SimilarProjectGalleryProps } from "@/utils/interfaces";

const SimilarProjectsGallery = ({ current }: SimilarProjectGalleryProps) => {
  const { similarProjects } = useCaseStudyContext();

  return (
    <div
      className="mt-9 flex w-full max-w-[38rem] flex-row transition-transform duration-1000 md:mt-10 md:gap-0 md:ease-out"
      style={{ transform: `translateX(-${current * 100}%)` }}
    >
      {similarProjects?.map((caseStudy: CaseStudyType) => (
        <div
          key={caseStudy.title}
          className="flex w-full shrink-0 grow-0 basis-full px-4"
        >
          <SimilarProjectSmallCard caseStudy={caseStudy} />
        </div>
      ))}
    </div>
  );
};

export default SimilarProjectsGallery;
