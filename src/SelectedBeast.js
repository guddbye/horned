import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';


class SelectedBeast extends React.Component {
  render () {
    return (
      <>
        <Modal
          show={this.props.showModal}
          onHide={this.props.hideModal}
        >           
          <Modal.Header closeButton>
            {this.props.selectedBeast.title}
          </Modal.Header>
          <Image src={this.props.selectedBeast.image_url} alt={this.props.selectedBeast.title}/>
          <Modal.Body>
            {this.props.selectedBeast.description}
          </Modal.Body>
        </Modal>
        
      </>
    );
  }
}

export default SelectedBeast;