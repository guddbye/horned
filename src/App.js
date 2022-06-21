import React from 'react';
import data from './data.json';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import {Form, Button} from 'react-bootstrap'
import SelectedBeast from './SelectedBeast';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: '',
      howToSort: '',
      sortedData: data,
    };
  }

  handleOnShowModal = (beast) => {
    this.setState({
      showModal: true,
      selectedBeast: beast,
    });
  };

  handleonHide = () => {
    this.setState({
      showModal: false
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let selected = event.target.selected.value;
    this.setState({
      howToSort: selected
    });
  };

  handleInput = (event) => {
    let hornsNum = event.target.value;
    this.setState({
      horns: hornsNum
    });
  }

  handleSelect = event => {
    let selected = event.target.value;
    console.log(selected);
    if (selected === '1') {
      let newData = data.filter(beast => beast.horns === 1);
      this.setState({
        sortedData: newData
      });
    } else if (selected === '2') {
      let newData = data.filter(beast => beast.horns === 2);
      this.setState({
        sortedData: newData
      });
    } else if (selected === '3') {
      let newData = data.filter(beast => beast.horns === 3);
      this.setState({
        sortedData: newData
      });
    } else if (selected === '100') {
      let newData = data.filter(beast => beast.horns === 100);
      this.setState({
        sortedData: newData
      });
    } else {
      this.setState({
        sortedData: data
      });
    }
}
  render(){
    return (
      <>
        <Header/>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <p>Filter</p>
            <Form.Select name="selected" onChange={this.handleSelect}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">100</option>
              <option value="all">All</option>
            </Form.Select>
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
        <Main
          data={this.state.sortedData}
          openModal={this.handleOnShowModal}
        />
        <SelectedBeast
          showModal={this.state.showModal}
          hideModal={this.handleonHide}
          selectedBeast={this.state.selectedBeast}
        />
        <Footer/>
      </>
    );
  }
}

export default App;