import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Асинхронное действие для получения медицинской записи
export const fetchMedicalRecordById = createAsyncThunk(
  'medicalRecords/fetchByIdStatus',
  async ({ apiEndpoint, medicalRecordId }) => {
    const response = await axios.get(`${apiEndpoint}/${medicalRecordId}`);
    return response.data;
  }
);

const medicalRecordsSlice = createSlice({
  name: 'medicalRecords',
  initialState: { entities: [], loading: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
     .addCase(fetchMedicalRecordById.pending, (state) => {
        state.loading = 'loading';
      })
     .addCase(fetchMedicalRecordById.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.entities = action.payload.result.medicalRecords;
      })
     .addCase(fetchMedicalRecordById.rejected, (state, action) => {
        state.loading = 'idle';
        state.error = action.error.message;
      });
  },
});

export default medicalRecordsSlice.reducer;
