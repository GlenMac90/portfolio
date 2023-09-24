import Image from "next/image";
import { motion } from "framer-motion";

import { blueDial, redDial } from "@/public/png-icons";

const ErrorDials = () => {
  return (
    <>
      <motion.div
        className="absolute z-10 flex rounded-full"
        initial={{ y: "0.8rem", x: "-1.6rem" }}
        animate={{ rotate: -360, y: "0.8rem", x: "-1.6rem" }}
        transition={{
          duration: 0.8,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <Image
          src={blueDial}
          alt="blue dial"
          height={18}
          width={18}
          className="rounded-full"
        />
      </motion.div>
      <motion.div
        className="absolute z-10 flex rounded-full"
        initial={{ y: "0.55rem", x: "-0.2rem" }}
        animate={{ rotate: 360, y: "0.55rem", x: "-0.2rem" }}
        transition={{
          duration: 0.6,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <Image
          src={redDial}
          alt="red dial"
          height={18}
          width={18}
          className="rounded-full"
        />
      </motion.div>
    </>
  );
};

export default ErrorDials;
