import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('https://it-academy-mis-app-eb8b8e2f87d7.herokuapp.com/api/login', data);
      console.log(response.data);
    } catch (error) {
      console.error('Ошибка аутентификации:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="username">Имя пользователя</label>
        <input id="username" {...register('username', { required: true })} />
        {errors.username && <span>Это поле обязательно для заполнения</span>}
      </div>
      <div>
        <label htmlFor="password">Пароль</label>
        <input id="password" type="password" {...register('password', { required: true })} />
        {errors.password && <span>Это поле обязательно для заполнения</span>}
      </div>
      <button type="submit">Войти</button>
    </form>
  );
}

export default LoginForm;
