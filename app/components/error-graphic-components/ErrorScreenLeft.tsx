import { motion } from "framer-motion";

const paths = [
  {
    path: "M210.418 278.113H174.828V272.681H210.418V278.113Z",
    colour: "fill-white",
    delay: 0,
  },
  {
    path: "M210.418 290.244H174.828V284.811H210.418V290.244Z",
    colour: "fill-white",
    delay: 0.3,
  },
  {
    path: "M210.418 302.449H174.828V297.016H210.418V302.449Z",
    colour: "fill-white",
    delay: 0.7,
  },
  {
    path: "M196.598 353.205H174.828V347.772H196.598V353.205Z",
    colour: "fill-white",
    delay: 1.1,
  },
  {
    path: "M196.598 365.41H174.828V359.903H196.598V365.41Z",
    colour: "fill-white",
    delay: 0.1,
  },
  {
    path: "M234.045 365.41H212.275V359.903H234.045V365.41Z",
    colour: "fill-white",
    delay: 1.2,
  },
  {
    path: '"M188.499 339.362H174.828V333.93H188.499V339.362Z"',
    colour: "fill-white",
    delay: 0.4,
  },
  {
    path: "M240.732 339.362H233.451V333.93H240.732V339.362Z",
    colour: "fill-white",
    delay: 1.5,
  },
  {
    path: "M230.701 339.362H193.254V333.93H230.701V339.362Z",
    colour: "fill-graphicLightRed",
    delay: 0.3,
  },
  {
    path: "M180.029 318.822H174.828V313.389H180.029V318.822Z",
    colour: "fill-graphicLightBlue",
    delay: 1.4,
  },
  {
    path: "M180.029 328.497H174.828V322.99H180.029V328.497Z",
    colour: "fill-graphicLightRed",
    delay: 1.7,
  },
  {
    path: "M203.879 366.526H201.873L206.554 359.531H208.56L203.879 366.526Z",
    colour: "fill-white",
    delay: 0.5,
  },
];

const pathsTwo = [
  "M255.667 380.517H174.828V375.903H255.667V380.517Z",
  "M255.667 391.011H174.828V386.397H255.667V391.011Z",
];

const ErrorScreenLeft = () => {
  return (
    <>
      <path
        d="M256.483 421.598H172.747C166.506 421.598 161.379 416.538 161.379 410.286V258.392C161.379 252.14 166.506 247.08 172.747 247.08H256.483C262.725 247.08 267.851 252.14 267.851 258.392V410.286C267.851 416.538 262.725 421.598 256.483 421.598Z"
        fill="#284D89"
      />
      {paths.map((path) => (
        <motion.path
          key={path.path}
          animate={{ opacity: [0, 0, 1, 1, 0, 0, 0.8, 0] }}
          transition={{
            duration: 2,
            times: [0, 0.2, 0.21, 0.4, 0.41, 0.6, 0.61, 0.7],
            repeat: Infinity,
            delay: path.delay,
          }}
          d={path.path}
          className={path.colour}
        />
      ))}
      {pathsTwo.map((path) => (
        <motion.path
          key={path}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 0.5,
            ease: "linear",
            repeat: Infinity,
          }}
          d={path}
          className="fill-graphicLightRed"
        />
      ))}
    </>
  );
};

export default ErrorScreenLeft;
