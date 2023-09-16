"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { blueDial, redDial } from "@/public/png-icons";

const Dials = () => {
  return (
    <>
      <motion.div
        initial={{ x: "10.7rem", y: "1rem" }}
        animate={{ rotate: -360, x: "10.7rem", y: "1rem" }}
        transition={{
          duration: 6,
          ease: "linear",
          repeat: Infinity,
        }}
        className="absolute flex rounded-full sm:hidden"
      >
        <Image
          src={blueDial}
          alt="blue dial"
          height={25}
          width={25}
          className="rounded-full"
        />
      </motion.div>
      <motion.div
        initial={{ x: "12.6rem", y: "1rem" }}
        animate={{ rotate: 360, x: "12.6rem", y: "1rem" }}
        transition={{
          duration: 2,
          ease: "linear",
          repeat: Infinity,
        }}
        className="absolute flex rounded-full sm:hidden"
      >
        <Image
          src={redDial}
          alt="blue dial"
          height={25}
          width={25}
          className="rounded-full"
        />
      </motion.div>
      <motion.div
        initial={{ x: "15.7rem", y: "1.2rem" }}
        animate={{ rotate: -360, x: "15.7rem", y: "1.2rem" }}
        transition={{
          duration: 6,
          ease: "linear",
          repeat: Infinity,
        }}
        className="absolute hidden rounded-full sm:flex"
      >
        <Image
          src={blueDial}
          alt="blue dial"
          height={33}
          width={33}
          className="rounded-full"
        />
      </motion.div>
      <motion.div
        initial={{ x: "18.2rem", y: "1.2rem" }}
        animate={{ rotate: 360, x: "18.2rem", y: "1.2rem" }}
        transition={{
          duration: 2,
          ease: "linear",
          repeat: Infinity,
        }}
        className="absolute hidden rounded-full sm:flex"
      >
        <Image
          src={redDial}
          alt="blue dial"
          height={33}
          width={33}
          className="rounded-full "
        />
      </motion.div>
    </>
  );
};

export default Dials;
