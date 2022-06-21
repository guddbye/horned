import React from 'react';
import HornedBeast from './HornedBeast.js';
import './Main.css'

class Main extends React.Component {
  render () {
    let beasts = this.props.data.map((beast, idx) => {
        return <HornedBeast
          title={beast.title}
          image_url={beast.image_url}
          alert={beast.alt}
          imageTitle={beast.title}
          description={beast.description}
          horns={beast.horns}
          key={idx}
          openModal={this.props.openModal}
          beast = {beast}
        />
    })
    return (
      <main>
        {beasts}
      </main>
    )
  }
}

export default Main;