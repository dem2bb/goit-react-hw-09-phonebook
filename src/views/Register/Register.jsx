import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import {
  authForm,
  authLabel,
  registerButton,
  authInput,
} from './Register.module.css';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onRegister(this.state);
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          autoComplete="off"
          className={authForm}
        >
          <label className={authLabel}>
            Имя
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              className={authInput}
            />
          </label>

          <label className={authLabel}>
            Почта
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              className={authInput}
            />
          </label>

          <label className={authLabel}>
            Пароль
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              className={authInput}
            />
          </label>

          <button type="submit" className={registerButton}>
            Регистрация
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
