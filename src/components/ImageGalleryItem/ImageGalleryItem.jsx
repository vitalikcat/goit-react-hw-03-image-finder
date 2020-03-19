import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image: { key, smallUrl }, onOpenModal }) => {
  return (
    <div>
      <li
        key={key}
        className={styles.ImageGalleryItem}
        onClick={() => onOpenModal(key)}
      >
        <img src={smallUrl} alt="" className={styles.Image} />
      </li>
    </div>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    key: PropTypes.number.isRequired,
    smallUrl: PropTypes.string.isRequired,
  }).isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
