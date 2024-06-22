import React, { useEffect, useState } from "react";
import RegisterPatient from "./RegisterPatient";
import RegisterDoctor from "./RegisterDoctor";
import LoginForm from "./Login";
import { useSelector } from "react-redux";
import "./Register.scss";

const Register = () => {
  const [activeTab, setActiveTab] = useState("appointments");
  const { message, loading } = useSelector((state) => state.confirm);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    if(message && !loading) {
      setActiveTab('войти')
    }
  }, [message])

  const tabs = ["регистрация", "войти"];

  const renderContent = () => {
    switch (activeTab) {
      case "войти":
        return <LoginForm />;
      default:
        "регистрация";
        return (
          <>
            <RegisterPatient />
          </>
        );
    }
  };

  return (
    <div className="Register">
      <div>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(tab)}
            className={`tab-button RegisterButtontab  ${
              activeTab === tab ? "active" : ""
            }`}
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
