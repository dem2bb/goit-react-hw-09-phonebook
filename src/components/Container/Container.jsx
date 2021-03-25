import React from 'react';
import { ContainerPage } from './Container.module.css';

const Container = ({ children }) => (
  <div className={ContainerPage}>{children}</div>
);

export default Container;
