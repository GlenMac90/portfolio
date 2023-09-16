import { motion } from "framer-motion";

const GraphicScreenTopRight = () => {
  return (
    <>
      {" "}
      <motion.path
        animate={{
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1,
        }}
        d="M77.0488 196.547V189.254H117.914V196.547H77.0488Z"
        className="fill-graphicLightBlue"
      />
      <motion.path
        animate={{
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.5,
          repeatDelay: 1,
        }}
        d="M77.0488 209.72V202.352H138.644V209.72H77.0488Z"
        className="fill-graphicLighterBlue"
      />
      <motion.path
        animate={{
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 1,
          repeatDelay: 1,
        }}
        d="M77.0488 222.818V215.525H153.058V222.818H77.0488Z"
        className="fill-graphicLighterBlue"
      />
      <motion.path
        animate={{
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 1.5,
          repeatDelay: 1,
        }}
        d="M77.0488 235.916V228.623H106.1V235.916H77.0488Z"
        className="fill-graphicLighterBlue"
      />
      <motion.path
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1.5,
        }}
        d="M353.297 469.451H178.989V446.753H353.297V469.451Z"
        className="stroke-graphicPaleBlue"
        stroke-width="2.3"
      />
      <motion.path
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1.5,
        }}
        d="M271.417 319.79H263.096V268.29H271.417V319.79Z"
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
        d="M632.293 384.536C632.293 400.537 619.365 413.486 603.39 413.486C587.416 413.486 574.488 400.537 574.488 384.536C574.488 368.61 587.416 355.661 603.39 355.661C619.365 355.661 632.293 368.61 632.293 384.536Z"
        className="fill-graphicLightRed"
      />
      <motion.path
        animate={{
          scale: [1, 1.1, 1],
          x: ["0rem", "-0.07rem", "0rem"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        d="M601.309 381.857L589.793 386.025L601.309 390.192V394.509L584.889 388.257V383.792L601.309 377.541V381.857Z"
        className="fill-graphicOffWhite"
      />
      <motion.path
        animate={{
          scale: [1, 1.1, 1],
          x: ["0rem", "0.07rem", "0rem"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        d="M605.024 377.541L621.445 383.792V388.257L605.024 394.509V390.192L616.541 386.025L605.024 381.857V377.541Z"
        className="fill-graphicOffWhite"
      />
    </>
  );
};

export default GraphicScreenTopRight;
