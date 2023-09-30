import { motion } from "framer-motion";

const pathsOne = [
  "M505.983 121.307V113.939H567.652V121.307H505.983Z",
  "M505.983 134.405V127.112H581.992V134.405H505.983Z",
  "M505.983 147.578V140.21H535.035V147.578H505.983Z",
];

const pathsTwo = [
  "M77.0488 196.547V189.254H117.914V196.547H77.0488Z",
  "M77.0488 209.72V202.352H138.644V209.72H77.0488Z",
  "M77.0488 222.818V215.525H153.058V222.818H77.0488Z",
  "M77.0488 235.916V228.623H106.1V235.916H77.0488Z",
];

const ErrorHorizontalRows = () => {
  return (
    <>
      {pathsOne.map((path) => (
        <motion.path
          key={path}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 0.4,
            repeat: Infinity,
          }}
          d={path}
          className="fill-graphicLighterBlue"
        />
      ))}
      {pathsTwo.map((path, index) => (
        <motion.path
          key={path}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatDelay: index * 0.25,
          }}
          d={path}
          className="fill-graphicLightRed"
        />
      ))}
    </>
  );
};

export default ErrorHorizontalRows;
