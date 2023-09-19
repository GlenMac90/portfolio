import { CaseStudyShortened } from "@/utils/interfaces";
import { caseStudyInfoHomepage } from "@/hooks";
import {
  getTestimonials,
  getWorkExperiences,
  getServicesProvided,
  getMySkills,
} from "@/sanity/sanity.query";
import {
  ServiceProvidedType,
  SkillType,
  TestimonialType,
  WorkExperienceType,
} from "@/types";
import {
  Hero,
  MySkills,
  MyServices,
  WorkExperience,
  FeaturedProjects,
  Testimonials,
  GetInTouchCard,
} from "./components/homepage-components";

export default async function Home() {
  const caseStudies: CaseStudyShortened[] = await caseStudyInfoHomepage();
  const testimonials: TestimonialType[] = await getTestimonials();
  const workExperienceList: WorkExperienceType[] = await getWorkExperiences();
  const services: ServiceProvidedType[] = await getServicesProvided();
  const mySkills: SkillType[] = await getMySkills();

  return (
    <main className="flex w-full flex-col items-center overflow-hidden bg-white800 dark:bg-black300">
      <Hero />
      <MySkills mySkills={mySkills} />
      <MyServices services={services} />
      <WorkExperience workExperienceList={workExperienceList} />
      <FeaturedProjects caseStudies={caseStudies} />
      <Testimonials testimonials={testimonials} />
      <GetInTouchCard />
    </main>
  );
}
