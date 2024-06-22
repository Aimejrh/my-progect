import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/slice/authSlice";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const error = useSelector((state) => state.auth.error);
  const user = useSelector((state) => state.auth.user);
  const { message, loading } = useSelector((state) => state.confirm);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(loginUser({data, navigate:() => navigate("/profile") }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="Registercon">
        <label htmlFor="username">Имя пользователя</label>
        <input id="username" {...register("username", { required: true })} />
        {errors.username && <span>Это поле обязательно для заполнения</span>}
      </div>
      <div className="Registercon">
        <label htmlFor="password">Пароль</label>
        <input
          id="password"
          type="password"
          {...register("password", { required: true })}
        />
        {errors.password && <span>Это поле обязательно для заполнения</span>}
      </div>
      <button className="RegisterButton" type="submit">
        Войти
      </button>
      {error && <p>{error.message || "Ошибка аутентификации"}</p>}
    </form>
  );
}

export default LoginForm;
