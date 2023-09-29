import { motion } from "framer-motion";

const GraphicSquaresAndBalls = () => {
  return (
    <>
      <motion.path
        animate={{
          scale: [1, 1.2, 1.2, 1, 1],
          rotate: [0, 0, 270, 270, 270],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1,
        }}
        d="M142.953 381.857H100.528V339.362H142.953V381.857Z"
        className="fill-graphicPaleBlue"
      />
      <motion.path
        animate={{
          scale: [1, 1.2, 1.2, 1, 1],
          rotate: [0, 0, 270, 270, 270],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1,
        }}
        d="M120.663 391.978H78.1636V349.409H120.663V391.978Z"
        className="stroke-graphicPaleBlue"
        strokeWidth="2.3"
      />

      <motion.path
        animate={{
          scale: [0.7, 1.4, 0.7],
          rotate: [0, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        d="M623.303 480.391H605.471V462.456H623.303V480.391Z"
        className="stroke-graphicPaleBlue"
        strokeWidth="2.3"
      />
      <motion.path
        initial={{ strokeDasharray: 400, strokeDashoffset: 800 }}
        animate={{ strokeDashoffset: [400, 0, 400] }}
        transition={{
          strokeDashoffset: {
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
        d="M390.967 434.176H406.05L414.446 442.585H501.6L514.974 429.189H561.857"
        stroke="white"
        strokeWidth="2.3"
      />
      <motion.path
        animate={{ scale: [1.35, 1, 1, 1.35] }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          times: [0, 0.1, 0.95, 1],
        }}
        d="M390.967 434.399C390.967 436.855 389.035 438.79 386.583 438.79C384.131 438.79 382.199 436.855 382.199 434.399C382.199 431.943 384.131 430.008 386.583 430.008C389.035 430.008 390.967 431.943 390.967 434.399Z"
        stroke="white"
        strokeWidth="2.3"
      />
      <motion.path
        animate={{
          scale: [0, 0, 1, 1, 0],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          times: [0, 0.23, 0.27, 0.7, 0.8],
        }}
        d="M570.847 428.966C570.847 431.422 568.841 433.357 566.463 433.357C564.011 433.357 562.005 431.422 562.005 428.966C562.005 426.51 564.011 424.575 566.463 424.575C568.841 424.575 570.847 426.51 570.847 428.966Z"
        stroke="white"
        strokeWidth="0.13rem"
      />

      <motion.path
        animate={{
          scale: [1, 2, 1],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1,
        }}
        d="M625.532 197.292C625.532 200.343 623.08 202.873 619.959 202.873C616.913 202.873 614.387 200.343 614.387 197.292C614.387 194.166 616.913 191.71 619.959 191.71C623.08 191.71 625.532 194.166 625.532 197.292Z"
        className="fill-graphicPaleBlue"
      />

      <motion.path
        animate={{
          scale: [1, 2, 2, 1],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1,
        }}
        d="M109.444 415.421C109.444 418.547 106.992 421.077 103.871 421.077C100.825 421.077 98.2986 418.547 98.2986 415.421C98.2986 412.37 100.825 409.84 103.871 409.84C106.992 409.84 109.444 412.37 109.444 415.421Z"
        className="fill-graphicLightRed"
      />
      <motion.path
        animate={{
          scale: [1, 0.4, 0.4, 1],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1,
        }}
        d="M135.152 436.185C135.152 441.543 130.768 445.934 125.418 445.934C119.995 445.934 115.611 441.543 115.611 436.185C115.611 430.752 119.995 426.361 125.418 426.361C130.768 426.361 135.152 430.752 135.152 436.185Z"
        className="fill-graphicLightRed"
      />
    </>
  );
};

export default GraphicSquaresAndBalls;
