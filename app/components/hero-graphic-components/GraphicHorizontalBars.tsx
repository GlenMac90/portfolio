import { motion } from "framer-motion";

import {
  pathsOneGraphicHorizontalBars,
  pathsTwoGraphicHorizontalBars,
} from "@/constants/hero-graphic-paths";

const GraphicHorizontalBars = () => {
  return (
    <>
      {pathsOneGraphicHorizontalBars.map((path, index) => (
        <motion.path
          key={path.path}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 1.8,
            ease: "easeInOut",
            repeat: Infinity,
            delay: index * 0.3,
          }}
          d={path.path}
          className={path.colour}
        />
      ))}
      <motion.path
        initial={{ y: "-0.25rem" }}
        animate={{
          y: "-0.25rem",
          rotate: [
            90, 180, 270, 360, 450, 540, 630, 540, 450, 360, 270, 180, 90,
          ],
          x: [
            "0rem",
            "0.8rem",
            "1.2rem",
            "2rem",
            "2.4rem",
            "3.2rem",
            "3.6rem",
            "3.2rem",
            "2.4rem",
            "2rem",
            "1.2rem",
            "0.8rem",
            "0rem",
          ],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        d="M169.478 192.529H160.859V187.17H169.478V192.529Z"
        className="fill-graphicLightBlue"
      />

      {pathsTwoGraphicHorizontalBars.map((path) => (
        <motion.path
          key={path}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          d={path}
          className="fill-white"
        />
      ))}
    </>
  );
};

export default GraphicHorizontalBars;
