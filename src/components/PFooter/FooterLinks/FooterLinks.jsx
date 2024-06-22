import React from "react";
import "./FooterLinks.scss";
import { Link } from "react-router-dom";

const FooterLinks = () => {
  return (
    <nav className="FooterLinks">
      <ul className="FooterLinks_ul">
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
    </nav>
  );
};

export default FooterLinks;
