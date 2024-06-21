// import "./DoctorsListP.scss";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllDoctors, deleteDoctor, updateDoctor } from "../../store/slice/doctorsSlice"; // Исправьте путь, если он неверный

// const DoctorsListP = () => {
//   const dispatch = useDispatch();
//   const { doctors, loading, error } = useSelector((state) => state.doctors);

//   useEffect(() => {
//     dispatch(getAllDoctors());
//   }, [dispatch]);

//   const handleDelete = (id) => {
//     dispatch(deleteDoctor(id));
//   };

//   const handleUpdate = (id) => {
//     const updatedData = {
//       firstName: "Updated",
//       lastName: "Doctor",
//       specialization: "Updated Specialization",
//       phoneNumber: "Updated Phone Number",
//     };
//     dispatch(updateDoctor({ id, doctorData: updatedData }));
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) {
//     const errorMessage = typeof error === "object" ? JSON.stringify(error) : error;
//     return <div>Error: {errorMessage}</div>;
//   }

//   return (
//     <div>
//       <h1>Список докторов</h1>
//       <ul className="DoctorsListP_ul">
//         {doctors.map((doctor) => (
//           <li className="DoctorsListP_li" key={doctor.id}>
//             <h2 className="DoctorsListP_li_h2">
//               {doctor.firstName} {doctor.lastName}
//             </h2>
//             <h3 className="DoctorsListP_h3">{doctor.specialization}</h3>
//             <p className="DoctorsListP_p">{doctor.phoneNumber}</p>
//             <button className="DoctorsListP_delete" onClick={() => handleDelete(doctor.id)}>delete</button>
//             <button className="DoctorsListP_update" onClick={() => handleUpdate(doctor.id)}>update</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default DoctorsListP;
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDoctors, getDoctorById } from "../../store/slice/doctorsSlice";
import DoctorUpdateForm from "./DoctorUpdateForm/DoctorUpdateForm";
import "./DoctorsListP.scss"

const DoctorsListP = () => {
  const dispatch = useDispatch();
  const { doctors, getAllDoctorsLoading, error } = useSelector(
    (state) => state.doctors
  );
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);

  useEffect(() => {
    dispatch(getAllDoctors());
  }, [dispatch]);

  const handleUpdateDoctor = () => { 
    setSelectedDoctorId(null);
  };

  useEffect(() => {
    if (selectedDoctorId) {
      dispatch(getDoctorById(selectedDoctorId));
    }
  }, [dispatch, selectedDoctorId]);

  if (getAllDoctorsLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="DoctorsListP">
      <h1 className="DoctorsListP_h1">Список докторов</h1>
      <ul className="DoctorsListP_ul">
        {doctors.map((doctor) => (
          <li className="DoctorsListP_li" key={doctor.id}>
            <div className="DoctorsListP_li_img">
              <img src="" alt="img" />
            </div>

            <h2 className="DoctorsListP_li_h2">
              {doctor.firstName} {doctor.lastName}
            </h2>
            <h3 className="DoctorsListP_h3">{doctor.specialization}</h3>
            <p className="DoctorsListP_p">{doctor.phoneNumber}</p>
            <button
              className="DoctorsListP_update RegisterButton"
              onClick={() => setSelectedDoctorId(doctor.id)}
            >
              Изменить
            </button>
          </li>
        ))}
      </ul>
      {selectedDoctorId && (
        <DoctorUpdateForm
          doctorId={selectedDoctorId}
          onUpdateDoctor={handleUpdateDoctor}
        />
      )}
    </div>
  );
};

export default DoctorsListP;
