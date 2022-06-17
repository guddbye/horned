import React from 'react';
import './Modal.css'
import Modal from 'react-bootstrap/Modal'

class SelectedBeast extends React.Component {

  render() {
    return (             
        <Modal
          show={this.props.show}
          onHide={() => this.props.onHide}
          size="lg"
          centered>
            
          <Modal.Header closeButton>
            <Modal.Title>
              {this.props.beastTitle}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img className='img-fluid' src={this.props.image_url} alt={this.props.title} />
            <p>
              {this.props.desc}{this.props.desc}{this.props.desc}{this.props.desc}{this.props.desc}{this.props.desc}{this.props.desc}{this.props.desc}{this.props.desc}{this.props.desc}{this.props.desc}{this.props.desc}{this.props.desc}{this.props.desc}{this.props.desc}{this.props.desc}{this.props.desc}{this.props.desc}{this.props.desc}{this.props.desc}{this.props.desc}{this.props.desc}{this.props.desc}{this.props.desc}
            </p>
          </Modal.Body>
        </Modal>      
    );
  };
}

export default SelectedBeast;