import React from 'react';
import { connect } from 'react-redux';
import {
  usermenuCont,
  avatarImg,
  userName,
  logoutBtn,
} from './UserMenu.module.css';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from '../../images/avatar.jpg';

const UserMenu = ({ name, avatar, onLogOut }) => {
  return (
    <div className={usermenuCont}>
      <img src={avatar} alt="" width="32" className={avatarImg} />
      <span className={userName}>Welcome, {name}! </span>
      <button type="button" onClick={onLogOut} className={logoutBtn}></button>
    </div>
  );
};

const mapStateToProps = state => ({
  name: authSelectors.getUsername(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogOut: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
