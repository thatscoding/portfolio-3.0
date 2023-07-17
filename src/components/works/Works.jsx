import React from "react";
import "./works.css";
import Facebook from "../../img/Facebook.png";
import Shopify from "../../img/Shopify.png";
import Upwork from "../../img/Upwork.png";
import Amazon from "../../img/amazon.png";
import Fiverr from "../../img/fiverr.png";

function Works() {
  return (
    <div className="s-wrapper">
      <div className="s-left">
        <span>Works for All these</span>
        <span>Brands & Clients</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet magni
          distinctio Lorem ipsum dolor sit amet consectetur Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. adipisicing elit. totam br eos
          provident quam, odi alias
        </span>
        <button className="button s-button">Download CV</button>
        <div
          className="blur"
          style={{ background: "#C1F5FF", left: "-20%", bottom: "-5%" }}
        ></div>
      </div>
      <div className="s-right">
        <div className="w-circle">
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="blueCircle"></div>
          <div className="yellowCircle"></div>
        </div>
      </div>
    </div>
  );
}

export default Works;
