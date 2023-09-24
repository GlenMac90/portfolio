import { motion } from "framer-motion";

const ErrorScreenRight = () => {
  return (
    <>
      <motion.path
        animate={{ scale: [0.95, 1, 0.95] }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
        }}
        d="M644.552 319.194H422.247C416.674 319.194 412.216 314.729 412.216 309.147V248.717C412.216 243.21 416.674 238.67 422.247 238.67H644.552C650.125 238.67 654.583 243.21 654.583 248.717V309.147C654.583 314.729 650.125 319.194 644.552 319.194Z"
        fill="#FF4D6B"
      />
      <motion.path
        d="M484.287 290.691C484.287 290.691 496.546 260.475 531.765 267.769C566.908 275.062 584.815 314.729 630.063 282.281"
        stroke="white"
        strokeWidth="1.5"
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
      />
      <path
        d="M598.189 297.389H593.137V292.402H598.189V297.389Z"
        fill="#FF4D6B"
        stroke="white"
        stroke-width="2.3"
      />
      <path d="M490.38 266.355H554.055H490.38Z" fill="#FF4D6B" />

      <motion.path
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{
          duration: 0.5,
          ease: "linear",
          repeat: Infinity,
        }}
        d="M490.38 266.355H554.055"
        stroke="white"
        stroke-width="1.1"
      />

      <path d="M563.863 296.272H627.538H563.863Z" fill="#FF4D6B" />

      <motion.path
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{
          duration: 0.5,
          ease: "linear",
          repeat: Infinity,
        }}
        d="M563.863 296.272H627.538"
        stroke="white"
        stroke-width="1.1"
      />

      <path
        d="M522.254 268.885H517.202V263.824H522.254V268.885Z"
        fill="#FF4D6B"
        stroke="white"
        stroke-width="2.3"
      />
      <path
        d="M454.642 339.958H406.644C402.632 339.958 399.363 336.683 399.363 332.664V260.476C399.363 256.457 402.632 253.182 406.644 253.182H454.642C458.654 253.182 461.923 256.457 461.923 260.476V332.664C461.923 336.683 458.654 339.958 454.642 339.958Z"
        fill="#284D89"
      />
      <motion.path
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          delay: 0.15,
        }}
        d="M444.759 270.448H409.095V265.536H444.759V270.448Z"
        fill="white"
      />
      <motion.path
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          delay: 0.3,
        }}
        d="M444.759 281.388H409.095V276.476H444.759V281.388Z"
        fill="#FF4D6B"
      />
      <motion.path
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          delay: 0.45,
        }}
        d="M422.544 292.402H409.095V287.491H422.544V292.402Z"
        fill="white"
      />
      <motion.path
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          delay: 0.6,
        }}
        d="M432.277 303.715H409.095V298.803H432.277V303.715Z"
        fill="#FF4D6B"
      />
      <motion.path
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          delay: 0.75,
        }}
        d="M424.773 314.729H409.095V309.743H424.773V314.729Z"
        fill="#FF4D6B"
      />
      <motion.path
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          delay: 0.9,
        }}
        d="M424.773 325.669H409.095V320.757H424.773V325.669Z"
        fill="white"
      />
    </>
  );
};

export default ErrorScreenRight;
