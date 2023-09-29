import { motion } from "framer-motion";

const SendButtonLoader = () => {
  return (
    <div className="ml-2 flex items-center gap-1.5">
      <motion.div
        animate={{ rotate: [0, 360, 0], scale: [1, 1.5, 1] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="h-2.5 w-2.5 border-2 border-white"
      />
    </div>
  );
};

export default SendButtonLoader;
