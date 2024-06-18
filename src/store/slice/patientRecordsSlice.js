// features/patientRecordsSlice.js
// Данный фрагмент кода определяет срез Redux для управления записями пациентов в хранилище Redux с использованием Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  records: [],
  status: 'idle',
  error: null,
};


import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPatientRecords = createAsyncThunk(
  'patientRecords/fetchRecords',
  async (patientId, thunkAPI) => {
    try {
      const response = await axios.get(`https://it-academy-mis-app-eb8b8e2f87d7.herokuapp.com/api/register/patient=${patientId}`);
      return response.data.result;
    } catch (error) {
      return thunkAPI.rejectWithValue({ message: error.message });
    }
  }
);


const patientRecordsSlice = createSlice({
  name: 'patientRecords',
  initialState,
  reducers: {
    getPatientRecordsStarted: (state) => {
      state.status = 'loading';
    },
    getPatientRecordsSuccess: (state, action) => {
      state.status = 'succeeded';
      state.records = action.payload;
    },
    getPatientRecordsFailure: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { getPatientRecordsStarted, getPatientRecordsSuccess, getPatientRecordsFailure } = patientRecordsSlice.actions;

export default patientRecordsSlice.reducer;
