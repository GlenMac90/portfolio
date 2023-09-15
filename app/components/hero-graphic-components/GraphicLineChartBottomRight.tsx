import { motion } from "framer-motion";

const GraphicLineChartBottomRight = () => {
  return (
    <>
      <motion.path
        animate={{ scale: [1, 1.5, 1.5, 1], rotate: [0, 180, 180, 0] }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        d="M615.501 227.73H640.615"
        stroke="#284D89"
        stroke-width="4.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        animate={{ y: ["-0.2rem", "0.2rem", "-0.2rem"] }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        d="M559.033 369.801L550.34 376.647L537.932 378.88C537.932 378.88 526.192 378.136 525.078 378.136C523.963 378.136 516.013 371.736 516.013 371.736L501.302 366.377L491.123 370.173L479.086 367.568L460.957 366.377L443.645 373.224L429.305 375.457L416.451 379.624L402.111 380.741L386.657 368.684L372.317 366.005L357.606 374.34L345.941 378.136L332.641 377.764L315.923 387.959H305.967L289.101 393.839"
        stroke="#FF5C66"
        stroke-width="2"
      />
      <motion.path
        animate={{ y: ["-0.2rem", "0.2rem", "-0.2rem"] }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        d="M289.398 394.137H559.404"
        stroke="#F7F7F7"
        stroke-width="0.5"
      />
      <motion.path
        animate={{ y: ["-0.2rem", "0.2rem", "-0.2rem"] }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        d="M289.473 397.486H286.724V390.713H289.473V397.486Z"
        fill="#F7F7F7"
      />
      <motion.path
        animate={{ y: ["-0.2rem", "0.2rem", "-0.2rem"] }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        d="M560.519 397.486H557.77V390.713H560.519V397.486Z"
        fill="#F7F7F7"
      />
      <motion.path
        animate={{ y: ["-0.2rem", "0.2rem", "-0.2rem"] }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        d="M559.182 394.137V371.289"
        stroke="#F7F7F7"
        stroke-width="0.5"
      />
      <motion.path
        animate={{ y: ["-0.2rem", "0.2rem", "-0.2rem"] }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        d="M560.668 370.173C560.668 371.364 559.702 372.331 558.513 372.331C557.325 372.331 556.359 371.364 556.359 370.173C556.359 368.982 557.325 368.015 558.513 368.015C559.702 368.015 560.668 368.982 560.668 370.173Z"
        fill="#F7F7F7"
      />
      <path
        d="M519.655 406.937H351.737V403.96H519.655V406.937Z"
        fill="#28385E"
      />
      <motion.path
        animate={{
          y: ["-0.2rem", "0.2rem", "-0.2rem"],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        d="M454.791 406.937H351.737V403.96H454.791V406.937Z"
        fill="#FF4D6B"
      />
      <path
        d="M434.284 412.742H351.737V409.765H434.284V412.742Z"
        fill="#28385E"
      />
      <motion.path
        animate={{
          y: ["-0.2rem", "0.2rem", "-0.2rem"],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        d="M299.355 418.77H309.534L310.871 415.868H290.29V420.631H297.497L299.355 418.77Z"
        fill="#FF4D6B"
      />
    </>
  );
};

export default GraphicLineChartBottomRight;
