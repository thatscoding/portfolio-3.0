import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="left">
          <div className="name">Sachin</div>
          <span>Toggle</span>
        </div>
        <div className="right">
          <div className="list">
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Experience</li>
              <li>Portfolio</li>
              <li>Testimonials</li>
            </ul>
          </div>
          <button className="button">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
