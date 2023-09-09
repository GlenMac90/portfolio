"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import TestimonialCard from "./TestimonialCard";
import { useTheme } from "next-themes";

import { testimonials } from "@/constants";
import {
  arrowLeft,
  arrowRight,
  arrowLeftDark,
  arrowRightDark,
} from "@/public/svg-icons";

interface ButtonsProps {
  additionalClassesLeft: string;
  additionalClassesRight: string;
}

const Testimonials = () => {
  const { theme } = useTheme();
  const [current, setCurrent] = useState(0);

  const intervalIdRef = useRef<number | null>(null);

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

  const Buttons: React.FC<ButtonsProps> = ({
    additionalClassesLeft,
    additionalClassesRight,
  }) => (
    <>
      <button
        onClick={previous}
        className={`absolute ${additionalClassesLeft} self-center rounded-full bg-white900 p-4 dark:bg-black200 `}
      >
        <Image
          src={theme === "light" ? arrowLeft : arrowLeftDark}
          height={24}
          width={24}
          alt="left button click"
        />
      </button>
      <button
        onClick={next}
        className={`absolute ${additionalClassesRight} rounded-full bg-white900 p-4 dark:bg-black200`}
      >
        <Image
          src={theme === "light" ? arrowRight : arrowRightDark}
          height={24}
          width={24}
          alt="right button click"
        />
      </button>
    </>
  );

  return (
    <section className="flex w-full flex-col items-center bg-white800 px-6 py-12 dark:bg-black300 md:py-[4.5rem]">
      <div className="flex flex-col items-center md:flex-row">
        <div className="flex">
          <p className="text-4xl font-bold text-black200 dark:text-white900 md:text-[3rem]">
            What
          </p>
          <div className="relative mx-3 flex w-fit flex-col self-center">
            <p className="z-20 text-4xl font-bold text-black200 dark:text-white900 md:text-[3rem]">
              they say
            </p>
            <div className="absolute z-10 h-[1rem] w-full translate-y-[1.6rem] bg-orange-200 md:h-[1.358rem] md:translate-y-[1.7rem]" />
          </div>
        </div>
        <p className="text-4xl font-bold text-black200 dark:text-white900 md:text-[3rem]">
          about me
        </p>
      </div>
      <div className="relative mt-9 flex w-full flex-col items-center lg:max-w-7xl lg:px-20">
        <div className="relative max-w-xl overflow-hidden lg:max-w-6xl">
          <div
            className="flex max-w-xl transition-transform duration-1000 ease-out lg:max-w-5xl"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
              />
            ))}
          </div>
          <Buttons
            additionalClassesLeft="right-[4.5rem] top-0 flex lg:hidden"
            additionalClassesRight="right-0 top-0 flex lg:hidden"
          />
        </div>
        <Buttons
          additionalClassesLeft="hidden lg:left-4 lg:top-[9rem] lg:flex"
          additionalClassesRight="hidden lg:right-4 lg:top-[9rem] lg:flex"
        />
      </div>
    </section>
  );
};

export default Testimonials;
