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
