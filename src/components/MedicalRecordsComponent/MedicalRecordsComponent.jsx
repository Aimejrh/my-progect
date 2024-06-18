import "./MedicalRecordsComponent.scss";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMedicalRecordById } from "../../store/slice/medicalRecordsSlice";

const MedicalRecordsComponent = ({ apiEndpoint, medicalRecordId }) => {
  const dispatch = useDispatch();
  const medicalRecord = useSelector(
    (state) => state.medicalRecords.entities[0]
  );
  const loading = useSelector((state) => state.medicalRecords.loading);
  const error = useSelector((state) => state.medicalRecords.error);

  React.useEffect(() => {
    dispatch(fetchMedicalRecordById({ apiEndpoint, medicalRecordId }));
  }, [dispatch, apiEndpoint, medicalRecordId]);

  if (loading === "loading") return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div>
      <h2>Детали медицинской записи</h2>
      <p>Пациент: {medicalRecord?.patient || "Нет данных"}</p>
      <p>Диагноз: {medicalRecord?.diagnosis || "Нет данных"}</p>
      <p>Преписание: {medicalRecord?.prescription || "Нет данных"}</p>
    </div>
  );
};

export default MedicalRecordsComponent;
