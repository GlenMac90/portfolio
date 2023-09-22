import { motion } from "framer-motion";

const SendButtonLoader = () => {
  return (
    <div className="ml-2 flex items-center gap-1.5">
      {[...Array(3)].map((_, index) => (
        <motion.div
          animate={{ y: ["0rem", "-0.25rem", "0rem"] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatDelay: 0.4,
            delay: index * 0.2,
          }}
          key={index}
          className="h-1 w-1 bg-white"
        />
      ))}
    </div>
  );
};

export default SendButtonLoader;
