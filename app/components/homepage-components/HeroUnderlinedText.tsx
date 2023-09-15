import React from "react";

const HeroUnderlinedText = () => {
  return (
    <>
      <div className="flex flex-col xl:hidden">
        <div className="relative flex w-fit flex-col">
          <p className="z-20 truncate whitespace-nowrap text-[2.625rem] font-bold text-black200 dark:text-white900 md:text-[4rem]">
            Web
          </p>
          <div className="absolute z-10 h-[1.2rem] w-full translate-y-[2.38rem] bg-orange-200 md:h-[1.8rem] md:translate-y-[3.625rem]" />
        </div>
        <div className="relative flex w-fit flex-col">
          <p className="z-20 truncate whitespace-nowrap text-[2.625rem] font-bold text-black200 dark:text-white900 md:text-[4rem]">
            Developer
          </p>
          <div className="absolute z-10 h-[1.2rem] w-full translate-y-[2.38rem] bg-orange-200 md:h-[1.8rem] md:translate-y-[3.625rem]" />
        </div>
      </div>
      <div className="relative hidden w-fit flex-col xl:flex">
        <p className="z-20 truncate whitespace-nowrap text-[2.625rem] font-bold text-black200 dark:text-white900 md:text-[4rem]">
          Web Developer
        </p>
        <div className="absolute z-10 h-[1.2rem] w-full translate-y-[2.38rem] bg-orange-200 md:h-[1.8rem] md:translate-y-[3.625rem]" />
      </div>
    </>
  );
};

export default HeroUnderlinedText;
