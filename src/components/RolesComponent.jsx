import { get } from "jquery";
import React, { useState, useEffect } from "react";
import img from "../../public/Spinner@1x-1.0s-200px-200px.svg";

function RolesComponent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await get(
        "https://it-academy-mis-app-eb8b8e2f87d7.herokuapp.com/api/roles"
      );
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

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return (
      <div className="loading">
        <img src={img} alt="imgLoading" />
      </div>
    );
  }

  return (
    <ul>
      {data.map((role, index) => (
        <li key={index}>
          {role.name} ({role.description})
        </li>
      ))}
    </ul>
  );
}

export default RolesComponent;
