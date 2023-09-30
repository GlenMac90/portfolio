import { motion } from "framer-motion";

import {
  pathsOneGraphicBouncingSquares,
  pathsTwoGraphicBouncingSquares,
  pathsThreeGraphicBouncingSquares,
} from "@/constants/hero-graphic-paths";

const GraphicBouncingSquares = () => {
  return (
    <>
      <motion.path
        animate={{
          y: ["0rem", "-1rem", "0rem"],
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1,
        }}
        d="M475.669 308.998H472.399V305.724H475.669V308.998Z"
        fill="white"
      />
      <motion.path
        animate={{
          y: ["0rem", "-0.6rem", "0rem"],
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1,
          delay: 0.33,
        }}
        d="M486.887 308.998H483.618V305.724H486.887V308.998Z"
        fill="white"
      />
      {pathsOneGraphicBouncingSquares.map((path) => (
        <motion.path
          key={path.path}
          animate={{
            y: ["0rem", "-0.25rem", "0rem"],
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 2,
            delay: path.delay,
          }}
          d={path.path}
          className="fill-white"
        />
      ))}

      {pathsTwoGraphicBouncingSquares.map((path, index) => (
        <motion.path
          key={path.path}
          animate={{
            scale: [0, 0, 1, 1, 0],
            y: ["0rem", "-0.25rem", "0rem"],
          }}
          transition={{
            y: {
              duration: 0.6,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 2,
              delay: path.delay,
            },
            scale: {
              repeat: Infinity,
              duration: 4,
              delay: index * 0.1,
              times: path.times,
            },
          }}
          d={path.path}
          className="fill-white"
        />
      ))}

      {pathsThreeGraphicBouncingSquares.map((path) => (
        <motion.path
          key={path.path}
          animate={{
            y: ["0rem", "-0.2rem", "0rem"],
          }}
          transition={{
            duration: path.duration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: path.repeatDelay,
            delay: path.delay,
          }}
          d={path.path}
          className="fill-white"
          fill="white"
        />
      ))}
    </>
  );
};

export default GraphicBouncingSquares;
