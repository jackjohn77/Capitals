import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Basket from "./pages/Basket";
import "./App.css";

function App() {
  // States for keeping username, logged in, total price and has purchased.
  // these are passed to various child components and pages to preserve data
  // when moving between pages.

  // Create totalPrice state variable. Adds up items when buy button clicked.
  const [totalPrice, setTotalPrice] = useState(0);

  // Create the hasPurchased boolean state variable. Shows true when user
  // clicks buy and reveals basket amount.
  const [hasPurchased, setHasPurchased] = useState(false);


  return (
    <div className="grey-background">
      <Router>
        <Menu />
        <Routes>
          {/* Routes to home, product and about page. Each carry props for
        child components so they can use and set states */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
