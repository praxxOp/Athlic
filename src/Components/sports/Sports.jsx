import React from "react";
import "./Sports.css";
import Football from "/Assets/Football.jpg";
import Swimming from "/Assets/Swimming.jpg";
import Gym from "/Assets/gym_center.avif";
import Yoga from "/Assets/YogaStudios.webp";
import hall from "/Assets/Hall.jpg";
import ScrollToTop from "../ScrollToTop";
import { motion } from "framer-motion";
const Sports = () => {
  const sports = [
    {
      name: "Swimming Pools",
      description:
        "Schedule pool slots and manage programs like lessons and training. Athlic simplifies swimming amenity management.",
      img: Swimming,
    },
    {
      name: "Gym/Fitness Center",
      description:
        "Schedule slots and manage programs like coaching and training. Athlic simplifies cricket amenity management.",
      img: Gym,
    },
    {
      name: "Yoga Studios",
      description:
        "Schedule slots and manage coaching and training programs. Athlic streamlines volleyball amenity management.",
      img: Yoga,
    },
    {
      name: "Banquet Halls",
      description: "Athlic makes indoor sports management effortless.",
      img: hall,
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
                Manage football fields, schedule slots, and oversee various
                programs such as coaching and training. Athlic simplifies
                organizing and optimizing your football amenities.
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
