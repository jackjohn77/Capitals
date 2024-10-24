// Import useState, UseEffect, useRef
import React, { useState } from "react";

// Import react components
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Import child components
import TotalPrice from "./TotalPrice";

// Import images
import cap1 from "../images/cap1.png";
import cap2 from "../images/cap2.png";
import cap3 from "../images/cap3.png";
import cap4 from "../images/cap4.png";
import cap5 from "../images/cap5.png";
import cap6 from "../images/cap6.png";
import cap7 from "../images/cap7.png";
import cap8 from "../images/cap8.png";
import cap9 from "../images/cap9.png";
import cap10 from "../images/cap10.png";


// create products variable array that stores multiple products.
const products = [
  {
    id: 1,
    image: cap1,
    title: "Wave Cap",
    description: "Wave Cap in various colours with snap-back",
    price: 9.99,
    colours: ["Red", "Blue", "Green"],
  },
  {
    id: 2,
    image: cap2,
    title: "Pizza Planet Cap",
    description: "Pizza Planet cap in various colours with snap-back",
    price: 11.99,
    colours: ["Red", "Blue", "Green"],
  },
  {
    id: 3,
    image: cap3,
    title: "LA Cap",
    description: "LA Cap in various colours with snap-back",
    price: 10.99,
    colours: ["Red", "Blue", "Green"],
  },
  {
    id: 4,
    image: cap4,
    title: "Focus Cap",
    description: "Focus Cap in various colours with snap-back",
    price: 15.99,
    colours: ["Red", "Blue", "Green"],
  },
  {
    id: 5,
    image: cap5,
    title: "Sun Flower Cap",
    description: "Wave Cap in various colours with snap-back",
    price: 8.99,
    colours: ["Red", "Blue", "Green"],
  },
  {
    id: 6,
    image: cap6,
    title: "Croissant Cap",
    description: "Croissant Cap in various colours with snap-back",
    price: 20.99,
    colours: ["Red", "Blue", "Green"],
  },
  {
    id: 7,
    image: cap7,
    title: "Star Cap",
    description: "Star Cap in various colours with snap-back",
    price: 15.99,
    colours: ["Red", "Blue", "Green"],
  },
  {
    id: 8,
    image: cap8,
    title: "Humming Bird Cap",
    description: "Humming Bird Cap in various colours with snap-back",
    price: 14.99,
    colours: ["Red", "Blue", "Green"],
  },
  {
    id: 9,
    image: cap9,
    title: "Bear Golf Cap",
    description: "Bear Golf in various colours with snap-back",
    price: 12.99,
    colours: ["Red", "Blue", "Green"],
  },
  {
    id: 10,
    image: cap10,
    title: "Sun Cap",
    description: "Sun Cap in various colours with snap-back",
    price: 11.99,
    colours: ["Red", "Blue", "Green"],
  },
];

// Products page component with props received from App.js
export default function Products({
  username,
  loggedIn,
  setLoggedIn,
  totalPrice,
  setTotalPrice,
  hasPurchased,
  setHasPurchased,
}) {

  // Create local state that creates and array with matching length to the
  // products array with the initial value being Choose Colour for each.
  const [selectedcolours, setSelectedcolours] = useState(
    Array(products.length).fill("Choose Colour")
  );

  // function that updates the selected colour state value when a colour is
  // selected. 
  const handleSelect = (color, index) => {
    const newSelectedcolours = [...selectedcolours];
    newSelectedcolours[index] = color;
    setSelectedcolours(newSelectedcolours);
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
                Logged in as {username} <a href="#" onClick={() => setLoggedIn(false)}>(Logout)</a>
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
                      <span style={{ color: selectedcolours[index] }}>
                        {selectedcolours[index]}
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
