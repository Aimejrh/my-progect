// store/slice/authSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const confirmRegistration = createAsyncThunk(
  "confirmSlice/confirmRegistration",
  async ({ email, confirmCode }, thunkAPI) => {
    try {
      const response = await axios.post("https://it-academy-mis-app-eb8b8e2f87d7.herokuapp.com/api/register/confirm", { email, confirmCode });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || error.message
      );
    }
  }
);

const confirmSlice = createSlice({
  name: "confirmSlice",
  initialState: {
    user: null,
    loading: false,
    error: null,
    message: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(confirmRegistration.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(confirmRegistration.fulfilled, (state, action) => {
        state.loading = false;
        state.message = "Регистрация подтверждена";
      })
      .addCase(confirmRegistration.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default confirmSlice.reducer;
