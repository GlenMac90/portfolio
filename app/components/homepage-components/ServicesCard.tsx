"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useState } from "react";
import Image from "next/image";

import { ServiceProvidedType } from "@/types";
interface ServicesCardProps {
  service: ServiceProvidedType;
  delay?: number;
}

const ServicesCard = ({ service, delay }: ServicesCardProps) => {
  const { theme } = useTheme();
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);

  const imageSrc = isMouseOver
    ? theme === "light"
      ? service.imageHoverLight
      : service.imageHoverDark
    : service.imageSrc;

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      transition={{
        opacity: { duration: 0.3, delay },
      }}
      viewport={{ once: true }}
      className={`h-[19rem] w-full rounded-xl px-6 py-7 shadow-lg transition duration-300 xl:w-full ${
        isMouseOver
          ? "translate-y-8 bg-primaryLight shadow-servicesCard dark:bg-primaryDark"
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
          src={imageSrc.image}
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
    </motion.div>
  );
};

export default ServicesCard;
