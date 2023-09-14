import { StaticImageData } from "next/image";

interface TechStack {
  image: StaticImageData;
  text: string;
}

export interface MockupProps {
  imageSrc: StaticImageData;
  isHomepage?: boolean;
}
export interface Project {
  caseStudyLink?: string;
  title: string;
  description: string;
  myRole?: string;
  startDate?: Date;
  endDate?: Date;
  techStackCaseStudy?: TechStack[];
  caseStudyDescription?: string[];
  problemStatement?: string;
  problemStatementImage?: StaticImageData;
  challenges?: string[];
  learnings?: string[];
  figmaBannerImage?: StaticImageData;
  techList: string[];
  desktopImage: StaticImageData;
  mobileImage: StaticImageData;
  backgroundColour: string;
  reverseLayout: boolean;
}

export interface FeaturedProjectCardProps {
  project: Project;
  reverseLayout?: boolean;
}

export interface CaseStudyHeaderProps {
  mainProject?: Project;
  similarProjects?: Project[];
}
