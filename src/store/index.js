// store/index.js
import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slice/appSlice";
import patientRecordsSlice from "./slice/patientRecordsSlice";
import medicalRecordsReducer from "./slice/medicalRecordsSlice";
import appointmentsSlice from "./slice/appointmentsSlice";
import doctorsSlice from "./slice/doctorsSlice";
import doctorSlice from "./slice/doctorSlice";
import authSlice from "./slice/authSlice";
import confirmSlice from "./slice/ConfirmationRegistrationSlice";
import patientSlice from "./slice/registerPatientSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    patientRecords: patientRecordsSlice,
    medicalRecords: medicalRecordsReducer,
    appointments: appointmentsSlice,
    doctors: doctorsSlice,
    doctor: doctorSlice,
    auth: authSlice,
    confirm: confirmSlice,
    regist: patientSlice,
  },
});

export default store;
