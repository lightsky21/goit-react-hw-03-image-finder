import React, { Component } from 'react';

class Searchbar extends Component {
  state = {
    pictureName: '',
  };

  handleNameChange = event => {
    this.setState({ pictureName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    const { pictureName } = this.state;
    if (pictureName.trim() === '') {
      return;
    }
    event.preventDefault();
    this.props.onSubmit(pictureName);
    this.setState({ pictureName: '' });
  };
  render() {
    return (
      <header className="searchbar" onSubmit={this.handleSubmit}>
        <form className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleNameChange}
            value={this.state.pictureName}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
