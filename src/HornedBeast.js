import React from 'react';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {
  render () {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <img src={this.props.image_url} alt={this.props.description}
        title={this.props.title}/>
        <p>{this.props.description}</p>
        <Button>Bootstrap button</Button>
        <button>Plain html button</button>
      </article>
    )
  }
}

export default HornedBeast;