import React, { useState } from "react";
import "./BurgerMenu.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../store/slice/appSlice";

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
          <li>
            <a href="#" className="menu-item">
              Главная
            </a>
          </li>
          <li>
            <a href="#" className="menu-item">
              О нас
            </a>
          </li>
          <li>
            <a href="#" className="menu-item">
              Команда
            </a>
          </li>
          <li>
            <a href="#" className="menu-item">
              Контакты
            </a>
          </li>
        </ul>
      </div>
      {/* Пример фона */}
      <div
        className={`background ${isSidebarOpen ? "disabled" : ""}`}
        onClick={handleBackgroundClick}
      ></div>
    </div>
  );
};

export default BurgerMenu;
