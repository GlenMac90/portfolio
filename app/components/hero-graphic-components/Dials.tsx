"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { blueDial, redDial } from "@/public/png-icons";

const Dials = () => {
  return (
    <div className="absolute left-[39.2%] flex h-[15.6%] w-[12%] translate-y-[46%] gap-[8%] lg:h-[15.8%]">
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 5,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex h-[45%] w-[45%] rounded-full"
      >
        <Image
          src={blueDial}
          alt="blue dial"
          height={40}
          width={40}
          className="h-auto w-auto rounded-full"
        />
      </motion.div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.5,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex h-[45%] w-[45%] rounded-full"
      >
        <Image
          src={redDial}
          alt="blue dial"
          height={40}
          width={40}
          className="h-auto w-auto rounded-full"
        />
      </motion.div>
    </div>
  );
};

export default Dials;
