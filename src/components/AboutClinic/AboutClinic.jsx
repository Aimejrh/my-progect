import React from "react";
import "./AboutClinic.scss";
const AboutClinic = ({ Text_logo }) => {
  return (
    <div className="AboutClinic">
      <div className="AboutClinic_img">
        <h1 className="AboutClinic_h1">{Text_logo}</h1>
      </div>
    </div>
  );
};

export default AboutClinic;
