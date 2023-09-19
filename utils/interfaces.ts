import { ContactDetailType, SocialMediaIconType } from "@/types";

export interface MockupProps {
  imageSrc: string;
  isHomepage?: boolean;
}

export type CaseStudyType = {
  _id: string;
  caseStudyLink: string;
  title: string;
  description: string;
  myRole: string;
  startDate: Date;
  endDate: Date;
  techStackCaseStudy: {
    title: string;
    image: string;
  }[];
  caseStudyDescription: string[];
  problemStatement: string;
  problemStatementImage: {
    alt: string;
    image: string;
  };
  challenges: string[];
  learnings: string[];
  figmaBannerImage: {
    alt: string;
    image: string;
  };
  techList: string[];
  desktopImage: {
    alt: string;
    image: string;
  };
  mobileImage: {
    alt: string;
    image: string;
  };
  backgroundColour: string;
  reverseLayout: boolean;
};

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
