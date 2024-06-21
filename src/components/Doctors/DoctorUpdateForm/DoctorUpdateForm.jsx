// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getDoctorById, updateDoctor } from "../../../store/slice/doctorsSlice";

// const DoctorUpdateForm = ({ doctorId }) => {
//   const dispatch = useDispatch();
//   const { doctor, loading, error } = useSelector((state) => state.doctors);

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     specialization: "",
//     phoneNumber: "",
//   });

//   useEffect(() => {
//     if (doctorId) {
//       dispatch(getDoctorById(doctorId));
//     }
//   }, [dispatch, doctorId]);

//   useEffect(() => {
//     if (doctor) {
//       setFormData({
//         firstName: doctor.result.firstName || "",
//         lastName: doctor.result.lastName || "",
//         specialization: doctor.result.specialization || "",
//         phoneNumber: doctor.result.phoneNumber || "",
//       });
//     }
//   }, [doctor]);

//   console.log(doctor);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const accessToken = localStorage.getItem("accessToken");
//     dispatch(updateDoctor({ id: doctorId, doctorData: formData, accessToken }));
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="firstName">Имя:</label>
//         <input
//           type="text"
//           id="firstName"
//           name="firstName"
//           value={formData.firstName}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="lastName">Фамилия:</label>
//         <input
//           type="text"
//           id="lastName"
//           name="lastName"
//           value={formData.lastName}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="specialization">Специализация:</label>
//         <input
//           type="text"
//           id="specialization"
//           name="specialization"
//           value={formData.specialization}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="phoneNumber">Телефон:</label>
//         <input
//           type="text"
//           id="phoneNumber"
//           name="phoneNumber"
//           value={formData.phoneNumber}
//           onChange={handleChange}
//         />
//       </div>
//       <button type="submit">Обновить данные</button>
//     </form>
//   );
// };

// export default DoctorUpdateForm;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDoctorById, updateDoctor } from "../../../store/slice/doctorsSlice";
import "./DoctorUpdateForm.scss"

const DoctorUpdateForm = ({ doctorId, onUpdateDoctor }) => {
  const dispatch = useDispatch();
  const { doctor, updateDoctorloading, error } = useSelector(
    (state) => state.doctors
  );

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    specialization: "",
    phoneNumber: "",
  });

  useEffect(() => {
    if (doctorId) {
      dispatch(getDoctorById(doctorId));
    }
  }, [dispatch, doctorId]);

  useEffect(() => {
    if (doctor) {
      setFormData({
        firstName: doctor.result.firstName || "",
        lastName: doctor.result.lastName || "",
        specialization: doctor.result.specialization || "",
        phoneNumber: doctor.result.phoneNumber || "",
      });
    }
  }, [doctor]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accessToken = localStorage.getItem("accessToken");
    await dispatch(
      updateDoctor({ id: doctorId, doctorData: formData, accessToken })
    );
    onUpdateDoctor();
  };

  if (updateDoctorloading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <form onSubmit={handleSubmit}>
      <div className="Registercon">
        <label htmlFor="firstName">Имя:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="Registercon">
        <label htmlFor="lastName">Фамилия:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="Registercon">
        <label htmlFor="specialization">Специализация:</label>
        <input
          type="text"
          id="specialization"
          name="specialization"
          value={formData.specialization}
          onChange={handleChange}
        />
      </div>
      <div className="Registercon">
        <label htmlFor="phoneNumber">Телефон:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="UpdateButton">Обновить данные</button>
    </form>
  );
};

export default DoctorUpdateForm;
