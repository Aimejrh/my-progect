import Button from "../Button/Button";
import Doctors from "./Doctors/Doctors";
import "./DoctorsList.scss";

const DoctorsList = () => {
  return (
    <div className="docCard">
      <h2 className="docCard_text">Наши врачи</h2>

      <ul className="docCard_ul">
        <Doctors
          Doctors_img={
            "https://thumb.tildacdn.com/tild3734-3262-4366-b338-666264346639/-/cover/720x560/center/center/-/format/webp/RUF_4692.JPG"
          }
          Doctors_name={"Доктор Кухаркина"}
          Doctors_direction={"Оториноларинголог (ЛОР)"}
          Doctors_experience={"Специалист со стажем работы более 8 лет."}
        />
        <Doctors
          Doctors_img={
            "https://thumb.tildacdn.com/tild6561-3335-4333-a635-643634313533/-/cover/720x560/center/center/-/format/webp/MTagievs_Tilda_profi.jpg"
          }
          Doctors_name={"Доктор Тагиев"}
          Doctors_direction={"Дерматовенеролог"}
          Doctors_experience={
            "Опытный спецалист дерматологии со стажем работы более 7 лет."
          }
        />
        <Doctors
          Doctors_img={
            "https://thumb.tildacdn.com/tild3563-6432-4865-a135-323333656533/-/cover/720x560/center/center/-/format/webp/KNarmatovas_Tilda_pr.jpg"
          }
          Doctors_name={"Доктор Нарматова"}
          Doctors_direction={"Оториноларинголог (ЛОР)"}
          Doctors_experience={
            "Кандидат медицинских наук. Специалист со стажем работы более 12 лет."
          }
        />
      </ul>
      <Button Button_Style={"signUp"} Button_link={"/doctors"} Button_text={"все врачи"} />
    </div>
  );
};

export default DoctorsList;
