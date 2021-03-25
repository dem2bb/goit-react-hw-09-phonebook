import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import {
  authForm,
  authLabel,
  registerButton,
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

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onLogin(this.state);
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          style={styles.form}
          autoComplete="off"
          className={authForm}
        >
          <label style={styles.label} className={authLabel}>
            Почта
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              className={authInput}
            />
          </label>

          <label style={styles.label} className={authLabel}>
            Пароль
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              className={authInput}
            />
          </label>

          <button type="submit" className={authButton}>
            Войти
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
