import { motion } from "framer-motion";

const paths = [
  "M486.887 308.998H483.618V305.724H486.887V308.998Z",
  "M498.032 308.998H494.763V305.724H498.032V308.998Z",
  "M525.598 182.11H519.431V176.007H525.598V182.11Z",
  "M546.477 182.11H540.385V176.007H546.477V182.11Z",
  "M567.429 182.11H561.337V176.007H567.429V182.11Z",
  "M438.964 434.994H432.872V428.891H438.964V434.994Z",
  "M459.917 434.994H453.825V428.891H459.917V434.994Z",
  "M480.869 434.994H474.777V428.891H480.869V434.994Z",
  "M179.88 262.708H176.611V259.434H179.88V262.708Z",
  "M191.025 262.708H187.756V259.434H191.025V262.708Z",
  "M202.17 262.708H198.901V259.434H202.17V262.708Z",
];

const ErrorBouncingSquares = () => {
  return (
    <>
      <motion.path
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1, repeat: Infinity }}
        d="M475.669 308.998H472.399V305.724H475.669V308.998Z"
        className="fill-graphicLightRed"
      />
      {paths.map((path) => (
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
