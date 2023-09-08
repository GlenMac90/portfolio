import React from "react";
import ProjectCardText from "./featured-project-card-layout/ProjectCardText";
import ProjectCardImage from "./featured-project-card-layout/ProjectCardImage";

import { FeaturedProjectCardProps } from "@/utils/interfaces";

const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({
  project,
}) => {
  return (
    <div
      className="flex w-full max-w-[30rem] flex-col overflow-hidden rounded-xl px-6 py-12 lg:max-w-7xl lg:flex-row lg:pl-[7rem] lg:pt-[6rem]"
      style={{ backgroundColor: project.backgroundColour }}
    >
      {project.reverseLayout ? (
        <>
          <ProjectCardImage project={project} />
          <ProjectCardText project={project} />
        </>
      ) : (
        <>
          <ProjectCardText project={project} />
          <ProjectCardImage project={project} />
        </>
      )}
    </div>
  );
};

export default FeaturedProjectCard;
