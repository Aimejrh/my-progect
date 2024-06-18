import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slice/appSlice";
import patientRecordsSlice from "./slice/patientRecordsSlice";
import medicalRecordsReducer from "./slice/medicalRecordsSlice";
import doctorSlice from "./slice/doctorSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    patientRecords: patientRecordsSlice,
    medicalRecords: medicalRecordsReducer,
    doctors: doctorSlice,
  },
});

export default store;
