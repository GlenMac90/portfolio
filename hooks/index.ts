import { getCaseStudy } from "@/sanity/sanity.query";
import type { CaseStudyType } from "@/types";

export async function caseStudyInfoHomepage() {
  const caseStudies: CaseStudyType[] = await getCaseStudy();

  const transformedCaseStudies = caseStudies.map((study) => ({
    caseStudyLink: study.caseStudyLink,
    backgroundColour: study.backgroundColour,
    title: study.title,
    techList: study.techList,
    description: study.description,
    mobileImage: study.mobileImage,
    desktopImage: study.desktopImage,
  }));

  return transformedCaseStudies;
}

export async function caseStudyFullInfo() {
  const caseStudies: CaseStudyType[] = await getCaseStudy();
  return caseStudies;
}
