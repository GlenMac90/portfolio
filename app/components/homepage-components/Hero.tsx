"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { temporaryHeroIcon } from "@/public/png-icons";
import { frame } from "@/public/svg-icons";

import Button from "../Button";

const Hero = () => {
  return (
    <section className="relative mx-4 mt-16 flex w-full max-w-[90rem] flex-col bg-white800 px-5 pt-12 dark:bg-black300 md:mt-24 lg:flex-row lg:justify-between lg:pb-24">
      <motion.div
        initial={{ x: "-25%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="z-20 flex w-full flex-col lg:w-5/12"
      >
        <p className="font-semibold tracking-widest text-primaryLight md:text-xl">
          HI, I AM GLEN
        </p>
        <p className="mt-5 text-[2.625rem] font-bold text-black200 dark:text-white900 md:text-[4rem]">
          Professional
        </p>
        <div className="relative flex w-fit flex-col">
          <p className="z-20 truncate whitespace-nowrap text-[2.625rem] font-bold text-black200 dark:text-white900 md:text-[4rem]">
            Web Developer
          </p>
          <div className="absolute z-10 h-[1.2rem] w-full translate-y-[2.38rem] bg-orange-200 md:h-[1.8rem] md:translate-y-[3.625rem]" />
        </div>
        <p className="text-[2.625rem] font-bold text-black200 dark:text-white900 md:text-[4rem]">
          based in Bulgaria
        </p>
        <p className="mt-3 text-white500 dark:text-white800 xl:w-[29rem]">
          Transforming the web one line of code at a time: Crafting cutting-edge
          digital experiences with precision, passion and a profound commitment
          to excellence.
        </p>
        <div className="mt-9 flex flex-col md:flex-row md:justify-between md:gap-4">
          <Button
            type="blueButton"
            additionalStyles="w-full py-3.5 text-sm md:w-[15rem] md:py-5 md:text-lg"
          >
            My Work
          </Button>
          <Button
            type="custom"
            additionalStyles="mt-3.5 w-full justify-between gap-4 rounded-full bg-white900 px-4 py-3.5 text-white500 dark:bg-black200 dark:text-white900 md:mt-0 md:px-6 md:py-5"
          >
            <p>glen.mccallum@live.co.uk</p>
            <Image
              src={frame}
              alt="click to download resume"
              className="h-4 w-4 md:h-5 md:w-5"
            />
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="z-10 mt-6 flex h-auto w-full flex-wrap items-center justify-center lg:right-0 lg:w-7/12 lg:justify-end"
      >
        <Image
          src={temporaryHeroIcon}
          alt="hero image icon"
          style={{
            objectFit: "cover",
          }}
          className="h-auto w-full"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
