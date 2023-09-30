import { motion } from "framer-motion";

const paths = [
  "M320.456 416.984H319.341V415.868H320.456V416.984Z",
  "M327.515 416.984H326.326V415.868H327.515V416.984Z",
  "M334.499 416.984H333.384V415.868H334.499V416.984Z",
];

const pathsTwo = [
  "M531.765 413.04H529.239L525.227 403.96H527.753L531.765 413.04Z",
  "M538.304 413.04H535.778L531.765 403.96H534.292L538.304 413.04Z",
  "M544.842 413.04H542.316L538.304 403.96H540.83L544.842 413.04Z",
  "M551.38 413.04H548.854L544.842 403.96H547.368L551.38 413.04Z",
  "M557.77 413.04H555.244L551.232 403.96H553.758L557.77 413.04Z",
];

const pathsThree = [
  "M505.983 108.209V100.841H546.848V108.209H505.983Z",
  "M505.983 121.307V113.939H567.652V121.307H505.983Z",
  "M505.983 134.405V127.112H581.992V134.405H505.983Z",
  "M505.983 147.578V140.21H535.035V147.578H505.983Z",
];

const GraphicScreenTopLeft = () => {
  return (
    <>
      {paths.map((path, index) => (
        <motion.path
          key={path}
          animate={{
            scale: [1, 2.5, 1],
            y: ["-0.15rem", "0.15rem", "-0.15rem"],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            delay: index + 1,
          }}
          d={path}
          fill="white"
        />
      ))}
      {pathsTwo.map((path) => (
        <path key={path} d={path} className="fill-graphicDarkerBlue" />
      ))}
      {pathsThree.map((path, index) => (
        <motion.path
          key={path}
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 0.3 * index,
            repeatDelay: 2,
          }}
          d={path}
          className="fill-graphicLighterBlue"
        />
      ))}
    </>
  );
};

export default GraphicScreenTopLeft;
