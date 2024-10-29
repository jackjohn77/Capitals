// Import frameworks and library's
import React from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector, useDispatch } from "react-redux";

// Import store Slice reducers.
import { hideModal } from "../store/reusableModalState";

export default function ReusableModal() {
  // Retrieve the reusableModalState from the Redux store.
  const show = useSelector((state) => state.reusableModal.showModal);

  // message state has already been passed to the store depending on where the
  // user is so the correct message is displayed.
  const message = useSelector((state) => state.reusableModal.message);
  const dispatch = useDispatch();

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
