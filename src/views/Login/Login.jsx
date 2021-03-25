import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import {
  authForm,
  authLabel,
  authInput,
} from '../Register/Register.module.css';
import { authButton } from './Login.module.css';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

const initialState = {
  email: '',
  password: '',
};

const LoginView = () => {
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
    dispatch(authOperations.logIn(user));
    setUser(initialState);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={styles.form}
        autoComplete="off"
        className={authForm}
      >
        <label style={styles.label} className={authLabel}>
          Почта
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className={authInput}
          />
        </label>

        <label style={styles.label} className={authLabel}>
          Пароль
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className={authInput}
          />
        </label>

        <button type="submit" className={authButton}>
          Войти
        </button>
      </form>
    </div>
  );
};

export default LoginView;
