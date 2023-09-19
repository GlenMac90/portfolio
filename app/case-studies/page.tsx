import { caseStudyInfoHomepage } from "@/hooks";
import { CaseStudyShortened } from "@/utils/interfaces";
import CaseStudiesBody from "../components/case-studies-components/CaseStudiesBody";

const CaseStudies = async () => {
  const caseStudies: CaseStudyShortened[] = await caseStudyInfoHomepage();
  return <CaseStudiesBody caseStudies={caseStudies} />;
};

export default CaseStudies;
