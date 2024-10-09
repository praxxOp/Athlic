import React from "react";
import "./Card.css";

const Card = () => {
  const cardobj = {
    name: "Hiranandani Society",
  };

  return (
    <>
      <div className="main-card">
        <div className="Account-Card-Heading">
          <h1>{cardobj.name}</h1>
        </div>
      </div>
    </>
  );
};

export default Card;
