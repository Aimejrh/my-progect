// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// // Создаем асинхронное действие
// export const registerUserAsync = createAsyncThunk(
//   "register/registerUser",
//   async ({ userType, userData }, { rejectWithValue }) => {
//     let url = "";
//     switch (userType) {
//       case "doctor":
//         url =
//           "https://it-academy-mis-app-eb8b8e2f87d7.herokuapp.com/api/register/doctor";
//         break;
//       case "patient":
//         url =
//           "https://it-academy-mis-app-eb8b8e2f87d7.herokuapp.com/api/register/patient";
//         break;
//       default:
//         throw new Error("Invalid user type");
//     }

//     try {
//       const response = await fetch(url, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userData),
//       });

//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }

//       return response.json(); 
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// const registerSlice = createSlice({
//   name: "register",
//   initialState: {
//     isLoading: false,
//     error: null,
//     success: true,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(registerUserAsync.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(registerUserAsync.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.success = true;
//       })
//       .addCase(registerUserAsync.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export const {} = registerSlice.actions;

// export default registerSlice.reducer;
