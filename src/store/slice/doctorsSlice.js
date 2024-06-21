import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL =
  "https://it-academy-mis-app-eb8b8e2f87d7.herokuapp.com/api/doctors";

// Получение информации о докторе по ID
export const getDoctorById = createAsyncThunk(
  "doctors/getDoctorById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || error.message
      );
    }
  }
);

// Получение информации о всех докторах
export const getAllDoctors = createAsyncThunk(
  "doctors/getAllDoctors",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(API_URL);
      return response.data.result;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || error.message
      );
    }
  }
);

// изменение информации у доктора
export const updateDoctor = createAsyncThunk(
  "doctors/updateDoctor",
  async ({ id, doctorData, accessToken }, thunkAPI) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, doctorData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 403) {
        try {
          await thunkAPI.dispatch(refreshToken());
          const newAccessToken = localStorage.getItem("accessToken");
          const retryResponse = await axios.put(
            `${API_URL}/${id}`,
            doctorData,
            {
              headers: {
                Authorization: `Bearer ${newAccessToken}`,
              },
            }
          );
          return retryResponse.data;
        } catch (refreshError) {
          return thunkAPI.rejectWithValue(
            refreshError.response.data.message || refreshError.message
          );
        }
      }
      return thunkAPI.rejectWithValue(
        error.response.data.message || error.message
      );
    }
  }
);

// Удаление доктора по ID
export const deleteDoctor = createAsyncThunk(
  "doctors/deleteDoctor",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || error.message
      );
    }
  }
);

const doctorsSlice = createSlice({
  name: "doctors",
  initialState: {
    doctor: null,
    doctors: [],
    loading: false,
    getAllDoctorsLoading: false,
    deleteDoctorloading: false,
    updateDoctorloading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDoctorById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDoctorById.fulfilled, (state, action) => {
        state.loading = false;
        state.doctor = action.payload;
      })
      .addCase(getDoctorById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getAllDoctors.pending, (state) => {
        state.getAllDoctorsLoading = true;
        state.error = null;
      })
      .addCase(getAllDoctors.fulfilled, (state, action) => {
        state.getAllDoctorsLoading = false;
        state.doctors = action.payload;
      })
      .addCase(getAllDoctors.rejected, (state, action) => {
        state.getAllDoctorsLoading = false;
        state.error = action.payload;
      })
      .addCase(updateDoctor.pending, (state) => {
        state.updateDoctorloading = true;
        state.error = null;
      })
      .addCase(updateDoctor.fulfilled, (state, action) => {
        state.updateDoctorloading = false;
        const updatedDoctor = current(state.doctors).find(el => el.id === action.payload.result.id)
        const updatedDoctors = current(state.doctors).map(el => {
          if (el.id === updatedDoctor.id ) {
            return action.payload.result
          } return el;
        })
        state.doctors = updatedDoctors
        const index = state.doctors.findIndex(
          (doctor) => doctor.id === action.payload.id
        );
        if (index !== -1) {
          state.doctors[index] = action.payload;
        }
      })
      .addCase(updateDoctor.rejected, (state, action) => {
        state.updateDoctorloading = false;
        state.error = action.payload;
      })
      .addCase(deleteDoctor.pending, (state) => {
        state.deleteDoctorloading = true;
        state.error = null;
      })
      .addCase(deleteDoctor.fulfilled, (state, action) => {
        state.deleteDoctorloading = false;
        state.doctors = state.doctors.filter(
          (doctor) => doctor.id !== action.payload
        );
      })
      .addCase(deleteDoctor.rejected, (state, action) => {
        state.deleteDoctorloading = false;
        state.error = action.payload;
      });
  },
});

export default doctorsSlice.reducer;
