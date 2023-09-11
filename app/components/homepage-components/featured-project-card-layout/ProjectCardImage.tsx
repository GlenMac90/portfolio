import React from "react";

import { FeaturedProjectCardProps } from "@/utils/interfaces";
import LaptopMockup from "../../LaptopMockup";
import MobileMockup from "../../MobileMockup";

const ProjectCardImage: React.FC<FeaturedProjectCardProps> = ({ project }) => {
  return (
    <div
      className={`order-2 mt-6 flex ${
        project.reverseLayout
          ? "lg:order-1 lg:-mr-32 lg:translate-x-[-10.5rem]"
          : "-ml-16 translate-x-16"
      }`}
    >
      <LaptopMockup imageSrc={project.desktopImage} isHomepage={true} />
      <MobileMockup imageSrc={project.mobileImage} isHomepage={true} />
    </div>
  );
};

export default ProjectCardImage;
