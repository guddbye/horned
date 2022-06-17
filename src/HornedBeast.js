import React from "react";
import './HornedBeast.css';
import Card from 'react-bootstrap/Card'

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            votes: 0
        };
    };

handleVotes = () => {
    this.setState({
        votes: this.state.votes + 1
    });
};

handleTitleClick = () => {
	this.props.handleOnShowModal(this.props.title, this.props.image_url)
}



render() {
    return (
    <article>
        <Card bg="dark" text="light" style={{ width: '20rem' }}>
  <Card.Body>
    <Card.Title onClick={this.handleTitleClick}>{this.props.title}</Card.Title>
    <Card.Text>{this.props.description}</Card.Text>
    <Card.Text> 💚 {this.state.votes} Likes </Card.Text>
  <Card.Img variant="bottom" src={this.props.image_url} onClick={this.handleVotes}/>
  </Card.Body>
</Card>
</article>
    );
};



}

export default HornedBeast;