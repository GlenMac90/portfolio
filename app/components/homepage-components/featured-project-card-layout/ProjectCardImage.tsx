import Image from "next/image";

import {
  laptopTemplate,
  iphoneTemplate,
} from "@/public/png-icons/featured-projects-images";
import React from "react";
import { FeaturedProjectCardProps } from "@/utils/interfaces";

const ProjectCardImage: React.FC<FeaturedProjectCardProps> = ({ project }) => {
  return (
    <div
      className={`order-2 mt-6 flex ${
        project.reverseLayout
          ? "lg:order-1 lg:-mr-32 lg:translate-x-[-10.5rem]"
          : "-ml-16 translate-x-16"
      }`}
    >
      <div className="relative z-30 flex h-40 w-64 lg:h-[21rem] lg:w-[34.5rem]">
        <Image src={laptopTemplate} alt="laptop template image" />
        <div className="absolute left-6 top-1 flex h-36 w-[13.1rem] overflow-hidden rounded lg:left-12 lg:h-[19.4rem] lg:w-[28.75rem] lg:rounded-t-xl">
          <Image
            src={project.desktopImage}
            alt="desktop image of project"
            objectFit="cover"
            className="h-full"
          />
        </div>
      </div>
      <div className="relative z-20 flex h-28 w-16 -translate-x-4 self-end lg:h-[17rem] lg:w-[8.7rem] lg:-translate-x-6">
        <Image
          src={iphoneTemplate}
          alt="iphone template image"
          className="z-20"
        />
        <div className="absolute left-1 top-1 z-10 flex h-[6.5rem] w-[3.5rem] overflow-hidden rounded-md lg:left-2 lg:top-2 lg:h-[16rem] lg:w-[7.5rem] lg:rounded-2xl">
          <Image
            src={project.mobileImage}
            alt="mobile image of project"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCardImage;
