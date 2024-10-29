// Import useState, UseEffect, useRef
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BasketTable from "../components/BasketTable"
import Shipment from "../components/Shipment";

// Import react components

// Import child components

// Products page component with props received from App.js
export default function Basket() {
  return (
    <Container className="App full-height">
      <Row>
        <Col md={8} >
          <BasketTable />
        </Col>
        <Col md={4}>
          <Shipment />
        </Col>
      </Row>
    </Container>
  );
}
  
