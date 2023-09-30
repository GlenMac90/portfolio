import { motion } from "framer-motion";

const paths = [
  {
    path: "M390.967 434.176H406.05L414.446 442.585H501.6L514.974 429.189H561.857",
    delay: 0.8,
  },
  {
    path: "M390.967 434.399C390.967 436.855 389.035 438.79 386.583 438.79C384.131 438.79 382.199 436.855 382.199 434.399C382.199 431.943 384.131 430.008 386.583 430.008C389.035 430.008 390.967 431.943 390.967 434.399Z",
    delay: 0,
  },
  {
    path: "M570.847 428.966C570.847 431.422 568.841 433.357 566.463 433.357C564.011 433.357 562.005 431.422 562.005 428.966C562.005 426.51 564.011 424.575 566.463 424.575C568.841 424.575 570.847 426.51 570.847 428.966Z",
    delay: 0.6,
  },
];

const ErrorLineChartBottom = () => {
  return (
    <>
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
          stroke="white"
          strokeWidth="2.3"
        />
      ))}
      <motion.path
        animate={{ scale: [1, 1.2, 1], x: [0, -4, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        d="M468.09 478.084H428.934V469.154H468.09V478.084Z"
        className="stroke-graphicPaleBlue"
        strokeWidth="2.3"
      />
      <motion.path
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        d="M514.676 494.904H428.934V485.973H514.676V494.904Z"
        className="stroke-graphicPaleBlue"
        strokeWidth="2.3"
      />
    </>
  );
};

export default ErrorLineChartBottom;
