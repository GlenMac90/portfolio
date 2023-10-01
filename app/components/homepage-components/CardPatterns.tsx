"use client";

import { motion } from "framer-motion";

import { CardPatternsProps } from "@/utils/interfaces";

const CardPatterns = ({ animate }: CardPatternsProps) => {
  return (
    <div className="absolute hidden h-full w-full items-center justify-center lg:flex lg:-translate-y-20 lg:translate-x-[-4.5rem]">
      <motion.div
        animate={{ x: animate ? "-100%" : 0 }}
        transition={{ duration: 1 }}
        className="absolute left-[-10rem] h-[20rem] w-[20rem] rounded-full bg-white/10"
      />
      <motion.div
        animate={{ y: animate ? "200%" : "3rem" }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute right-[23rem] h-[7rem] w-[14rem] rounded-b-full bg-white/10"
      />
      <motion.div
        animate={{ y: animate ? "300%" : "1.47rem", x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute right-[12rem] h-[11rem] w-[11rem] bg-white/10"
      />
      <motion.div
        animate={{ y: animate ? "-200%" : "-6.7rem", x: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute right-[12rem] h-[5.5rem] w-[11rem] rounded-b-full bg-white/10"
      />
      <motion.div
        animate={{ y: animate ? 0 : "5.5rem", x: animate ? "200%" : 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        style={{ clipPath: "polygon(100% 100%, 100% 0, 0 100%)" }}
        className="absolute right-[12rem] h-[11rem] w-[11rem] bg-white/10"
      />
      <motion.div
        animate={{ y: animate ? 0 : "-4.8rem", x: animate ? "100%" : 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute right-0 h-[12rem] w-[12rem] bg-white/10"
      />
      <motion.div
        animate={{ y: animate ? "-200%" : "-4.8rem", x: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        style={{ clipPath: "polygon(0 100%, 0 0 , 100% 0)" }}
        className="absolute right-0 h-[12rem] w-[12rem] bg-white/[15%]"
      />
    </div>
  );
};

export default CardPatterns;
