// Import frameworks and library's
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Import child components
import BasketTable from "../components/BasketTable";
import Shipment from "../components/Shipment";

// Basket page contain on imported basket table component and a shipment
// table.
export default function Basket() {
  return (
    <Container className="App full-height">
      <Row>
        <Col md={8}>
          <BasketTable />
        </Col>
        <Col md={4}>
          <Shipment />
        </Col>
      </Row>
    </Container>
  );
}
