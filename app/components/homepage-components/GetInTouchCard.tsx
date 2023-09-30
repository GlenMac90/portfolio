"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

import { whiteButtonArrow } from "@/public/svg-icons";
import Button from "../Button";
import CardPatterns from "./CardPatterns";
import CardPatternsMobile from "./CardPatternsMobile";

const GetInTouchCard = () => {
  const router = useRouter();
  const [animatePatterns, setAnimatePatterns] = useState(false);
  const handleClick = () => {
    setAnimatePatterns(true);

    setTimeout(() => {
      router.push("/contact");
    }, 1500);
  };
  return (
    <section className="flex w-full items-center justify-center bg-white900 px-6 py-12 dark:bg-black200 lg:py-[4.5rem]">
      <motion.div
        initial={{ y: "25%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative flex w-full max-w-xl flex-col overflow-hidden rounded-[1.25rem] bg-secondary px-4 lg:max-w-7xl lg:flex-row lg:justify-between lg:px-[4.5rem] lg:py-20"
      >
        <p className="z-10 mt-[5rem] max-w-sm text-3xl font-bold text-black200 lg:my-0 lg:max-w-[40rem] lg:text-5xl">
          Have a project in mind that requires technical expertise?
        </p>
        <motion.div whileHover={{ scale: 1.05 }} className="z-10">
          <div className="mb-[5rem] mt-4 flex" onClick={handleClick}>
            <Button
              style="blueButton"
              additionalStyles="w-full gap-1.5 py-3.5 text-lg lg:w-[20rem] lg:translate-y-16 lg:self-end lg:font-medium"
            >
              <p>Get in touch with me</p>
              <Image
                src={whiteButtonArrow}
                height={14}
                width={14}
                alt="link to more info"
              />
            </Button>
          </div>
        </motion.div>
        <CardPatternsMobile animate={animatePatterns} />
        <CardPatterns animate={animatePatterns} />
      </motion.div>
    </section>
  );
};

export default GetInTouchCard;
