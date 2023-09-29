"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { WorkExperienceType } from "@/types";

interface WorkExperienceCardProps {
  job: WorkExperienceType;
  delay: number;
}

const WorkExperienceCard = ({ job, delay }: WorkExperienceCardProps) => {
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
  const [animateRight, setAnimateRight] = useState(false);
  const { theme } = useTheme();

  const [imageSrc, setImageSrc] = useState<string>(job.image.image);
  const experienceUnit = job.duration > 1 ? "s" : "";

  useEffect(() => {
    if (theme === "dark") {
      setImageSrc(
        isMouseOver ? job.imagePrimaryDark.image : job.imageDark.image
      );
    } else {
      setImageSrc(isMouseOver ? job.imagePrimaryLight.image : job.image.image);
    }
  }, [theme, isMouseOver, job]);

  const handleMouseLeave = () => {
    setAnimateRight(false);
    setTimeout(() => {
      setIsMouseOver(false);
    }, 200);
  };

  const handleMouseEnter = () => {
    setAnimateRight(true);
    setIsMouseOver(true);
  };

  return (
    <motion.div
      initial={{ x: "25%", opacity: 0 }}
      whileInView={{ x: animateRight ? "1.5rem" : "0rem", opacity: 1 }}
      transition={{
        x: isMouseOver ? { duration: 0.2, delay: 0 } : { duration: 0.7, delay },
        opacity: { duration: 0.7, delay },
      }}
      viewport={{ once: true }}
      className={`flex flex-col rounded-xl border border-white800 bg-white900 p-9 dark:border-0 dark:bg-black200 xl:flex-row ${
        isMouseOver && "shadow-lg dark:bg-black300"
      }`}
      onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image src={imageSrc} height={58} width={58} alt="Company Logo" />
      <div className="flex flex-col xl:ml-8">
        <p className="mt-4 text-2xl font-semibold xl:mt-0">{job.title}</p>
        <p className="">
          {job.position} - {job.duration} {job.durationUnit}
          {experienceUnit} Experience
        </p>
      </div>
    </motion.div>
  );
};

export default WorkExperienceCard;
