import React from "react";
import "./FooterLinks.scss";
import { Link } from "react-router-dom";

const FooterLinks = () => {
  return (
    <nav className="FooterLinks">
      <ul className="FooterLinks_ul">
        <li>
          <Link to={"/"}>о клинике </Link>
        </li>
        <li>
          <Link to={"/"}>врачи</Link>
        </li>
        <li>
          <Link to={"/"}>услуги </Link>
        </li>
        <li>
          <Link to={"/"}>диагностика</Link>
        </li>
        <li>
          <Link to={"/"}>цены </Link>
        </li>
        <li>
          <Link to={"/"}>контакты</Link>
        </li>
      </ul>
    </nav>
  );
};

export default FooterLinks;
