"use client";

import { motion } from "framer-motion";
import { ErrorMessageProps } from "@/utils/interfaces";

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div
      className={`absolute bottom-[-2rem] rounded bg-white900 px-2 text-red-600 transition duration-300 ease-in dark:bg-black200 dark:text-red-400 ${
        message ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
      }`}
    >
      <motion.p
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{
          scale: {
            duration: 0.6,
            times: [0, 0.5, 1],
          },
        }}
      >
        {message}
      </motion.p>
    </div>
  );
};

export default ErrorMessage;
