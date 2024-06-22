import React, { useState } from 'react';
import axios from 'axios';

const SearchPatientById = () => {
  const [patientId, setPatientId] = useState('');
  const [patientData, setPatientData] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setPatientId(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://it-academy-mis-app-eb8b8e2f87d7.herokuapp.com/api/patients/${patientId}`);
      setPatientData(response.data);
      setError(null);
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError('Произошла ошибка при выполнении запроса');
      }
      setPatientData(null);
    }
  };

  return (
    <div>
      <h1>Поиск пациента по ID</h1>
      <div>
        <label htmlFor="patientId">ID пациента:</label>
        <input
          type="text"
          id="patientId"
          value={patientId}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Поиск</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {patientData && (
        <div>
          <h2>Информация о пациенте</h2>
          <p>ID: {patientData.id}</p>
          <p>Имя: {patientData.firstName}</p>
          <p>Фамилия: {patientData.lastName}</p>
          <p>Отчество: {patientData.patronymic}</p>
          <p>Телефон: {patientData.phoneNumber}</p>
          <p>Email: {patientData.email}</p>
          <p>Дата рождения: {patientData.dateOfBirth}</p>
          <p>Пол: {patientData.sex}</p>
          <p>Паспорт: {patientData.passport}</p>
          <p>ИНН: {patientData.taxId}</p>
          <p>Адрес: {patientData.address}</p>
        </div>
      )}
    </div>
  );
};

export default SearchPatientById;
