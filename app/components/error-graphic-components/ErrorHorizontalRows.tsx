import { motion } from "framer-motion";

import {
  pathsOneErrorHorizontalRows,
  pathsTwoErrorHorizontalRows,
} from "@/constants/error-graphic-paths";

const ErrorHorizontalRows = () => {
  return (
    <>
      {pathsOneErrorHorizontalRows.map((path) => (
        <motion.path
          key={path}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 0.4,
            repeat: Infinity,
          }}
          d={path}
          className="fill-graphicLighterBlue"
        />
      ))}
      {pathsTwoErrorHorizontalRows.map((path, index) => (
        <motion.path
          key={path}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatDelay: index * 0.25,
          }}
          d={path}
          className="fill-graphicLightRed"
        />
      ))}
    </>
  );
};

export default ErrorHorizontalRows;
