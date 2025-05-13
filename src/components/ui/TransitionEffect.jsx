import React from "react";
import { motion } from "framer-motion";

const TransitionEffect = () => {
  return (
    <>
      {/* Layer 1 */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-[70] bg-green-700"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* Layer 2*/}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-[60] bg-green-300"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
      />

      {/* Layer 3*/}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-[55] bg-gray-800"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      />
    </>
  );
};

export default TransitionEffect;