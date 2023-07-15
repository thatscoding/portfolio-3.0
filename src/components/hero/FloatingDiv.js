import React from "react";
import "./floatingDiv.css";

const FloatingDiv = ({ img, text1, text2 }) => {
  return (
    <>
      <div className="floatingDiv">
        <img src={img} alt="" />
        <div>
          <span>{text1}</span>
          <span>{text2}</span>
        </div>
      </div>
    </>
  );
};

export default FloatingDiv;
