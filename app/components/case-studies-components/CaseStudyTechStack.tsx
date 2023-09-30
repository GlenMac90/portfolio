"use client";

import Image from "next/image";
import { Tooltip } from "@nextui-org/react";
import { motion } from "framer-motion";

import { useCaseStudyContext } from "@/app/contexts/CaseStudyContext";
import { TechStackItem } from "@/utils/interfaces";

const CaseStudyTechStack = () => {
  const { mainProject } = useCaseStudyContext();
  const startDate = new Date(mainProject?.startDate);
  const endDate = new Date(mainProject?.endDate);
  return (
    <section className="flex w-full flex-col bg-white900 px-6 py-10 dark:bg-black200 md:pb-[4.5rem] md:pt-[3.3rem]">
      <motion.div
        initial={{ y: "10%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="flex w-full max-w-3xl flex-col justify-between gap-9 self-center md:flex-row md:gap-0"
      >
        <div className="flex flex-col">
          <p className="text-sm font-medium text-black400 dark:text-white500 md:text-lg">
            My Role
          </p>
          <p className="mt-1 text-xl font-medium text-black200 dark:text-white900 md:text-2xl">
            {mainProject?.myRole}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-medium text-black400 dark:text-white500 md:text-lg">
            Start Date
          </p>
          <p className="mt-1 text-xl font-medium text-black200 dark:text-white900 md:text-2xl">
            {startDate?.getDate()}/{startDate?.getMonth()}/
            {startDate?.getFullYear()}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-medium text-black400 dark:text-white500 md:text-lg">
            End date
          </p>
          <p className="mt-1 text-xl font-medium text-black200 dark:text-white900 md:text-2xl">
            {endDate?.getDate()}/{endDate?.getMonth()}/{endDate?.getFullYear()}
          </p>
        </div>
      </motion.div>
      <div className="mt-20 flex w-full max-w-3xl flex-col justify-center self-center md:mt-28">
        <motion.p
          initial={{ y: "10%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-semibold text-primaryLight dark:text-primaryDark md:text-sm"
        >
          Technologies Used
        </motion.p>
        <motion.p
          initial={{ y: "10%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            y: { duration: 0.5 },
          }}
          viewport={{ once: true }}
          className="mt-1 text-[1.75rem] font-medium text-black200 dark:text-white900 md:text-[2rem]"
        >
          Tech Stack
        </motion.p>
        <div className="mt-6 flex max-w-md flex-wrap items-center justify-center gap-5 self-center sm:max-w-3xl md:mt-11 md:justify-center md:gap-9">
          {mainProject?.techStackCaseStudy?.map(
            (tech: TechStackItem, index: number) => (
              <motion.div
                initial={{ y: "25%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.2 }}
                transition={{
                  y: { duration: 0.5, delay: index * 0.1 },
                  opacity: { duration: 0.5, delay: index * 0.1 },
                  scale: { duration: 0.1 },
                }}
                viewport={{ once: true }}
                key={tech.title}
              >
                <Tooltip content={tech.title}>
                  <div className="flex h-[3rem] w-[3rem] cursor-pointer items-center rounded-full bg-white800 p-3 dark:bg-black300 sm:h-[5.75rem] sm:w-[5.75rem] sm:p-6">
                    <Image
                      src={tech.image}
                      className="h-[1.5rem] w-[1.5rem] sm:h-[3rem] sm:w-[3rem]"
                      alt="image of tech stack used"
                      width={48}
                      height={48}
                    />
                  </div>
                </Tooltip>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyTechStack;
