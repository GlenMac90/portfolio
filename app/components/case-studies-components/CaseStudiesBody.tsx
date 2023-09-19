"use client";

import { motion } from "framer-motion";

import { CaseStudiesTitleText } from ".";
import CaseStudyGallery from "../CaseStudyGallery";
import { GetInTouchCard } from "../homepage-components";
import { CaseStudiesShortenedProps } from "@/utils/interfaces";

const CaseStudiesBody = ({ caseStudies }: CaseStudiesShortenedProps) => {
  return (
    <main className="flex w-screen flex-col justify-center">
      <header className="flex w-full flex-col items-center bg-white800 dark:bg-black300">
        <motion.div
          initial={{ y: "10%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            y: { duration: 0.7 },
            opacity: { duration: 0.7 },
          }}
          className="mt-20 flex max-w-3xl flex-col items-center  px-6 py-12 md:mt-32 md:py-[6.5rem]"
        >
          <CaseStudiesTitleText />
          <p className="mt-5 text-center text-sm text-white500 dark:text-white800 md:mt-6 md:text-xl">
            {
              "Dive into my recent success stories and discover how I've helped clients overcome challenges, innovate, and achieve their goals."
            }
          </p>
        </motion.div>
      </header>
      <CaseStudyGallery caseStudies={caseStudies} />
      <GetInTouchCard />
    </main>
  );
};

export default CaseStudiesBody;
