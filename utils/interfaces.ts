import {
  CaseStudyType,
  ContactDetailType,
  SocialMediaIconType,
  WorkProcessSymbolType,
  FormData,
} from "@/types";
import { StaticImageData } from "next/image";
import {
  Dispatch,
  FormEvent,
  ReactNode,
  RefObject,
  SetStateAction,
} from "react";

export interface ButtonsProps {
  additionalClassesLeft: string;
  additionalClassesRight: string;
  previous: () => void;
  next: () => void;
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
  desktopMobileImage: {
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
  caseStudy: CaseStudyShortened;
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

export interface MobileNavBarProps {
  pathname: string;
  handleCloseMobileNav: () => void;
  closeAnimation: boolean;
}

export interface ContactItemProps {
  contact: ContactDetailType;
}

export interface ErrorMessageProps {
  message: string;
}

export interface FormInputProps {
  label: string;
  input?: boolean;
  email?: boolean;
  inputName: string;
  setFormData: (data: any) => void;
  formData: { [key: string]: string };
  removeErrorMessage: (message: string) => void;
  errorList: string;
  errorMessage: string;
  marginTop?: boolean;
}

export interface SendMessageProps {
  setShowSuccess: Dispatch<SetStateAction<boolean>>;
}

export interface SendMessageFormProps {
  form: RefObject<HTMLFormElement>;
  sendEmail: (e: FormEvent<HTMLFormElement>) => void;
  removeErrorMessage: (errorMsg: string) => void;
  errorList: string;
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;
  isSending: boolean;
}

export interface SocialMediaButtonProps {
  button: SocialMediaIconType;
}

export interface ButtonProps {
  style?: string;
  type?: "button" | "submit" | "reset";
  additionalStyles?: string;
  value?: string;
  children: ReactNode;
}

export interface UnderlinedTextProps {
  text: string;
  header?: boolean;
  workExperience?: boolean;
  additionalStyles?: string;
}

export interface CardPatternsProps {
  animate: boolean;
}
