// Import frameworks and library's
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector } from "react-redux";

export default function Icon({ index }) {
  const shipping = useSelector((state) => state.basket.shipment);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <i
        className="bi bi-info-circle"
        style={{ cursor: "pointer", fontSize: "1.2rem" }}
        onClick={handleShow}
      ></i>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delivery Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{shipping[index].info}</p>
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
