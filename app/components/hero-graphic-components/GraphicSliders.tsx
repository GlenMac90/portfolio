import { motion } from "framer-motion";

const GraphicSliders = () => {
  return (
    <>
      <motion.path
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        d="M306.339 148.843H169.776V134.629H306.339V148.843Z"
        className="stroke-graphicPaleBlue"
        stroke-width="2.3"
      />
      <motion.path
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        d="M260.273 143.41H175.645V139.243H260.273V143.41Z"
        className="fill-graphicPaleBlue"
      />

      <path
        d="M385.914 250.95H285.981V245.963H385.914V250.95Z"
        className="fill-graphicDarkBlue"
      />
      <motion.path
        animate={{
          x: ["0rem", "3.4rem", "0rem"],
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        d="M331.304 250.95H285.981V245.963H331.304V250.95Z"
        className="fill-graphicLightBlue"
      />
      <path
        d="M385.914 263.973H285.981V258.913H385.914V263.973Z"
        className="fill-graphicDarkBlue"
      />
      <motion.path
        animate={{
          x: ["0rem", "1.8rem", "0rem"],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        d="M355.6 263.973H285.981V258.913H355.6V263.973Z"
        className="fill-graphicLightRed"
      />
      <path
        d="M385.914 276.997H285.981V271.936H385.914V276.997Z"
        className="fill-graphicDarkBlue"
      />
      <motion.path
        animate={{
          x: ["0rem", "5rem", "5rem", "5rem", "0rem"],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          times: [0, 0.2, 0.4, 0.6, 0.8],
          repeat: Infinity,
        }}
        d="M306.339 276.997H285.981V271.936H306.339V276.997Z"
        className="fill-graphicTurquoise"
      />
      <motion.path
        animate={{
          scale: [1, 2, 1],
          y: ["0rem", "0.2rem", "0rem"],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        d="M288.359 239.117H286.353V237.107H288.359V239.117Z"
        className="fill-graphicDarkBlue"
      />
      <motion.path
        animate={{
          scale: [1, 2, 1],
          y: ["0rem", "0.2rem", "0rem"],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 1,
        }}
        d="M295.045 239.117H293.113V237.107H295.045V239.117Z"
        className="fill-graphicDarkBlue"
      />
      <motion.path
        animate={{
          scale: [1, 2, 1],
          y: ["0rem", "0.2rem", "0rem"],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 2,
        }}
        d="M301.732 239.117H299.801V237.107H301.732V239.117Z"
        className="fill-graphicDarkBlue"
      />
    </>
  );
};

export default GraphicSliders;
