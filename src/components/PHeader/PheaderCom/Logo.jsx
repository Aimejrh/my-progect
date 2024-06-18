// Logo.js
import React from "react";
import logo from "../../../img/MEDICAL.jpg"
import "./NavBar.scss";

const Logo = () => {
  return <div className="logoImg">
    <img src={logo} alt="Logo" />
  </div>;
};

export default Logo;
