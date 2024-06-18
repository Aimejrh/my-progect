import React from "react";
import { Link } from "react-router-dom";

const ServicesCard = ({
  ServicesCardImg,
  ServicesCardLink,
  ServicesCardTextH3,
}) => {
  return (
    <li className="ServicesCard">
      <Link to={`${ServicesCardLink}`}>
        <img src={`${ServicesCardImg}`} alt="" />
        <h3 className="ServicesCard_h3">{ServicesCardTextH3}</h3>
      </Link>
    </li>
  );
};

export default ServicesCard;
