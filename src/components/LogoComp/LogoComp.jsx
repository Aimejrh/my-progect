import React from "react";
import Button from "../Button/Button";
import "./LogoComp.scss";

const LogoComp = () => {
  return (
    <div className="LogoComp">
      <div className="LogoComp_text">
        <h1>
          Ваше здоровье
          <br /> в руках профессионалов
        </h1>
        <div className="pulseContainer">
          <Button
            className="pulse_ut"
            Button_Style={"wrap"}
            Button_text={"записатся"}
          />
        </div>
      </div>
    </div>
  );
};
export default LogoComp;
