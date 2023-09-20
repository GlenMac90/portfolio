"use client";

import { motion } from "framer-motion";

import SkillIcon from "./SkillIcon";
import UnderlinedText from "../UnderlinedText";
import { SkillType } from "@/types";

interface MySkillsProps {
  mySkills: SkillType[];
}

const MySkills = ({ mySkills }: MySkillsProps) => {
  return (
    <section className="flex w-full flex-col justify-center bg-white900 px-6 py-12 dark:bg-black200 xl:px-20 xl:py-[4.5rem]">
      <motion.div
        initial={{ x: "-25%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative flex w-fit flex-col self-center"
      >
        <UnderlinedText text="My Skills" additionalStyles="flex" />
      </motion.div>
      <div className="mt-8 flex w-fit max-w-3xl flex-wrap items-center justify-center gap-8 self-center sm:gap-10 lg:mt-12 lg:gap-11 xl:max-w-7xl">
        {mySkills.map((skill, index) => (
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
            <SkillIcon skill={skill} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
