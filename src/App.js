import React from 'react';
import Main from './Main.js';
import Modal from 'react-bootstrap/Modal';
import Header from './Header.js';
import Footer from './Footer.js';
import data from './data.json';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heart: '',
      showModal: false,
      selectedPerson: ''
    };
  };

  addHearts = () => {
    this.setState({
      heart: this.state.heart + '❤️'
    });
  };

  handleOnHide = () => {
    this.setState({
      showModal: false
    });
  };
  handleOnShowModal = (name) => {
    this.setState({
      showModal: true,
      selectedPerson: name
    });
  };


  render() {
    return (
      <>
        <Header
          hearts={this.state.heart}
        />
        <Main
          addHearts={this.addHearts}
          data={data}
          handleOnShowModal={this.handleOnShowModal}
        />
        <Footer>Brentice Loper</Footer>
        <Modal
          show={this.state.showModal}
          onHide={this.handleOnHide}
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.state.selectedPerson}</Modal.Title>
          </Modal.Header>
        </Modal>
      </>
    );
  }
}

export default App;