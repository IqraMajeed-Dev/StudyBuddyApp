
import React from "react";
import logo from "../assets/logo.png";

function Logo({ size = "medium" }) {
  return (
    <div className={`logo-container ${size}`}>
      <img src={logo} alt="Study Buddy Hub Logo" className="logo-img" />
      <span className="logo-text">Study Buddy Hub</span>
    </div>
  );
}

export default Logo;
