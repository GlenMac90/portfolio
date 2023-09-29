import {
  getCaseStudy,
  getMySkills,
  getServicesProvided,
  getTestimonials,
  getWorkExperiences,
} from "@/sanity/sanity.query";
import type { CaseStudyType } from "@/types";

export async function caseStudyInfoHomepage() {
  const caseStudies: CaseStudyType[] = await getCaseStudy();

  const transformedCaseStudies = caseStudies.map((study) => ({
    caseStudyLink: study.caseStudyLink,
    backgroundColour: study.backgroundColour,
    title: study.title,
    techList: study.techList,
    description: study.description,
    desktopMobileImage: study.desktopMobileImage,
    desktopImage: study.desktopImage,
  }));

  return transformedCaseStudies;
}

export async function caseStudyFullInfo() {
  const caseStudies: CaseStudyType[] = await getCaseStudy();
  return caseStudies;
}

export async function getHomePageData() {
  const results = await Promise.allSettled([
    caseStudyInfoHomepage(),
    getTestimonials(),
    getWorkExperiences(),
    getServicesProvided(),
    getMySkills(),
  ]);

  const [
    caseStudiesResult,
    testimonialsResult,
    workExperienceListResult,
    servicesResult,
    mySkillsResult,
  ] = results;

  const caseStudies =
    caseStudiesResult.status === "fulfilled" ? caseStudiesResult.value : [];
  const testimonials =
    testimonialsResult.status === "fulfilled" ? testimonialsResult.value : [];
  const workExperienceList =
    workExperienceListResult.status === "fulfilled"
      ? workExperienceListResult.value
      : [];
  const services =
    servicesResult.status === "fulfilled" ? servicesResult.value : [];
  const mySkills =
    mySkillsResult.status === "fulfilled" ? mySkillsResult.value : [];

  const errors = results
    .filter((result) => result.status === "rejected")
    .map((result) => (result as PromiseRejectedResult).reason);

  if (errors.length) {
    console.error("Some errors occurred during data fetching:", errors);
  }

  return {
    caseStudies,
    testimonials,
    workExperienceList,
    services,
    mySkills,
    error: errors.length ? "One or more requests failed." : undefined,
  };
}
