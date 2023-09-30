import { motion } from "framer-motion";

import {
  pathsOneGraphicLineChartMiddleRight,
  pathsTwoGraphicLineChartMiddleRight,
  pathsThreeGraphicLineChartMiddleRight,
} from "@/constants/hero-graphic-paths";

const GraphicLineChartMiddleRight = () => {
  return (
    <>
      <path
        d="M644.552 319.194H422.247C416.674 319.194 412.216 314.729 412.216 309.147V248.717C412.216 243.21 416.674 238.67 422.247 238.67H644.552C650.125 238.67 654.583 243.21 654.583 248.717V309.147C654.583 314.729 650.125 319.194 644.552 319.194Z"
        className="fill-graphicPaleBlue"
      />
      <path
        d="M490.38 266.355H554.055H490.38Z"
        className="fill-graphicPaleBlue"
      />
      <path
        d="M563.863 296.272H627.538H563.863Z"
        className="fill-graphicPaleBlue"
      />
      <path
        d="M454.642 339.958H406.644C402.632 339.958 399.363 336.683 399.363 332.664V260.476C399.363 256.457 402.632 253.182 406.644 253.182H454.642C458.654 253.182 461.923 256.457 461.923 260.476V332.664C461.923 336.683 458.654 339.958 454.642 339.958Z"
        className="fill-graphicDarkBlue"
      />

      <motion.path
        initial={{ strokeDasharray: 200, strokeDashoffset: 200 }}
        animate={{
          y: ["-0.1rem", "0.1rem", "-0.1rem"],
          strokeDashoffset: [200, 0, 200],
        }}
        transition={{
          y: {
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          },
          strokeDashoffset: {
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
        d="M484.287 290.691C484.287 290.691 496.546 260.475 531.765 267.769C566.908 275.062 584.815 314.729 630.063 282.281"
        stroke="white"
        strokeWidth="2.5"
      />

      {pathsOneGraphicLineChartMiddleRight.map((path) => (
        <motion.path
          key={path}
          animate={{ y: ["-0.1rem", "0.1rem", "-0.1rem"] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          d={path}
          className="fill-graphicPaleBlue stroke-white"
          strokeWidth="2.3"
        />
      ))}
      {pathsTwoGraphicLineChartMiddleRight.map((path) => (
        <motion.path
          key={path}
          animate={{
            y: ["-0.1rem", "0.1rem", "-0.1rem"],
            rotate: [0, 0, 5, 0],
          }}
          transition={{
            y: {
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            },
            rotate: {
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              times: [0, 0.4, 0.55, 0.7],
            },
          }}
          d={path}
          className="stroke-white"
          stroke="white"
          strokeWidth="1.1"
        />
      ))}
      {pathsThreeGraphicLineChartMiddleRight.map((path, index) => (
        <motion.path
          key={path.path}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 2.4,
            ease: "easeInOut",
            repeat: Infinity,
            delay: index * 0.4,
            repeatDelay: 1,
          }}
          d={path.path}
          className={path.colour}
        />
      ))}
    </>
  );
};

export default GraphicLineChartMiddleRight;
