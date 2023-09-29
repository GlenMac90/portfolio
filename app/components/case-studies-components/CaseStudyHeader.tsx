"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import UnderlinedText from "../UnderlinedText";
import { useCaseStudyContext } from "@/app/contexts/CaseStudyContext";
import { mobileAndDesktopFallback } from "@/public/png-icons";
import { CaseStudyWebsiteLinks } from ".";

const CaseStudyHeader = () => {
  const { mainProject } = useCaseStudyContext();
  const imageSrc =
    mainProject?.desktopMobileImage.image || mobileAndDesktopFallback;

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
        whileHover={{ scale: 1.1 }}
        transition={{
          y: { duration: 0.5, delay: 0.75 },
          opacity: { duration: 0.5, delay: 0.75 },
          scale: { duration: 0.2 },
        }}
        className="mx-4 flex"
      >
        <Image
          src={imageSrc}
          alt="laptop and mobile image of project"
          height={630}
          width={630}
        />
      </motion.div>

      <CaseStudyWebsiteLinks />
    </header>
  );
};

export default CaseStudyHeader;
