
import React from "react";
import { Button, Modal } from "react-bootstrap";
const FavouritesModal: React.FC<{
  show: boolean;
  handleClose: () => void;
  handleSubmit: () => void;
}> = ({ show, handleClose, handleSubmit }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Question</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        are you sure you want to add this fork to your favorites ?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          No
        </Button>
        <Button variant="success" onClick={handleSubmit}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FavouritesModal;
