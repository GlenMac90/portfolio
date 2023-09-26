"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { CaseStudiesProps } from "@/utils/interfaces";
import { SimilarProjectSmallCard } from ".";
import CarouselButtons from "../homepage-components/CarouselButtons";

const SimilarCaseStudies = ({ caseStudies }: CaseStudiesProps) => {
  const [current, setCurrent] = useState(0);

  const previous = () =>
    setCurrent((index) => (index === 0 ? caseStudies.length - 1 : index - 1));

  const next = () =>
    setCurrent((index) => (index === caseStudies.length - 1 ? 0 : index + 1));

  return (
    <section className="flex w-full flex-col items-center bg-white800 px-6 py-9 dark:bg-black300 md:py-[4.5rem]">
      <div className="relative flex w-full max-w-3xl justify-center">
        <div className="flex w-full max-w-xl flex-col overflow-hidden">
          <motion.div
            initial={{ y: "10%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col px-4"
          >
            <p className="text-xs font-semibold text-primaryLight dark:text-primaryDark md:text-sm">
              Projects
            </p>
            <p className="mt-2.5 text-[1.75rem] font-semibold text-black200 dark:text-white900 md:text-[2rem]">
              Other Case Studies
            </p>
          </motion.div>

          <div
            className="mt-9 flex w-full max-w-xl flex-col gap-6 transition-transform duration-1000 ease-out md:mt-10 md:flex-row md:gap-0"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {caseStudies?.map((caseStudy) => (
              <div
                key={caseStudy.title}
                className="flex w-full px-4 md:shrink-0 md:grow-0 md:basis-full"
              >
                <SimilarProjectSmallCard caseStudy={caseStudy} />
              </div>
            ))}
          </div>

          <CarouselButtons
            additionalClassesLeft="self-center left-0 top-[50%] hidden md:flex"
            additionalClassesRight="self-center right-0 top-[50%] hidden md:flex"
            previous={previous}
            next={next}
          />
        </div>
      </div>
    </section>
  );
};

export default SimilarCaseStudies;
