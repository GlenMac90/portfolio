"use client";

import { motion } from "framer-motion";

import ServicesCard from "./ServicesCard";
import UnderlinedText from "../UnderlinedText";
import { ServiceProvidedType } from "@/types";

interface MyServicesProps {
  services: ServiceProvidedType[];
}

const MyServices = ({ services }: MyServicesProps) => {
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
          <div className="flex items-center">
            <p className="text-[2.25rem] font-bold text-black200 dark:text-white900 md:text-[3rem]">
              What
            </p>
            <UnderlinedText
              text="service"
              additionalStyles="flex ml-2 md:ml-3 lg:mx-3"
            />
          </div>
          <p className="self-center text-[2.25rem] font-bold text-black200 dark:text-white900 md:text-[3rem]">
            do I provide
          </p>
        </motion.div>
        <div className="mt-8 flex flex-col items-center gap-8 md:grid md:max-w-3xl md:grid-cols-2 xl:flex xl:max-w-7xl xl:flex-row">
          {services.map((service, index) => (
            <ServicesCard
              key={service.title}
              service={service}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyServices;
