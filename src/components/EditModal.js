import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
//import { edit } from "../store/todoState";

/*export default function EditModal({ task, index, show, handleClose }) {
  const [editedContent, setEditedContent] = useState(task.content); // State to hold the edited content
  const dispatch = useDispatch(); // Hook to dispatch actions
  const [warning, setWarning] = useState(false); // State to handle the warning message

  const handleSave = () => {
    if (editedContent !== "") {
      // Check if the edited content is not empty
      setWarning(false); // Reset the warning state
      dispatch(edit({ index, content: editedContent })); // Dispatch the edit action
      handleClose(); // Close the modal
    } else {
      setWarning(true); // Show warning if content is empty
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      {" "}
      // Modal for editing task
      <Modal.Header closeButton>
        <Modal.Title>Edit Task</Modal.Title> // Modal title
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3">
          <Form.Label>Task Content</Form.Label>
          <Form.Control
            type="text"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)} // Update edited content on change
            autoFocus
          />
          {warning && <p className="text-red">Please add text</p>} // Show
          warning if necessary
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close // Button to close the modal
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes // Button to save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
*/