// Import useState, UseEffect, useRef
import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { logout } from "../store/loginState";
import { add } from "../store/registrationState";
import { basketAdd, basketDecrease, basketDelete } from "../store/basketState";

// Import react components
import { Button, Table, Row, Col, Container } from "react-bootstrap";


import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";


import trash from "../images/trash.png";

// Import child components

// Products page component with props received from App.js
export default function Basket({}) {

  const basket = useSelector((state) => state.basket.basket);
  const totalPrice = useSelector((state) => state.basket.total);
  const dispatch = useDispatch();
  

  return (
    <div className="App ">
      <Container>
        <h1>Total basket price £{totalPrice.toFixed(2)}</h1>
        <Table className="content" striped bordered hover>
          <thead>
            <tr>
              <th>Image</th>
              <th>Item</th>
              <th className="actions-column">Selection</th>
              <th className="actions-column">cost</th>
              <th>Qty</th>             
              <th>Total</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {basket.map((basketItems, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={basketItems.image}
                    alt={basketItems.title}
                    width="30px"
                  ></img>
                </td>
                <td>{basketItems.title}</td>

                <td>{basketItems.selectedColour}</td>
                <td>{basketItems.price}</td>
                <td>{basketItems.quantity}</td>
                
                <td>{basketItems.quantity * basketItems.price}</td><td className="button-group">
                  <Button
                    variant="light"
                    onClick={() => dispatch(basketAdd(basketItems))}
                  >
                    +
                  </Button>
                  <Button
                    variant="light"
                    onClick={() => dispatch(basketDecrease(index))} // Open the edit modal with the current task
                  >
                    -
                  </Button>
                  <Button
                    variant="light"
                    onClick={() => dispatch(basketDelete(index))} // Delete the task
                  >
                    <img src={trash} alt="del" width="10px"></img>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
  }
  
