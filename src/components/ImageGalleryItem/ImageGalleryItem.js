import React, { Component } from 'react';

import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  render() {
    const { id, largeImageURL, webformatURL, onShowModal, tags } = this.props;

    return (
      <GalleryItem key={id}>
        <GalleryImage
          src={webformatURL}
          alt={tags}
          onClick={() => onShowModal({ largeImageURL, tags })}
        />
      </GalleryItem>
    );
  }
}

export default ImageGalleryItem;
