import React from "react";
import "./Sports.css";
import Football from "/Assets/Football.jpg";
import Swimming from "/Assets/Swimming.jpg";
import Gym from "/Assets/gym_center.avif";
import Yoga from "/Assets/YogaStudios.webp";
import ScrollToTop from "../ScrollToTop";
import hall from "/Assets/Hall.jpg";

import { motion } from "framer-motion";
const Sports = () => {
  const sports = [
    {
      name: "Swimming Pools",
      description:
        "Effortlessly oversee swimming pool bookings, programs, payments, and scheduling.",
      img: Swimming,
    },
    {
      name: "Gym",
      description:
        "Seamlessly manage gym bookings, programs, payments, and admissions.",
      img: Gym,
    },
    {
      name: "Yoga Studios",
      description:
        "Effortlessly manage yoga studio bookings, programs, payments, and admissions.",
      img: Yoga,
    },
    {
      name: "Banquet Halls",
      description:
        "Easily manage banquet hall bookings, programs, payments, and dates.",
      img: hall,
      marginTop: 5,
    },
  ];
  return (
    <>
      <ScrollToTop />
      <div className="sports__main">
        <div className="sports__main__heading">
          <h1>amenities</h1>
          <h2>Supports all amenities.</h2>
        </div>
        <div className="sports__main__GroupSection">
          <div className="sports__main__GroupSection__left">
            <motion.div
              whileHover={{
                background: "#c1c1bd",
                color: "black",
              }}
              className="GroupSection__left__container"
            >
              <h1>Turfs</h1>
              <p>
                Manage turf bookings, programs, payments, and timing slots
                effortlessly.
              </p>
              <img src={Football} alt="Football Field" />
            </motion.div>
          </div>
          <div className="sports__main__GroupSection__right">
            {sports.map((obj) => {
              return (
                <motion.div
                  whileHover={{
                    background: "#c1c1bd",
                    color: "black",
                  }}
                  className="GroupSection__right__containers"
                >
                  <div className="GroupSection__right__containers__heading">
                    <h1>{obj.name}</h1>
                  </div>
                  <p>{obj.description}</p>
                  <img src={obj.img} alt="" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sports;
