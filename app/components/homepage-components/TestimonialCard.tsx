import Image, { StaticImageData } from "next/image";
import React from "react";

import { star } from "@/public/svg-icons";

interface Testimonial {
  name: string;
  jobDescription: string;
  image: StaticImageData;
  rating: number;
  text: string;
}

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => {
  return (
    <div className="flex max-w-xl shrink-0 grow-0 basis-full flex-col p-2 lg:max-w-5xl lg:flex-row">
      <Image
        src={testimonial.image}
        alt="Image of testimonial giver"
        className="h-[12.5rem] w-[12.5rem] rounded-2xl lg:h-[20.5rem] lg:w-[20.5rem]"
        height={200}
        width={200}
      />
      <div className="flex flex-col lg:ml-[1.6rem]">
        <div className="mt-10 flex lg:mt-3.5">
          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <Image
              key={index}
              src={star}
              height={20}
              width={20}
              alt="icon of golden star"
            />
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
    </div>
  );
};

export default TestimonialCard;
