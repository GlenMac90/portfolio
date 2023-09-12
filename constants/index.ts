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
  gitHubIcon,
  gitHubIconWhite,
  socialMediaIconWhite,
  linkedInIconWhite,
  instagramIconWhite,
  instagramIcon,
  linkedInIcon,
  socialMediaIcon,
  call,
  callWhite,
  message,
  messageWhite,
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

import {
  adrianPic,
  christopherPic,
  santiagoPic,
  morentFigmaBannerImage,
  jobItFigmaBannerImage,
  hipnodeFigmaBannerImage,
  hipnodeProblemImage,
  jobItProblemImage,
  morentProblemImage,
} from "@/public/png-icons";

import {
  definition,
  deploy,
  design,
  dev,
  plan,
} from "@/public/svg-icons/case-study-icons";

const cssTechStack = { image: css, text: "CSS" };
const gitTechStack = { image: git, text: "Git" };
const githubTechStack = { image: github, text: "GitHub" };
const htmlTechStack = { image: html, text: "HTML" };
const mongodbTechStack = { image: mongodb, text: "MongoDB" };
const motionTechStack = { image: motion, text: "Motion" };
const nextTechStack = { image: next, text: "NextJS" };
const reactTechStack = { image: react, text: "React" };
const tailwindTechStack = { image: tailwind, text: "TailwindCSS" };
const typescriptTechStack = { image: typescript, text: "TypeScript" };

export const workProcessSymbols = [
  { title: "Definition", image: definition },
  { title: "Design", image: design },
  { title: "Planning", image: plan },
  { title: "Development", image: dev },
  { title: "Deployment", image: deploy },
];

export const socialMediaIcons = [
  gitHubIcon,
  instagramIcon,
  linkedInIcon,
  socialMediaIcon,
];

export const socialMediaButtonsContactPage = [
  {
    icon: instagramIcon,
    iconDark: instagramIconWhite,
    title: "instagram",
    url: "https://instagram.com",
  },
  {
    icon: socialMediaIcon,
    iconDark: socialMediaIconWhite,
    title: "X",
    url: "https://x.com",
  },
  {
    icon: linkedInIcon,
    iconDark: linkedInIconWhite,
    title: "LinkedIn",
    url: "https://linkedin.com",
  },
  {
    icon: gitHubIcon,
    iconDark: gitHubIconWhite,
    title: "gitHub",
    url: "https://github.com",
  },
];

export const contactDetails = [
  {
    label: "Phone Number",
    imageSrc: call,
    imageSrcDark: callWhite,
    info: "+44 7984 365789",
  },
  {
    label: "Email Address",
    imageSrc: message,
    imageSrcDark: messageWhite,
    info: "glen.mccallum@live.co.uk",
  },
];

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
    caseStudyLink: "morent",
    title: "Morent",
    description: "A Car Rental Application",
    myRole: "Software Engineer",
    startDate: new Date(2023, 9, 8),
    endDate: new Date(2023, 10, 3),
    techStackCaseStudy: [
      cssTechStack,
      gitTechStack,
      githubTechStack,
      htmlTechStack,
      mongodbTechStack,
      motionTechStack,
      nextTechStack,
      reactTechStack,
      tailwindTechStack,
      typescriptTechStack,
    ],
    caseStudyDescription: [
      "Morent, a cutting-edge car rental application that was developed using the MERN stack. The app boasts a dynamic homepage that showcases featured vehicles, along with convenient pickup & drop-off location options & a comprehensive list of available cars.",
      "My team and I also developed the car listing page which offers a search bar and various filtering options for users to find the perfect vehicle. Additionally, it has a car details page which provides users with detailed information along with suggestions for other recommended vehicles.",
      "Car owners are also able to list their cars for rent through our Add Car page, while users can easily track their rented and rented-out cars through their profile page. Overall, we have created an intuitive and user-friendly MVP version of the platform that will make renting a car a breeze.",
    ],
    problemStatement:
      "One of the main problems that people face when looking to rent a car is the hassle of finding a reliable and user-friendly platform to search for and book rental cars. In addition, car owners who want to rent out their vehicles often struggle to find a suitable platform to list their cars and manage their rentals.",
    problemStatementImage: morentProblemImage,
    challenges: [
      "Gained extensive knowledge of full authentication and authorization implementation, including the use of industry-standard security protocols such as JSON Web Tokens.",
      "We conducted brainstorming and carefully weighed our options before making a decision. Furthermore, using NextJS was a new experience for us, and we encountered difficulties while implementing its features. Finally, we had to work under time constraints, which added pressure to the project.",
      "However, we collaborated effectively to overcome these obstacles and ultimately delivered a high-quality product within the given timeline.",
    ],
    learnings: [
      "Gained extensive knowledge of full authentication and authorization implementation, including the use of industry-standard security protocols such as JSON Web Tokens.",
      "Sharpened my backend skills, specifically in optimizing database queries, improving performance, and handling server-side logic.",
      "Learned how to properly handle files, including file upload, storage, and retrieval, ensuring that the app&apos;s data is organized & easily accessible while keeping it secure.",
      "Acquired proficiency in NextJS and implemented various features utilizing industry-standard best practices.",
    ],
    figmaBannerImage: morentFigmaBannerImage,
    techList: ["ReactJS", "Next.js", "Nodejs", "MongoDB"],
    desktopImage: morentDesktopView,
    mobileImage: morentMobileView,
    backgroundColour: "#416CEA",
    reverseLayout: false,
  },
  {
    caseStudyLink: "jobit",
    title: "JobIT",
    description: "A Job Finding Application",
    myRole: "Software Engineer",
    startDate: new Date(2023, 8, 10),
    endDate: new Date(2023, 9, 6),
    techStackCaseStudy: [
      cssTechStack,
      gitTechStack,
      githubTechStack,
      htmlTechStack,
      nextTechStack,
      reactTechStack,
      tailwindTechStack,
    ],
    caseStudyDescription: [
      "JobIt, a state-of-the-art job portal crafted with NextJS. The site features a dynamic homepage, presenting jobs localized to the user's area, complete with comprehensive job details and a straightforward application link. The platform's design emphasizes both beauty and responsiveness, ensuring a seamless experience across devices.",
      "My dedicated team and I meticulously developed a search page, facilitating users to effortlessly navigate, search, and filter through a myriad of job listings tailored to their specifications. We didn't stop there; JobIt also boasts an estimated salaries page, equipped with a detailed chart illustrating the minimum, average, and maximum salaries for any chosen profession.",
      "All in all, we've achieved a compelling MVP version of JobIt, setting a new standard for job-seeking platforms with its intuitive features and elegant interface.",
    ],
    problemStatement:
      "One of the primary challenges job seekers encounter is navigating through myriad online job platforms to find genuine and relevant job listings. Additionally, the scattered nature of online job postings can make it difficult to compare and gauge the reliability of different opportunities. JobIt addresses these issues by consolidating job information from various sites, ensuring users receive the most dependable and comprehensive data in their search.",
    problemStatementImage: jobItProblemImage,
    challenges: [
      "Gained experience in using jSearch job API to filter find jobs searched by user. Finding a way to use the response data effectively despite inconsistencies in the quality of the respnses",
      "Working together as a team for the first time and coordinating our tasks and time management to work effectively and finish on time whilst delivering a high quality product",
      "Working with new technoligies and packages and embracing the learning curve that comes with that",
    ],
    learnings: [
      "Gained much knowledge and experience with tailwindCSS as well as jQuery and apexCharts.",
      "Sharpened by front-end skills and taking the role in being the lead UI designer for this project, creating a responsive and user friendly user experience",
      "Learned but to work effectively even with subpar responses from the API",
      "Acquired experience with nextJS and improved my all rounded coding skills",
    ],
    figmaBannerImage: jobItFigmaBannerImage,
    techList: ["ReactJS", "Next.js", "Nodejs", "MongoDB"],
    desktopImage: jobItDesktopView,
    mobileImage: jobItMobileView,
    backgroundColour: "#0BAB7C",
    reverseLayout: true,
  },
  {
    caseStudyLink: "hipnode",
    title: "Hipnode",
    description: "A Social Media Application",
    myRole: "Software Engineer",
    startDate: new Date(2023, 8, 10),
    endDate: new Date(2023, 9, 6),
    techStackCaseStudy: [
      cssTechStack,
      gitTechStack,
      githubTechStack,
      htmlTechStack,
      nextTechStack,
      reactTechStack,
      tailwindTechStack,
    ],
    caseStudyDescription: [
      "HipNode, the next-generation social media platform, seamlessly integrates various content avenues, all under one digital roof. Developed with cutting-edge technology, HipNode offers its community a dynamic environment to share articles, dive into podcasts, groove to the latest music tracks, and express themselves through interactive posts. Its design exudes modernity while ensuring a user-centric experience across all devices.",
      "My team and I poured our creativity and expertise into crafting features that redefine online social experiences. Beyond the standard posting capabilities, HipNode stands out with its live chat functionality, enabling real-time conversations and fostering a tighter-knit community.",
      "From avid readers to music enthusiasts, from podcast listeners to everyday socializers, HipNode caters to all. We've envisioned and brought to life a holistic platform that not only connects users but also celebrates diverse forms of digital expression.",
    ],
    problemStatement:
      "One of the prevalent issues for digital enthusiasts today is juggling multiple platforms to consume various forms of media, from pictures and posts to music and podcasts. This fragmented experience can be overwhelming and inefficient. HipNode addresses this challenge by offering an all-in-one social media platform where users can seamlessly engage with a diverse range of content, ensuring a consolidated and enriching digital interaction.",
    problemStatementImage: hipnodeProblemImage,
    challenges: [
      "Venturing into the use of Supabase for the first time, which presented its own set of intricacies and demanded a steep learning curve for successful implementation.",
      "Managing the magnitude of a significantly larger project that spanned across three months, necessitating rigorous team coordination, constant communication, and strategic planning to ensure timely and efficient delivery.",
      "Integrating a myriad of new technologies into the project, each bringing unique challenges and requiring rapid adaptation to harness their full potential effectively.",
    ],
    learnings: [
      "Acquired in-depth knowledge and experience in conceptualizing and executing large-scale full-stack projects, understanding the nuances and intricacies involved.",
      "Elevated my collaborative skills, working cohesively as a team member and ensuring the delivery of a high-quality product that met our collective vision.",
      "Challenged my boundaries, diving deep into new technologies and adopting advanced coding practices that further honed my technical proficiency.",
    ],
    figmaBannerImage: hipnodeFigmaBannerImage,
    techList: ["ReactJS", "Next.js", "Nodejs", "MongoDB"],
    desktopImage: hipnodeDesktopView,
    mobileImage: hipnodeMobileView,
    backgroundColour: "#FF6934",
    reverseLayout: false,
  },
];

export const testimonials = [
  {
    name: "Adrian Hajdin",
    jobDescription: "Founder & CEO at JS Mastery",
    image: adrianPic,
    rating: 5,
    text: "I had the experience of seeing Glen work while he participated in my 6 month JSMastery Masterclass Experience. He asked a lot of rambling questions that led nowhere and went way overboard with framer motion but other than that he put in a good effort.",
  },
  {
    name: "Christopher Soltis",
    jobDescription: "Software Engineer and all-round good dude",
    image: christopherPic,
    rating: 5,
    text: "I got the chance to work with Glen while he took part in the JSMastery Masterclass Experience. Apart from the 2000 line pull requests and working on 10 different things instead of the comments I made in the pr, he put in the hours.",
  },
  {
    name: "Santiago Laight",
    jobDescription: "Full-Stack Developer ",
    image: santiagoPic,
    rating: 5,
    text: "I was Greg's mentor during the masterclass. I have noticeably more grey hair and wrinkles now than I did 6 months ago as a result.",
  },
];

export const inputFields = [
  {
    label: "What's your name?",
    input: true,
    email: false,
    inputName: "user_name",
    errorMessage: "Name is required",
    marginTop: false,
  },
  {
    label: "What's your email",
    input: true,
    email: true,
    inputName: "user_email",
    errorMessage: "Invalid email format",
    marginTop: true,
  },
  {
    label: "Write something about your project goals and timeframe",
    input: false,
    email: false,
    inputName: "message",
    errorMessage: "Message should be at least 100 characters long",
    marginTop: true,
  },
  {
    label: "How to reach out to you back?",
    input: false,
    email: false,
    inputName: "contact_info",
    errorMessage: "Contact information is required",
    marginTop: true,
  },
];

export const laptopMockupStyles = {
  homepageParent: "h-40 w-64 lg:h-[21rem] lg:w-[34.5rem]",
  otherPageParent: "h-[10.6rem] w-[17rem] sm:h-[19.5rem] sm:w-[32.35rem]",
  homepageChild:
    "top-1 h-36 w-[13.1rem] lg:left-12 lg:h-[19.4rem] lg:w-[28.75rem] lg:rounded-t-xl",
  otherPageChild:
    "top-[0.3rem] h-[9.7rem] w-[14.1rem] sm:left-[2.9rem] sm:h-[18rem] sm:w-[26.8rem] sm:rounded-t-xl",
};

export const mobileMockupStyles = {
  homepageParent: "lg:h-[17rem] lg:w-[8.7rem] lg:-translate-x-6",
  otherPageParent: "sm:h-[17rem] sm:w-[7.8rem] sm:-translate-x-6",
  homepageChild: "lg:left-2 lg:top-2 lg:h-[16rem] lg:w-[7.5rem] lg:rounded-2xl",
  otherPageChild:
    "sm:left-2 sm:top-2 sm:h-[16rem] sm:w-[6.8rem] sm:rounded-2xl",
};
