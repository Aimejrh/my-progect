import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { toggleSidebar } from "../../../store/slice/appSlice";
import { Link} from "react-router-dom";
import Logo from "./Logo";
import PHeader from "../PHeader";
import "./NavBar.scss";
// import SearchForm from "../SearchForm;/SearchForm";
import RegionSelector from "./RegionSelector";
import Language from "./Language";
import NavLinks from "../NavLinks/NavLinks";
import Button from "../../Button/Button";

const NavBar = () => {
  return (
    <PHeader>
      <NavLinks/>
      {/* <Button Button_text={"записатся на прием"} Button_Style={"signUp"} /> */}
      <Button Button_text={"регистрация"} Button_Style={"signUp"} Button_link={"RegisterForm"}/>
    </PHeader>
  );
};

export default NavBar;
