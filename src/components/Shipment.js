// Import frameworks and library's
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Container, Button } from "react-bootstrap";

// Import store Slice reducers.
import { shippingCheck } from "../store/basketState";
import { showModal } from "../store/reusableModalState";

// Import child components
import Icon from "../components/Icon";
import ReusableModal from "../components/ReusableModal";

/* Shipment table component, takes the array objects from the basketState.shipment
and populates a table using map function with ability to check which shipment
option is required and also click the icon mapped component*/
export default function Shipment() {
  // Retrieve the basketState from the Redux store.
  const shipping = useSelector((state) => state.basket.shipment);
  const totalPrice = useSelector((state) => state.basket.total);
  const shipmentCost = useSelector((state) => state.basket.shipmentCost);
  const dispatch = useDispatch();

  // Adds the total item price to selected shipment type.
  const plusShippingCost = totalPrice + shipmentCost;

  // message element used in reusableModel, this contains a map listing
  // all shipping options info and a link to email for help.
  const helpMessage = (
    <div>
      <h3>Delivery Options</h3>
      <ul>
        {shipping.map((shippingItems, index) => (
          <li key={index}>{shippingItems.info}</li>
        ))}
        <br />
        
      </ul>
      <h4>Further Help</h4>
      <p>Should you require any further help please get in contact -
        <a 
            href= "mailto:jackjohn77@msn.com"
            > Here</a> </p>
    </div>
  );

  const handleClick = () => {
    dispatch(showModal(helpMessage));
  };

  return (
    <div className="App">
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
                  {shippingItems.type} <Icon index={index} />
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
      <Button variant="secondary" onClick={handleClick}>
        Click for Help with Shipping
      </Button>
      <ReusableModal />
    </div>
  );
}
