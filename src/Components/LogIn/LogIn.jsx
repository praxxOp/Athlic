import React from "react";
import "./LogIn.css";
import Building from "/Assets/black_building.gif"
import { motion } from "framer-motion";
const LogIn = () => {
  return (
    <>
      <div className="Login__main">
        <div className="Login__main__video">
        <img src={Building} alt="Building GIF" />
        </div>
        <div className="Login__main__right">
            <div className="Login__main__right__heading">
                <h1>Access</h1>
                <h3>Your Dashboard</h3>
            </div>
            <div className="Login__main__right__button">
                <motion.h1
                whileHover={{
                    backgroundColor : "aliceblue",
                }} >SignIn With Google</motion.h1>
            </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
