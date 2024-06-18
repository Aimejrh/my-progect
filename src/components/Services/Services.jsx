import React from "react";
import "./Services.scss";
import ServicesCard from "./ServicesCard/ServicesCard";

const servicesData = [
  {
    id: 1,
    img: "https://thumb.tildacdn.com/tild6435-3565-4364-a539-303937346131/-/cover/720x468/center/center/-/format/webp/Massage_rehab.jpg",
    title: "Реабилитолог в Бишкеке | CSMIS Clinic",
  },
  {
    id: 2,
    img: "https://вп54.рф/wp-content/uploads/2023/06/screenshot_6-1024x746.png",
    title: "Опытный педиатр в Бишкеке | CSMIS Clinic",
  },
  {
    id: 3,
    img: "https://thumb.tildacdn.com/tild6662-6262-4964-b731-373633336463/-/cover/720x468/center/center/-/format/webp/TKuharkinas_profile-.jpg",
    title: "Опытный гинеколог в Бишкеке | CSMIS Clinic",
  },
  {
    id: 4,
    img: "https://thumb.tildacdn.com/tild3432-3363-4138-b063-643330626461/-/cover/720x468/center/center/-/format/webp/13_Endocrinologist_A.jpg",
    title: "Опытный ЛОР-врач в Бишкеке | CSMIS Clinic",
  },
  {
    id: 5,
    img: "https://thumb.tildacdn.com/tild6439-6566-4333-b531-663031633838/-/cover/720x468/center/center/-/format/webp/Alina_General.jpg",
    title: "Опытный эндокринолог в Бишкеке | CSMIS Clinic",
  },
  {
    id: 6,
    img: "https://thumb.tildacdn.com/tild3262-6665-4832-b834-343235363037/-/cover/720x468/center/center/-/format/webp/MTagievs_profilus.jpg",
    title: "Опытный дерматолог в Бишкеке | CSMIS Clinic",
  },
  {
    id: 7,
    img: "https://thumb.tildacdn.com/tild6263-6237-4265-a363-376531386261/-/cover/600x390/center/center/-/format/webp/Ophtalmologist_cover.jpg",
    title: "Опытный офтальмолог в Бишкеке | CSMIS Clinic",
  },
  {
    id: 8,
    img: "https://thumb.tildacdn.com/tild3638-3931-4761-a262-383436333133/-/cover/600x390/center/center/-/format/webp/Neurologist_Djaparal.jpg",
    title: "Опытный терапевт в Бишкеке | CSMIS Clinic",
  },
  {
    id: 9,
    img: "https://thumb.tildacdn.com/tild3330-3237-4831-a634-356535626437/-/cover/720x468/center/center/-/format/webp/Orthopedics.jpg",
    title: "Опытный уролог в Бишкеке | CSMIS Clinic",
  },
  {
    id: 11,
    img: "https://thumb.tildacdn.com/tild6139-6638-4832-b434-356635343864/-/cover/600x390/center/center/-/format/webp/RUF_1196.JPG",
    title: "Опытный невролог в Бишкеке | CSMIS Clinic",
  },
  {
    id: 12,
    img: "https://thumb.tildacdn.com/tild6539-3636-4564-b363-613135383438/-/cover/600x390/center/center/-/format/webp/85_c3lkYV92aWRfMDAzM.jpg",
    title: "Опытный гастроэнтеролог в Бишкеке | CSMIS Clinic",
  },
  {
    id: 13,
    img: "https://thumb.tildacdn.com/tild3162-3834-4634-b065-303132643665/-/cover/600x390/center/center/-/format/webp/USR_picture-min.jpg",
    title: "пытный ортопед в Бишкеке | CSMIS Clinic",
  },
  {
    id: 14,
    img: "https://thumb.tildacdn.com/tild6531-3231-4163-b838-313166333237/-/resize/800x600/-/format/webp/orig.jpg",
    title: "Опытный пульмонолог в Бишкеке | CSMIS Clinic",
  },
];

const Services = () => {
  return (
    <div className="Services">
      <h2 className="Services_h2">Услуги опытных врачей в Бишкеке</h2>
      <p className="Services_p">
        Мы предоставляем услуги по более чем 15 направлениям
      </p>
      <ul className="Services_ul">
        {servicesData.map((service, index) => (
          <ServicesCard
            key={index}
            ServicesCardImg={service.img}
            ServicesCardTextH3={service.title}
          />
        ))}
      </ul>
    </div>
  );
};

export default Services;
