import React, { Component, createRef } from 'react';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  overlayRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = event => {
    if (event.code !== 'Escape') return;
    this.props.onClose();
  };

  handleOverlayClick = event => {
    const { current } = this.overlayRef;

    if (current && event.target !== current) return;
    this.props.onClose();
  };

  render() {
    return (
      <div
        className={styles.Overlay}
        ref={this.overlayRef}
        onClick={this.handleOverlayClick}
      >
        <div className={styles.Modal}>
          <img src={this.props.modalImage} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  modalImage: PropTypes.string.isRequired,
};
