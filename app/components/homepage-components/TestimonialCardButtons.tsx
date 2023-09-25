"use client";

import { motion } from "framer-motion";

import { ButtonsProps } from "@/utils/interfaces";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";

const TestimonialCardButtons = ({
  additionalClassesLeft,
  additionalClassesRight,
  previous,
  next,
}: ButtonsProps) => {
  return (
    <>
      <motion.button
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        onClick={previous}
        className={`absolute ${additionalClassesLeft} self-center rounded-full bg-white900 p-4 dark:bg-black200 `}
      >
        <LeftButton />
      </motion.button>

      <motion.button
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        onClick={next}
        className={`absolute ${additionalClassesRight} rounded-full bg-white900 p-4 dark:bg-black200`}
      >
        <RightButton />
      </motion.button>
    </>
  );
};

export default TestimonialCardButtons;
