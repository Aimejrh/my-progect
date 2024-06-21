// // store/slice/appointmentsSlice.js

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const API_URL = "https://it-academy-mis-app-eb8b8e2f87d7.herokuapp.com/api/appointments";

// export const fetchAppointments = createAsyncThunk(
//   "appointments/fetchAppointments",
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get(API_URL);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(
//         error.response.data.message || error.message
//       );
//     }
//   }
// );

// export const getAppointmentById = createAsyncThunk(
//   "appointments/getAppointmentById",
//   async (id, thunkAPI) => {
//     try {
//       const response = await axios.get(`${API_URL}/${id}`);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(
//         error.response.data.message || error.message
//       );
//     }
//   }
// );

// export const updateAppointment = createAsyncThunk(
//   "appointments/updateAppointment",
//   async ({ id, appointmentData }, thunkAPI) => {
//     try {
//       const response = await axios.put(`${API_URL}/${id}`, appointmentData);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(
//         error.response.data.message || error.message
//       );
//     }
//   }
// );

// export const deleteAppointment = createAsyncThunk(
//   "appointments/deleteAppointment",
//   async (id, thunkAPI) => {
//     try {
//       const response = await axios.delete(`${API_URL}/${id}`);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(
//         error.response.data.message || error.message
//       );
//     }
//   }
// );

// export const createAppointment = createAsyncThunk(
//   "appointments/createAppointment",
//   async (appointmentData, thunkAPI) => {
//     try {
//       const response = await axios.post(API_URL, appointmentData);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(
//         error.response.data.message || error.message
//       );
//     }
//   }
// );

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL =
  "https://it-academy-mis-app-eb8b8e2f87d7.herokuapp.com/api/appointments";

export const fetchAppointments = createAsyncThunk(
  "appointments/fetchAppointments",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || error.message
      );
    }
  }
);

export const getAppointmentById = createAsyncThunk(
  "appointments/getAppointmentById",
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

export const updateAppointment = createAsyncThunk(
  "appointments/updateAppointment",
  async ({ id, appointmentData }, thunkAPI) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, appointmentData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || error.message
      );
    }
  }
);

export const deleteAppointment = createAsyncThunk(
  "appointments/deleteAppointment",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || error.message
      );
    }
  }
);

export const createAppointment = createAsyncThunk(
  "appointments/createAppointment",
  async (appointmentData, thunkAPI) => {
    try {
      const response = await axios.post(API_URL, appointmentData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || error.message
      );
    }
  }
);

const appointmentsSlice = createSlice({
  name: "appointments",
  initialState: {
    appointments: [],
    appointment: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAppointments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAppointments.fulfilled, (state, action) => {
        state.loading = false;
        state.appointments = action.payload;
      })
      .addCase(fetchAppointments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getAppointmentById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAppointmentById.fulfilled, (state, action) => {
        state.loading = false;
        state.appointment = action.payload;
      })
      .addCase(getAppointmentById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateAppointment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateAppointment.fulfilled, (state, action) => {
        state.loading = false;
        state.appointment = action.payload;
        state.appointments = state.appointments.map((appointment) =>
          appointment.id === action.payload.id ? action.payload : appointment
        );
      })
      .addCase(updateAppointment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteAppointment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteAppointment.fulfilled, (state, action) => {
        state.loading = false;
        state.appointments = state.appointments.filter(
          (appointment) => appointment.id !== action.payload.id
        );
      })
      .addCase(deleteAppointment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createAppointment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createAppointment.fulfilled, (state, action) => {
        state.loading = false;
        state.appointments.push(action.payload);
      })
      .addCase(createAppointment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default appointmentsSlice.reducer;
