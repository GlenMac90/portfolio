import ProjectCardText from "./featured-project-card-layout/ProjectCardText";
import ProjectCardImage from "./featured-project-card-layout/ProjectCardImage";

import { FeaturedProjectCardProps } from "@/utils/interfaces";

const FeaturedProjectCard = ({
  project,
  reverseLayout,
}: FeaturedProjectCardProps) => {
  return (
    <div
      className="flex w-full max-w-xl flex-col overflow-hidden rounded-xl py-8 lg:max-w-7xl lg:flex-row lg:items-center lg:justify-between"
      style={{ backgroundColor: project.backgroundColour }}
    >
      {reverseLayout ? (
        <>
          <ProjectCardImage project={project} reverseLayout={reverseLayout} />
          <ProjectCardText project={project} reverseLayout={reverseLayout} />
        </>
      ) : (
        <>
          <ProjectCardText project={project} reverseLayout={reverseLayout} />
          <ProjectCardImage project={project} reverseLayout={reverseLayout} />
        </>
      )}
    </div>
  );
};

export default FeaturedProjectCard;
