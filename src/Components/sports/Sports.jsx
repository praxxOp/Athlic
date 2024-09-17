import React from "react";
import "./Sports.css";
import Football from "/Assets/Football.jpg";
import Swimming from "/Assets/Swimming.jpg";
import cricket from "/Assets/cricket.webp";
import Volleyball from "/Assets/Volleyball.jpg";
import Indoor from "/Assets/Indoor.jpg";
import ScrollToTop from "../ScrollToTop";
const Sports = () => {
  const sports = [
    {
      name: "Swimming",
      description:
        "Schedule pool slots and manage programs like lessons and training. Athlic simplifies swimming amenity management.",
      img: Swimming,
    },
    {
      name: "Cricket",
      description:
        "Schedule slots and manage programs like coaching and training. Athlic simplifies cricket amenity management.",
      img: cricket,
    },
    {
      name: "volleyballl",
      description:
        "Schedule slots and manage coaching and training programs. Athlic streamlines volleyball amenity management.",
      img: Volleyball,
    },
    {
      name: "indoor sports",
      description: "Athlic makes indoor sports management effortless.",
      img: Indoor,
    },
  ];
  return (
    <>
      <ScrollToTop />
      <div className="sports__main">
        <div className="sports__main__heading">
          <h1>SPORTS</h1>
          <h2>Supported Sports.</h2>
        </div>
        <div className="sports__main__GroupSection">
          <div className="sports__main__GroupSection__left">
            <div className="GroupSection__left__container">
              <h1>football</h1>
              <p>
                Manage football fields, schedule slots, and oversee various
                programs such as coaching and training. Athlic simplifies
                organizing and optimizing your football amenities.
              </p>
              <img src={Football} alt="Football Field" />
            </div>
          </div>
          <div className="sports__main__GroupSection__right">
            {sports.map((obj) => {
              return (
                <div className="GroupSection__right__containers">
                  <div className="GroupSection__right__containers__heading">
                    <h1>{obj.name}</h1>
                  </div>
                  <p>{obj.description}</p>
                  <img src={obj.img} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sports;
