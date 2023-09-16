"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { featuredProjectsList } from "@/constants";
import FeaturedProjectCard from "./FeaturedProjectCard";
import { whiteButtonArrow } from "@/public/svg-icons";
import Button from "../Button";
import UnderlinedText from "../UnderlinedText";

const FeaturedProjects = () => {
  return (
    <section className="flex w-full flex-col items-center bg-white900 p-6 dark:bg-black200">
      <motion.div
        initial={{ y: "-25%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="flex w-full max-w-7xl flex-col items-center"
      >
        <div className="flex items-center">
          <p className="z-20  text-4xl font-bold text-black200 dark:text-white900 md:text-[3rem]">
            Featured
          </p>
          <UnderlinedText text="Projects" additionalStyles="flex ml-2" />
        </div>
      </motion.div>
      <div className="mt-9 flex flex-col gap-9 lg:mt-12">
        {featuredProjectsList.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ x: index % 2 === 1 ? "-25%" : "25%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <FeaturedProjectCard
              project={project}
              reverseLayout={index % 2 === 1 && true}
            />
          </motion.div>
        ))}
      </div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        initial={{ x: "-25%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        viewport={{ once: true }}
      >
        <Link href="/case-studies" className="flex">
          <Button
            style="blueButton"
            additionalStyles="mb-0 mt-6 gap-1.5 px-10 py-5 text-lg lg:mb-14 lg:mt-12"
          >
            <p>See more case studies</p>
            <Image
              src={whiteButtonArrow}
              height={14}
              width={14}
              alt="link to more info"
            />
          </Button>
        </Link>
      </motion.div>
    </section>
  );
};

export default FeaturedProjects;
