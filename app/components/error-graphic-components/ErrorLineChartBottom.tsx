import { motion } from "framer-motion";

import { pathsErrorLineChartBottom } from "@/constants/error-graphic-paths";

const ErrorLineChartBottom = () => {
  return (
    <>
      {pathsErrorLineChartBottom.map((path) => (
        <motion.path
          key={path.path}
          animate={{ opacity: [0, 0, 1, 1, 0, 0, 0.8, 0] }}
          transition={{
            duration: 2,
            times: [0, 0.2, 0.21, 0.4, 0.41, 0.6, 0.61, 0.7],
            repeat: Infinity,
            delay: path.delay,
          }}
          d={path.path}
          stroke="white"
          strokeWidth="2.3"
        />
      ))}
      <motion.path
        animate={{ scale: [1, 1.2, 1], x: [0, -4, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        d="M468.09 478.084H428.934V469.154H468.09V478.084Z"
        className="stroke-graphicPaleBlue"
        strokeWidth="2.3"
      />
      <motion.path
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        d="M514.676 494.904H428.934V485.973H514.676V494.904Z"
        className="stroke-graphicPaleBlue"
        strokeWidth="2.3"
      />
    </>
  );
};

export default ErrorLineChartBottom;
