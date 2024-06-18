import React from "react";
import "./Doctors.scss";

const Doctors = ({Doctors_img, Doctors_name, Doctors_direction, Doctors_experience}) => {
  return (
    <li className="Doctors">
      <img className="Doctors_img" src={Doctors_img} alt="img" />
      <h3 className="Doctors_name">{Doctors_name}</h3>
      <h4 className="Doctors_direction">{Doctors_direction}</h4>
      <hr className="Doctors_hr"/>
      <h5 className="Doctors_experience">{Doctors_experience}</h5>
    </li>
  );
};

export default Doctors;


