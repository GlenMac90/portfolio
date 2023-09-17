import { motion } from "framer-motion";

const GraphicCrosses = () => {
  return (
    <>
      <motion.path
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 2.4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1,
        }}
        d="M633.408 260.773H579.169V255.415H633.408V260.773Z"
        fill="white"
      />
      <motion.path
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 2.4,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.3,
          repeatDelay: 1,
        }}
        d="M595.292 270.15H579.169V264.792H595.292V270.15Z"
        className="fill-graphicMidBlue"
      />
      <motion.path
        animate={{ scale: [1, 1.4, 1] }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.3,
        }}
        d="M142.136 266.355H130.396V254.596H119.548V266.355H107.809V277.295H119.548V289.054H130.396V277.295H142.136V266.355Z"
        className="fill-graphicTurquoise"
      />
      <motion.path
        animate={{ scale: [1, 1.3, 1] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.3,
        }}
        d="M110.781 299.1H103.574V291.956H96.9614V299.1H89.8286V305.724H96.9614V312.943H103.574V305.724H110.781V299.1Z"
        className="fill-graphicLightBlue"
      />
      <motion.path
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        d="M254.106 319.194H220.597V238.67H254.106V319.194Z"
        className="stroke-graphicPaleBlue"
        stroke-width="2.3"
      />
    </>
  );
};

export default GraphicCrosses;
