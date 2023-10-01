"use client";

import { motion } from "framer-motion";

import { ButtonsProps } from "@/utils/interfaces";
import ButtonTestimonial from "./ButtonTestimonial";

const CarouselButtons = ({
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
        className={`absolute ${additionalClassesLeft} self-center rounded-full bg-white900/60  dark:bg-black200/60 md:bg-white900 md:dark:bg-black200`}
      >
        <ButtonTestimonial direction="left" />
      </motion.button>

      <motion.button
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        onClick={next}
        className={`absolute ${additionalClassesRight} self-center rounded-full bg-white900/60  dark:bg-black200/60 md:bg-white900 md:dark:bg-black200`}
      >
        <ButtonTestimonial direction="right" />
      </motion.button>
    </>
  );
};

export default CarouselButtons;
