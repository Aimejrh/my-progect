import React from "react";
import "./Direction.scss";
import DirectionRender from "./DirectionRender/DirectionRender";
const Direction = () => {
  return (
    <div className="Direction_container">
      <div className="Direction_text">
        <h2 className="Direction_h2">
          CSMIS Clinic
          <span>
            – это современная поликлиника, оказывающая амбулаторный приём
            пациентов по широкому профилю медицинских услуг.
          </span>
        </h2>
      </div>

      <div className="Direction_container_ul">
        <ul className="Direction">
          <DirectionRender AboutRender_text={"Неврология"} />
          <DirectionRender AboutRender_text={"Урология"} />
          <DirectionRender AboutRender_text={"Педиатрия"} />
          <DirectionRender AboutRender_text={"Офтальмология"} />
          <DirectionRender AboutRender_text={"Оториноларингология (ЛОР)"} />
          <DirectionRender AboutRender_text={"Гинекология"} />
          <DirectionRender AboutRender_text={"Ортопедия"} />
        </ul>
        <ul className="Direction">
          <DirectionRender AboutRender_text={"Хирургия"} />
          <DirectionRender AboutRender_text={"Дерматовенерология"} />
          <DirectionRender AboutRender_text={"Эндокринология"} />
          <DirectionRender AboutRender_text={"Гастроэнтерология"} />
          <DirectionRender AboutRender_text={"Пульмонология"} />
          <DirectionRender AboutRender_text={"Кардиология"} />
          <DirectionRender AboutRender_text={"Реабилитология"} />
        </ul>
      </div>
    </div>
  );
};

export default Direction;
