"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { ChallengesAndLearningsCardProps } from "@/utils/interfaces";

const ChallengesAndLearningsCard = ({
  image,
  additionalStyles,
  textColour,
  text,
  listText,
}: ChallengesAndLearningsCardProps) => {
  return (
    <div
      className={`flex flex-col rounded-[10px] bg-white800 px-3.5 py-6 dark:bg-black300 md:px-10 md:py-9 ${additionalStyles}`}
    >
      <p className={`text-lg font-semibold ${textColour} md:text-xl`}>{text}</p>
      <div className="mt-6 flex flex-col gap-5 md:mt-[1.75rem]">
        {listText?.map((challenge, index) => (
          <motion.div
            initial={{ x: "15%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              x: { duration: 0.5, delay: index * 0.15 + 0.3 },
              opacity: { duration: 0.5, delay: index * 0.15 + 0.3 },
            }}
            viewport={{ once: true }}
            key={index}
            className="flex gap-2.5"
          >
            <Image
              src={image}
              height={20}
              width={20}
              alt="challenge symbol"
              className="mt-1 self-start"
            />
            <p className="text-sm font-light text-white500 dark:text-white800 md:text-lg">
              {challenge}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ChallengesAndLearningsCard;
