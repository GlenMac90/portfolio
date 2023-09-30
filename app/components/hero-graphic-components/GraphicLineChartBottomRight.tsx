import { motion } from "framer-motion";

import {
  pathsOneGraphicLineChartBottomRight,
  pathsTwoGraphicLineChartBottomRight,
} from "@/constants/hero-graphic-paths";

const GraphicLineChartBottomRight = () => {
  return (
    <>
      <motion.path
        animate={{ scale: [1, 1.5, 1.5, 1], rotate: [0, 180, 180, 0] }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        d="M615.501 227.73H640.615"
        className="stroke-graphicDarkBlue"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
        animate={{
          y: ["-0.2rem", "0.2rem", "-0.2rem"],
          strokeDashoffset: [-500, 0, 0, -500],
        }}
        transition={{
          y: {
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          },
          strokeDashoffset: {
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
        d="M559.033 369.801L550.34 376.647L537.932 378.88C537.932 378.88 526.192 378.136 525.078 378.136C523.963 378.136 516.013 371.736 516.013 371.736L501.302 366.377L491.123 370.173L479.086 367.568L460.957 366.377L443.645 373.224L429.305 375.457L416.451 379.624L402.111 380.741L386.657 368.684L372.317 366.005L357.606 374.34L345.941 378.136L332.641 377.764L315.923 387.959H305.967L289.101 393.839"
        className="stroke-graphicPaleRed"
        strokeWidth="0.13rem"
      />
      {pathsOneGraphicLineChartBottomRight.map((path) => (
        <motion.path
          key={path}
          animate={{ y: ["-0.2rem", "0.2rem", "-0.2rem"] }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          d={path}
          className="stroke-white"
          strokeWidth="0.5"
        />
      ))}
      {pathsTwoGraphicLineChartBottomRight.map((path) => (
        <motion.path
          key={path.path}
          animate={{ y: ["-0.2rem", "0.2rem", "-0.2rem"] }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          d={path.path}
          className={path.colour}
        />
      ))}
      <path
        d="M519.655 406.937H351.737V403.96H519.655V406.937Z"
        className="fill-graphicDarkerBlue"
      />

      <path
        d="M434.284 412.742H351.737V409.765H434.284V412.742Z"
        className="fill-graphicDarkerBlue"
      />
    </>
  );
};

export default GraphicLineChartBottomRight;
