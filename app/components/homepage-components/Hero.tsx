import Image from "next/image";

import { temporaryHeroIcon } from "@/public/png-icons";
import { frame } from "@/public/svg-icons";

const Hero = () => {
  return (
    <section className="relative mt-16 flex w-full max-w-7xl flex-col bg-white800 px-5 pt-12 dark:bg-black300 md:mt-24 md:px-20 xl:flex-row xl:justify-between xl:pb-24">
      <div className="z-20 flex flex-col md:w-[38rem]">
        <p className="font-semibold tracking-widest text-primaryLight md:text-xl">
          HI, I AM GLEN
        </p>
        <p className="mt-5 text-[2.625rem] font-bold text-black200 dark:text-white900 md:text-[4rem]">
          Professional
        </p>
        <div className="relative flex w-fit flex-col">
          <p className="z-20 truncate whitespace-nowrap text-[2.625rem] font-bold text-black200 dark:text-white900 md:text-[4rem]">
            Web Developer
          </p>
          <div className="absolute z-10 h-[1.2rem] w-full translate-y-[2.38rem] bg-orange-200 md:h-[1.8rem] md:translate-y-[3.625rem]" />
        </div>
        <p className="text-[2.625rem] font-bold text-black200 dark:text-white900 md:text-[4rem]">
          based in Bulgaria
        </p>
        <p className="mt-3 text-white500 dark:text-white800 xl:w-[29rem]">
          Transforming the web one line of code at a time: Crafting cutting-edge
          digital experiences with precision, passion and a profound commitment
          to excellence.
        </p>
        <div className="mt-9 flex flex-col md:flex-row md:justify-between md:gap-4">
          <button className="w-full rounded-full bg-primaryLight py-3.5 text-sm font-semibold text-white900 dark:bg-primaryDark md:w-[15rem] md:py-5 md:text-lg">
            My Work
          </button>
          <button className="mt-3.5 flex w-full items-center justify-between gap-4 rounded-full bg-white900 px-4 py-3.5 text-white500 dark:bg-black200 dark:text-white900 md:mt-0 md:px-6 md:py-5">
            <p>glen.mccallum@live.co.uk</p>
            <Image
              src={frame}
              alt="click to download resume"
              className="h-4 w-4 md:h-5 md:w-5"
            />
          </button>
        </div>
      </div>
      <div className="z-10 mt-6 flex w-full justify-end xl:absolute xl:right-0 xl:w-auto xl:justify-center">
        <Image src={temporaryHeroIcon} alt="hero image icon" />
      </div>
    </section>
  );
};

export default Hero;
