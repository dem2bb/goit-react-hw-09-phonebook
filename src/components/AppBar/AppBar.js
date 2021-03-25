import React from 'react';
import { connect } from 'react-redux';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import { header } from './AppBar.module.css';
import { authSelectors } from '../../redux/auth';

const AppBar = ({ isAuthenticated }) => {
  return (
    <header className={header}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
