import { FeaturedProjectCardProps } from "@/utils/interfaces";
import LaptopMockup from "../../LaptopMockup";
import MobileMockup from "../../MobileMockup";

const ProjectCardImage = ({
  project,
  reverseLayout,
}: FeaturedProjectCardProps) => {
  return (
    <div
      className={`order-2 mt-6 flex
      h-40 self-center lg:h-[21rem] ${
        reverseLayout
          ? "lg:order-1 lg:-mr-32 lg:translate-x-[-10.5rem]"
          : "lg:-ml-16 lg:translate-x-16"
      }`}
    >
      <LaptopMockup imageSrc={project.desktopImage} isHomepage={true} />
      <MobileMockup imageSrc={project.mobileImage} isHomepage={true} />
    </div>
  );
};

export default ProjectCardImage;
