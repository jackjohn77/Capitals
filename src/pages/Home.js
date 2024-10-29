// Import useState, UseEffect, useRef
import React from "react";
import store_front from "../images/store_front.jpg";

// Home component
export default function Home() {
  return (
    <div>
      <div className="App full-height">
        <h2>Welcome to the homepage!</h2>
        <hr />
        <img width={800} alt="Store Front" src={store_front} className="img-fluid"/>
      </div>
    </div>
  );
}
