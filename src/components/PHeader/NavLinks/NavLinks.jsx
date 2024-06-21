import React from "react";
import { Link } from "react-router-dom";
import "./NavLinks.scss";
import Logo from "../PheaderCom/Logo";
import BurgerMenu from "../../BurgerMenu/BurgerMenu";

const NavLinks = () => {
  return (
    <nav className="NavLinks">
      <ul className="nav_ul">
        <li>
          <Link to={"/"}>
            <Logo />
          </Link>
        </li>
        <li>
          <Link to={"/about"}>о клинике </Link>
        </li>
        <li>
          <Link to={"/doctors"}>врачи</Link>
        </li>
        <li>
          <Link to={"/Services"}>услуги </Link>
        </li>
        <li>
          <Link to={"/Diagnostics"}>диагностика</Link>
        </li>
        <li>
          <Link to={"/ServicePrices"}>цены </Link>
        </li>
        <li>
          <Link to={"/Contact"}>контакты</Link>
        </li>
      </ul>
      <BurgerMenu />
    </nav>
  );
};

export default NavLinks;
