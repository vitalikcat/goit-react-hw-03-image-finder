import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './Loader.module.css';
import Spinner from 'react-loader-spinner';

const Loader = () => (
  <div className={styles.Container}>
    <Spinner
      type="ThreeDots"
      color="#be3c93"
      height={100}
      width={100}
      timeout={1000}
    />
  </div>
);

export default Loader;
