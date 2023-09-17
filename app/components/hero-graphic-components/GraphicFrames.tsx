import { motion } from "framer-motion";

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
        stroke-width="2.3"
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
        stroke-width="2.3"
      />
      {/* Frames bottom middle */}

      {/* Cascading lines bottom left */}
      <motion.path
        animate={{
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.3,
        }}
        d="M189.465 477.712L179.954 487.238"
        className="stroke-graphicPaleBlue"
        stroke-width="2.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        animate={{
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.6,
        }}
        d="M198.529 477.712L189.093 487.238"
        className="stroke-graphicPaleBlue"
        stroke-width="2.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        animate={{
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.9,
        }}
        d="M207.668 477.712L198.158 487.238"
        className="stroke-graphicPaleBlue"
        stroke-width="2.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        animate={{
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 1.2,
        }}
        d="M216.807 477.712L207.296 487.238"
        className="stroke-graphicPaleBlue"
        stroke-width="2.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        animate={{
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 1.5,
        }}
        d="M225.871 477.712L216.435 487.238"
        className="stroke-graphicPaleBlue"
        stroke-width="2.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </>
  );
};

export default GraphicFrames;
