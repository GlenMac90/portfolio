import { motion } from "framer-motion";

const ErrorSliders = () => {
  return (
    <>
      <path
        d="M385.914 250.95H285.981V245.963H385.914V250.95Z"
        className="fill-graphicDarkBlue"
      />
      <motion.path
        animate={{ x: ["0rem", "3.5rem", "0rem"] }}
        transition={{ duration: 3, repeat: Infinity }}
        d="M331.304 250.95H285.981V245.963H331.304V250.95Z"
        className="fill-graphicLightBlue"
      />
      <path
        d="M385.914 263.973H285.981V258.913H385.914V263.973Z"
        className="fill-graphicDarkBlue"
      />
      <motion.path
        animate={{ x: ["0rem", "2rem", "0rem"] }}
        transition={{ duration: 5, repeat: Infinity }}
        d="M355.6 263.973H285.981V258.913H355.6V263.973Z"
        className="fill-graphicLightRed"
      />
      <path
        d="M385.914 276.997H285.981V271.936H385.914V276.997Z"
        className="fill-graphicDarkBlue"
      />
      <motion.path
        animate={{ x: ["0rem", "5rem", "0rem"] }}
        transition={{ duration: 1, repeat: Infinity }}
        d="M306.339 276.997H285.981V271.936H306.339V276.997Z"
        className="fill-graphicTurquoise"
      />
    </>
  );
};

export default ErrorSliders;
