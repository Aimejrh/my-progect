import "./DiagnosticsPageList.scss";
import DiagnosticsPageListCard from "./DiagnosticsPageListCard";

const DiagnosticsPageList = () => {
  return ( 
    <div className="DiagnosticsPageList">
      <h2 className="DiagnosticsPageList_h2">Диагностика внутренних органов в Бишкеке</h2>
      <p className="DiagnosticsPageList_p">
        Качественная диагностика опытными специалистами на современном
        оборудовании
      </p>
      <ul className="DiagnosticsPageList_ul">
        <DiagnosticsPageListCard
          DiagnosticsPageListCard_Link={"/"}
          DiagnosticsPageListCard_img={
            "https://thumb.tildacdn.com/tild6663-6563-4565-b139-383061313863/-/cover/720x468/center/center/-/format/webp/Colposcopy_Cover_Pag.jpg"
          }
          DiagnosticsPageListCard_h3={"Кольпоскопия в Бишкеке | Prime Clinic"}
          DiagnosticsPageListCard_p={
            "Кольпоскопия от опытных врачей , Электрокардиография в Бишкеке Электрокардиография от опытного специалиста"
          }
        />
        <DiagnosticsPageListCard
          DiagnosticsPageListCard_Link={"/"}
          DiagnosticsPageListCard_img={
            "https://thumb.tildacdn.com/tild3339-6434-4163-b566-383964623134/-/cover/720x468/center/center/-/format/webp/ECG_Holter_1.jpg"
          }
          DiagnosticsPageListCard_h3={
            "Суточный мониторинг сердца | Prime Clinic"
          }
          DiagnosticsPageListCard_p={
            "Холтеровская электрокардиография от опытного специалиста в Бишкеке  Электрокардиография от опытного специалиста"
          }
        />
        <DiagnosticsPageListCard
          DiagnosticsPageListCard_Link={"/"}
          DiagnosticsPageListCard_img={
            "https://thumb.tildacdn.com/tild3430-6235-4036-a263-653038616333/-/cover/720x468/center/center/-/format/webp/Heart_cardiogram.jpg"
          }
          DiagnosticsPageListCard_h3={
            " УЗИ внутренних органов в Бишкеке | Prime Clinic"
          }
          DiagnosticsPageListCard_p={"УЗИ диагностика от опытного специалиста"}
        />
        <DiagnosticsPageListCard
          DiagnosticsPageListCard_Link={"/"}
          DiagnosticsPageListCard_img={
            "https://thumb.tildacdn.com/tild3734-3861-4337-b438-613431356535/-/cover/720x468/center/center/-/format/webp/RUF_0078.JPG"
          }
          DiagnosticsPageListCard_h3={"ЛОР комбайн в Бишкеке | Prime Clinic"}
          DiagnosticsPageListCard_p={
            " Эндоскопическая визуальная система для диагностики заболеваний уха, горла и носа"
          }
        />
      </ul>
    </div>
  );
};

export default DiagnosticsPageList;
