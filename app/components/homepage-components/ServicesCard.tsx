"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

import { ServiceProvidedType } from "@/types";
interface ServicesCardProps {
  service: ServiceProvidedType;
  delay?: number;
  theme?: string;
}

const ServicesCard = ({ service, delay, theme }: ServicesCardProps) => {
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
  const [hoverBackgroundColour, setHoverBackgroundColour] = useState(
    theme === "light" ? "#0252CD" : "#428DFF"
  );
  let imageSrc;

  if (isMouseOver) {
    if (theme === "light") {
      imageSrc = service.imageHoverLight;
    } else {
      imageSrc = service.imageHoverDark;
    }
  } else {
    imageSrc = service.imageSrc;
  }

  useEffect(() => {
    if (theme === "light") {
      setHoverBackgroundColour("#0252CD");
    } else {
      setHoverBackgroundColour("#428DFF");
    }
  }, [theme]);

  return (
    <motion.div
      initial={{
        x: "25%",
        opacity: 0,
      }}
      animate={{ x: 0, opacity: 1 }}
      whileHover={{
        y: "10%",
        transition: { duration: 0.2 },
        backgroundColor: hoverBackgroundColour,
        boxShadow: "30px 30px 40px #0252cd50",
      }}
      transition={{
        x: { duration: 0.5, delay },
        opacity: { duration: 0.5, delay },
      }}
      viewport={{ once: true }}
      className="h-[17rem] w-full rounded-xl bg-white800 px-6 py-7 shadow-lg dark:bg-black300 xl:w-full"
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
