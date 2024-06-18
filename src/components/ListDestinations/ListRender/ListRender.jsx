import React from "react";
// import "./ListDestinations.scss";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";

const ListRender = ({ ListRender_links, ListRender_img, ListRender_text,ListRender_But_text }) => {
  return (
    <li className="ListDestinations_container_li">
      <Link to={`${ListRender_links}`}>
        <img src={`${ListRender_img}`} alt="img" />
        <p>{ListRender_text}</p>
        <Button Button_Style={"signUp_Hover"} Button_text={`${ListRender_But_text}`}/>
      </Link>
    </li>
  );
};

export default ListRender;
