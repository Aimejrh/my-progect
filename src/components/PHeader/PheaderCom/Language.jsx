import React, { useState } from "react";
import Img from "../../../../public/Forward.svg";
import RegionSelector from "./RegionSelector";

const Language = () => {
  const [isOpenLanguage, setIsOpenLanguage] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Русский"); 

  const languages = [
    { id: 1, name: "Русский" },
    { id: 2, name: "Кыргызча" },
  ];

  const handleLanguageClick = () => setIsOpenLanguage(!isOpenLanguage);
  const handleLanguageSelect = (languageName) => {
    console.log(`Выбран язык: ${languageName}`);
    setSelectedLanguage(languageName);
    setIsOpenLanguage(false);
  };

  return (
    <div className="Select_Box">
      <div className="custom-select-container">
        <div onClick={handleLanguageClick} className="custom-select-trigger">
          <h3>{selectedLanguage}</h3>
          <img
            className={`Language_Img ${isOpenLanguage ? "rotate" : ""}`}
            src={Img}
            alt=""
          />
        </div>

        {isOpenLanguage && (
          <ul className="custom-select-options">
            {languages.map((lang) => (
              <li
                key={lang.id}
                onClick={() => handleLanguageSelect(lang.name)}
                className="custom-select-option"
              >
                <h4>{lang.name}</h4>
              </li>
            ))}
          </ul>
        )}
      </div>

      <RegionSelector />
    </div>
  );
}

export default Language;
