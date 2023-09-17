"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { truncateString } from "@/utils";
import { FeaturedProjectCardProps } from "@/utils/interfaces";

import Button from "../Button";

const SimilarProjectSmallCard = ({ project }: FeaturedProjectCardProps) => {
  return (
    <div
      key={project.title}
      className="flex flex-col rounded-2xl bg-white900 dark:bg-black200 md:rounded-3xl"
    >
      {project.figmaBannerImage && (
        <div className="flex md:h-[16rem]">
          <Image
            src={project.figmaBannerImage}
            alt="Image of similar case study"
            className="h-full w-auto rounded-t-2xl md:rounded-t-3xl"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      )}
      <div className="flex w-full flex-col px-5 pb-5 md:px-6 md:pb-6">
        <p className="mt-5 text-xl font-medium text-primaryLight dark:text-primaryDark md:mt-6 md:text-2xl">
          {project.title}
        </p>
        {project?.caseStudyDescription && (
          <p className="mt-1.5 font-light leading-7 text-white500 dark:text-white800">
            {truncateString(project.caseStudyDescription[0], 150)}
          </p>
        )}
        <Link
          href={`/case-studies/${project.caseStudyLink}`}
          className="mt-4 flex"
        >
          <motion.div whileHover={{ scale: 1.05 }} className="flex w-full">
            <Button style="blueButton" additionalStyles="w-full py-3.5 text-sm">
              See Case Study
            </Button>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default SimilarProjectSmallCard;
