import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UsersCard from "../components/UsersCard/UsersCard";
import AppointmentsList from "../components/AppointmentsList/AppointmentsList";
import CreateMedicalRecordForm from "../components/MedicalRecordsComponent/MedicalRecordsComponent";
import { useDispatch } from "react-redux";
import { getProfile } from "../store/slice/authSlice";

export default function Profile() {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    dispatch(getProfile())

    if (token) return;

    navigate("/RegisterForm");
  }, []);

  return (
    <div style={{ marginTop: "200px" }}>
      <UsersCard />
      {/* <AppointmentsList/> */}
      {/* <CreateMedicalRecordForm/> */}
    </div>
  );
}
