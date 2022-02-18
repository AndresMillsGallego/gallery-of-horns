import React from 'react';
import Modal from 'react-bootstrap/Modal'

import './SelectedBeast.css'

class SelectedBeast extends React.Component {


  render() {
    return (
      <Modal 
        show={this.props.displayModal} 
        size='lg'
        centered
        onHide={this.props.closeModal}
        
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.props.beast.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.props.beast.image_url} alt={this.props.beast.title} title={this.props.beast.title}></img>
          </Modal.Body>
          <Modal.Footer>{this.props.beast.description}</Modal.Footer>
        </Modal>
    )
  }
}

export default SelectedBeast;