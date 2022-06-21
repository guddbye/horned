import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './HornedBeast.css';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0
    };
  };

  handleVotes = () => {
    this.setState({
      votes: this.state.votes + 1,
    })
  }

  

  render () {
    return (
      <Card style={{ width: '20rem' }}>
      <Card.Img 
        variant="top" 
        src={this.props.image_url} 
        onClick={() => {this.props.openModal(this.props.beast)}} 
        alt={this.props.alt} 
        title={this.props.title}
      />
      <Card.Text>❤️ {this.state.votes}</Card.Text>
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>{this.props.description}</Card.Text>
        <Button onClick={this.handleVotes} variant="primary">Like</Button>
      </Card.Body>
    </Card>
    )
  }
}

export default HornedBeast;
