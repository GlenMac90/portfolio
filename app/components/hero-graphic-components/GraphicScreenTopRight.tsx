import { motion } from "framer-motion";

import {
  pathsOneGraphicScreenTopRight,
  pathsTwoGraphicScreenTopRight,
} from "@/constants/hero-graphic-paths";

const GraphicScreenTopRight = () => {
  return (
    <>
      {pathsOneGraphicScreenTopRight.map((path, index) => (
        <motion.path
          key={path.path}
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            delay: index * 0.5,
            repeatDelay: 1,
          }}
          d={path.path}
          className={path.colour}
        />
      ))}
      <motion.path
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1.5,
        }}
        d="M271.417 319.79H263.096V268.29H271.417V319.79Z"
        className="stroke-graphicPaleBlue"
        strokeWidth="2.3"
      />
      <motion.path
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1.5,
        }}
        d="M353.297 469.451H178.989V446.753H353.297V469.451Z"
        className="stroke-graphicPaleBlue"
        strokeWidth="2.3"
      />
      <motion.path
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        d="M632.293 384.536C632.293 400.537 619.365 413.486 603.39 413.486C587.416 413.486 574.488 400.537 574.488 384.536C574.488 368.61 587.416 355.661 603.39 355.661C619.365 355.661 632.293 368.61 632.293 384.536Z"
        className="fill-graphicLightRed"
      />
      {pathsTwoGraphicScreenTopRight.map((path) => (
        <motion.path
          key={path}
          animate={{
            scale: [1, 1.1, 1],
            x: ["0rem", "-0.07rem", "0rem"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          d={path}
          className="fill-graphicOffWhite"
        />
      ))}
    </>
  );
};

export default GraphicScreenTopRight;
