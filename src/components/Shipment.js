// Import useState, UseEffect, useRef
import React from "react";

import { useSelector, useDispatch } from "react-redux";

import Icon from "../components/Icon";
import { shippingCheck } from "../store/basketState";

// Import react components
import { Button, Table, Row, Col, Container } from "react-bootstrap";


// Import child components

// Products page component with props received from App.js
export default function Shipment({}) {
  const shipping = useSelector((state) => state.basket.shipment);
  const totalPrice = useSelector((state) => state.basket.total);
  const shipmentCost = useSelector((state) => state.basket.shipmentCost);
  const dispatch = useDispatch();

  const plusShippingCost = totalPrice + shipmentCost;

  return (
    <div className="App ">
      <Container>
        <h1>Shipment</h1>

        <Table className="content" striped bordered hover>
          <thead>
            <tr>
              <th className="actions-column"></th>
              <th>Type</th>
              <th>Time (days)</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {shipping.map((shippingItems, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="checkbox"
                    checked={shipping[index].selected}
                    onChange={() => dispatch(shippingCheck(index))}
                  ></input>
                </td>
                <td>
                  {shippingItems.type} <Icon index={index}/>
                </td>
                <td>{shippingItems.del}</td>
                <td>{shippingItems.cost}</td>
              </tr>
            ))}
            <tr>
              <td colSpan="3" style={{ textAlign: "right" }}>
                <strong>Total </strong>(inc Delivery):
              </td>
              <td>
                <strong>{plusShippingCost.toFixed(2)}</strong>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
