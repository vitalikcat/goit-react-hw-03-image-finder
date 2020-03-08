import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, onOpenModal }) => (
  <div>
    <ul className={styles.ImageGallery}>
      {images.map(item => (
        <ImageGalleryItem key={item.id} {...item} onOpenModal={onOpenModal} />
      ))}
    </ul>
  </div>
);

PropTypes.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGallery;
