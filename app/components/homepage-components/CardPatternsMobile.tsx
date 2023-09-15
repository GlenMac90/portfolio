"use client";

import { motion } from "framer-motion";

const CardPatternsMobile = () => {
  return (
    <div className="absolute flex h-full w-full items-center justify-center lg:hidden">
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: "-15.5rem" }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute h-80 w-80 translate-x-[-1rem] translate-y-[-15.5rem] rounded-full bg-white/10"
      />
      <motion.div
        initial={{ x: "-200%", y: "200%" }}
        animate={{ x: 0, y: "-1.5rem" }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute h-[11rem] w-[10rem] translate-x-[-1rem] translate-y-[-1.5rem] bg-white/10"
      />
      <motion.div
        initial={{ y: "-600%" }}
        animate={{ y: "-1.5rem" }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute left-0 h-[8rem] w-[7rem] translate-y-[-1.5rem] rounded-tr-full bg-white/10"
      />
      <motion.div
        initial={{ y: "1000%" }}
        animate={{ y: "7rem" }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute h-[6rem] w-[10rem] translate-x-[-1rem] translate-y-[7rem] self-center rounded-t-full bg-white/10"
      />
      <motion.div
        initial={{ x: "1000%" }}
        animate={{ x: "6.8rem", y: "6rem" }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute h-[8rem] w-[3.5rem] translate-x-[5.8rem] translate-y-[6rem] self-center rounded-br-3xl bg-white/25"
      />
      <motion.div
        initial={{ x: "500%", y: "-500%" }}
        animate={{ x: "6.8rem", y: "1rem" }}
        transition={{ duration: 1, delay: 1.9 }}
        className="absolute h-[4rem] w-[3.5rem] translate-x-[5.8rem] translate-y-[1rem] self-center bg-white/10"
      />
      <motion.div
        initial={{ x: "800%" }}
        animate={{ x: "6.8rem", y: "1rem" }}
        transition={{ duration: 1, delay: 2 }}
        style={{ clipPath: "polygon(0 100%, 0 0, 100% 100%)" }}
        className="absolute h-[4rem] w-[3.5rem] translate-x-[5.8rem] translate-y-[1rem] self-center bg-white/[15%]"
      />
    </div>
  );
};

export default CardPatternsMobile;
