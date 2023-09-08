"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

interface Job {
  title: string;
  position: string;
  duration: number;
  durationUnit: string;
  image: string;
  imageDark: string;
  imagePrimaryLight: string;
  imagePrimaryDark: string;
}

interface WorkExperienceCardProps {
  job: Job;
}

const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({ job }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const { theme } = useTheme();

  let imageSrc;

  if (theme === "light") {
    imageSrc = isMouseOver ? job.imagePrimaryLight : job.image;
  } else {
    imageSrc = isMouseOver ? job.imagePrimaryDark : job.imageDark;
  }

  return (
    <div
      className={`flex flex-col rounded-xl border border-white800 bg-white900 p-9 dark:border-0 dark:bg-black200 xl:flex-row ${
        isMouseOver && "shadow-lg dark:bg-black300"
      }`}
      onMouseOver={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <Image src={imageSrc} height={58} width={58} alt="Company Logo" />
      <div className="flex flex-col xl:ml-8">
        <p className="mt-4 text-2xl font-semibold xl:mt-0">{job.title}</p>
        <p className="">
          {job.position} - {job.duration} {job.durationUnit}
          {job.duration > 1 && "s"} Experience
        </p>
      </div>
    </div>
  );
};

export default WorkExperienceCard;
