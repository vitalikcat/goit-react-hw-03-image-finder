import React, { Component } from 'react';
import styles from './App.module.css';
import * as API from '../../services/api';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import Loader from '../Loader/Loader';

const mapper = items => {
  return items.map(
    ({ id: key, webformatURL: smallUrl, largeImageURL: largeUrl }) => ({
      key,
      smallUrl,
      largeUrl,
    }),
  );
};

export default class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    modalImage: '',
    isLoading: false,
    isModalOpen: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;

    if (prevState.page !== page || prevState.searchQuery !== searchQuery) {
      this.getImagesData(searchQuery, page);
    }
  }

  handleSearch = query => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };

  getImagesData = (query, page) => {
    this.setState({ isLoading: true });

    API.getImages(query, page)
      .then(({ data }) => {
        this.setState(state => ({
          images: state.images.concat(mapper(data.hits)),
        }));
      })
      .catch(console.log)
      .finally(() => this.setState({ isLoading: false }));
  };

  handleLoadButton = () => {
    this.setState(state => ({
      page: state.page + 1,
    }));
  };

  openModal = key => {
    const { images } = this.state;

    const imageData = images.find(image => image.key === key);
    const bigImage = imageData.largeUrl;

    this.setState({ isModalOpen: true, modalImage: bigImage });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { images, isLoading, isModalOpen, modalImage } = this.state;

    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleSearch} />
        {isLoading && <Loader />}
        {!!images.length && (
          <>
            <ImageGallery images={images} onOpenModal={this.openModal} />
            <Button onClick={this.handleLoadButton} isLoading={isLoading} />
          </>
        )}
        {isModalOpen && (
          <Modal onCloseModal={this.closeModal} modalImage={modalImage} />
        )}
      </div>
    );
  }
}
