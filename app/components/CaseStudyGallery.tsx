import { featuredProjectsList } from "@/constants";
import CaseStudyCard from "./case-studies-components/CaseStudyCard";

const CaseStudyGallery = () => {
  return (
    <section className="flex w-full max-w-[78rem] flex-col items-center justify-center gap-4 self-center px-6 py-12 md:gap-8 md:py-[4.5rem] xl:grid xl:grid-cols-2 xl:px-2">
      {featuredProjectsList.map((project) => (
        <CaseStudyCard key={project.title} mainProject={project} />
      ))}
    </section>
  );
};

export default CaseStudyGallery;
