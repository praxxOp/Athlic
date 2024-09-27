import React from "react";
import "./framesOne.css";
import { AnimatePresence, easeOut, motion } from "framer-motion";
import { FaAngleDoubleDown } from "react-icons/fa";

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
            <h2>athlic.</h2>
          </AnimatePresence>
        </div>
        <motion.h3
          initial={{
            translateX : "50%"
          }}
          animate={{
            y: [0, -7, 0],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 2,
          }}
        >
          SCROLL DOWM <FaAngleDoubleDown color="white"  style={{
            marginBottom : "-3px"
          }}/>
        </motion.h3>
      </div>
    </>
  );
};

export default framesOne;
