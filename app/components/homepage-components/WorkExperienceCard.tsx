"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { WorkExperienceType } from "@/types";

interface WorkExperienceCardProps {
  job: WorkExperienceType;
}

const WorkExperienceCard = ({ job }: WorkExperienceCardProps) => {
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
  const { theme } = useTheme();

  const [imageSrc, setImageSrc] = useState<string>(job.image.image);

  useEffect(() => {
    if (theme === "dark") {
      setImageSrc(
        isMouseOver ? job.imagePrimaryDark.image : job.imageDark.image
      );
    } else {
      setImageSrc(isMouseOver ? job.imagePrimaryLight.image : job.image.image);
    }
  }, [theme, isMouseOver, job]);

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
