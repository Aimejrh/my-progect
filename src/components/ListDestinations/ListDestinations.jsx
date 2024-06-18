import React from "react";
import "./ListDestinations.scss";
import ListRender from "./ListRender/ListRender";

const ListDestinations = () => {
  return (
    <div className="ListDestinations">
      <h2>Опытные врачи в Бишкеке</h2>
      <h3>Выберите специальность врача, к которому вы хотите записаться</h3>

      <ul className="ListDestinations_container">
        <ListRender
          ListRender_text={"кардиолог"}
          ListRender_img={
            "https://thumb.tildacdn.com/tild3230-6564-4335-a433-303536363630/-/resize/100x/-/format/webp/cardiology.png"
          }
          ListRender_links={"/"}
          ListRender_But_text={"перейти"}
        />
        <ListRender
          ListRender_text={"терапевт"}
          ListRender_img={
            "https://thumb.tildacdn.com/tild6366-6339-4363-b463-633530363337/-/resize/100x/-/format/webp/Doctor-Avatar-split-.jpg"
          }
          ListRender_links={"/"}
          ListRender_But_text={"перейти"}
        />
        <ListRender
          ListRender_text={"пульмонолог"}
          ListRender_img={
            "https://thumb.tildacdn.com/tild3365-3537-4463-b963-663763643966/-/resize/100x/-/format/webp/Pulmonology.png"
          }
          ListRender_links={"/"}
          ListRender_But_text={"перейти"}
        />
        <ListRender
          ListRender_text={"невролог"}
          ListRender_img={
            "https://thumb.tildacdn.com/tild3036-3035-4932-b032-373566643132/-/resize/100x/-/format/webp/Neurologist.png"
          }
          ListRender_links={"/"}
          ListRender_But_text={"перейти"}
        />
        <ListRender
          ListRender_text={"хирург"}
          ListRender_img={
            "https://thumb.tildacdn.com/tild3538-6537-4666-b236-356432353863/-/resize/100x/-/format/webp/Surgeon.png"
          }
          ListRender_links={"/"}
          ListRender_But_text={"перейти"}
        />
        <ListRender
          ListRender_text={"гинеколог"}
          ListRender_img={
            "https://thumb.tildacdn.com/tild3939-3364-4230-b761-343461323033/-/resize/100x/-/format/webp/Gynecologist.png"
          }
          ListRender_links={"/"}
          ListRender_But_text={"перейти"}
        />
        <ListRender
          ListRender_text={"педиатр"}
          ListRender_img={
            "https://thumb.tildacdn.com/tild6262-6138-4463-a538-663432326134/-/resize/100x/-/format/webp/pediatrics.png"
          }
          ListRender_links={"/"}
          ListRender_But_text={"перейти"}
        />
        <ListRender
          ListRender_text={"диагностика"}
          ListRender_img={
            "https://thumb.tildacdn.com/tild3662-6262-4230-b738-353262646239/-/resize/100x/-/format/webp/Diagnostics.png"
          }
          ListRender_links={"/"}
          ListRender_But_text={"перейти"}
        />
        <ListRender
          ListRender_text={"узи"}
          ListRender_img={
            "https://thumb.tildacdn.com/tild6465-3363-4839-b335-353031656536/-/resize/100x/-/format/webp/Ultrasound.png"
          }
          ListRender_links={"/"}
          ListRender_But_text={"перейти"}
        />
        <ListRender
          ListRender_text={"Эндоскопия"}
          ListRender_img={
            "https://thumb.tildacdn.com/tild3739-6235-4263-b431-313361613133/-/resize/100x/-/format/webp/Gastroenterology.png"
          }
          ListRender_links={"/"}
          ListRender_But_text={"перейти"}
        />
      </ul>
    </div>
  );
};

export default ListDestinations;
