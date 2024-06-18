import React from "react";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";

const Doctarstodo = ({
  Doctarstodo_img,
  Doctarstodo_But_text,
  Doctarstodo_links,
  Doctarstodo_text_p,
  Doctarstodo_text_h2,
  Doctarstodo_text_prof,
}) => {
  return (
    <li className="Doctorsprof_ul_li">
      <img className="Doctorsprof_img" src={Doctarstodo_img} alt="img" />
      <h2>{Doctarstodo_text_h2}</h2>
      <h3>{Doctarstodo_text_prof}</h3>
      <p>{Doctarstodo_text_p}</p>
      <Link to={Doctarstodo_links}>
        <Button
          Button_Style={"Button_Doc"}
          Button_text={`${Doctarstodo_But_text}`}
        />
      </Link>
    </li>
  );
};

export default Doctarstodo;
