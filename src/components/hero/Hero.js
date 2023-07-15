import React from "react";
import "./hero.css";

import Linkedin from "../../img/linkedin.png";
import Github from "../../img/github.png";
import Instagram from "../../img/instagram.png";

import vector1 from "../../img/Vector1.png";
import vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import FloatingDiv from "./FloatingDiv";

import crown from "../../img/crown.png";
import thumb from "../../img/thumbup.png";
import emoji from "../../img/glassesimoji.png";

const Hero = () => {
  return (
    <div>
      <div className="i-wrapper">
        <div className="i-left">
          <div className="i-name">
            <h1>Hy! I Am</h1>
            <h1>Sachin Shakya</h1>
            <p style={{ fontFamily: "initial" }}>
              Frontend Developer with high level of experience in web designing
              and Development, producting the quality work.
            </p>
          </div>
          <button className="button">Hire me</button>
          <div className="i-social-media">
            <a
              href="https://www.linkedin.com/in/sachinshakya121/"
              target="_blank"
            >
              <img src={Linkedin} alt="" />
            </a>
            <a href="https://github.com/thatscoding" target="_blank">
              <img src={Github} alt="" />
            </a>
            <a href="#">
              <img src={Instagram} alt="" />
            </a>
          </div>
        </div>
        <div className="i-right">
          <img src={vector1} alt="" />
          <img src={vector2} alt="" />
          <img src={boy} alt="" />

          <FloatingDiv img={crown} text1="Web" text2="Developer" />
          <FloatingDiv img={thumb} text1="Best Design" text2="Award" />
          <img src={emoji} alt="" />

          <div
            className="blur"
            style={{ background: "rgb(238,210,255)", right: "-5%", top: "6%" }}
          ></div>
          <div
            className="blur"
            style={{ background: "#C1F5FF", left: "-5%", bottom: "-5%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
