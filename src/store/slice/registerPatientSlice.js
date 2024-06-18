import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  success: false,
  error: null,
  patientData: null,
};

const patientsSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    registerPatientStart: (state) => {
      state.loading = true;
    },
    registerPatientSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.patientData = action.payload; // Сохраняем данные пациента
      console.log("Пациент успешно зарегистрирован:", action.payload);
    },
    registerPatientFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  registerPatientStart,
  registerPatientSuccess,
  registerPatientFailure,
} = patientsSlice.actions;

export default patientsSlice.reducer;
