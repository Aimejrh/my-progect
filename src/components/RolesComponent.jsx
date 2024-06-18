import { get } from 'jquery';
import React, { useState, useEffect } from 'react';

function RolesComponent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // Функция для получения данных из API
  const fetchData = async () => {
    try {
      const response = await get('https://it-academy-mis-app-eb8b8e2f87d7.herokuapp.com/api/roles');
      if (!response.ok) {
        throw new Error(`Ошибка состояния HTTP: ${response.status}`);
      }
      const rolesData = await response.json();
      setData(rolesData);
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  // Вызов fetchData при монтировании компонента
  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>; // Отображение индикатора загрузки, пока данные не будут получены
  }

  return (
    <ul>
      {data.map((role, index) => (
        <li key={index}>{role.name} ({role.description})</li> // Предполагается, что каждый объект роли имеет свойства name и description
      ))}
    </ul>
  );
}

export default RolesComponent;
