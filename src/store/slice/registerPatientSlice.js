import { createSlice } from "@reduxjs/toolkit";
import { registerPatient } from "../features/patientAction"; // Импортируем предполагаемое асинхронное действие

const initialState = {
  loading: false,
  success: false,
  error: null,
};

export const patientSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
     .addCase(registerPatient.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
     .addCase(registerPatient.fulfilled, (state) => {
        console.log("Пациент успешно зарегистрирован");
        state.loading = false;
        state.success = true;
        state.error = null;
      })
     .addCase(registerPatient.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export default patientSlice.reducer;
