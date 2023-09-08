import Hero from "./components/homepage-components/Hero";
import MySkills from "./components/homepage-components/MySkills";
import MyServices from "./components/homepage-components/MyServices";
import WorkExperience from "./components/homepage-components/WorkExperience";
import FeaturedProjects from "./components/homepage-components/FeaturedProjects";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center bg-white800 dark:bg-black300">
      <Hero />
      <MySkills />
      <MyServices />
      <WorkExperience />
      <FeaturedProjects />
    </main>
  );
}
