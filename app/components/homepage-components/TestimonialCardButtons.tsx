"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

import {
  arrowLeft,
  arrowLeftDark,
  arrowRight,
  arrowRightDark,
} from "@/public/svg-icons";

interface ButtonsProps {
  additionalClassesLeft: string;
  additionalClassesRight: string;
  previous: () => void;
  next: () => void;
}

const TestimonialCardButtons = ({
  additionalClassesLeft,
  additionalClassesRight,
  previous,
  next,
}: ButtonsProps) => {
  const [leftIcon, setLeftIcon] = useState(arrowLeft);
  const [rightIcon, setRightIcon] = useState(arrowRight);
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === "light") {
      setLeftIcon(arrowLeft);
      setRightIcon(arrowRight);
    } else {
      setLeftIcon(arrowLeftDark);
      setRightIcon(arrowRightDark);
    }
  }, [theme]);

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
        <Image src={leftIcon} height={24} width={24} alt="left button click" />
      </motion.button>

      <motion.button
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        onClick={next}
        className={`absolute ${additionalClassesRight} rounded-full bg-white900 p-4 dark:bg-black200`}
      >
        <Image
          src={rightIcon}
          height={24}
          width={24}
          alt="right button click"
        />
      </motion.button>
    </>
  );
};

export default TestimonialCardButtons;
