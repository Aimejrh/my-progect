import React from "react";
import DoctorsListP from "../components/Doctors/DoctorsListP";
import DoctorUpdateForm from "../components/Doctors/DoctorUpdateForm/DoctorUpdateForm";
import SearchPatientById from "../components/PatientSearch";

const DoctorsListPage = () => {
  return (
    <div className="DoctorsListPage" style={{ marginTop: "50px" }}>
      <SearchPatientById />
      <DoctorsListP />
    </div>
  );
};

export default DoctorsListPage;
