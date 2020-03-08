import React from 'react';
import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ id, webformatURL, onOpenModal }) => (
  <div>
    <li className={styles.ImageGalleryItem} key={id}>
      <img
        src={webformatURL}
        alt=""
        className={styles.Image}
        onClick={() => onOpenModal(id)}
      />
    </li>
  </div>
);

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string,
  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
