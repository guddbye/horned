import React from 'react';
import Main from './Main.js';
import Header from './Header.js';
import Footer from './Footer.js';
import './App.css';


class App extends React.Component {

  render() {
    return (
      <>
        <Header/>
        <Main/>
        <Footer/>
      </>
    );
  }
}

export default App;