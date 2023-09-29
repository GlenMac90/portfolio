import Image from "next/image";

import { FeaturedProjectCardProps } from "@/utils/interfaces";
import { mobileAndDesktopFallback } from "@/public/png-icons";

const ProjectCardImage = ({
  project,
  reverseLayout,
}: FeaturedProjectCardProps) => {
  const imageSrc = project.desktopMobileImage.image;
  return (
    <div
      className={`order-2 flex self-center
      px-8 lg:mt-6 lg:h-auto lg:w-3/5  lg:-translate-y-8 lg:px-0 ${
        reverseLayout
          ? "lg:order-1 lg:translate-x-[-4.5rem]"
          : "lg:translate-x-8"
      }`}
    >
      <Image
        src={imageSrc || mobileAndDesktopFallback}
        alt="picture of laptop and mobile preview"
        height={900}
        width={900}
      />
    </div>
  );
};

export default ProjectCardImage;
