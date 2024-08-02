import React from "react";
import { motion } from "framer-motion";

const Logo = ({fireConfetti}) => {
  return (
    <div className="flex items-center justify-center mt-2">
      <motion.button
        onClick={fireConfetti}
        className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold border border-solid border-transparent dark:border-light"
        whileHover={{backgroundColor: ["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"], transition: {duration: 1, repeat: Infinity}}}
      >
        FE
      </motion.button>
    </div>
  );
};

export default Logo;
