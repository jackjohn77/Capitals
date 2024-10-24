// Import useState, UseEffect, useRef
import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { logout } from "../store/loginState";
import { add } from "../store/registrationState";
import { } from "../store/productsState";

// Import react components
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Import child components
import TotalPrice from "../components/TotalPrice";


// Products page component with props received from App.js
export default function Products({
  

  totalPrice,
  setTotalPrice,
  hasPurchased,
  setHasPurchased,
}) {
  const username = useSelector((state) => state.login.username);
  const loggedIn = useSelector((state) => state.login.loggedIn);
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  // Create local state that creates and array with matching length to the
  // products array with the initial value being Choose Colour for each.
  const [selectedColours, setSelectedColours] = useState(
    Array(products.length).fill("Choose Colour")
  );

  // function that updates the selected colour state value when a colour is
  // selected. 
  const handleSelect = (color, index) => {
    const newSelectedColours = [...selectedColours];
    newSelectedColours[index] = color;
    setSelectedColours(newSelectedColours);
  };
  // handles the buy button click but updating the Total price parent state
  // and sets the has purchased to True to allow for total price element to 
  // be shown on product and about page.
  const handleBuyClick = (price) => {
    setTotalPrice(totalPrice + price);
    setHasPurchased(true);
  };

  return (
    <div className="App ">
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col className="text-start">
            <h2>Products Page</h2>

            {/* Responsive element shows when user is logged in */}
            {loggedIn ? (
              <p>
                Logged in as {username} <a href="#" onClick={() => dispatch(logout())}>(Logout)</a>
              </p>
            ) : (
              <p>You are not logged in</p>
            )}
          </Col>
          <Col className="text-end">
            {/* Responsive element shows when user has clicked any buy button */}
            {hasPurchased && <TotalPrice totalPrice={totalPrice} />}
          </Col>
          <hr />
        </Row>
        <Row>
          <Col></Col>
        </Row>
        <Row>
          {/* Map for items contained in products array  */}
          {products.map((product, index) => (
            <Col md={4} key={product.id} className="mb-4">
              <Card>
                <Card.Img
                  className="blue-background"
                  variant="top"
                  src={product.image}
                  alt={product.title}
                />
                <Card.Body className="blue-background text-white">
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>£{product.price}</Card.Text>
                  <DropdownButton
                    variant="outline-light"
                    id="dropdown-basic-button"
                    title={
                      <span style={{ color: selectedColours[index] }}>
                        {selectedColours[index]}
                      </span>
                    }
                    onSelect={(eventKey) => handleSelect(eventKey, index)}
                  >
                    {/* Maps the product.colours array asa dropdown but also 
                    changes the colour of the text based on selection  */}
                    {product.colours.map((colour) => (
                      <Dropdown.Item eventKey={colour} key={colour}>
                        {colour}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                  <Button
                    variant="outline-light"
                    className="mt-3"
                    onClick={() => handleBuyClick(product.price)}
                  >
                    BUY
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
