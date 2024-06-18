import React from "react";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";

const TreatmentCard = ({
  Treatment_img,
  Treatment_But_text,
  Treatment_links,
  Treatment_text_p,
  Treatment_text_h2,
}) => {
  return (
    <li>
      <Link to={Treatment_links}>
        <img src={Treatment_img} alt="img" />
        <h2>{Treatment_text_h2}</h2>
        <p>{Treatment_text_p}</p>
        <Button Button_Style={"signUp"} Button_text={`${Treatment_But_text}`} />
      </Link>
    </li>
  );
};

export default TreatmentCard;
