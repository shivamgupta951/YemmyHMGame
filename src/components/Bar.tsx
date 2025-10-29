import React from "react";
import { motion } from "framer-motion";
const Bar = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center w-full bg-purple-950">
        <motion.div
          initial={{ x: "-180%" }}
          animate={{ x: "180%" }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatDelay: 1,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="w-[20%] border border-primary"
        ></motion.div>
      </div>

      <div className="bg-gradient-to-r from-base-300 via-base-300 to-blue-950 h-12 opacity-40 flex justify-center items-center md:text-[70%] px-8 md:px-4 rounded-2xl w-[60%]">
        <div className="md:w-[85%] lg:w-[65%] text-center">
          Yemmy HMGame by Yemmy Foundation is a fun and interactive
          word-guessing game that makes learning, thinking, and entertainment
          simple, engaging, and enjoyable for everyone with creative features.
        </div>
      </div>
    </div>
  );
};

export default Bar;
