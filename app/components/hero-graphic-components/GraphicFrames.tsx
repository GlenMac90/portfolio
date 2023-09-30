import { motion } from "framer-motion";

const paths = [
  "M189.465 477.712L179.954 487.238",
  "M198.529 477.712L189.093 487.238",
  "M207.668 477.712L198.158 487.238",
  "M216.807 477.712L207.296 487.238",
  "M225.871 477.712L216.435 487.238",
];

const GraphicFrames = () => {
  return (
    <>
      <motion.path
        animate={{
          scale: [1, 1.1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        d="M468.09 478.084H428.934V469.154H468.09V478.084Z"
        className="stroke-graphicPaleBlue"
        strokeWidth="2.3"
      />
      <motion.path
        animate={{
          scale: [1, 1.1, 1.1, 1],
          x: ["0rem", "0.17rem", "0.17rem", "0rem"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        d="M514.676 494.904H428.934V485.973H514.676V494.904Z"
        className="stroke-graphicPaleBlue"
        strokeWidth="2.3"
      />
      {paths.map((path, index) => (
        <motion.path
          key={path}
          animate={{
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            delay: index * 0.3,
          }}
          d={path}
          className="stroke-graphicPaleBlue"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </>
  );
};

export default GraphicFrames;
