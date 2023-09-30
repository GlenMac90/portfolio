import { motion } from "framer-motion";

import { pathsGraphicCascadingRowsRight } from "@/constants/hero-graphic-paths";

const GraphicCascadingRowsRight = () => {
  return (
    <>
      {pathsGraphicCascadingRowsRight.map((path, index) => (
        <motion.path
          key={path.path}
          animate={{
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1,
            delay: (index + 1) * 0.3,
          }}
          d={path.path}
          className={path.colour}
        />
      ))}
    </>
  );
};

export default GraphicCascadingRowsRight;
