import "./NavBar.scss";
import React, { useState } from "react";
import Img from "../../../../public/Forward.svg";

function RegionSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Бишкек"); // Добавлено состояние для выбранного города

  const cities = [
    { id: 1, name: "Бишкек" },
    { id: 2, name: "Ош" },
    { id: 3, name: "Кадамжай" },
    { id: 4, name: "Токмок" },
    { id: 5, name: "Талас" },
    { id: 6, name: "Каракол" },
    { id: 7, name: "Нарын" },
    { id: 8, name: "Баткен" },
    { id: 9, name: "Джалал-Абад" },
    { id: 10, name: "Кант" },
    { id: 11, name: "Чолпон-Ата" },
    { id: 12, name: "Балыкчи" },
    { id: 13, name: "Кара-Балта" },
  ];

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSelect = (cityName) => {
    console.log(`Selected city: ${cityName}`);
    setSelectedCity(cityName);
    setIsOpen(false);
  };

  return (
    <div className="custom-select-container">
      <div onClick={handleToggle} className="custom-select-trigger">
        <h3>{selectedCity}</h3>
        <img
          className={`Language_Img ${isOpen ? "rotate" : ""}`}
          src={Img}
          alt=""
        />
      </div>
      {isOpen && (
        <ul className="custom-select-options">
          {cities.map((city) => (
            <li
              key={city.id}
              onClick={() => handleSelect(city.name)}
              className="custom-select-option"
            >
              <h4>{city.name}</h4>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RegionSelector;
