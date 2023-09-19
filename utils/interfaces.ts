import {
  CaseStudyType,
  ContactDetailType,
  SocialMediaIconType,
  WorkProcessSymbolType,
} from "@/types";

export interface MockupProps {
  imageSrc: string;
  isHomepage?: boolean;
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
