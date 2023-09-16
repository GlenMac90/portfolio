import { motion } from "framer-motion";

const GraphicBouncingSquares = () => {
  return (
    <>
      <motion.path
        animate={{
          y: ["0rem", "-1rem", "0rem"],
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1,
        }}
        d="M475.669 308.998H472.399V305.724H475.669V308.998Z"
        fill="white"
      />
      <motion.path
        animate={{
          y: ["0rem", "-0.6rem", "0rem"],
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1,
          delay: 0.33,
        }}
        d="M486.887 308.998H483.618V305.724H486.887V308.998Z"
        fill="white"
      />
      <motion.path
        animate={{
          y: ["0rem", "-0.2rem", "0rem"],
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1,
          delay: 0.66,
        }}
        d="M498.032 308.998H494.763V305.724H498.032V308.998Z"
        fill="white"
      />
      <motion.path
        animate={{
          y: ["0rem", "-0.25rem", "0rem"],
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 2,
          delay: 0.3,
        }}
        d="M525.598 182.11H519.431V176.007H525.598V182.11Z"
        fill="white"
      />
      <motion.path
        animate={{
          y: ["0rem", "-0.25rem", "0rem"],
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 2,
          delay: 0.4,
        }}
        d="M546.477 182.11H540.385V176.007H546.477V182.11Z"
        fill="white"
      />
      <motion.path
        animate={{
          y: ["0rem", "-0.25rem", "0rem"],
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 2,
          delay: 0.5,
        }}
        d="M567.429 182.11H561.337V176.007H567.429V182.11Z"
        fill="white"
      />
      <motion.path
        animate={{
          scale: [0, 0, 1, 1, 0],
          y: ["0rem", "-0.25rem", "0rem"],
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 2,
          scale: {
            repeat: Infinity,
            duration: 4,
            times: [0, 0.12, 0.15, 0.9, 0.95],
          },
        }}
        d="M438.964 434.994H432.872V428.891H438.964V434.994Z"
        fill="white"
      />
      <motion.path
        animate={{
          scale: [0, 0, 1, 1, 0],
          y: ["0rem", "-0.25rem", "0rem"],
        }}
        transition={{
          y: {
            duration: 0.6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 2,
            delay: 0.1,
          },
          scale: {
            repeat: Infinity,
            duration: 4,
            delay: 0.1,
            times: [0, 0.12, 0.15, 0.85, 0.9],
          },
        }}
        d="M459.917 434.994H453.825V428.891H459.917V434.994Z"
        fill="white"
      />
      <motion.path
        animate={{
          scale: [0, 0, 1, 1, 0],
          y: ["0rem", "-0.25rem", "0rem"],
        }}
        transition={{
          y: {
            duration: 0.6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 2,
            delay: 0.2,
          },
          scale: {
            repeat: Infinity,
            duration: 4,
            delay: 0.2,
            times: [0, 0.12, 0.15, 0.8, 0.85],
          },
        }}
        d="M480.869 434.994H474.777V428.891H480.869V434.994Z"
        fill="white"
      />
      <motion.path
        animate={{
          y: ["0rem", "-0.2rem", "0rem"],
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
        d="M179.88 262.708H176.611V259.434H179.88V262.708Z"
        fill="white"
      />
      <motion.path
        animate={{
          y: ["0rem", "-0.2rem", "0rem"],
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 0.5,
          delay: 0.2,
        }}
        d="M191.025 262.708H187.756V259.434H191.025V262.708Z"
        fill="white"
      />
      <motion.path
        animate={{
          y: ["0rem", "-0.2rem", "0rem"],
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 0.5,
          delay: 0.4,
        }}
        d="M202.17 262.708H198.901V259.434H202.17V262.708Z"
        fill="white"
      />
    </>
  );
};

export default GraphicBouncingSquares;
