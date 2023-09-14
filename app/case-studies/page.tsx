"use client";

import { motion } from "framer-motion";

import CaseStudyGallery from "../components/CaseStudyGallery";
import GetInTouchCard from "../components/homepage-components/GetInTouchCard";
import CaseStudiesTitleText from "../components/case-studies-components/CaseStudiesTitleText";

const CaseStudies = () => {
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
      <CaseStudyGallery />
      <GetInTouchCard />
    </main>
  );
};

export default CaseStudies;
