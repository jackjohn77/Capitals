import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons CSS

export default function Icon() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <i
        className="bi bi-info-circle"
        style={{ cursor: "pointer", fontSize: "1.5rem" }}
        onClick={handleShow}
      ></i>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>User Instructions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>
              <Button variant="success">Add</Button> Clicking this button will
              add an new task to the bottom of the list.
            </li>
            <br />
            <li>
              <Button variant="warning">Edit</Button> Clicking this button will
              allow you edit the current task.
            </li>
            <br />
            <li>
              <Button variant="danger">Delete</Button> Clicking this button will
              delete the current task.
            </li>
            <br />
            <li>
              <input
                type="checkbox"
                
              /> Ticking the checkbox will complete the task and toggle to pending
              if clicked again. When complete this will also stop any further editing.
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
