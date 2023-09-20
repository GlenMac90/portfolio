import { getHomePageData } from "@/hooks";

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
  const results = await getHomePageData();
  const { mySkills, services, workExperienceList, caseStudies, testimonials } =
    results;

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
