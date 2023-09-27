import {
  CaseStudyType,
  ContactDetailType,
  SocialMediaIconType,
  WorkProcessSymbolType,
} from "@/types";
import { StaticImageData } from "next/image";

export interface ButtonsProps {
  additionalClassesLeft: string;
  additionalClassesRight: string;
  previous: () => void;
  next: () => void;
}

export interface MockupProps {
  imageSrc: string;
  isHomepage?: boolean;
  isCaseStudyPage?: boolean;
}

export interface CaseStudyAndWorkProcessProps {
  caseStudy: CaseStudyType;
  workProcess: WorkProcessSymbolType[];
}
export interface CaseStudiesProps {
  caseStudies: CaseStudyType[];
}

export interface MainCaseStudyProps {
  caseStudy: CaseStudyType;
}

export interface CaseStudyShortened {
  caseStudyLink?: string;
  backgroundColour: string;
  title: string;
  techList: string[];
  description: string;
  mobileImage: {
    alt: string;
    image: string;
  };
  desktopImage: {
    alt: string;
    image: string;
  };
}

export interface CaseStudiesShortenedProps {
  caseStudies: CaseStudyShortened[];
}

export interface FeaturedProjectCardProps {
  project: CaseStudyShortened;
  reverseLayout?: boolean;
}

export interface ContactPageBodyProps {
  contactDetails: ContactDetailType[];
  socialMediaIcons: SocialMediaIconType[];
}

export interface CaseStudyBodyProps {
  mainProject: CaseStudyType;
  similarProjects: CaseStudyType[];
  workProcess: WorkProcessSymbolType[];
}
export interface TechStackItem {
  title: string;
  image: string;
}

export interface CaseStudyCardProps {
  mainProject: CaseStudyShortened;
}

export interface ChallengesAndLearningsCardProps {
  image: StaticImageData;
  additionalStyles?: string;
  textColour: string;
  text: string;
  listText?: string[];
}

export interface SimilarProjectGalleryProps {
  current: number;
}

export interface CaseStudyProps {
  params: {
    details: string;
  };
}

export interface FooterLayoutProps {
  socialMediaIcons: SocialMediaIconType[];
}
