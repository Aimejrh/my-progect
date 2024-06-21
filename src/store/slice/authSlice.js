import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { saveTokensToLocalStorage } from "./authSlice"; // Путь к вашему slice

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://it-academy-mis-app-eb8b8e2f87d7.herokuapp.com/api/login",
        userData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      // Проверяем, что вернул сервер после успешной авторизации
      if (response.data && response.data.tokens) {
        const { access_token, refresh_token } = response.data.tokens;

        // Сохраняем токены в localStorage
        saveTokensToLocalStorage({ access_token, refresh_token });
      }

      return response.data; // Возвращаем данные пользователя и токены
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.error = null;

      // Очищаем токены из localStorage при выходе
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

// Функция для сохранения токенов в localStorage
// Ваш существующий slice
const saveTokensToLocalStorage = (tokens) => {
  localStorage.setItem("accessToken", tokens.access_token);
  localStorage.setItem("refreshToken", tokens.refresh_token);
};

// Загрузка токенов из localStorage
export const loadTokensFromLocalStorage = () => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  return { accessToken, refreshToken };
};

export const { logout } = authSlice.actions;
export default authSlice.reducer;
