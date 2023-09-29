"use client";

import { motion } from "framer-motion";

import CaseStudyCard from "./case-studies-components/CaseStudyCard";
import { CaseStudiesShortenedProps } from "@/utils/interfaces";

const CaseStudyGallery = ({ caseStudies }: CaseStudiesShortenedProps) => {
  return (
    <section className="flex w-full justify-center bg-white900 dark:bg-black200">
      <div className="flex w-full max-w-[78rem] flex-col items-center justify-center gap-4 self-center  px-6 py-12  md:gap-8 md:py-[4.5rem] xl:grid xl:grid-cols-2 xl:px-2">
        {caseStudies.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ y: "10%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{
              y: { duration: 0.7, delay: index * 0.2 },
              opacity: { duration: 0.7, delay: index * 0.2 },
            }}
          >
            <CaseStudyCard caseStudy={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudyGallery;
