import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import './HornedBeast.css';

class HornedBeast extends React.Component{
  constructor(props){
    super(props);
    this.state={
      likes:0,
    };
  };

  handleLikes=()=>{
    this.setState({
      likes:this.state.likes +1
    })
  };

  handleModalOpenClick=()=>{
    this.props.openModal(this.props.title,this.props.image_url,this.props.desc);
  }

  render(){
    return (           
      <Card bg="info" style={{ width: '18rem'}}>
      <Card.Img variant="top" src={this.props.image_url} />
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
          {this.props.desc}
        </Card.Text>
        <Button variant="secondary" onClick={this.handleLikes}>Like</Button>
        <p>💚 {this.state.likes} Likes </p>
      </Card.Body>
    </Card>
      );
  };
}

export default HornedBeast;