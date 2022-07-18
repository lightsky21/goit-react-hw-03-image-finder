import React, { Component } from 'react';

import { Gallery } from './ImageGallery.styled';

import ImageGalleryItem from 'components/ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    const { pictures, getLargeImageUrl } = this.props;
    return (
      <Gallery>
        {pictures.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            id={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            getLargeImageUrl={getLargeImageUrl}
          />
        ))}
      </Gallery>
    );
  }
}

export default ImageGallery;
