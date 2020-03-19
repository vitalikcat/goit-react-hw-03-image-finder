import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';

export default class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    value: '',
  };

  handleChange = event => {
    const { value } = event.target;

    this.setState({ value: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { value } = this.state;

    this.props.onSubmit(value);

    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;

    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            value={value}
            onChange={this.handleChange}
            className={styles.SearchFormInput}
            type="text"
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
