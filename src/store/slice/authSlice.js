import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { saveTokensToLocalStorage } from "./authSlice"; // Путь к вашему slice

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({data: userData, navigate}, thunkAPI) => {
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
        navigate()
      }


      return response.data; // Возвращаем данные пользователя и токены
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);


export const getProfile = createAsyncThunk("get/profile", async () => {
  try {
    const { data } = await axios.get(`https://it-academy-mis-app-eb8b8e2f87d7.herokuapp.com/api/users/byToken?token=${localStorage.getItem("accessToken")}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      },
    })

    return data.result;
  } catch (e) {}
})

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
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
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
      })
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
