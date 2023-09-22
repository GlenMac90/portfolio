"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import TestimonialCard from "./TestimonialCard";
import TestimonialCardButtons from "./TestimonialCardButtons";
import UnderlinedText from "../UnderlinedText";
import { TestimonialType } from "@/types";
interface TestimonialsProps {
  testimonials: TestimonialType[];
}

const Testimonials = ({ testimonials }: TestimonialsProps) => {
  const [current, setCurrent] = useState(0);

  const intervalIdRef = useRef<number | null>(null);

  const clearAutoAdvance = () => {
    if (intervalIdRef.current) clearInterval(intervalIdRef.current);
  };

  const setAutoAdvance = () => {
    if (intervalIdRef.current) clearInterval(intervalIdRef.current);
    intervalIdRef.current = window.setInterval(() => {
      next();
    }, 5000);
  };

  useEffect(() => {
    setAutoAdvance();
    return () => {
      if (intervalIdRef.current) clearInterval(intervalIdRef.current);
    };
  }, []);

  useEffect(() => {
    setAutoAdvance();
    return () => {
      if (intervalIdRef.current) clearInterval(intervalIdRef.current);
    };
  }, [current]);

  const previous = () =>
    setCurrent((index) => (index === 0 ? testimonials.length - 1 : index - 1));

  const next = () =>
    setCurrent((index) => (index === testimonials.length - 1 ? 0 : index + 1));

  return (
    <section className="flex w-full flex-col items-center bg-white800 px-6 py-12 dark:bg-black300 md:py-[4.5rem]">
      <motion.div
        initial={{ y: "-25%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex flex-col items-center md:flex-row"
      >
        <div className="flex">
          <p className="text-4xl font-bold text-black200 dark:text-white900 md:text-[3rem]">
            What
          </p>
          <UnderlinedText
            text="they say"
            additionalStyles="relative mx-3 flex w-fit flex-col self-center"
          />
        </div>
        <p className="text-4xl font-bold text-black200 dark:text-white900 md:text-[3rem]">
          about me
        </p>
      </motion.div>
      <div className="relative mt-9 flex w-full flex-col items-center lg:max-w-7xl lg:px-20">
        <div className="relative max-w-xl overflow-hidden lg:max-w-6xl">
          <motion.div
            onMouseEnter={clearAutoAdvance}
            onMouseLeave={setAutoAdvance}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="flex max-w-xl transition-transform duration-1000 ease-out lg:max-w-5xl"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
              />
            ))}
          </motion.div>
          <TestimonialCardButtons
            additionalClassesLeft="right-[4.5rem] top-1 flex lg:hidden"
            additionalClassesRight="right-1 top-1 flex lg:hidden"
            previous={previous}
            next={next}
          />
        </div>
        <TestimonialCardButtons
          additionalClassesLeft="hidden lg:left-4 lg:top-[9rem] lg:flex"
          additionalClassesRight="hidden lg:right-4 lg:top-[9rem] lg:flex"
          previous={previous}
          next={next}
        />
      </div>
    </section>
  );
};

export default Testimonials;
