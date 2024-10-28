// Import frameworks and library's
import React from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons CSS
import { useSelector, useDispatch } from "react-redux";

// Import store Slice reducers.
import { hideModal } from "../store/reusableModalState";

export default function ReusableModal({}) {
  const show = useSelector((state) => state.reusableModal.showModal);
  const message = useSelector((state) => state.reusableModal.message);
  const dispatch = useDispatch();
  // Ensure props are destructured

  const handleClose = () => dispatch(hideModal());

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
