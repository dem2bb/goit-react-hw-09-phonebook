import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import {
  authForm,
  authLabel,
  registerButton,
  authInput,
} from './Register.module.css';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const RegisterView = () => {
  const [user, setUser] = useState(initialState);
  const dispatch = useDispatch();
  const handleChange = ({ target: { name, value } }) => {
    setUser(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register(user));
    setUser(initialState);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off" className={authForm}>
        <label className={authLabel}>
          Имя
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            className={authInput}
          />
        </label>

        <label className={authLabel}>
          Почта
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className={authInput}
          />
        </label>

        <label className={authLabel}>
          Пароль
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className={authInput}
          />
        </label>

        <button type="submit" className={registerButton}>
          Регистрация
        </button>
      </form>
    </div>
  );
};

export default RegisterView;
