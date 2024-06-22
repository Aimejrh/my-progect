// components/AppointmentUpdateForm.jsx

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAppointments,
  deleteAppointment,
  createAppointment,
} from "../../../store/slice/appointmentsSlice";
import AppointmentUpdateForm from "./AppointmentUpdateForm";
import img from "../../../../public/Spinner@1x-1.0s-200px-200px.svg"

const AppointmentsList = () => {
  const dispatch = useDispatch();
  const { appointments, loading, error } = useSelector(
    (state) => state.appointments
  );
  const [selectedAppointmentId, setSelectedAppointmentId] = useState(null);
  const [newAppointmentData, setNewAppointmentData] = useState({
    reason: "",
    status: "",
    appointmentDate: "",
    doctorId: "",
    patientId: "",
    medicalRecordId: "",
  });

  useEffect(() => {
    dispatch(fetchAppointments());
  }, [dispatch]);

  const handleUpdateAppointment = (id, appointmentData) => {
    dispatch(updateAppointment({ id, appointmentData }));
    setSelectedAppointmentId(null); // Сброс выбранного appointmentId после обновления
  };

  const handleDeleteAppointment = (id) => {
    dispatch(deleteAppointment(id));
  };

  const handleCreateAppointment = () => {
    dispatch(createAppointment(newAppointmentData));
    setNewAppointmentData({
      reason: "",
      status: "",
      appointmentDate: "",
      doctorId: "",
      patientId: "",
      medicalRecordId: "",
    }); // Сброс данных формы после создания
  };

  const handleNewAppointmentChange = (e) => {
    const { name, value } = e.target;
    setNewAppointmentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
        <AppointmentUpdateForm appointmentId={selectedAppointmentId} />
      )}
      <div>
        <h2>Создать новый прием</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCreateAppointment();
          }}
        >
          <div>
            <label htmlFor="reason">Причина:</label>
            <input
              type="text"
              id="reason"
              name="reason"
              value={newAppointmentData.reason}
              onChange={handleNewAppointmentChange}
            />
          </div>
          <div>
            <label htmlFor="status">Статус:</label>
            <input
              type="text"
              id="status"
              name="status"
              value={newAppointmentData.status}
              onChange={handleNewAppointmentChange}
            />
          </div>
          <div>
            <label htmlFor="appointmentDate">Дата приема:</label>
            <input
              type="datetime-local"
              id="appointmentDate"
              name="appointmentDate"
              value={newAppointmentData.appointmentDate}
              onChange={handleNewAppointmentChange}
            />
          </div>
          <div>
            <label htmlFor="doctorId">ID Доктора:</label>
            <input
              type="number"
              id="doctorId"
              name="doctorId"
              value={newAppointmentData.doctorId}
              onChange={handleNewAppointmentChange}
            />
          </div>
          <div>
            <label htmlFor="patientId">ID Пациента:</label>
            <input
              type="number"
              id="patientId"
              name="patientId"
              value={newAppointmentData.patientId}
              onChange={handleNewAppointmentChange}
            />
          </div>
          <div>
            <label htmlFor="medicalRecordId">ID Медицинской записи:</label>
            <input
              type="number"
              id="medicalRecordId"
              name="medicalRecordId"
              value={newAppointmentData.medicalRecordId}
              onChange={handleNewAppointmentChange}
            />
          </div>
          <button type="submit">Создать прием</button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentsList;
