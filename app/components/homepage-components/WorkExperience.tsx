"use client";

import { motion } from "framer-motion";

import { workExperience } from "@/constants";
import WorkExperienceCard from "./WorkExperienceCard";

const WorkExperience = () => {
  return (
    <section className="flex w-full flex-col justify-center bg-white900 p-6 dark:bg-black200 md:px-20 md:py-[4.5rem] xl:flex-row">
      <div className="flex w-full max-w-7xl flex-col items-center xl:flex-row ">
        <motion.div
          initial={{ x: "-25%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex h-full w-full max-w-3xl flex-col xl:w-1/2 xl:self-start"
        >
          <div className="flex h-full w-full flex-col rounded-xl bg-black200 px-9 pb-9 pt-[3.5rem] dark:bg-white800 md:pb-[6.5rem] md:pl-[6.5rem] md:pr-[9rem] md:pt-[9.5rem]">
            <p className="text-4xl font-bold text-white900 dark:text-black200 md:text-5xl">
              Work
            </p>
            <div className="flex">
              <div className="relative flex w-fit flex-col self-center">
                <p className="z-20 text-4xl font-bold text-white900 dark:text-black200 md:text-5xl">
                  Experi
                </p>
                <div className="absolute z-10 h-[1.02rem] w-full translate-y-[1.6rem] bg-orange-200 md:h-[1.3rem] md:translate-y-[2rem]" />
              </div>

              <p className="text-4xl font-bold text-white900 dark:text-black200 md:text-5xl">
                ence
              </p>
            </div>
            <p className="mt-6 text-sm text-white800 dark:text-white500 md:mt-8 md:text-lg">
              Progress and milestones: A simple walkthrough of roles, projects
              and achievements in my career
            </p>
            <div className="relative mt-3.5 flex h-14 w-full items-center lg:mt-6 lg:h-[4.4rem] ">
              <div className="w-full border-t border-slate-400" />
              <motion.div
                initial={{ x: "-300%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 5 }}
                className="absolute right-0 flex h-14 w-14 items-center justify-center rounded-full border border-slate-400 bg-black200 dark:bg-white800 lg:h-[4.4rem] lg:w-[4.4rem]"
              >
                <div className="h-8 w-8 rounded-full bg-white900 dark:bg-black200 lg:h-[2.7rem] lg:w-[2.7rem]" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="mt-4 flex w-full max-w-3xl flex-col gap-4 xl:ml-6 xl:mt-0 xl:w-1/2 xl:gap-7">
          {workExperience.map((job, index) => (
            <motion.div
              initial={{ x: "25%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{
                x: { duration: 0.7, delay: index * 0.2 },
                opacity: { duration: 0.7, delay: index * 0.2 },
                scale: { duration: 0.3 },
              }}
              viewport={{ once: true }}
              key={job.title}
            >
              <WorkExperienceCard job={job} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
