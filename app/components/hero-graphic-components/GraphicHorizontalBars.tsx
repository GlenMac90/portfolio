import { motion } from "framer-motion";

const GraphicHorizontalBars = () => {
  return (
    <>
      <motion.path
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 1.8,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0,
        }}
        d="M209.972 206.743H160.562V195.878H209.972V206.743Z"
        className="fill-graphicDarkBlue"
      />
      <motion.path
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 1.8,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.3,
        }}
        d="M269.486 206.743H220.077V195.878H269.486V206.743Z"
        className="fill-graphicDarkBlue"
      />
      <motion.path
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 1.8,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.9,
        }}
        d="M420.315 206.743H370.831V195.878H420.315V206.743Z"
        className="fill-graphicDarkBlue"
      />
      <motion.path
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 1.8,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 1.5,
        }}
        d="M571.07 206.743H521.66V195.878H571.07V206.743Z"
        className="fill-graphicDarkBlue"
      />
      <motion.path
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 1.8,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.6,
        }}
        d="M364.59 206.743H276.173V195.878H364.59V206.743Z"
        className="fill-graphicLightRed"
      />
      <motion.path
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 1.8,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 1.2,
        }}
        d="M514.527 206.743H426.184V195.878H514.527V206.743Z"
        className="fill-graphicLightBlue"
      />

      <motion.path
        initial={{ y: "-0.25rem" }}
        animate={{
          y: "-0.25rem",
          rotate: [
            90, 180, 270, 360, 450, 540, 630, 540, 450, 360, 270, 180, 90,
          ],
          x: [
            "0rem",
            "0.8rem",
            "1.2rem",
            "2rem",
            "2.4rem",
            "3.2rem",
            "3.6rem",
            "3.2rem",
            "2.4rem",
            "2rem",
            "1.2rem",
            "0.8rem",
            "0rem",
          ],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        d="M169.478 192.529H160.859V187.17H169.478V192.529Z"
        className="fill-graphicLightBlue"
      />

      <motion.path
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        d="M251.208 221.032H160.859V215.748H251.208V221.032Z"
        fill="white"
      />
      <motion.path
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        d="M187.681 230.409H160.859V225.125H187.681V230.409Z"
        fill="white"
      />
    </>
  );
};

export default GraphicHorizontalBars;
