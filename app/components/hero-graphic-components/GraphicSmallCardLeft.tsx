import { motion } from "framer-motion";

import { pathsGraphicSmallCardLeft } from "@/constants/hero-graphic-paths";

const GraphicSmallCardLeft = () => {
  return (
    <>
      <path
        d="M256.483 421.598H172.747C166.506 421.598 161.379 416.538 161.379 410.286V258.392C161.379 252.14 166.506 247.08 172.747 247.08H256.483C262.725 247.08 267.851 252.14 267.851 258.392V410.286C267.851 416.538 262.725 421.598 256.483 421.598Z"
        className="fill-graphicDarkBlue"
      />
      {pathsGraphicSmallCardLeft.map((path) => (
        <motion.path
          key={path.path}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
            delay: path.delay,
            repeatDelay: 2,
          }}
          d={path.path}
          className={path.colour}
        />
      ))}
    </>
  );
};

export default GraphicSmallCardLeft;
