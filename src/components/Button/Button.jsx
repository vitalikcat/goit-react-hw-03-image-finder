import React from 'react';
import Loader from '../Loader/Loader';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ onClick, isLoading }) => (
  <div className={styles.Container}>
    {isLoading ? (
      <Loader />
    ) : (
      <button className={styles.Button} onClick={onClick} type="button">
        Load More
      </button>
    )}
  </div>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
