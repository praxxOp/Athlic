import React from "react";
import "./Card.css";

const Card = () => {
  const cardobj = {
    name: "Hiranandani Society",
    address : "kopri Colony, Siddharth thane(East)"
  };

  return (
    <>
      <div className="main-card">
        <div className="Account-Card-Heading">
          <h1>{cardobj.name}</h1>
        </div>
        <div className="Account-Card-details">
        <p>{cardobj.address}.</p>
        </div>
       <div className="Account-Card-button">
        <h3>View Profile</h3>
       </div>
      </div>
    </>
  );
};

export default Card;
