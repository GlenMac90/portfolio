// types/index.ts

import { PortableTextBlock } from "sanity";

export type ProfileType = {
  _id: string;
  fullName: string;
  headline: string;
  profileImage: {
    alt: string;
    image: string;
  };
  shortBio: string;
  email: string;
  fullBio: PortableTextBlock[];
  location: string;
  resumeURL: string;
  socialLinks: string[];
  skills: string[];
};

export type CaseStudyType = {
  _id: string;
  caseStudyLink: string;
  title: string;
  description: string;
  myRole: string;
  websiteURL: string;
  sourceCode: string;
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
  desktopMobileImage: {
    alt: string;
    image: string;
  };
  backgroundColour: string;
  reverseLayout: boolean;
};

export type TestimonialType = {
  name: string;
  jobDescription: string;
  image: {
    alt: string;
    image: string;
  };
  rating: number;
  text: string;
};

export type WorkExperienceType = {
  title: string;
  position: string;
  duration: number;
  durationUnit: string;
  image: {
    alt: string;
    image: string;
  };
  imageDark: {
    alt: string;
    image: string;
  };
  imagePrimaryLight: {
    alt: string;
    image: string;
  };
  imagePrimaryDark: {
    alt: string;
    image: string;
  };
};

export type ServiceProvidedType = {
  imageSrc: {
    alt: string;
    image: string;
  };
  imageHoverLight: {
    alt: string;
    image: string;
  };
  imageHoverDark: {
    alt: string;
    image: string;
  };
  title: string;
  description: string;
};

export type SkillType = {
  src: {
    alt: string;
    image: string;
  };
  text: string;
};

export type ContactDetailType = {
  label: string;
  imageSrc: {
    alt: string;
    image: string;
  };
  imageSrcDark: {
    alt: string;
    image: string;
  };
  info: string;
};

export type SocialMediaIconType = {
  icon: {
    alt: string;
    image: string;
  };
  iconDark: {
    alt: string;
    image: string;
  };
  title: string;
  url: string;
};

export type WorkProcessSymbolType = {
  title: string;
  image: {
    alt: string;
    image: string;
  };
};

export type FormData = {
  user_name: string;
  user_email: string;
  message: string;
  contact_info: string;
};
