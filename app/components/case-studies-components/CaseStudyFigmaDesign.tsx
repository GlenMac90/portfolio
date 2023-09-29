"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { useCaseStudyContext } from "@/app/contexts/CaseStudyContext";
import { reorderWorkProcesses } from "@/utils";

const CaseStudyFigmaDesign = () => {
  const { mainProject, workProcess } = useCaseStudyContext();
  const figmaImage = mainProject?.figmaBannerImage.image;
  const orderedWorkProcess = reorderWorkProcesses(workProcess);
  return (
    <>
      <section className="flex w-full flex-col items-center justify-center">
        <div className="flex w-full items-center justify-center bg-primaryLight py-2.5 text-sm font-semibold text-white900 dark:bg-primaryDark md:py-9 md:text-[2rem]">
          HIGH-FIDELITY FIGMA DESIGN
        </div>
        <div className="w-full">
          <Image
            src={figmaImage}
            alt="image of figma design"
            className="w-full"
            width={2000}
            height={2000}
          />
        </div>
      </section>
      <section className="flex w-full items-center justify-center bg-white900 px-6 py-9 dark:bg-black200 md:py-[4.5rem]">
        <div className="flex w-full max-w-4xl flex-col">
          <motion.div className="flex flex-col">
            <p className="text-xs font-semibold text-primaryLight dark:text-primaryDark md:text-sm">
              Way of Work
            </p>
            <p className="mt-2 text-[1.75rem] font-semibold text-black200 dark:text-white900 md:text-[2rem]">
              My Process
            </p>
          </motion.div>
          <div className="mt-6 flex max-w-md flex-wrap items-center justify-center gap-12 self-center md:mt-11 md:max-w-4xl md:justify-center md:gap-20">
            {orderedWorkProcess.map((process, index) => {
              const imageSrc = process.image.image;
              return (
                <motion.div
                  initial={{ x: "25%", opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  whileHover={{ scale: 1.2 }}
                  transition={{
                    x: { duration: 0.5, delay: index * 0.2 },
                    opacity: { duration: 0.5, delay: index * 0.2 },
                  }}
                  viewport={{ once: true }}
                  key={process.title}
                  className="flex w-[4.7rem] flex-col items-center gap-3 md:w-[6rem] md:gap-5"
                >
                  <div className="flex h-[4.7rem] w-[4.7rem] items-center justify-center rounded-full bg-white800 dark:bg-black300 md:h-[6rem] md:w-[6rem]">
                    <Image
                      src={imageSrc}
                      alt="symbol of working process"
                      height={48}
                      width={48}
                      className="max-h-[2.25rem] max-w-[2.25rem] md:max-h-[3rem] md:max-w-[3rem]"
                    />
                  </div>
                  <p className="whitespace-nowrap text-center text-sm font-medium text-black300 dark:text-white900 md:text-xl">
                    {process.title}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudyFigmaDesign;
