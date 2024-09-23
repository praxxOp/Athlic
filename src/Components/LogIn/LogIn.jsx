import React from "react";
import "./LogIn.css";
import Building from "/Assets/black_building.gif"
const LogIn = () => {
  return (
    <>
      <div className="Login__main">
        <div className="Login__main__video">
        <img src={Building} alt="Building GIF" />
        </div>
        <div className="Login__main__right"></div>
      </div>
    </>
  );
};

export default LogIn;
