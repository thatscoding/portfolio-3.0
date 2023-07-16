import React from "react";
import "./card.css";

const Card = ({ img, text1, text2 }) => {
  return (
    <>
      <div className="card-wrapper">
        <img src={img} alt="" />
        <span>{text1}</span>
        <span>{text2}</span>
        <button className="">Learn More</button>
      </div>
    </>
  );
};

export default Card;
