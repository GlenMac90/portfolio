import React from "react";

interface CaseStudiesTitleTextProps {
  wordOne: string;
  wordTwo: string;
  wordThree: string;
}

const CaseStudiesTitleText: React.FC<CaseStudiesTitleTextProps> = ({
  wordOne,
  wordTwo,
  wordThree,
}) => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex">
        <p className="z-20  text-4xl font-bold text-black200 dark:text-white900 md:text-[3rem]">
          {wordOne}
        </p>
        <div className="relative ml-2 flex w-fit flex-col self-center md:ml-3 lg:hidden">
          <p className="z-20 text-4xl font-bold text-black200 dark:text-white900 md:text-[3rem]">
            {wordTwo}
          </p>
          <div className="absolute z-10 h-[1rem] w-full translate-y-[1.6rem] bg-orange-200 md:h-[1.358rem] md:translate-y-[1.7rem]" />
        </div>
      </div>
      <div className="relative ml-4 flex w-fit flex-col self-center md:mt-4 lg:hidden">
        <p className="z-20 text-4xl font-bold text-black200 dark:text-white900 md:text-[3rem]">
          {wordThree}
        </p>
        <div className="absolute z-10 h-[1rem] w-full translate-y-[1.6rem] bg-orange-200 md:h-[1.358rem] md:translate-y-[1.7rem]" />
      </div>

      <div className="relative ml-4 hidden w-fit flex-col self-center lg:flex">
        <p className="z-20 text-4xl font-bold text-black200 dark:text-white900 md:text-[3rem]">
          {wordTwo} {wordThree}
        </p>
        <div className="absolute z-10 h-[1rem] w-full translate-y-[1.6rem] bg-orange-200 md:h-[1.358rem] md:translate-y-[1.7rem]" />
      </div>
    </div>
  );
};

export default CaseStudiesTitleText;
