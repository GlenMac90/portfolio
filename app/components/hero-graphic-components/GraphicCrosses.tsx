import { motion } from "framer-motion";

import {
  pathsGraphicCrosses,
  pathsTwoGraphicCrosses,
} from "@/constants/hero-graphic-paths";

const GraphicCrosses = () => {
  return (
    <>
      {pathsGraphicCrosses.map((path, index) => (
        <motion.path
          key={path.path}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 2.4,
            ease: "easeInOut",
            repeat: Infinity,
            delay: index * 0.3,
            repeatDelay: 1,
          }}
          d={path.path}
          className={path.colour}
        />
      ))}
      {pathsTwoGraphicCrosses.map((path) => (
        <motion.path
          key={path.path}
          animate={{ scale: path.scale }}
          transition={{
            duration: path.duration,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          d={path.path}
          className={path.colour}
        />
      ))}
      <motion.path
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        d="M254.106 319.194H220.597V238.67H254.106V319.194Z"
        className="stroke-graphicPaleBlue"
        strokeWidth="2.3"
      />
    </>
  );
};

export default GraphicCrosses;
