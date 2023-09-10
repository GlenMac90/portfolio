import CaseStudyGallery from "../components/CaseStudyGallery";
import GetInTouchCard from "../components/homepage-components/GetInTouchCard";

const CaseStudies = () => {
  return (
    <main className="flex w-screen flex-col justify-center">
      <section className="flex w-full flex-col items-center bg-white800 dark:bg-black300">
        <div className="mt-20 flex max-w-3xl flex-col items-center  px-6 py-12 md:mt-32 md:py-[6.5rem]">
          <div className="flex flex-col lg:flex-row">
            <div className="flex">
              <p className="z-20  text-4xl font-bold text-black200 dark:text-white900 md:text-[3rem]">
                Recent
              </p>
              <div className="relative ml-2 flex w-fit flex-col self-center md:ml-3 lg:hidden">
                <p className="z-20 text-4xl font-bold text-black200 dark:text-white900 md:text-[3rem]">
                  Case
                </p>
                <div className="absolute z-10 h-[1rem] w-full translate-y-[1.6rem] bg-orange-200 md:h-[1.358rem] md:translate-y-[1.7rem]" />
              </div>
            </div>
            <div className="relative ml-4 flex w-fit flex-col self-center md:mt-4 lg:hidden">
              <p className="z-20 text-4xl font-bold text-black200 dark:text-white900 md:text-[3rem]">
                Studies
              </p>
              <div className="absolute z-10 h-[1rem] w-full translate-y-[1.6rem] bg-orange-200 md:h-[1.358rem] md:translate-y-[1.7rem]" />
            </div>
            <div className="relative ml-4 hidden w-fit flex-col self-center lg:flex">
              <p className="z-20 text-4xl font-bold text-black200 dark:text-white900 md:text-[3rem]">
                Case Studies
              </p>
              <div className="absolute z-10 h-[1rem] w-full translate-y-[1.6rem] bg-orange-200 md:h-[1.358rem] md:translate-y-[1.7rem]" />
            </div>
          </div>
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
