"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

interface Service {
  imageSrc: string;
  imageHoverLight: string;
  imageHoverDark: string;
  title: string;
  description: string;
}

interface ServicesCardProps {
  service: Service;
}

const ServicesCard: React.FC<ServicesCardProps> = ({ service }) => {
  const { theme } = useTheme();
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
  return (
    <div
      className={`h-[18rem] w-[19rem] rounded-xl  px-6 py-7 shadow-lg  xl:w-full ${
        isMouseOver
          ? "bg-primaryLight dark:bg-primaryDark"
          : "bg-white800 dark:bg-black300"
      }`}
      onMouseOver={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-xl ${
          isMouseOver ? " bg-white900" : "bg-primaryLight dark:bg-primaryDark"
        }`}
      >
        <Image
          src={
            isMouseOver
              ? isMouseOver && theme === "light"
                ? service.imageHoverLight
                : service.imageHoverDark
              : service.imageSrc
          }
          height={24}
          width={24}
          alt="icon for services provided"
        />
      </div>
      <p
        className={`mt-8 text-2xl font-semibold ${
          isMouseOver ? "text-white900" : "text-black200 dark:text-white900"
        }`}
      >
        {service.title}
      </p>
      <p
        className={`mt-2.5 text-sm ${
          isMouseOver ? "text-white800" : "text-white500 dark:text-white800 "
        }`}
      >
        {service.description}
      </p>
    </div>
  );
};

export default ServicesCard;
