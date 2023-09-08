import { StaticImageData } from "next/image";

interface Project {
  title: string;
  description: string;
  techList: string[];
  desktopImage: StaticImageData;
  mobileImage: StaticImageData;
  backgroundColour: string;
  reverseLayout: boolean;
}

export interface FeaturedProjectCardProps {
  project: Project;
}
