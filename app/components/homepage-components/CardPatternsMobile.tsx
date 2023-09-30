"use client";

import { motion } from "framer-motion";

import { CardPatternsProps } from "@/utils/interfaces";

const CardPatternsMobile = ({ animate }: CardPatternsProps) => {
  return (
    <div className="absolute flex h-full w-full items-center justify-center lg:hidden">
      <motion.div
        animate={{ y: animate ? "-100%" : "-15.5rem" }}
        transition={{ duration: 1, delay: 0.1 }}
        className="absolute h-80 w-80 rounded-full bg-white/10"
      />
      <motion.div
        animate={{ x: animate ? "-200%" : 0, y: animate ? "200%" : "-1.5rem" }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute h-[11rem] w-[10rem] bg-white/10"
      />
      <motion.div
        animate={{ y: animate ? "-600%" : "-1.5rem" }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute left-0 h-[8rem] w-[7rem] rounded-tr-full bg-white/10"
      />
      <motion.div
        animate={{ y: animate ? "1000%" : "7rem" }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute h-[6rem] w-[10rem] self-center rounded-t-full bg-white/10"
      />
      <motion.div
        animate={{ x: animate ? "1000%" : "6.8rem", y: "6.5rem" }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute h-[7rem] w-[3.5rem] self-center rounded-br-3xl bg-white/25"
      />
      <motion.div
        animate={{
          x: animate ? "500%" : "6.8rem",
          y: animate ? "-500%" : "1rem",
        }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute h-[4rem] w-[3.5rem] self-center bg-white/10"
      />
      <motion.div
        animate={{
          x: animate ? "800%" : "6.8rem",
          y: animate ? "800%" : "1rem",
        }}
        transition={{ duration: 1, delay: 1 }}
        style={{ clipPath: "polygon(0 100%, 0 0, 100% 100%)" }}
        className="absolute h-[4rem] w-[3.5rem] self-center bg-white/[15%]"
      />
    </div>
  );
};

export default CardPatternsMobile;
