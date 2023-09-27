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
      self-center lg:h-[21rem] ${
        reverseLayout
          ? "lg:order-1 lg:-mr-32 lg:translate-x-[-9rem]"
          : "lg:-ml-16 lg:translate-x-16"
      }`}
    >
      <div className="flex w-full max-w-[80%]">
        <LaptopMockup imageSrc={project.desktopImage.image} isHomepage={true} />
      </div>
      <div className="flex w-full max-w-[20%]">
        <MobileMockup imageSrc={project.mobileImage.image} isHomepage={true} />
      </div>
    </div>
  );
};

export default ProjectCardImage;
