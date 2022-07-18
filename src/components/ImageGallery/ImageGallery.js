import React, { Component } from 'react';

import { Gallery } from './ImageGallery.styled';

import ImageGalleryItem from 'components/ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    const { pictures, onShowModal } = this.props;
    return (
      <Gallery>
        {pictures.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            id={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            onShowModal={onShowModal}
            tags={tags}
          />
        ))}
      </Gallery>
    );
  }
}

export default ImageGallery;
