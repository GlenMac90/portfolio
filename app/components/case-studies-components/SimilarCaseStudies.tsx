"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import CarouselButtons from "../homepage-components/CarouselButtons";
import SimilarProjectsGallery from "./SimilarProjectsGallery";
import { useCaseStudyContext } from "@/app/contexts/CaseStudyContext";

const SimilarCaseStudies = () => {
  const { similarProjects } = useCaseStudyContext();
  const [current, setCurrent] = useState(0);

  const previous = () =>
    setCurrent((index) =>
      index === 0 ? similarProjects.length - 1 : index - 1
    );

  const next = () =>
    setCurrent((index) =>
      index === similarProjects.length - 1 ? 0 : index + 1
    );

  return (
    <section className="flex w-full flex-col items-center bg-white800 px-2 py-9 dark:bg-black300 md:py-[4.5rem]">
      <div className="relative flex w-full max-w-3xl justify-center">
        <div className="flex w-full max-w-[38rem] flex-col overflow-hidden">
          <motion.div
            initial={{ y: "10%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="z-10 flex flex-col px-4"
          >
            <p className="text-xs font-semibold text-primaryLight dark:text-primaryDark md:text-sm">
              Projects
            </p>
            <p className="mt-2.5 text-[1.75rem] font-semibold text-black200 dark:text-white900 md:text-[2rem]">
              Other Case Studies
            </p>
            <CarouselButtons
              additionalClassesLeft="left-6 top-28 md:hidden flex p-2"
              additionalClassesRight="right-6 top-28 md:hidden flex p-2"
              previous={previous}
              next={next}
            />
          </motion.div>
          <SimilarProjectsGallery current={current} />
          <CarouselButtons
            additionalClassesLeft="self-center left-0 top-[50%] hidden md:flex p-4"
            additionalClassesRight="self-center right-0 top-[50%] hidden md:flex p-4"
            previous={previous}
            next={next}
          />
        </div>
      </div>
    </section>
  );
};

export default SimilarCaseStudies;
