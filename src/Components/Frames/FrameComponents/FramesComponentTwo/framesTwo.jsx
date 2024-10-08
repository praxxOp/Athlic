import React from "react";
import "./framesTwo.css";
import { motion } from "framer-motion";
import CoinImage from "/Assets/coinImage.png";
import SportImage from "/Assets/SportImage.png";
import { Link } from "react-router-dom";
const framesTwo = () => {
  
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="framestwo__main"
    >
      <div className="framestwo__main__left">
        <h1>MANAGE</h1>
      </div>
      <div className="framestwo__main__right">
        <div className="framestwo__main__right__box">
          <h1>amenities.</h1>
          <p>
          Effortlessly manage a diverse range of amenities with Athlic.
          </p>
          <Link to= "/sports" style={{textDecoration : "none"}}> <h3>LEARN MORE</h3> </Link>
          <motion.img
            animate={{
              y: [0, -7, 0],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 2,
            }}
            src={SportImage}
            alt="Image of coins"
          />
        </div>
        <div className="framestwo__main__right__box">
          <h1>PRICING.</h1>
          <p>
            Flexible pricing plans tailored to your club's needs—get the best
            value for managing your amenities with Athlic.
          </p>
          <Link to= "/pricing" style={{textDecoration : "none"}}> <h3>LEARN MORE</h3> </Link>
          <motion.img
            animate={{
              y: [0, -7, 0],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 2,
            }}
            src={CoinImage}
            alt="Image of coins"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default framesTwo;
