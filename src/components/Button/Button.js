import React, { Component } from 'react';
import { LoadMoreButton } from './Button.styled';
class Button extends Component {
  render() {
    return (
      <LoadMoreButton onClick={this.props.onClick}>Load more</LoadMoreButton>
    );
  }
}

export default Button;
