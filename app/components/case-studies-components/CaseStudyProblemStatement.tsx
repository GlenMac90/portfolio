"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { CaseStudyAndWorkProcessProps } from "@/utils/interfaces";

const CaseStudyProblemStatement = ({
  caseStudy,
  workProcess,
}: CaseStudyAndWorkProcessProps) => {
  return (
    <>
      <section className="flex w-full flex-col items-center justify-center bg-white800 px-6 py-9 dark:bg-black300 md:py-[4.5rem]">
        <div className="flex flex-col gap-4 self-center md:max-w-3xl">
          {caseStudy?.caseStudyDescription?.map((text, index) => (
            <motion.p
              initial={{ x: "25%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                x: { duration: 0.5, delay: index * 0.2 },
                opacity: { duration: 0.5, delay: index * 0.2 },
              }}
              viewport={{ once: true }}
              key={index}
              className="text-sm font-light text-white500 dark:text-white800 md:text-xl"
            >
              {text}
            </motion.p>
          ))}
        </div>
      </section>

      <section className="flex w-full flex-col items-center justify-center bg-white900 px-6 py-9 dark:bg-black200 md:py-[4.5rem]">
        <div className="flex w-full flex-col md:max-w-3xl">
          <motion.div
            initial={{ x: "-25%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              x: { duration: 0.5 },
              opacity: { duration: 0.5 },
            }}
            className="flex flex-col"
          >
            <p className="text-xs font-semibold text-primaryLight dark:text-primaryDark md:text-sm">
              Problem
            </p>
            <p className="mt-2 text-[1.75rem] font-semibold text-black200 dark:text-white900 md:text-[2rem]">
              Problem Statement
            </p>
            <p className="mt-5 text-sm font-light text-white500 dark:text-white800 md:text-xl">
              {caseStudy?.problemStatement}
            </p>
          </motion.div>
          {caseStudy?.problemStatementImage && (
            <motion.div
              initial={{ x: "-25%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                x: { duration: 0.5 },
                opacity: { duration: 0.5 },
              }}
              className="mt-6 w-full max-w-3xl md:mt-8"
            >
              <Image
                src={caseStudy.problemStatementImage.image}
                alt="image underlying text in problem statement"
                layout="responsive"
                className="w-full rounded md:rounded-xl"
                height={768}
                width={500}
              />
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default CaseStudyProblemStatement;
