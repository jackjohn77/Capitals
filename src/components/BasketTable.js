// Import frameworks and library's
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Table, Container } from "react-bootstrap";

// Import store Slice reducers.
import { basketAdd, basketDecrease, basketDelete } from "../store/basketState";

// Import image
import trash from "../images/trash.png";

// Basket table component, takes the array objects from the basketState and
// populates a table with ability to edit the quantity and delete via buttons.
export default function BasketTable({ }) {

  // Retrieve the basket state from the Redux store.
  const basket = useSelector((state) => state.basket.basket);

  // Retrieve the totalPrice state from the Redux store
  const totalPrice = useSelector((state) => state.basket.total);
  const dispatch = useDispatch();

  return (
    <div className="App ">
      <Container>
        <h1>Basket</h1>
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

                <td>{(basketItems.quantity * basketItems.price).toFixed(2)}</td>
                <td className="button-group">
                  <Button
                    variant="light"
                    onClick={() => dispatch(basketAdd(basketItems))}
                  >
                    +
                  </Button>
                  <Button
                    variant="light"
                    onClick={() => dispatch(basketDecrease(index))}
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
            <tr>
              <td colSpan="5" style={{ textAlign: "right" }}>
                <strong>Total:</strong>
              </td>
              <td>{totalPrice.toFixed(2)}</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
