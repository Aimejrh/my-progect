import React from "react";
import "./OurAdvantages.scss";

const OurAdvantages = () => {
  return (
    <div className="OurAdvantages">
      <h2 className="OurAdvantages_h2">Наши преимущества</h2>
      <ul className="OurAdvantages_ul">
        <li>
          <img
            src="https://thumb.tildacdn.com/tild6435-6166-4961-b938-613765346463/-/cover/720x440/center/center/-/format/webp/10_Our_doctors.jpg"
            alt="img"
          />
          <h3>Опытные врачи</h3>
          <p>
            Средний стаж работы наших врачей - 13 лет. Большинство наших врачей
            могут проводить сложные операции и работают в стационарах при
            госучреждениях.
          </p>
        </li>
        <li>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzk9TxTJo9zlJnynpipSbHUSV1aeOYk0D_zA&s"
            alt="img"
          />
          <h3>Стандартизированный подход</h3>
          <p>
            Мы используем стандарты московского медицинского центра "Открытая
            Клиника". Наши врачи применяют стандартизированные алгоритмы приёма
            пациентов.
          </p>
        </li>
        <li>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUg--kkSrnzRfiM2XeRdY40Oi3yczmZ3zVTA&s"
            alt="img"
          />
          <h3>Нет лишних назначений</h3>
          <p>
            Мы не делаем гипердиагностику. Мы используем систему Medesk, которая
            позволяет нам контролировать работу наших врачей.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default OurAdvantages;
