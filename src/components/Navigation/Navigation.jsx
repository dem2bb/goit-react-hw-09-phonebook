import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { navLink, activeNavLink } from './Navigation.module.css';
import { authSelectors } from '../../redux/auth';

const Navigation = ({ isAuthenticated }) => {
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
const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
