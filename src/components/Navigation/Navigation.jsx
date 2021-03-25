import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { navLink, activeNavLink } from './Navigation.module.css';
import { authSelectors } from '../../redux/auth';

const Navigation = () => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return (
    <div>
      <NavLink to="/" exact className={navLink} activeClassName={activeNavLink}>
        Главная
      </NavLink>
      {isAuthenticated && (
        <NavLink
          to="/contacts"
          exact
          className={navLink}
          activeClassName={activeNavLink}
        >
          Контакты
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
