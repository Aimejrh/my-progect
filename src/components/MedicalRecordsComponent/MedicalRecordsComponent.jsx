import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMedicalRecord } from "../../store/slice/medicalRecordsSlice";
import "./MedicalRecordsComponent.scss";

const CreateMedicalRecordForm = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.medicalRecords);

  const [appointmentId, setAppointmentId] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [prescription, setPrescription] = useState("");
  const [notes, setNotes] = useState("");
  const [recommendation, setRecommendation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createMedicalRecord({
        appointmentId,
        diagnosis,
        prescription,
        notes,
        recommendation,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="Registercon">
        <label>ID приема:</label>
        <input
          type="text"
          value={appointmentId}
          onChange={(e) => setAppointmentId(e.target.value)}
        />
      </div>
      <div className="Registercon">
        <label>Диагноз:</label>
        <input
          type="text"
          value={diagnosis}
          onChange={(e) => setDiagnosis(e.target.value)}
        />
      </div>
      <div className="Registercon">
        <label>Рецепт:</label>
        <input
          type="text"
          value={prescription}
          onChange={(e) => setPrescription(e.target.value)}
        />
      </div>
      <div className="Registercon">
        <label>Заметки:</label>
        <input
          type="text"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>
      <div className="Registercon">
        <label>Рекомендации:</label>
        <input
          type="text"
          value={recommendation}
          onChange={(e) => setRecommendation(e.target.value)}
        />
      </div>
      <button type="submit">Создать медицинскую запись</button>
      {loading && <p>Загрузка...</p>}
      {error && <p>Ошибка: {error}</p>}
    </form>
  );
};

export default CreateMedicalRecordForm;

