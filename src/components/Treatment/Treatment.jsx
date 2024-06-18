import React from "react";
import TreatmentCard from "./TreatmentCard/TreatmentCard";
import "./Treatment.scss";

const Treatment = () => {
  return (
    <div className="Treatment">
      <h2 className="Treatment_h2">Лечение</h2>
      <p className="Treatment_p">
        Наши врачи подберут для вас оптимальные программы лечения и профилактики
        заболеваний
      </p>

      <ul className="Treatment_ul">
        <TreatmentCard
          Treatment_img={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEpJZJ4uupu14yC9NnhgqZ-NIWVh5XiUISCjUTKzRDl3khgDwC"
          }
          Treatment_links={"/"}
          Treatment_text_h2={"ЛОР-врач в Бишкеке"}
          Treatment_text_p={
            "Опытные ЛОР-врачи в Бишкеке. Кандидат медицинских наук."
          }
          Treatment_But_text={"Подробнее"}
        />
        <TreatmentCard
          Treatment_img={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWuh9aCpl9eR0mF6uaYWggnqy_8T5Jt9VT2eLDxL-6Zsf044NZ"
          }
          Treatment_links={"/"}
          Treatment_text_h2={"Дерматолог в Бишкеке"}
          Treatment_text_p={
            "Доктор Тагиев. Врач-специалист со стажем работы более 5 лет."
          }
          Treatment_But_text={"Подробнее"}
        />
        <TreatmentCard
          Treatment_img={
            "https://static.tildacdn.com/tild3764-3136-4666-b230-313064303830/18_Jakshybaeva.jpg"
          }
          Treatment_links={"/"}
          Treatment_text_h2={"Педиатр в Бишкеке"}
          Treatment_text_p={
            "Доктор Жакшыбаева. Врач со стажем работы более 20лет."
          }
          Treatment_But_text={"Подробнее"}
        />
      </ul>
    </div>
  );
};

export default Treatment;
