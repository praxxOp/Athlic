import React from "react";
import "./Pricing.css";
import ScrollToTop from "../ScrollToTop";
import { FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";
const Pricing = () => {
  const pricing = [
    {
      heading: "Beginner",
      amenities: 1,
      specialPrograms: 0,
      Price: "Free",
    },
    {
      heading: "Intermediate",
      amenities: 5,
      specialPrograms: 3,
      Price: "$499",
    },
    {
      heading: "Pro",
      amenities: "Unlimited",
      specialPrograms: "Unlimited",
      Price: "$999",
    },
  ];
  return (
    <>
      <ScrollToTop />
      <div className="pricing__main">
        <div className="pricing__main__heading">
          <h1>PRICING</h1>
          <h2>Flexible pricing plans.</h2>
        </div>

        <div className="pricing__section">
          {pricing.map((obj) => {
            return (
              <div className="pricing__section__container">
                <h1>{obj.heading}</h1>
                <div className="pricing__section__container__facilities">
                  <h4>{obj.amenities} amenity supported.</h4>
                  <h4>{obj.specialPrograms} special program supported.</h4>
                </div>
                <div className="pricing__section__container__pricing">
                  <h2> {obj.Price}</h2>
                  <h4>Per Year</h4>
                </div>
                <div className="pricing__section__container__button">
                  <motion.h2
                    whileHover={{
                      background: "#c1c1bd",
                      color: "black",
                    }}
                  >
                    Get Now <FiPlus style={{ marginLeft: "5px" }} />
                  </motion.h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Pricing;
