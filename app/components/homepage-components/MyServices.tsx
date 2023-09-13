"use client";

import { motion } from "framer-motion";

import ServicesCard from "./ServicesCard";
import { servicesProvided } from "@/constants";

const MyServices = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-white900 p-6 py-12 dark:bg-black300 md:bg-white800 xl:px-20 xl:py-[4.5rem]">
      <div className="flex w-full max-w-7xl flex-col items-center">
        <motion.div
          initial={{ x: "25%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row"
        >
          <div className="flex">
            <p className="mr-4 text-[2.625rem] font-bold text-black200 dark:text-white900 md:text-[4rem]">
              What
            </p>
            <div className="relative flex w-fit flex-col self-center">
              <p className="z-20 truncate whitespace-nowrap text-[2.625rem] font-bold text-black200 dark:text-white900 md:text-[4rem]">
                service
              </p>
              <div className="absolute z-10 h-[1.2rem] w-full translate-y-[2.38rem] bg-orange-200 md:h-[1.8rem] md:translate-y-[3.625rem]" />
            </div>
          </div>
          <p className="ml-4 text-[2.625rem] font-bold text-black200 dark:text-white900 md:text-[4rem]">
            do I provide
          </p>
        </motion.div>
        <div className="mt-8 flex flex-col items-center gap-8 md:grid md:max-w-3xl md:grid-cols-2 xl:flex xl:max-w-7xl xl:flex-row">
          {servicesProvided.map((service, index) => (
            <motion.div
              initial={{ x: "25%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              whileHover={{ y: "10%", transition: { duration: 0.2 } }}
              transition={{
                x: { duration: 0.5, delay: index * 0.3 },
                opacity: { duration: 0.5, delay: index * 0.3 },
              }}
              viewport={{ once: true }}
              key={service.title}
              className="flex w-full md:h-[18rem] md:w-[19rem] lg:w-full "
            >
              <ServicesCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyServices;
