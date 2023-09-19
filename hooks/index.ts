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
    mobileImage: study.mobileImage,
    desktopImage: study.desktopImage,
  }));

  return transformedCaseStudies;
}

export async function caseStudyFullInfo() {
  const caseStudies: CaseStudyType[] = await getCaseStudy();
  return caseStudies;
}

export async function getHomePageData() {
  try {
    const caseStudies = await caseStudyInfoHomepage();
    const testimonials = await getTestimonials();
    const workExperienceList = await getWorkExperiences();
    const services = await getServicesProvided();
    const mySkills = await getMySkills();

    return {
      props: {
        caseStudies,
        testimonials,
        workExperienceList,
        services,
        mySkills,
      },
    };
  } catch (error) {
    const e = error as Error;
    console.error("Error fetching data in getHomePageData:", e);

    return {
      props: {
        error: e.message || "An error occurred.",
        caseStudies: [],
        testimonials: [],
        workExperienceList: [],
        services: [],
        mySkills: [],
      },
    };
  }
}
