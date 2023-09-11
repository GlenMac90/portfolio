import CaseStudyGallery from "../components/CaseStudyGallery";
import GetInTouchCard from "../components/homepage-components/GetInTouchCard";
import CaseStudiesTitleText from "../components/case-studies-components/CaseStudiesTitleText";

const CaseStudies = () => {
  return (
    <main className="flex w-screen flex-col justify-center">
      <section className="flex w-full flex-col items-center bg-white800 dark:bg-black300">
        <div className="mt-20 flex max-w-3xl flex-col items-center  px-6 py-12 md:mt-32 md:py-[6.5rem]">
          <CaseStudiesTitleText />
          <p className="mt-5 text-center text-sm text-white500 dark:text-white800 md:mt-6 md:text-xl">
            {
              "Dive into my recent success stories and discover how I've helped clients overcome challenges, innovate, and achieve their goals."
            }
          </p>
        </div>
      </section>
      <CaseStudyGallery />
      <GetInTouchCard />
    </main>
  );
};

export default CaseStudies;
