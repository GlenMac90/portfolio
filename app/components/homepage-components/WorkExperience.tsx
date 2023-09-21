"use client";

import { motion } from "framer-motion";

import { WorkExperienceType } from "@/types";
import WorkExperienceCard from "./WorkExperienceCard";
import UnderlinedText from "../UnderlinedText";

interface WorkExperienceProps {
  workExperienceList: WorkExperienceType[];
}

const WorkExperience = ({ workExperienceList }: WorkExperienceProps) => {
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
            <p className="text-[2.25rem] font-bold leading-tight text-white900 dark:text-black200 md:text-[3rem]">
              Work
            </p>
            <div className="flex">
              <UnderlinedText
                text="Experi"
                additionalStyles="flex self-center"
                workExperience
              />

              <p className="text-[2.25rem] font-bold leading-tight text-white900 dark:text-black200 md:text-[3rem] ">
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
                animate={{ x: ["-8rem", "0rem", "-8rem"] }}
                transition={{
                  duration: 7,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="absolute right-0 flex h-14 w-14 items-center justify-center rounded-full border border-slate-400 bg-black200 dark:bg-white800 lg:h-[4.4rem] lg:w-[4.4rem]"
              >
                <div className="h-8 w-8 rounded-full bg-white900 dark:bg-black200 lg:h-[2.7rem] lg:w-[2.7rem]" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="mt-4 flex w-full max-w-3xl flex-col gap-4 xl:ml-6 xl:mt-0 xl:w-1/2 xl:gap-7">
          {workExperienceList.map((job, index) => (
            <WorkExperienceCard key={job.title} job={job} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
