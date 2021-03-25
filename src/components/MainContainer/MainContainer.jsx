import React from 'react';
import { mainContainer } from './MainContainer.module.css';

const Container = ({ children }) => (
  <div className={mainContainer}>{children}</div>
);

export default Container;
