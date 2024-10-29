// Import frameworks and library's
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Table, Container } from "react-bootstrap";

// Import store Slice reducers.
import { basketAdd, basketDecrease, basketDelete } from "../store/basketState";

// Import image
import trash from "../images/trash.png";

/* Basket table component, takes the array objects from the basketState and
populates a table using map function with ability to edit the quantity 
and delete via buttons. Button clicks invoke the the basketState reducers*/
export default function BasketTable({ }) {

  // Retrieve the basket state from the Redux store.
  const basket = useSelector((state) => state.basket.basket);

  // Retrieve the totalPrice state from the Redux store
  const totalPrice = useSelector((state) => state.basket.total);
  const dispatch = useDispatch();

  return (
    <div className="full-height">
      <Container className="table-container grey-background">
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
                    onClick={() => dispatch(basketAdd(basketItems))} // Increase the basket item.
                  >
                    +
                  </Button>
                  <Button
                    variant="light"
                    onClick={() => dispatch(basketDecrease(index))} // Decrease the basket item.
                  >
                    -
                  </Button>
                  <Button
                    variant="light"
                    onClick={() => dispatch(basketDelete(index))} // Delete the whole basket item.
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
