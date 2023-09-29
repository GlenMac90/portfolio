"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { frame, tick } from "@/public/svg-icons";
import Button from "../Button";
import AnimatedComputerGraphic from "../AnimatedComputerGraphic";
import HeroUnderlinedText from "./HeroUnderlinedText";

const Hero = () => {
  const [showTick, setShowTick] = useState(false);
  const copySuccess = () => toast.success("Email copied to clipboard");
  const copyFailure = () => toast.error("Unable to copy to clipboard");

  const handleCopyToClipboard = useCallback(() => {
    navigator.clipboard
      .writeText("glen.mccallum@live.co.uk")
      .then(() => {
        copySuccess();
        setShowTick(true);
        setTimeout(() => {
          setShowTick(false);
        }, 3000);
      })
      .catch(() => {
        copyFailure();
      });
  }, []);

  return (
    <section className="relative mx-4 mt-16 flex w-full max-w-7xl flex-col bg-white800 px-5 pt-12 dark:bg-black300 md:mt-24 lg:flex-row lg:justify-between lg:pb-24">
      <motion.div
        initial={{ x: "-25%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="z-20 flex w-full flex-col lg:w-5/12"
      >
        <p className="font-semibold tracking-widest text-primaryLight dark:text-primaryDark md:text-xl">
          HI, I AM GLEN
        </p>
        <p className="mt-5 text-[2.625rem] font-bold leading-tight text-black200 dark:text-white900 md:text-[4rem]">
          Professional
        </p>
        <HeroUnderlinedText />
        <p className="text-[2.625rem] font-bold leading-tight text-black200 dark:text-white900 md:text-[4rem]">
          based in Bulgaria
        </p>
        <p className="mt-3 text-white500 dark:text-white800 xl:w-[29rem]">
          Transforming the web one line of code at a time: Crafting cutting-edge
          digital experiences with precision, passion and a profound commitment
          to excellence.
        </p>
        <div className="mt-9 flex flex-col md:flex-row md:gap-4">
          <Link href="/case-studies">
            <Button
              style="blueButton"
              additionalStyles="w-full py-3.5 text-sm md:w-[15rem] md:py-5 md:text-lg"
            >
              My Work
            </Button>
          </Link>
          <Button
            style="custom"
            additionalStyles="mt-3.5 w-full justify-between gap-4 rounded-full bg-white900 px-4 py-3.5 text-white500 dark:bg-black200 dark:text-white900 md:w-[20rem] md:min-w-[20rem] md:mt-0 md:px-6 md:py-5"
          >
            <p>glen.mccallum@live.co.uk</p>
            <Image
              src={showTick ? tick : frame}
              alt="click to download resume"
              className="h-4 w-4 md:h-5 md:w-5"
              onClick={handleCopyToClipboard}
            />
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: "10rem", opacity: 0 }}
        animate={{ x: "0rem", opacity: 1 }}
        transition={{ duration: 1 }}
        className="z-10 mt-6 flex h-auto w-full flex-wrap items-center justify-center lg:right-0 lg:w-7/12 "
      >
        <AnimatedComputerGraphic />
      </motion.div>
    </section>
  );
};

export default Hero;
