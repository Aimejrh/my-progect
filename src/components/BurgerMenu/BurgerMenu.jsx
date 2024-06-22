import React, { useState } from "react";
import "./BurgerMenu.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../store/slice/appSlice";
import { Link } from "react-router-dom";
// import Logo from "../../../public/Forward.svg"

const BurgerMenu = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.app.MenuOpen);

  const handleBackgroundClick = () => {
    dispatch(toggleMenu()); // Закрываем меню при клике на фон
  };

  return (
    <div className="menu_container">
      <div className="menu">
        <input
          type="checkbox"
          id="burger-checkbox"
          className="burger-checkbox"
        />
        <label htmlFor="burger-checkbox" className={`burger`}></label>
        <ul className={`menu-list`}>
          <li className="menu-list_li">
            <Link to={"/"}>
            главная
            </Link>
          </li>
          <li className="menu-list_li">
            <Link to={"/about"}>о клинике </Link>
          </li>
          <li className="menu-list_li">
            <Link to={"/doctors"}>врачи</Link>
          </li>
          <li className="menu-list_li">
            <Link to={"/Services"}>услуги </Link>
          </li>
          <li className="menu-list_li">
            <Link to={"/Diagnostics"}>диагностика</Link>
          </li>
          <li className="menu-list_li">
            <Link to={"/ServicePrices"}>цены </Link>
          </li>
          <li className="menu-list_li">
            <Link to={"/Contact"}>контакты</Link>
          </li>
        </ul>
      </div>
      <div
        className={`background ${isSidebarOpen ? "disabled" : ""}`}
        onClick={handleBackgroundClick}
      ></div>
    </div>
  );
};

export default BurgerMenu;
