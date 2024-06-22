import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import PHeader from "../PHeader";
import "./NavBar.scss";
import NavLinks from "../NavLinks/NavLinks";
import Button from "../../Button/Button";

const NavBar = () => {
  const { user } = useSelector((state) => state.auth); // Предположим, что пользовательское имя доступно в стейте auth

  return (
    <PHeader>
      <NavLinks />
      {/* <Button Button_text={"записатся на прием"} Button_Style={"signUp"} /> */}
      {user ? (
        <Link to={"/profile"} className="NavBar_prof">
          <p>{user.username}</p>
          <img className="NavBar_prof_img" src="" alt="img" />
        </Link>
      ) : (
        <Button
          Button_text={"регистрация"}
          Button_Style={"signUp"}
          Button_link={"RegisterForm"}
        />
      )}
    </PHeader>
  );
};

export default NavBar;
