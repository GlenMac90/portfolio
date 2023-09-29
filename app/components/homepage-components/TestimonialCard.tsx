"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { TestimonialType } from "@/types";
import { star } from "@/public/svg-icons";

interface TestimonialCardProps {
  testimonial: TestimonialType;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const testimonialImage = testimonial.image.image;
  return (
    <article className="flex max-w-xl shrink-0 grow-0 basis-full flex-col p-2 lg:max-w-5xl lg:flex-row">
      <Image
        src={testimonialImage}
        alt="Image of testimonial giver"
        className="h-[12.5rem] w-[12.5rem] rounded-2xl lg:h-[20.5rem] lg:w-[20.5rem]"
        height={200}
        width={200}
      />
      <div className="flex flex-col lg:ml-[1.6rem]">
        <div className="mt-10 flex lg:mt-3.5">
          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <motion.div
              key={index}
              initial={{ y: "25%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                y: { duration: 0.5, delay: index * 0.1 },
                opacity: { duration: 0.5, delay: index * 0.1 },
              }}
            >
              <Image
                src={star}
                height={20}
                width={20}
                alt="icon of golden star"
              />
            </motion.div>
          ))}{" "}
        </div>
        <p className="mt-4 text-lg font-light text-white500 dark:text-white800 lg:mt-6 lg:text-2xl">
          {testimonial.text}
        </p>
        <p className="mt-6 text-lg text-black300 dark:text-white900 lg:mt-8 lg:font-semibold">
          - {testimonial.name}
        </p>
        <p className="text-lg text-white500 dark:text-white800">
          {testimonial.jobDescription}
        </p>
      </div>
    </article>
  );
};

export default TestimonialCard;
