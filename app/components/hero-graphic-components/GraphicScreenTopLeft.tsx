import { motion } from "framer-motion";

import {
  pathsOneGraphicScreenTopLeft,
  pathsTwoGraphicScreenTopLeft,
  pathsThreeGraphicScreenTopLeft,
} from "@/constants/hero-graphic-paths";

const GraphicScreenTopLeft = () => {
  return (
    <>
      {pathsOneGraphicScreenTopLeft.map((path, index) => (
        <motion.path
          key={path}
          animate={{
            scale: [1, 2.5, 1],
            y: ["-0.15rem", "0.15rem", "-0.15rem"],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            delay: index + 1,
          }}
          d={path}
          fill="white"
        />
      ))}
      {pathsTwoGraphicScreenTopLeft.map((path) => (
        <path key={path} d={path} className="fill-graphicDarkerBlue" />
      ))}
      {pathsThreeGraphicScreenTopLeft.map((path, index) => (
        <motion.path
          key={path}
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 0.3 * index,
            repeatDelay: 2,
          }}
          d={path}
          className="fill-graphicLighterBlue"
        />
      ))}
    </>
  );
};

export default GraphicScreenTopLeft;
