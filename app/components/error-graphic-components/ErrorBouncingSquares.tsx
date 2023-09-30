import { motion } from "framer-motion";

import { pathsErrorBouncingSquares } from "@/constants/error-graphic-paths";

const ErrorBouncingSquares = () => {
  return (
    <>
      <motion.path
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1, repeat: Infinity }}
        d="M475.669 308.998H472.399V305.724H475.669V308.998Z"
        className="fill-graphicLightRed"
      />
      {pathsErrorBouncingSquares.map((path) => (
        <motion.path
          key={path}
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1, repeat: Infinity }}
          d={path}
          fill="white"
        />
      ))}
      <motion.path
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        d="M254.106 319.194H220.597V238.67H254.106V319.194Z"
        className="stroke-graphicPaleBlue"
        strokeWidth="2.3"
      />
      <motion.path
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        d="M142.953 381.857H100.528V339.362H142.953V381.857Z"
        className="fill-graphicPaleBlue"
      />
    </>
  );
};

export default ErrorBouncingSquares;
