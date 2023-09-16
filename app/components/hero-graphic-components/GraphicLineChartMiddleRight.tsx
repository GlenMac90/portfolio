import { motion } from "framer-motion";

const GraphicLineChartMiddleRight = () => {
  return (
    <>
      <path
        d="M644.552 319.194H422.247C416.674 319.194 412.216 314.729 412.216 309.147V248.717C412.216 243.21 416.674 238.67 422.247 238.67H644.552C650.125 238.67 654.583 243.21 654.583 248.717V309.147C654.583 314.729 650.125 319.194 644.552 319.194Z"
        className="fill-graphicPaleBlue"
      />
      <motion.path
        initial={{ strokeDasharray: 200, strokeDashoffset: 200 }}
        animate={{
          y: ["-0.1rem", "0.1rem", "-0.1rem"],
          strokeDashoffset: [200, 0, 200],
        }}
        transition={{
          y: {
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          },
          strokeDashoffset: {
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
        d="M484.287 290.691C484.287 290.691 496.546 260.475 531.765 267.769C566.908 275.062 584.815 314.729 630.063 282.281"
        stroke="white"
        stroke-width="2.5"
      />
      <motion.path
        animate={{ y: ["-0.1rem", "0.1rem", "-0.1rem"] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        d="M598.189 297.389H593.137V292.402H598.189V297.389Z"
        className="fill-graphicPaleBlue"
        stroke="white"
        stroke-width="2.3"
      />
      <motion.path
        animate={{ y: ["-0.1rem", "0.1rem", "-0.1rem"] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        d="M522.254 268.885H517.202V263.824H522.254V268.885Z"
        className="fill-graphicPaleBlue"
        stroke="white"
        stroke-width="2.3"
      />
      <path
        d="M490.38 266.355H554.055H490.38Z"
        className="fill-graphicPaleBlue"
      />
      <motion.path
        animate={{
          y: ["-0.1rem", "0.1rem", "-0.1rem"],
          rotate: [0, 0, 5, 0],
        }}
        transition={{
          y: {
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          },
          rotate: {
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            times: [0, 0.4, 0.55, 0.7],
          },
        }}
        d="M490.38 266.355H554.055"
        stroke="white"
        stroke-width="1.1"
      />
      <path
        d="M563.863 296.272H627.538H563.863Z"
        className="fill-graphicPaleBlue"
      />

      <motion.path
        animate={{
          y: ["-0.2rem", "0rem", "-0.2rem"],
          rotate: [0, 0, 5, 0],
        }}
        transition={{
          y: {
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          },
          rotate: {
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            times: [0, 0.4, 0.55, 0.7],
          },
        }}
        d="M563.863 296.272H627.538"
        stroke="white"
        stroke-width="1.1"
      />

      <path
        d="M454.642 339.958H406.644C402.632 339.958 399.363 336.683 399.363 332.664V260.476C399.363 256.457 402.632 253.182 406.644 253.182H454.642C458.654 253.182 461.923 256.457 461.923 260.476V332.664C461.923 336.683 458.654 339.958 454.642 339.958Z"
        className="fill-graphicDarkBlue"
      />
      <motion.path
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 2.4,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0,
          repeatDelay: 1,
        }}
        d="M444.759 270.448H409.095V265.536H444.759V270.448Z"
        fill="white"
      />
      <motion.path
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 2.4,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.4,
          repeatDelay: 1,
        }}
        d="M444.759 281.388H409.095V276.476H444.759V281.388Z"
        fill="white"
      />
      <motion.path
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 2.4,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.8,
          repeatDelay: 1,
        }}
        d="M422.544 292.402H409.095V287.491H422.544V292.402Z"
        fill="white"
      />
      <motion.path
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 2.4,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 1.2,
          repeatDelay: 1,
        }}
        d="M432.277 303.715H409.095V298.803H432.277V303.715Z"
        className="fill-graphicPaleBlue"
      />
      <motion.path
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 2.4,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 1.6,
          repeatDelay: 1,
        }}
        d="M424.773 314.729H409.095V309.743H424.773V314.729Z"
        className="fill-graphicPaleBlue"
      />
      <motion.path
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 2.4,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 2,
          repeatDelay: 1,
        }}
        d="M424.773 325.669H409.095V320.757H424.773V325.669Z"
        fill="white"
      />
    </>
  );
};

export default GraphicLineChartMiddleRight;
