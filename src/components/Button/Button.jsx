import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

const Button = ({ Button_text, Button_Style, Button_link, Button_type }) => {
  return (
    <Link to={Button_link} className="Button_link_h">
      <div className={Button_Style}>
        <button type={Button_type} className={`${Button_Style}_Button`}>
          {Button_text}
        </button>
      </div>
    </Link>
  );
};

export default Button;
