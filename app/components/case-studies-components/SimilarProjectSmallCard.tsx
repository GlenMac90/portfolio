"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { truncateString } from "@/utils";
import { MainCaseStudyProps } from "@/utils/interfaces";

import Button from "../Button";

const SimilarProjectSmallCard = ({ caseStudy }: MainCaseStudyProps) => {
  return (
    <div
      key={caseStudy.title}
      className="flex flex-col rounded-2xl bg-white900 dark:bg-black200 md:rounded-3xl"
    >
      {caseStudy.figmaBannerImage && (
        <div className="flex md:h-[16rem]">
          <Image
            src={caseStudy.figmaBannerImage.image}
            alt="Image of similar case study"
            className="h-full max-h-[14.5rem] w-full rounded-t-2xl md:rounded-t-3xl"
            style={{
              objectFit: "cover",
            }}
            width={200}
            height={256}
          />
        </div>
      )}
      <div className="flex w-full flex-col px-5 pb-5 md:px-6 md:pb-6">
        <p className="mt-5 text-xl font-medium text-primaryLight dark:text-primaryDark md:mt-6 md:text-2xl">
          {caseStudy.title}
        </p>
        {caseStudy?.caseStudyDescription && (
          <p className="mt-1.5 font-light leading-7 text-white500 dark:text-white800">
            {truncateString(caseStudy.caseStudyDescription[0], 150)}
          </p>
        )}
        <Link
          href={`/case-studies/${caseStudy.caseStudyLink}`}
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
