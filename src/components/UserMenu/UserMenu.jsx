import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  usermenuCont,
  avatarImg,
  userName,
  logoutBtn,
} from './UserMenu.module.css';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from '../../images/avatar.jpg';

const UserMenu = () => {
  const name = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();

  const onLogOut = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);

  return (
    <div className={usermenuCont}>
      <img src={defaultAvatar} alt="" width="32" className={avatarImg} />
      <span className={userName}>Welcome, {name}! </span>
      <button type="button" onClick={onLogOut} className={logoutBtn}></button>
    </div>
  );
};

export default UserMenu;
