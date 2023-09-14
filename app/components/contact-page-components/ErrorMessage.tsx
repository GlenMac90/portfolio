"use client";

import { motion } from "framer-motion";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: 1 }}
      transition={{
        scale: {
          keyframes: [1, 2, 1], // sequence: start from 0, go to 1.3, then go to 1
          times: [0, 0.2, 1], // at 0% of the animation, use value 0; at 50% use value 1.3; at 100% use value 1
          duration: 0.3, // total animation duration
        },
      }}
      className={`absolute bottom-[-2rem] left-2 text-red-600 transition duration-300 ease-in dark:text-red-400 ${
        message ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
      }`}
    >
      <div>{message}</div>
    </motion.div>
  );
};

export default ErrorMessage;
