import React from "react";
import "./Button.scss";

const Button = ({ Button_text, Button_Style }) => {
  return (
    <div className={Button_Style}>
      <button className={`${Button_Style}_Button`}>{Button_text}</button>
    </div>
  );
};

export default Button;
