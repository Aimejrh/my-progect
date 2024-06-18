import { createSlice } from "@reduxjs/toolkit";
import { registerDoctor } from "../features/doctorAction";

const initialState = {
  loading: false,
  success: false,
  error: null,
};

export const doctorSlice = createSlice({
  name: "doctors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerDoctor.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(registerDoctor.fulfilled, (state) => {
        console.log("fulfilled")
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(registerDoctor.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export default doctorSlice.reducer;
