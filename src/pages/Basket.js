// Import useState, UseEffect, useRef
import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { logout } from "../store/loginState";
import { add } from "../store/registrationState";
import { basketAdd } from "../store/basketState";

// Import react components
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Import child components

// Products page component with props received from App.js
export default function Basket({}) {

  const basket = useSelector((state) => state.basket.basket);
  const dispatch = useDispatch();

  // Create local state that creates and array with matching length to the
  // products array with the initial value being Choose Colour for each

  // function that updates the selected colour state value when a colour is
  // selected.

  // handles the buy button click but updating the Total price parent state
  // and sets the has purchased to True to allow for total price element to
  // be shown on product and about page.


  return (
    <div className="App ">
      <Container>
        <Row>
          {/* Map for items contained in products array  */}
          {basket.map((basketItems, index) => (
            <Col md={4} key={basketItems.id} className="mb-4">
              <Card>
                <Card.Img
                  className="blue-background"
                  variant="top"
                  src={basketItems.image}
                  alt={basketItems.title}
                />
                <Card.Body className="blue-background text-white">
                  <Card.Title>{basketItems.title}</Card.Title>
                  <Card.Text>{basketItems.description}</Card.Text>
                  <Card.Text>£{basketItems.price}</Card.Text>
                  <Card.Text>Color: {basketItems.selectedColor}</Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
