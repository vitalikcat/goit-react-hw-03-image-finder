import React from 'react';
import styles from './Searchbar.module.css';
import PropTypes from 'prop-types';

const Searchbar = ({ query, onChange, onSubmit }) => (
  <header className={styles.Searchbar}>
    <form className={styles.SearchForm} onSubmit={onSubmit}>
      <button type="submit" className={styles.SearchFormButton}>
        <span className={styles.SearchFormButtonLabel}>Search</span>
      </button>

      <input
        className={styles.SearchFormInput}
        type="text"
        value={query}
        placeholder="Search images and photos"
        onChange={onChange}
      />
    </form>
  </header>
);

Searchbar.propTypes = {
  query: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
