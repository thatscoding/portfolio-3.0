import React from "react";
import "./services.css";
import Card from "../Card/Card";

import Developer from "../../img/glasses.png";
import Design from "../../img/heartemoji.png";
import Humble from "../../img/humble.png";

const Services = () => {
  return (
    <>
      <div className="s-wrapper">
        <div className="s-left">
          <span>My Awesome</span>
          <span>Services</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet magni
            distinctio totam br eos provident quam, odi alias
          </span>
          <button className="button s-button">Download CV</button>
          <div
            className="blur"
            style={{ background: "#C1F5FF", left: "-20%", bottom: "-5%" }}
          ></div>
        </div>
        <div className="s-right">
          <Card
            img={Design}
            text1="Design"
            text2="Figma, Sketch, Photoshop, Adobe, Illustrate, Adobe xd"
          />
          <Card
            img={Developer}
            text1="Developer"
            text2="Figma, Sketch, Photoshop, Adobe, Illustrate, Adobe xd"
          />
          <Card
            img={Humble}
            text1="UI/UX"
            text2="Figma, Sketch, Photoshop, Adobe, Illustrate, Adobe xd"
          />

          <div
            className="blur"
            style={{
              background: "rgb(238,210,255)",
              right: "-8%",
              top: "35%",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Services;
