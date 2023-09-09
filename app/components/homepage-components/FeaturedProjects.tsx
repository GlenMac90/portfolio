import React from "react";
import Link from "next/link";
import Image from "next/image";

import { featuredProjectsList } from "@/constants";
import FeaturedProjectCard from "./FeaturedProjectCard";
import { whiteButtonArrow } from "@/public/svg-icons";

const FeaturedProjects = () => {
  return (
    <section className="flex w-full flex-col items-center bg-white900 p-6 dark:bg-black200">
      <div className="flex w-full max-w-7xl flex-col items-center">
        <div className="flex items-center">
          <p className="z-20  text-4xl font-bold text-black200 dark:text-white900 md:text-[3rem]">
            Featured
          </p>
          <div className="relative ml-4 flex w-fit flex-col self-center">
            <p className="z-20 text-4xl font-bold text-black200 dark:text-white900 md:text-[3rem]">
              Projects
            </p>
            <div className="absolute z-10 h-[1rem] w-full translate-y-[1.6rem] bg-orange-200 md:h-[1.358rem] md:translate-y-[1.7rem]" />
          </div>
        </div>
      </div>
      <div className="mt-9 flex flex-col gap-9 lg:mt-12">
        {featuredProjectsList.map((project) => (
          <FeaturedProjectCard key={project.title} project={project} />
        ))}
      </div>
      <Link href="/case-studies">
        <button className="mb-0 mt-6 flex items-center gap-1.5 rounded-full bg-primaryLight px-10 py-5 text-lg font-semibold text-white900 dark:bg-primaryDark lg:mb-14 lg:mt-12">
          <p>See more case studies</p>
          <Image
            src={whiteButtonArrow}
            height={14}
            width={14}
            alt="link to more info"
          />
        </button>
      </Link>
    </section>
  );
};

export default FeaturedProjects;
