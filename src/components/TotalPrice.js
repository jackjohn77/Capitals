import React from "react";

//Shows total price element to 2 decimal places using totalPrice prop.
export default function TotalPrice({ totalPrice }) {
  return (
    <div className="total-price">
      <h2>Total Price: £{totalPrice.toFixed(2)}</h2>
    </div>
  );
}
