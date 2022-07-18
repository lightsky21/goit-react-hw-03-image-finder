import React, { Component } from 'react';
import { AppContainer } from './App.styled';
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Modal from './Modal'

import { Audio } from  'react-loader-spinner'




export class App extends Component  {
  state = {
    pictureName: '',
    pictures: null,
    page: 1,
    loading: false,
    showModal: false,
    largeImageURL: '',
    tags: ''
  }

  componentDidUpdate(prevProps, PrevState) {
    if (PrevState.pictureName !== this.state.pictureName) {
      this.setState({
        loading: true,
      pictures: null})
      fetch(`https://pixabay.com/api/?q=${this.state.pictureName}&page=${this.state.page}&key=27052738-1c695e8f266ee15d7b1e30a8e&image_type=photo&orientation=horizontal&per_page=12`)
        .then(res => res.json()).then(
          pictures => this.setState({ pictures: pictures.hits })
          
      ).finally(
          () => this.setState({loading: false})
        )
    }
  }

  handleFormSubmit = pictureName => {
    this.setState({ pictureName });
  }

  toggleModal = () =>{
    this.setState(({showModal}) => ({showModal: !showModal}))
  }
  onShowModal = ({ largeImageURL,tags }) => {
    this.toggleModal();
    this.setState({ largeImageURL, tags });
  }
  render() {
    const { loading, pictures, showModal, largeImageURL, tags } = this.state;
    

    return <AppContainer>
      <Searchbar onSubmit={this.handleFormSubmit} />
      {loading && <Audio
    height="100"
    width="100"
    color='orange'
    ariaLabel='loading'
     />}
      
  
      {pictures && <ImageGallery pictures={pictures} onShowModal={this.onShowModal } />}
    {showModal && <Modal ><img src={largeImageURL} alt={tags} /></Modal>}
    </AppContainer>;
  }
};
