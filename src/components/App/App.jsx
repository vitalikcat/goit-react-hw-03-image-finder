import React, { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import Loader from '../Loader/Loader';
import styles from './App.module.css';
import * as imagesAPI from '../../services/api';

export default class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    modalImage: '',
    isLoading: false,
    isModalOpen: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.getImagesData();
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  handleQueryChange = event => {
    const { value } = event.target;

    this.setState({ query: value });
  };

  handleSubmitForm = event => {
    event.preventDefault();
    const { query, images } = this.state;

    if (query === '') {
      return;
    }

    if (images !== [] && images.length > 11) {
      this.setState({
        images: [],
        page: 1,
      });
    } else {
      this.getImagesData();
    }
  };

  getImagesData = () => {
    const { query, page } = this.state;
    this.setState({ isLoading: true });

    imagesAPI
      .fetchImages(query, page)
      .then(response => {
        if (response.ok) return response.json();
        throw new Error(response.statusText);
      })
      .then(({ hits }) =>
        this.setState({
          images: [...this.state.images, ...hits],
        }),
      )
      .catch(console.log)
      .finally(() => this.setState({ isLoading: false }));
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  openModal = id => {
    const { images } = this.state;

    const imageData = images.find(image => image.id === id);
    const largeUrl = imageData.largeImageURL;

    this.setState({ isModalOpen: true, modalImage: largeUrl });
  };

  handleLoadButton = () => {
    const { query } = this.state;

    if (query === '') {
      return;
    }

    this.setState(state => ({
      page: state.page + 1,
    }));
  };

  render() {
    const { images, query, isLoading, isModalOpen, modalImage } = this.state;

    return (
      <div className={styles.App}>
        <Searchbar
          query={query}
          onChange={this.handleQueryChange}
          onSubmit={this.handleSubmitForm}
        />
        {isLoading && <Loader />}
        {images.length ? (
          <ImageGallery
            images={images}
            onOpenModal={this.openModal}
            onCloseModal={this.closeModal}
          />
        ) : null}
        {images.length ? (
          <Button onClick={this.handleLoadButton} isLoading={isLoading} />
        ) : null}
        {isModalOpen && (
          <Modal
            onClose={this.closeModal}
            onOpen={this.openModal}
            modalImage={modalImage}
          />
        )}
      </div>
    );
  }
}
