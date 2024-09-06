import React from "react";
import "./About.css";
import ThumbsupGuy from "/Assets/stats-Image.png";

const About = () => {
  return (
    <>
      <div className="About__main">
        <div className="stats__section">
          <div className="stats__section__up">
            <div className="stats__section__left">
              <h4>Amenities Managed.</h4>
              <h1>500+</h1>
            </div>
            <div className="stats__section__right">
              <h4>Facility Bookings Per Month.</h4>
              <h1>1000+</h1>
              <p>
                Manage and schedule various sports facilities with ease. From
                booking football fields to indoor courts, our platform ensures
                smooth coordination, helping clubs and athletes optimize their
                amenities
              </p>
            </div>
          </div>
          <div className="stats__section__down">
            <div
              className="stats__section__right"
              style={{
                marginTop: "-35.5vh",
              }}
            >
              <h4>User Satisfaction.</h4>
              <h1>99%</h1>
              <img src={ThumbsupGuy} alt="Image of a guy" />
            </div>
            <div
              className="stats__section__left"
              style={{
                marginTop: "0%",
              }}
            >
              <h4>Sports Supported.</h4>
              <h1>10+</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
