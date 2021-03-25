import React from 'react';
import { NavLink } from 'react-router-dom';
import { navLink, activeNavLink } from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={navLink}
        activeClassName={activeNavLink}
      >
        Регистрация
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={navLink}
        activeClassName={activeNavLink}
      >
        Логин
      </NavLink>
    </div>
  );
};

export default AuthNav;
