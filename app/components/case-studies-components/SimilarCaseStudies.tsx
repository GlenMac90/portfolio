"use client";

import { motion } from "framer-motion";

import { CaseStudyHeaderProps } from "@/utils/interfaces";

import { SimilarProjectSmallCard } from ".";

const SimilarCaseStudies = ({ similarProjects }: CaseStudyHeaderProps) => {
  return (
    <section className="flex w-full flex-col items-center bg-white800 px-6 py-9 dark:bg-black300 md:py-[4.5rem]">
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ y: "10%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <p className="text-xs font-semibold text-primaryLight dark:text-primaryDark md:text-sm">
            Projects
          </p>
          <p className="mt-2.5 text-[1.75rem] font-semibold text-black200 dark:text-white900 md:text-[2rem]">
            Other Case Studies
          </p>
        </motion.div>
        <div className="mt-9 flex w-full max-w-4xl flex-col gap-6 md:mt-10 md:flex-row">
          {similarProjects?.map((project, index) => (
            <motion.div
              initial={{ y: "20%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                y: { duration: 0.5, delay: index * 0.2 },
                opacity: { duration: 0.5, delay: index * 0.4 },
                scale: { duration: 0.1 },
              }}
              viewport={{ once: true }}
              key={project.title}
              className="flex md:w-1/2"
            >
              <SimilarProjectSmallCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarCaseStudies;
