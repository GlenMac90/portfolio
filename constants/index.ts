import {
  css,
  express,
  git,
  github,
  html,
  mongodb,
  motion,
  next,
  nodejs,
  react,
  tailwind,
  typescript,
} from "@/public/svg-icons/tech-icons";

import {
  frontEndIcon,
  frontEndIconPrimaryLight,
  frontEndIconPrimaryDark,
  backEndIcon,
  backEndIconPrimaryLight,
  backEndIconPrimaryDark,
  webOptimisationIcon,
  webOptimisationIconPrimaryLight,
  webOptimisationIconPrimaryDark,
  analyticsIcon,
  analyticsIconPrimaryLight,
  analyticsIconPrimaryDark,
} from "@/public/svg-icons";

import {
  digitalOceanLogo,
  digitalOceanLogoDark,
  digitalOceanLogoPrimaryLight,
  digitalOceanLogoPrimaryDark,
  fireboxLogo,
  fireboxLogoDark,
  fireboxLogoPrimaryLight,
  fireboxLogoPrimaryDark,
  mailchimpLogo,
  mailchimpLogoDark,
  mailchimpLogoPrimaryLight,
  mailchimpLogoPrimaryDark,
  slackLogo,
  slackLogoDark,
  slackLogoPrimaryLight,
  slackLogoPrimaryDark,
} from "@/public/svg-icons/work-experience-icons";

import {
  hipnodeMobileView,
  hipnodeDesktopView,
  jobItMobileView,
  jobItDesktopView,
  morentMobileView,
  morentDesktopView,
} from "@/public/png-icons/featured-projects-images";

export const navbarButtons = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Case Studies",
    path: "/case-studies",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

export const mySkillsArray = [
  { src: css, text: "CSS" },
  { src: express, text: "Express" },
  { src: git, text: "Git" },
  { src: github, text: "GitHub" },
  { src: html, text: "HTML" },
  { src: mongodb, text: "MongoDB" },
  { src: motion, text: "Motion" },
  { src: next, text: "NextJS" },
  { src: nodejs, text: "NodeJS" },
  { src: react, text: "React" },
  { src: tailwind, text: "TailwindCSS" },
  { src: typescript, text: "TypeScript" },
];

export const servicesProvided = [
  {
    imageSrc: analyticsIcon,
    imageHoverLight: analyticsIconPrimaryLight,
    imageHoverDark: analyticsIconPrimaryDark,
    title: "Analytics & SEO",
    description:
      "Implement tracking & analytics tools to monitor website performance & improve SEO",
  },
  {
    imageSrc: frontEndIcon,
    imageHoverLight: frontEndIconPrimaryLight,
    imageHoverDark: frontEndIconPrimaryDark,
    title: "Front-End Dev",
    description:
      "Front-end dev includes creating the user interface and interactive elements of websites and apps",
  },
  {
    imageSrc: backEndIcon,
    imageHoverLight: backEndIconPrimaryLight,
    imageHoverDark: backEndIconPrimaryDark,
    title: "Back-End Dev",
    description:
      "Back-end dev focuses on server, database, and application logic, ensuring smooth data flow and functionality.",
  },
  {
    imageSrc: webOptimisationIcon,
    imageHoverLight: webOptimisationIconPrimaryLight,
    imageHoverDark: webOptimisationIconPrimaryDark,
    title: "Web Optimization",
    description:
      "Web optimization focuses on improving website performance for a smoother user experience",
  },
];

export const workExperience = [
  {
    title: "Slack",
    position: "Product Design",
    duration: 4,
    durationUnit: "Year",
    image: slackLogo,
    imageDark: slackLogoDark,
    imagePrimaryLight: slackLogoPrimaryLight,
    imagePrimaryDark: slackLogoPrimaryDark,
  },
  {
    title: "Firefox",
    position: "Sr. UI Design",
    duration: 4,
    durationUnit: "Year",
    image: fireboxLogo,
    imageDark: fireboxLogoDark,
    imagePrimaryLight: fireboxLogoPrimaryLight,
    imagePrimaryDark: fireboxLogoPrimaryDark,
  },
  {
    title: "Digital Ocean",
    position: "UI & Motion Designer",
    duration: 4,
    durationUnit: "Year",
    image: digitalOceanLogo,
    imageDark: digitalOceanLogoDark,
    imagePrimaryLight: digitalOceanLogoPrimaryLight,
    imagePrimaryDark: digitalOceanLogoPrimaryDark,
  },
  {
    title: "Mailchimp",
    position: "UI Designer",
    duration: 4,
    durationUnit: "Year",
    image: mailchimpLogo,
    imageDark: mailchimpLogoDark,
    imagePrimaryLight: mailchimpLogoPrimaryLight,
    imagePrimaryDark: mailchimpLogoPrimaryDark,
  },
];

export const featuredProjectsList = [
  {
    title: "Morent",
    description: "A Car Rental Application",
    techList: ["ReactJS", "Next.js", "Nodejs", "MongoDB"],
    desktopImage: morentDesktopView,
    mobileImage: morentMobileView,
    backgroundColour: "#416CEA",
    reverseLayout: false,
  },
  {
    title: "JobIT",
    description: "A Job Finding Application",
    techList: ["ReactJS", "Next.js", "Nodejs", "MongoDB"],
    desktopImage: jobItDesktopView,
    mobileImage: jobItMobileView,
    backgroundColour: "#0BAB7C",
    reverseLayout: true,
  },
  {
    title: "Hipnode",
    description: "A Social Media Application",
    techList: ["ReactJS", "Next.js", "Nodejs", "MongoDB"],
    desktopImage: hipnodeDesktopView,
    mobileImage: hipnodeMobileView,
    backgroundColour: "#FF6934",
    reverseLayout: false,
  },
];
