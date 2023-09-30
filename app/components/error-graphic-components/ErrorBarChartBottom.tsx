import { motion } from "framer-motion";

const ErrorBarChartBottom = () => {
  return (
    <>
      <motion.path
        initial={{
          pathLength: 0,
          pathOffset: 1,
        }}
        animate={{
          pathLength: 1,
          pathOffset: 0,
        }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
        }}
        d="M559.033 369.801L550.34 376.647L537.932 378.88C537.932 378.88 526.192 378.136 525.078 378.136C523.963 378.136 516.013 371.736 516.013 371.736L501.302 366.377L491.123 370.173L479.086 367.568L460.957 366.377L443.645 373.224L429.305 375.457L416.451 379.624L402.111 380.741L386.657 368.684L372.317 366.005L357.606 374.34L345.941 378.136L332.641 377.764L315.923 387.959H305.967L289.101 393.839"
        className="stroke-graphicPaleRed"
        strokeWidth="2"
      />
      <motion.path
        animate={{ opacity: [0, 0, 1, 1, 0, 0, 0.8, 0] }}
        transition={{
          duration: 2,
          times: [0, 0.2, 0.21, 0.4, 0.41, 0.6, 0.61, 0.7],
          repeat: Infinity,
          delay: 0.7,
        }}
        d="M289.398 394.137H559.404"
        className="stroke-graphicOffWhite3"
        strokeWidth="0.5"
      />
      <path
        d="M289.473 397.486H286.724V390.713H289.473V397.486Z"
        className="fill-graphicOffWhite3"
      />
      <path
        d="M560.519 397.486H557.77V390.713H560.519V397.486Z"
        className="fill-graphicOffWhite3"
      />
      <path
        d="M559.182 394.137V371.289"
        className="stroke-graphicOffWhite3"
        strokeWidth="0.5"
      />
      <path
        d="M560.668 370.173C560.668 371.364 559.702 372.331 558.513 372.331C557.325 372.331 556.359 371.364 556.359 370.173C556.359 368.982 557.325 368.015 558.513 368.015C559.702 368.015 560.668 368.982 560.668 370.173Z"
        className="fill-graphicOffWhite3"
      />
      <path
        d="M519.655 406.937H351.737V403.96H519.655V406.937Z"
        className="fill-graphicDarkerBlue"
      />
      <path
        d="M454.791 406.937H351.737V403.96H454.791V406.937Z"
        className="fill-graphicLightRed"
      />
      <path
        d="M434.284 412.742H351.737V409.765H434.284V412.742Z"
        className="fill-graphicDarkerBlue"
      />
      <path
        d="M299.355 418.77H309.534L310.871 415.868H290.29V420.631H297.497L299.355 418.77Z"
        className="fill-graphicLightRed"
      />
    </>
  );
};

export default ErrorBarChartBottom;
