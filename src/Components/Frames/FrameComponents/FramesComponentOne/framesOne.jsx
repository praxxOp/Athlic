import React from "react";
import "./framesOne.css";
import { AnimatePresence, easeOut, motion } from "framer-motion";

const framesOne = () => {
  return (
    <>
      <div className="framesOne__main">
        <div className="framesOne__heading">
          <AnimatePresence>
            <motion.h1
              initial={{
                opacity: 0.2,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                ease: "easeInOut",
                duration: 1.7,
              }}
            >
              ATHLIC
            </motion.h1>
            <h2>ATHLIC</h2>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default framesOne;
