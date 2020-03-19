import React, { Component } from 'react';
import { uuid } from 'uuidv4';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';
import PropTypes from 'prop-types';

class ImageGallery extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
    onOpenModal: PropTypes.func.isRequired,
  };

  state = {};

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.images !== this.props.images) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  render() {
    const { images, onOpenModal } = this.props;

    return (
      <ul className={styles.ImageGallery}>
        {images.map(image => (
          <ImageGalleryItem
            key={uuid()}
            image={image}
            onOpenModal={onOpenModal}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
// const ImageGallery = ({ children, ref }) => (
//   <div ref={ref}>
//     <ul className={styles.ImageGallery}>{children}</ul>
//   </div>
// );

// PropTypes.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default ImageGallery;
