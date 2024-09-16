import React from "react";
import "./Sports.css";
const Sports = () => {
  const sports = [
    {
      name: "Swimming",
    },
    {
      name: "Cricket",
    },
    {
      name: "volleyballl",
    },
    {
      name: "Gymnastics",
    },
  ];
  return (
    <>
      <div className="sports__main">
        <div className="sports__main__heading">
          <h1>SPORTS</h1>
          <h2>Supported Sports.</h2>
        </div>
        <div className="sports__main__GroupSection">
          <div className="sports__main__GroupSection__left">
            <div className="GroupSection__left__container">
              <h1>football</h1>
            </div>
          </div>
          <div className="sports__main__GroupSection__right">
            {sports.map((obj) => {
              return (
                <div className="GroupSection__right__containers">
                  <div className="GroupSection__right__containers__heading">
                    <h1>{obj.name}</h1>
                  </div>
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
