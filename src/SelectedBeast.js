import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
  
  CloseModal=() => {
    this.props.hideModal();
  }

  render() {
    return (
      <Modal show={this.props.modalDisplay}>
        <Modal.Header closeButton onClick={this.CloseModal}>
          <Modal.Title>{this.props.modalP}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img 
          src={this.props.modalImage}
          alt={this.props.modalP}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={this.CloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
export default SelectedBeast;
