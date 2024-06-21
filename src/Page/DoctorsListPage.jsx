import React from "react";
import DoctorsListP from "../components/Doctors/DoctorsListP";
import DoctorUpdateForm from "../components/Doctors/DoctorUpdateForm/DoctorUpdateForm";

const DoctorsListPage = () => {
  return (
    <div className="DoctorsListPage" style={{ marginTop: "50px" }}>
      <DoctorsListP />
    </div>
  );
};

export default DoctorsListPage;
