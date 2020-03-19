import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './Loader.module.css';
import Oval from 'react-loader-spinner';

const Loader = () => (
  <div className={styles.Container}>
    <Oval type="Oval" color="#1b6eb6" height={100} width={100} timeout={3000} />
  </div>
);

export default Loader;
