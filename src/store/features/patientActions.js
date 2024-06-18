import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerPatient = createAsyncThunk(
  "patients/registerPatient",
  async (patientData, thunkAPI) => {
    console.log(patientData);
    try {
      const response = await axios.post(
        "https://it-academy-mis-app-eb8b8e2f87d7.herokuapp.com/api/register/patient",
        patientData
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
