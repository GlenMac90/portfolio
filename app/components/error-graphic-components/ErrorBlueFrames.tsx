import { motion } from "framer-motion";
import { pathsErrorBlueFrames } from "@/constants/error-graphic-paths";

const ErrorBlueFrames = () => {
  return (
    <>
      {pathsErrorBlueFrames.map((path) => (
        <motion.path
          key={path}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          d={path}
          className="stroke-graphicPaleBlue"
          strokeWidth="2.3"
        />
      ))}
      <motion.path
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        d="M632.293 384.536C632.293 400.537 619.365 413.486 603.39 413.486C587.416 413.486 574.488 400.537 574.488 384.536C574.488 368.61 587.416 355.661 603.39 355.661C619.365 355.661 632.293 368.61 632.293 384.536Z"
        className="fill-graphicLightRed"
      />
      <motion.path
        animate={{ scale: [1, 1.2, 1], x: ["0rem", "-0.2rem", "0rem"] }}
        transition={{ duration: 1, repeat: Infinity }}
        d="M601.309 381.857L589.793 386.025L601.309 390.192V394.509L584.889 388.257V383.792L601.309 377.541V381.857Z"
        className="fill-graphicOffWhite"
      />
      <motion.path
        animate={{ scale: [1, 1.2, 1], x: ["0rem", "0.2rem", "0rem"] }}
        transition={{ duration: 1, repeat: Infinity }}
        d="M605.024 377.541L621.445 383.792V388.257L605.024 394.509V390.192L616.541 386.025L605.024 381.857V377.541Z"
        className="fill-graphicOffWhite"
      />
    </>
  );
};

export default ErrorBlueFrames;
