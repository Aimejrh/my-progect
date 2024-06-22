// components/AppointmentsList.jsx

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAppointments,
  deleteAppointment,
  updateAppointment,
  createAppointment,
} from "../../store/slice/appointmentsSlice";
import AppointmentUpdateForm from "./AppointmentUpdateForm/AppointmentUpdateForm";
import img from "../../../public/Spinner@1x-1.0s-200px-200px.svg"

const AppointmentsList = () => {
  const dispatch = useDispatch();
  const { appointments, loading, error } = useSelector(
    (state) => state.appointments
  );
  const [selectedAppointmentId, setSelectedAppointmentId] = useState(null);

  useEffect(() => {
    dispatch(fetchAppointments());
  }, [dispatch]);

  const handleUpdateAppointment = (id, appointmentData) => {
    dispatch(updateAppointment({ id, appointmentData }));
  };

  const handleDeleteAppointment = (id) => {
    dispatch(deleteAppointment(id));
  };

  const handleCreateAppointment = (appointmentData) => {
    dispatch(createAppointment(appointmentData));
  };

  if (loading) return <div className="loading"><img src={img} alt="imgLoading" /></div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Список приемов</h1>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            <h2>{appointment.reason}</h2>
            <p>{appointment.appointmentDate}</p>
            <p>{appointment.status}</p>
            <button onClick={() => setSelectedAppointmentId(appointment.id)}>
              Изменить
            </button>
            <button onClick={() => handleDeleteAppointment(appointment.id)}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
      {selectedAppointmentId && (
        <AppointmentUpdateForm
          appointmentId={selectedAppointmentId}
          onUpdateAppointment={handleUpdateAppointment}
        />
      )}
      <button
        onClick={() =>
          handleCreateAppointment({
            reason: "Новая причина",
            status: "Новый статус",
            appointmentDate: new Date().toISOString(),
            doctorId: 1,
            patientId: 1,
            medicalRecordId: 1,
          })
        }
      >
        Создать новый прием
      </button>
    </div>
  );
};

export default AppointmentsList;
