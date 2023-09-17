"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

import {
  demoButtonLight,
  demoButtonDark,
  arrowlight,
  arrowDark,
  githubButtonLight,
  githubButtonDark,
} from "@/public/svg-icons/case-study-icons";

import { CaseStudyHeaderProps } from "@/utils/interfaces";

import LaptopMockup from "../LaptopMockup";
import MobileMockup from "../MobileMockup";

import Button from "../Button";
import UnderlinedText from "../UnderlinedText";

const CaseStudyHeader = ({ mainProject }: CaseStudyHeaderProps) => {
  const [icons, setIcons] = useState({
    demoButtonIcon: demoButtonLight,
    arrowIcon: arrowlight,
    githubButtonIcon: githubButtonLight,
  });
  const { theme } = useTheme();

  useEffect(() => {
    const newIcons = {
      demoButtonIcon: theme === "light" ? demoButtonLight : demoButtonDark,
      arrowIcon: theme === "light" ? arrowlight : arrowDark,
      githubButtonIcon:
        theme === "light" ? githubButtonLight : githubButtonDark,
    };
    setIcons(newIcons);
  }, [theme]);

  return (
    <header className="flex w-full flex-col items-center">
      <motion.p
        initial={{ y: "10%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          y: { duration: 0.5, delay: 0.25 },
          opacity: { duration: 0.5, delay: 0.25 },
        }}
        className="mt-28 text-sm font-semibold tracking-widest text-primaryLight dark:text-primaryDark md:mt-40 md:text-xl"
      >
        WEB DEV PROJECT
      </motion.p>

      <motion.div
        initial={{ y: "10%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          y: { duration: 0.5, delay: 0.5 },
          opacity: { duration: 0.5, delay: 0.5 },
        }}
        className="mx-2 mt-2.5 flex flex-col justify-center lg:mt-7 lg:flex-row"
      >
        {mainProject && (
          <UnderlinedText
            text={mainProject?.title}
            additionalStyles="flex self-center lg:mr-3"
          />
        )}
        <p className="mt-0 text-center text-4xl font-bold text-black200 dark:text-white900 md:mt-4 md:text-[3rem] lg:mt-0">
          {" "}
          - {mainProject?.description}
        </p>
      </motion.div>

      <motion.div
        initial={{ y: "10%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.2 }}
        transition={{
          y: { duration: 0.5, delay: 0.75 },
          opacity: { duration: 0.5, delay: 0.75 },
          scale: { duration: 0.2 },
        }}
        className="mt-6 flex lg:mt-[3.5rem]"
      >
        {mainProject?.desktopImage && (
          <LaptopMockup imageSrc={mainProject?.desktopImage} />
        )}
        {mainProject?.mobileImage && (
          <MobileMockup imageSrc={mainProject?.mobileImage} />
        )}
      </motion.div>

      <motion.div
        initial={{ y: "10%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          y: { duration: 0.5, delay: 1 },
          opacity: { duration: 0.5, delay: 1 },
        }}
        className="mb-12 mt-6 flex justify-between gap-10 md:mb-16 md:mt-[4.5rem] md:gap-24"
      >
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link href="/" className="flex">
            <Button>
              <Image src={icons.demoButtonIcon} alt="Demo Icon" />
              <p>Demo Site</p>
              <Image src={icons.arrowIcon} alt="Link to live site" />
            </Button>
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link href="/" className="flex">
            <Button>
              <Image src={icons.githubButtonIcon} alt="Github logo" />
              <p>Source Code</p>
              <Image src={icons.arrowIcon} alt="Link to source code" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default CaseStudyHeader;
