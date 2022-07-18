import React, { Component } from 'react';

import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  render() {
    const { id, largeImageURL, webformatURL, getLargeImageUrl } = this.props;
    return (
      <GalleryItem key={id}>
        <GalleryImage
          src={webformatURL}
          alt="op"
          onClick={() => getLargeImageUrl(largeImageURL)}
        />
      </GalleryItem>
    );
  }
}

export default ImageGalleryItem;
