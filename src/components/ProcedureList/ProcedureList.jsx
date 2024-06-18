import React, { useState } from "react";
import "./ProcedureList.scss";

const proceduresData = [
  { name: "Внутримышечная инъекция", addit: "", price: "100 KGS" },
  { name: "Внутривенная инъекция", addit: "", price: "150 KGS" },
  {
    name: "Внутривенная капельница",
    addit: "Физраствор не включен",
    price: "250 KGS",
  },
  {
    name: "Внутримышечная инъекция",
    addit: "Физраствор включен",
    price: "350 KGS",
  },
];

const doctorsAppointmentsData = [
  {
    title: "Терапевт",
    information: [
      { name: "Первичный приём терапевта", addit: "", price: "1,000 KGS" },
      {
        name: "Первичный приём главного врача (терапевт)",
        addit: "",
        price: "1,500 KGS",
      },
      {
        name: "Повторный приём терапевта",
        addit: "В течении 1 месяца",
        price: "700 KGS",
      },
      {
        name: "Снятие ЭКГ (электрокардиография)",
        addit: "",
        price: "450 KGS",
      },
    ],
  },
  {
    title: "Гинеколог",
    information: [
      { name: "Первичный приём гинеколога", addit: "", price: "1,000 KGS" },
      {
        name: "Повторный приём гинеколога",
        addit: "В течении 1 месяца",
        price: "700 KGS",
      },
      {
        name: "Кольпоскопия",
        addit: "",
        price: "1,000 KGS",
      },
      {
        name: "Введение спирали",
        addit: "Осмотр, УЗИ и повторный осмотр",
        price: "1,800 KGS",
      },
      {
        name: "Удаление спирали",
        addit: "Процедура удаления, осмотр и УЗИ",
        price: "1,200 KGS",
      },
      {
        name: "Удаление кисты бартолиновой железы",
        addit: "",
        price: "4,000 KGS",
      },
      {
        name: "Взятие на учет по беременности",
        addit: "",
        price: "1,500 KGS",
      },
    ],
  },
  {
    title: "ЛОР",
    information: [
      { name: "Первичный приём ЛОР-врача", addit: "", price: "1,100 KGS" },
      {
        name: "Повторный приём ЛОР-врача",
        addit: "В течении 1 месяца",
        price: "700 KGS",
      },
      {
        name: "Промывание",
        addit: "Уха, лакун, гайморовых пазух и миндалин",
        price: "700 KGS",
      },
      { name: "Прокол гайморовых пазух", addit: "", price: "700 KGS" },
      { name: "Катетеризация евстахиевой трубы", addit: "", price: "500 KGS" },
      { name: "Продувание евстахиевой трубы", addit: "", price: "150 KGS" },
    ],
  },
  {
    title: "Уролог",
    information: [
      { name: "Первичный приём уролога", addit: "", price: "900 KGS" },
      {
        name: "Повторный приём уролога",
        addit: "В течении 1 месяца",
        price: "700 KGS",
      },
    ],
  },
  {
    title: "Офтальмолог",
    information: [
      { name: "Первичный приём офтальмолога", addit: "", price: "1,000 KGS" },
      {
        name: "Первичный приём офтальмолога (доктор Кадыралиева)",
        addit: "",
        price: "1,200 KGS",
      },
      {
        name: "Повторный приём офтальмолога",
        addit: "В течении 1 месяца",
        price: "1,200 KGS",
      },
    ],
  },
  {
    title: "Невропатолог",
    information: [
      {
        name: "Первичный приём невропатолога (доктор Джапаралиева)",
        addit: "",
        price: "1,200 KGS",
      },
      {
        name: "Первичный приём детского невропатолога",
        addit: "",
        price: "2,000 KGS",
      },
      {
        name: "Первичный приём невропатолога",
        addit: "",
        price: "1,000 KGS",
      },
      {
        name: "Повторный приём невропатолога",
        addit: "В течении 1 месяца",
        price: "700 KGS",
      },
      {
        name: "Повторный приём детского невропатолога",
        addit: "В течении 1 месяца",
        price: "1,000 KGS",
      },
    ],
  },
];

const diagnosticsData = [
  {
    name: "Спирометрия",
    addit: "Диагностика состояния лёгких",
    price: "800 KGS",
  },
  {
    name: "УЗИ брюшной полости",
    addit: "Печень, желчный пузырь, поджелудочная железа и селезенка",
    price: "900 KGS",
  },
  { name: "УЗИ органов малого таза", addit: "", price: "650 KGS" },
  { name: "УЗИ молочных желёз", addit: "", price: "600 KGS" },
  { name: "УЗИ щитовидной железы", addit: "", price: "600 KGS" },
  { name: "УЗИ предстательной железы", addit: "", price: "600 KGS" },
  {
    name: "УЗИ почек, надпочечников и забрюшинного пространства",
    addit: "",
    price: "700 KGS",
  },
  { name: "УЗИ мягких тканей", addit: "", price: "500 KGS" },
  { name: "УЗИ беременности 1 триместр", addit: "", price: "950 KGS" },
  { name: "УЗИ беременности 2 и 3 триместр", addit: "", price: "950 KGS" },
  { name: "УЗИ-фолликулометрия (эндометрий)", addit: "", price: "400 KGS" },
  { name: "УЗИ почек и надпочечников", addit: "", price: "600 KGS" },
  { name: "УЗИ печени и селезенки", addit: "", price: "600 KGS" },
  { name: "УЗИ селезенки", addit: "", price: "400 KGS" },
  { name: "УЗИ мочевого пузыря", addit: "", price: "400 KGS" },
];

const ProcedureList = () => {
  const [activeTab, setActiveTab] = useState("appointments");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const tabs = ["Процедуры", "Приемы врачей", "Диагностика"];

  const renderContent = () => {
    switch (activeTab) {
      case "Приемы врачей":
        return (
          <div className="renderContent_container one">
            <h3>Приёмы врачей</h3>
            <ul className="appointment_ul_container">
              {doctorsAppointmentsData.map((doctor, doctorIndex) => (
                <li className="appointment_li_container" key={doctorIndex}>
                  <h4>{doctor.title}</h4>
                  <ul className="ul_container_ul">
                    {doctor.information.map((appointment, appointmentIndex) => (
                      <>
                        <li className="ul_container_li" key={appointmentIndex}>
                          <div className="container_li_text">
                            <p>{appointment.addit}</p>
                            <h5>{appointment.name}</h5>
                          </div>
                          <h5>{appointment.price}</h5>
                        </li>
                        <hr />
                      </>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        );
      case "Процедуры":
        return (
          <div className="renderContent_container two">
            <h3>Процедуры</h3>
            <ul className="renderContent_container_ul">
              {proceduresData.map((procedure, index) => (
                <>
                  <li className="renderContent_container_li" key={index}>
                    <div className="renderContent_container_li_text">
                      <p>{procedure.addit}</p>
                      <h4>{procedure.name}</h4>
                    </div>
                    <h4>{procedure.price}</h4>
                  </li>
                  <hr />
                </>
              ))}
            </ul>
          </div>
        );
      default:
        "Диагностика";
        return (
          <div className="renderContent_container three">
            <h3>Диагностика</h3>
            <ul className="renderContent_container_ul">
              {diagnosticsData.map((procedure, index) => (
                <>
                  <li className="renderContent_container_li" key={index}>
                    <div className="renderContent_container_li_text">
                      <p>{procedure.addit}</p>
                      <h4>{procedure.name}</h4>
                    </div>
                    <h4>{procedure.price}</h4>
                  </li>
                  <hr />
                </>
              ))}
            </ul>
          </div>
        );
    }
  };

  return (
    <div className="ProcedureList" style={{ paddingTop: "90px" }}>
      <h2 className="ProcedureList_h2">Цены услуг в CSMIS Clinic</h2>
      <div className="ProcedureList_Button_Container">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(tab)}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
          >
            {tab}
          </button>
        ))}
      </div>
      {renderContent()}
    </div>
  );
};

export default ProcedureList;

