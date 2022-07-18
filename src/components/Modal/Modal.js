import React, { Component } from 'react';
import { Overlay, ModalImage } from './Modal.styled';

class Modal extends Component {
  componentDidMount() {}
  render() {
    return (
      <Overlay>
        <ModalImage>{this.props.children}</ModalImage>
      </Overlay>
    );
  }
}

export default Modal;
