// // Assuming you have already imported createAsyncThunk and axios
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const registerDoctor = createAsyncThunk(
//   "doctors/registerDoctor",
//   async (doctorData, thunkAPI) => {
//     console.log(doctorData);
//     try {
//       const response = await axios.post(
//         "https://it-academy-mis-app-eb8b8e2f87d7.herokuapp.com/api/register/doctor",
//         doctorData
//       );

//       const token = response.data.token;

//       localStorage.setItem("authToken", token);

//       console.log(token);

//       return { data: response.data, token };
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerDoctor = createAsyncThunk(
  "doctors/registerDoctor",
  async (doctorData, thunkAPI) => {
    console.log(doctorData);
    try {
      const response = await axios.post(
        "https://it-academy-mis-app-eb8b8e2f87d7.herokuapp.com/api/register/doctor",
        doctorData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );

      const token = response.data.message
        .split("Verification Token:")[1]
        .trim();
      localStorage.setItem("token", token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
