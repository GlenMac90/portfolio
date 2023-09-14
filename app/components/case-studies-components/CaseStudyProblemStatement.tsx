"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { CaseStudyHeaderProps } from "@/utils/interfaces";
import { workProcessSymbols } from "@/constants";

const CaseStudyProblemStatement = ({ mainProject }: CaseStudyHeaderProps) => {
  return (
    <>
      <section className="flex w-full flex-col items-center justify-center bg-white800 px-6 py-9 dark:bg-black300 md:py-[4.5rem]">
        <div className="flex flex-col gap-4 self-center md:max-w-3xl">
          {mainProject?.caseStudyDescription?.map((text, index) => (
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
              {mainProject?.problemStatement}
            </p>
          </motion.div>
          {mainProject?.problemStatementImage && (
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
                src={mainProject.problemStatementImage}
                alt="image underlying text in problem statement"
                layout="responsive"
                className="w-full rounded md:rounded-xl"
              />
            </motion.div>
          )}
        </div>
      </section>

      {mainProject?.figmaBannerImage && (
        <section className="flex w-full flex-col items-center justify-center">
          <div className="flex w-full items-center justify-center bg-primaryLight py-2.5 text-sm font-semibold text-white900 dark:bg-primaryDark md:py-9 md:text-[2rem]">
            HIGH-FIDELITY FIGMA DESIGN
          </div>
          <div className="w-full">
            <Image
              src={mainProject.figmaBannerImage}
              alt="image of figma design"
              layout="responsive"
              className="w-full"
            />
          </div>
        </section>
      )}
      <section className="flex w-full items-center justify-center bg-white900 px-6 py-9 dark:bg-black200 md:py-[4.5rem]">
        <div className="flex w-full max-w-4xl flex-col">
          <motion.div className="flex flex-col">
            <p className="text-xs font-semibold text-primaryLight dark:text-primaryDark md:text-sm">
              Way of Work
            </p>
            <p className="mt-2 text-[1.75rem] font-semibold text-black200 dark:text-white900 md:text-[2rem]">
              My Process
            </p>
          </motion.div>
          <div className="mt-6 flex max-w-md flex-wrap items-center justify-center gap-12 self-center md:mt-11 md:max-w-4xl md:justify-center md:gap-20">
            {workProcessSymbols.map((symbol, index) => (
              <motion.div
                initial={{ x: "25%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.2 }}
                transition={{
                  x: { duration: 0.5, delay: index * 0.2 },
                  opacity: { duration: 0.5, delay: index * 0.2 },
                }}
                viewport={{ once: true }}
                key={symbol.title}
                className="flex w-[4.7rem] flex-col items-center gap-3 md:w-[6rem] md:gap-5"
              >
                <div className="flex h-[4.7rem] w-[4.7rem] items-center justify-center rounded-full bg-white800 dark:bg-black300 md:h-[6rem] md:w-[6rem]">
                  <Image
                    src={symbol.image}
                    alt="symbol of working process"
                    layout="responsive"
                    className="max-h-[2.25rem] max-w-[2.25rem] md:max-h-[3rem] md:max-w-[3rem]"
                  />
                </div>
                <p className="whitespace-nowrap text-center text-sm font-medium text-black300 dark:text-white900 md:text-xl">
                  {symbol.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudyProblemStatement;
