import { motion } from "framer-motion";

import { pathsErrorRedFlashingBar } from "@/constants/error-graphic-paths";

const ErrorRedFlashingBar = () => {
  return (
    <>
      {pathsErrorRedFlashingBar.map((path) => (
        <motion.path
          key={path}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 1,
            ease: "linear",
            repeat: Infinity,
          }}
          d={path}
          className="fill-graphicLightRed"
        />
      ))}
      <path
        d="M169.478 192.529H160.859V187.17H169.478V192.529Z"
        className="fill-graphicLightBlue"
      />

      <path
        d="M251.208 221.032H160.859V215.748H251.208V221.032Z"
        className="fill-white"
      />
    </>
  );
};

export default ErrorRedFlashingBar;
