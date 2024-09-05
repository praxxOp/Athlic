import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="About__main">
        <div className="stats__section">
          <div className="stats__section__up">
            <div className="stats__section__left"></div>
            <div className="stats__section__right"></div>
          </div>
          <div className="stats__section__down">
            <div
              className="stats__section__right"
              style={{
                marginTop: "-35.5vh",
              }}
            ></div>
            <div
              className="stats__section__left"
              style={{
                marginTop: "0%",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
