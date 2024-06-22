import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerDoctor } from "../../store/features/doctorAction";
import { useNavigate } from "react-router-dom";

const RegisterDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const registerSuc = useSelector((state) => state.doctors.success);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const formattedData = {
      user: {
        username: data.username,
        password: data.password,
        email: data.email,
      },
      doctor: {
        firstName: data.firstName,
        lastName: data.lastName,
        patronymic: data.patronymic,
        specialization: data.specialization,
        phoneNumber: data.phoneNumber,
        departmentId: Number(data.departmentId),
      },
    };
    await dispatch(registerDoctor(formattedData));
  };
  
  if (registerSuc) {
    navigate("/profile");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="Registercon">
        <label htmlFor="username">Имя пользователя</label>
        <input
          {...register("username", { required: true })}
          type="text"
          id="username"
        />
        {errors.username && <span>Это поле обязательно для заполнения</span>}
      </div>
      <div className="Registercon">
        <label htmlFor="password">Пароль</label>
        <input
          {...register("password", { required: true })}
          type="password"
          id="password"
        />
        {errors.password && <span>Это поле обязательно для заполнения</span>}
      </div>
      <div className="Registercon">
        <label htmlFor="email">Email</label>
        <input
          {...register("email", { required: true })}
          type="email"
          id="email"
        />
        {errors.email && <span>Это поле обязательно для заполнения</span>}
      </div>
      <div className="Registercon">
        <label htmlFor="firstName">Имя</label>
        <input
          {...register("firstName", { required: true })}
          type="text"
          id="firstName"
        />
        {errors.firstName && <span>Это поле обязательно для заполнения</span>}
      </div>
      <div className="Registercon">
        <label htmlFor="lastName">Фамилия</label>
        <input
          {...register("lastName", { required: true })}
          type="text"
          id="lastName"
        />
        {errors.lastName && <span>Это поле обязательно для заполнения</span>}
      </div>
      <div  className="Registercon">
        <label htmlFor="patronymic">Отчество</label>
        <input
          {...register("patronymic", { required: true })}
          type="text"
          id="patronymic"
        />
        {errors.patronymic && <span>Это поле обязательно для заполнения</span>}
      </div>
      <div className="Registercon">
        <label htmlFor="specialization">Специализация</label>
        <input
          {...register("specialization", { required: true })}
          type="text"
          id="specialization"
        />
        {errors.specialization && (
          <span>Это поле обязательно для заполнения</span>
        )}
      </div>
      <div  className="Registercon">
        <label htmlFor="phoneNumber">Номер телефона</label>
        <input
          {...register("phoneNumber", { required: true })}
          type="tel"
          id="phoneNumber"
        />
        {errors.phoneNumber && <span>Это поле обязательно для заполнения</span>}
      </div>
      <div  className="Registercon">
        <label htmlFor="departmentId">ID отделения</label>
        <input
          {...register("departmentId", { required: true })}
          type="number"
          id="departmentId"
        />
        {errors.departmentId && (
          <span>Это поле обязательно для заполнения</span>
        )}
      </div>
      <button className="RegisterButton" type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default RegisterDoctor;
