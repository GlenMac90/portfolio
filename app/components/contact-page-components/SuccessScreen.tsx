"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { customGraphic } from "@/public/svg-icons";

const SuccessScreen = () => {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-between bg-white800 pt-20 dark:bg-black300">
      <motion.section
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
        className="fixed mx-4 flex max-w-md flex-col items-center gap-4 rounded-xl bg-white900 p-6 dark:bg-black200 md:p-10"
      >
        <p className="text-center text-2xl font-semibold text-black200 dark:text-white900 md:text-3xl">
          Thank you for getting in contact
        </p>
        <Image
          src={customGraphic}
          alt="Image of man working at computer"
          height={250}
          width={350}
        />
        <p className="text-center text-2xl font-semibold text-black200 dark:text-white900 md:text-3xl">
          I will get back to you as soon as possible
        </p>
        <Link
          href="/"
          className="flex w-full justify-center rounded-full bg-primaryLight py-4 text-white900 dark:bg-primaryDark md:text-lg"
        >
          Return to Homepage
        </Link>
      </motion.section>
    </main>
  );
};

export default SuccessScreen;
