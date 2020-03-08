import React from 'react';
import Loader from '../Loader/Loader';
import styles from './Button.module.css';

const Button = ({ onClick, isLoading }) => (
  <div className={styles.Container}>
    {isLoading ? (
      <Loader />
    ) : (
      <button className={styles.Button} onClick={onClick}>
        Load More
      </button>
    )}
  </div>
);

export default Button;
