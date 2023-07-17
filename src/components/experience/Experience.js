import React from "react";
import "./experience.css";

function Experience() {
  return (
    <div className="experience">
      <div className="achievement">
        <div className="circle">2+</div>
        <span>Years</span>
        <span>Experience</span>
      </div>

      <div className="achievement">
        <div className="circle">10+</div>
        <span>Years</span>
        <span>Experience</span>
      </div>

      <div className="achievement">
        <div className="circle">2+</div>
        <span>Years</span>
        <span>Experience</span>
      </div>
      <div
        className="blur"
        style={{
          position: "absolute",
          background: "rgb(238,210,255)",
          right: "-10%",
          bottom: "-80%",
        }}
      ></div>
    </div>
  );
}

export default Experience;
