import React from "react";
import "./Peculiarities.scss";

const Peculiarities = () => {
  return (
    <div className="Peculiarities">
      <h2 className="Peculiarities_h2">О нашей клинике</h2>
      <h4>
        Выбирая SCMIS Clinic, вы выбираете качество, инновации и безопасность
      </h4>
      <div className="Peculiarities_container">
        <div className="container_text">
          <div className="text_card">
            <div className="card_img">
              <img
                src="https://thumb.tildacdn.com/tild6563-6132-4039-a434-323636643430/-/cover/130x130/center/center/-/format/webp/settings.png"
                alt="img"
              />
            </div>
            <div className="card_text">
              <h2>Используем общепринятые методики</h2>

              <h3>
                Prime Clinic в Бишкеке предлагает уникальный подход к
                медицинскому обслуживанию, сочетая традиционные методы лечения с
                передовыми технологиями.
              </h3>
            </div>
          </div>
          <div className="text_card">
            <div className="card_img">
              <img
                src="https://thumb.tildacdn.com/tild3137-3338-4331-b937-666435383036/-/cover/130x130/center/center/-/format/webp/cloud-computin.png"
                alt="img"
              />
            </div>
            <div className="card_text">
              <h2>Работаем в электронном формате</h2>
              <h3>
                Наши врачи используют стандартизированные алгоритмы приема,
                гарантируя консистентность и точность диагностики.
              </h3>
            </div>
          </div>
          <div className="text_card">
            <div className="card_img">
              <img
                src="https://thumb.tildacdn.com/tild3935-6165-4838-b732-636432626539/-/cover/130x130/center/center/-/format/webp/bag_doctor_medical_f.png"
                alt="img"
              />
            </div>
            <div className="card_text">
              <h2>Избегаем избыточной диагностики</h2>
              <h3>
                Особое внимание уделяем качеству диагностики, избегая
                гипердиагностики и предлагая только необходимые медицинские
                услуги.
              </h3>
            </div>
          </div>
        </div>
        <div className="container_img">
          {/* <img
            src="https://img.freepik.com/free-photo/medical-treatment-with-pills_23-2148168480.jpg?t=st=1717814555~exp=1717818155~hmac=bf5ccc906e50f3d1003c8cf8e03b8a2fe47f4587e81f50cb024d1ab7a7a415a8&w=996"
            alt="img"
          /> */}
          <img
            src="https://img.freepik.com/free-photo/covid-recovery-center-female-doctor-holding-elder-patient-s-hands_23-2148847830.jpg?size=626&ext=jpg&ga=GA1.1.1285925613.1696873217&semt=ais_user"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Peculiarities;
