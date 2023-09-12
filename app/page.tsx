import {
  Hero,
  MySkills,
  MyServices,
  WorkExperience,
  FeaturedProjects,
  Testimonials,
  GetInTouchCard,
} from "./components/homepage-components";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center bg-white800 dark:bg-black300">
      <Hero />
      <MySkills />
      <MyServices />
      <WorkExperience />
      <FeaturedProjects />
      <Testimonials />
      <GetInTouchCard />
    </main>
  );
}
