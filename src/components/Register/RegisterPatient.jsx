import React, {useEffect} from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerPatient } from "../../store/features/patientActions";
import { useNavigate } from "react-router-dom";

const RegisterPatient = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const {success} = useSelector(state => state.regist)

  const onSubmit = async (data) => {
    const formattedData = {
      user: {
        username: data.user.username,
        password: data.user.password,
        email: data.user.email,
      },
      patient: {
        firstName: data.patient.firstName,
        lastName: data.patient.lastName,
        patronymic: data.patient.patronymic,
        phoneNumber: data.patient.phoneNumber,
        passport: Number(data.patient.passport),
        dateOfBirth: data.patient.dateOfBirth,
        taxId: data.patient.taxId,
        sex: data.patient.sex
      },
    };

    console.log(formattedData)
    try {
      dispatch(registerPatient({patientData: formattedData, navigate: () => navigate('/ConfirmationRegistration')}));
    } catch (error) {
      console.error(error);
    }
  };
  const validateUsername = (value) => {
    if (!value) {
      return "Это обязательное поле";
    }
    if (!/^([A-Za-z])[A-Za-z0-9_\.]{7,29}$/.test(value)) {
      return "Имя пользователя должно начинаться с буквы и содержать от 8 до 30 символов, включая буквы, цифры, знак подчеркивания и точку.";
    }
    return true;
  };

  const validatePassword = (value) => {
    if (!value) {
      return "Это обязательное поле";
    }
    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*[^@#$%^&*].*/.test(value)) {
      return "Пароль должен содержать хотя бы одну цифру, одну строчную и одну заглавную букву, и один спецсимвол (!), длина от 8 до 20.";
    }
    return true;
  };

  const validateEmail = (value) => {
    if (!value) {
      return "Это обязательное поле";
    }
    if (!/\S+@\S+\.\S+/.test(value)) {
      return "Введите валидный адрес электронной почты";
    }
    return true;
  };

  const validatePhoneNumber = (value) => {
    if (!value) {
      return "Это обязательное поле";
    }
    if (!/^[0-9\s()-+]{7,25}$/.test(value)) {
      return "Номер телефона должен содержать от 7 до 25 символов, содержать только цифры, пробелы, скобки, дефисы и плюс.";
    }
    return true;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Регистрация пациента</h2>

      <div className="Registercon">
        <label htmlFor="username">Имя пользователя</label>

        <input
          id="username"
          {...register("user.username", { validate: validateUsername })}
        />

        {errors.user?.username && <span>{errors.user.username.message}</span>}
      </div>

      <div className="Registercon">
        <label htmlFor="password">Пароль</label>

        <input
          id="password"
          type="password"
          {...register("user.password", { validate: validatePassword })}
        />
        {errors.user?.password && <span>{errors.user.password.message}</span>}
      </div>

      <div className="Registercon">
        <label htmlFor="email">Email</label>

        <input
          id="email"
          type="email"
          {...register("user.email", { validate: validateEmail })}
        />
        {errors.user?.email && <span>{errors.user.email.message}</span>}
      </div>

      <div className="Registercon">
        <label htmlFor="firstName">Имя</label>

        <input
          id="firstName"
          {...register("patient.firstName", { required: true })}
        />
        {errors.patient?.firstName && <span>Это обязательное поле</span>}
      </div>

      <div className="Registercon">
        <label htmlFor="lastName">Фамилия</label>

        <input
          id="lastName"
          {...register("patient.lastName", { required: true })}
        />
        {errors.patient?.lastName && <span>Это обязательное поле</span>}
      </div>

      <div className="Registercon">
        <label htmlFor="patronymic">Отчество</label>

        <input id="patronymic" {...register("patient.patronymic")} />
      </div>

      <div className="Registerconflex">
        <div className="Registercon">
          <label htmlFor="sex">Пол</label>

          <select {...register("patient.sex")}>
            <option value="">Выберите пол</option>
            <option value="MALE">Мужской</option>
            <option value="FEMALE">Женский</option>
          </select>
        </div>

        <div className="Registercon">
          <label htmlFor="dateOfBirth">Дата рождения</label>

          <input
            id="dateOfBirth"
            type="date"
            {...register("patient.dateOfBirth")}
          />
        </div>
      </div>

      <div className="Registercon">
        <label htmlFor="passport">Номер паспорта</label>

        <input
          id="passport"
          {...register("patient.passport", { required: true })}
        />
        {errors.patient?.passport && <span>Это обязательное поле</span>}
      </div>

      <div className="Registercon">
        <label htmlFor="taxId">Номер налогового идентификатора</label>

        <input id="taxId" {...register("patient.taxId", { required: true })} />
        {errors.patient?.taxId && <span>Это обязательное поле</span>}
      </div>

      <div className="Registercon">
        <label htmlFor="address">Адрес проживания</label>

        <input
          id="address"
          {...register("patient.address", { required: true })}
        />
        {errors.patient?.address && <span>Это обязательное поле</span>}
      </div>

      {/* <div className="Registercon">
        <label htmlFor="specialization">Место работы</label>

        <input
          id="specialization"
          {...register("patient.specialization", { required: true })}
        />
        {errors.patient?.placeOfWork && <span>Это обязательное поле</span>}
      </div> */}

      <div className="Registercon">
        <label htmlFor="phoneNumber">Номер телефона</label>

        <input
          id="phoneNumber"
          {...register("patient.phoneNumber", {
            required: true,
            validate: validatePhoneNumber,
          })}
        />
        {errors.patient?.phoneNumber && <span>Это обязательное поле</span>}
      </div>

      <button to="/ConfirmationRegistration" className="RegisterButton" type="submit">
        Зарегистрироваться
      </button>


    </form>
  );
};

export default RegisterPatient;

// components/LoginForm.js
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setToken } from '../features/auth/authSlice';
// import axios from 'axios';

// const LoginForm = () => {
//   const dispatch = useDispatch();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post('https://your-api-url.com/api/login', {
//         username,
//         password,
//       });

//       // Предполагается, что сервер возвращает токен в поле 'token' ответа
//       dispatch(setToken(response.data.token));
//     } catch (error) {
//       console.error('Ошибка при логине:', error);
//     }
//   };

//   return (
//   );
// };

// export default LoginForm;
