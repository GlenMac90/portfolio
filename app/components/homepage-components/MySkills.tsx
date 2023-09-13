"use client";

import { motion } from "framer-motion";

import { mySkillsArray } from "@/constants";
import SkillIcon from "./SkillIcon";

const MySkills = () => {
  return (
    <section className="flex w-full flex-col justify-center bg-white900 px-6 py-12 dark:bg-black200 xl:px-20 xl:py-[4.5rem]">
      <motion.div
        initial={{ x: "-25%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative flex w-fit flex-col self-center"
      >
        <p className="z-20 truncate whitespace-nowrap text-[2.625rem] font-bold text-black200 dark:text-white900 md:text-[4rem]">
          My Skills
        </p>
        <div className="absolute z-10 h-[1.2rem] w-full translate-y-[2.38rem] bg-orange-200 md:h-[1.8rem] md:translate-y-[3.625rem]" />
      </motion.div>
      <div className="mt-8 grid w-fit grid-cols-4 items-center justify-between gap-8 self-center sm:gap-10 lg:mt-12 lg:grid-flow-col lg:grid-rows-2 lg:gap-11">
        {mySkillsArray.map((skill, index) => (
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
            className="flex"
            key={skill.text}
          >
            <SkillIcon src={skill.src} text={skill.text} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
