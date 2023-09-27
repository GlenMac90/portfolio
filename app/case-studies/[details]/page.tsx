import CaseStudyBody from "@/app/components/case-studies-components/CaseStudyBody";
import { getCaseStudy, getWorkProcessSymbols } from "@/sanity/sanity.query";
import { CaseStudyType } from "@/types";
import { CaseStudyProps } from "@/utils/interfaces";

const CaseStudy = async ({ params }: CaseStudyProps) => {
  const workProcessSymbols = await getWorkProcessSymbols();
  const allCaseStudies = await getCaseStudy();

  const mainProject = allCaseStudies.find(
    (project: CaseStudyType) => project.caseStudyLink === params.details
  );

  const similarProjects = allCaseStudies.filter(
    (project: CaseStudyType) => project.caseStudyLink !== params.details
  );

  return (
    <CaseStudyBody
      mainProject={mainProject}
      similarProjects={similarProjects}
      workProcess={workProcessSymbols}
    />
  );
};

export default CaseStudy;
