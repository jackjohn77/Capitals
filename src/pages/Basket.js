// Import useState, UseEffect, useRef
import React from "react";

import { useSelector, useDispatch } from "react-redux";

import BasketTable from "../components/BasketTable"


import { basketAdd, basketDecrease, basketDelete } from "../store/basketState";

// Import react components
import { Button, Table, Row, Col, Container } from "react-bootstrap";


import trash from "../images/trash.png";

// Import child components

// Products page component with props received from App.js
export default function Basket({}) {
  return (
    <BasketTable/>
  )
  }
  
