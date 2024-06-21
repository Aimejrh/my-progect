// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// // Асинхронное действие для получения медицинской записи
// export const fetchMedicalRecordById = createAsyncThunk(
//   'medicalRecords/fetchByIdStatus',
//   async ({ apiEndpoint, medicalRecordId }) => {
//     const response = await axios.get(`${apiEndpoint}/${medicalRecordId}`);
//     return response.data;
//   }
// );

// const medicalRecordsSlice = createSlice({
//   name: 'medicalRecords',
//   initialState: { entities: [], loading: 'idle', error: null },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//      .addCase(fetchMedicalRecordById.pending, (state) => {
//         state.loading = 'loading';
//       })
//      .addCase(fetchMedicalRecordById.fulfilled, (state, action) => {
//         state.loading = 'idle';
//         state.entities = action.payload.result.medicalRecords;
//       })
//      .addCase(fetchMedicalRecordById.rejected, (state, action) => {
//         state.loading = 'idle';
//         state.error = action.error.message;
//       });
//   },
// });

// export default medicalRecordsSlice.reducer;


import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Функция для получения токена доступа из localStorage
const getToken = () => localStorage.getItem('accessToken');

export const createMedicalRecord = createAsyncThunk(
  'medicalRecords/create',
  async ({ appointmentId, diagnosis, prescription, notes, recommendation }, { rejectWithValue }) => {
    try {
      const token = getToken();
      const response = await axios.post('https://it-academy-mis-app-eb8b8e2f87d7.herokuapp.com/api/medicalRecords', {
        appointmentId,
        diagnosis,
        prescription,
        notes,
        recommendation,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const medicalRecordsSlice = createSlice({
  name: 'medicalRecords',
  initialState: {
    medicalRecord: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createMedicalRecord.pending, (state) => {
        state.loading = true;
      })
      .addCase(createMedicalRecord.fulfilled, (state, action) => {
        state.loading = false;
        state.medicalRecord = action.payload;
      })
      .addCase(createMedicalRecord.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default medicalRecordsSlice.reducer;
