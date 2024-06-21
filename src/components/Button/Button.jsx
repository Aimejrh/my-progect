import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

const Button = ({ Button_text, Button_Style, Button_link }) => {
  return (
    <Link to={Button_link} className="Button_link">
      <div className={Button_Style}>
        <button className={`${Button_Style}_Button`}>{Button_text}</button>
      </div>
    </Link>
  );
};

export default Button;
