import React from 'react';
import data from './data.json';
import HornedBeast from './HornedBeast';
import './Main.css';

class Main extends React.Component {
  render() {

    let horns = data.map((horn, idx) => {
      return <HornedBeast
        image_url={horn.image_url}
        title={horn.title}
        description={horn.description}
        key={idx}
      />

    }) 
    return (
      <main>
        {horns}
      </main>
    );
  }
}

export default Main;