import React, { useState } from "react";
import RegisterPatient from "./RegisterPatient";
import RegisterDoctor from "./RegisterDoctor";
import LoginForm from "./Login";

const Register = () => {
  const [activeTab, setActiveTab] = useState("appointments");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const tabs = ["Процедуры", "Приемы врачей", "Диагностика"];

  const renderContent = () => {
    switch (activeTab) {
      case "Приемы врачей":
        return <RegisterPatient />;
      case "Процедуры":
        return <RegisterDoctor/>;
      default:
        "Диагностика";
        return <><LoginForm/></>;
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

export default Register;
