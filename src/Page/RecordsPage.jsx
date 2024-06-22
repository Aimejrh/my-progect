import React, { useState } from "react";
import PFooter from "../components/PFooter/PFooter";
import Button from "../components/Button/Button";

const RecordsPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    date: "",
    time: "",
    phone: "",
    email: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="RecordsPage" style={{ marginTop: "80px" }}>
        <form onSubmit={handleSubmit}>
          <h1>Заявка на прием</h1>

          <div className="Registercon">
            <label htmlFor="fullName">ФИО</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="Registercon">
            <label htmlFor="date">Дата</label>
            <input
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="Registercon">
            <label htmlFor="time">Время</label>
            <input
              type="time"
              name="time"
              id="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>

          <div className="Registercon">
            <label htmlFor="phone">Телефон</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="Registercon">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="Registercon">
            <label htmlFor="notes">Заметки</label>
            <textarea
              name="notes"
              id="notes"
              value={formData.notes}
              onChange={handleChange}
            />
          </div>

          <button className=" signUp signUp_form" type="submit">
            Отправить заявку
          </button>
        </form>
      </div>
      <PFooter />
    </>
  );
};

export default RecordsPage;
