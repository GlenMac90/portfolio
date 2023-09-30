import { motion } from "framer-motion";

const paths = [
  "M209.972 206.743H160.562V195.878H209.972V206.743Z",
  "M269.486 206.743H220.077V195.878H269.486V206.743Z",
  "M420.315 206.743H370.831V195.878H420.315V206.743Z",
  "M571.07 206.743H521.66V195.878H571.07V206.743Z",
  "M364.59 206.743H276.173V195.878H364.59V206.743Z",
  "M514.527 206.743H426.184V195.878H514.527V206.743Z",
];

const ErrorRedFlashingBar = () => {
  return (
    <>
      {paths.map((path) => (
        <motion.path
          key={path}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 1,
            ease: "linear",
            repeat: Infinity,
          }}
          d={path}
          className="fill-graphicLightRed"
        />
      ))}
      <path
        d="M169.478 192.529H160.859V187.17H169.478V192.529Z"
        className="fill-graphicLightBlue"
      />

      <path
        d="M251.208 221.032H160.859V215.748H251.208V221.032Z"
        className="fill-white"
      />
    </>
  );
};

export default ErrorRedFlashingBar;
