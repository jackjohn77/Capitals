import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Login from "./components/Login";
import Registration from "./components/Registration";
import "./App.css";

function App() {
  // States for keeping username, logged in, total price and has purchased.
  // these are passed to various child components and pages to preserve data
  // when moving between pages.

  // Create the username state variable. Used to store the username.
  const [username, setUsername] = useState("");

  //Create the loggedIn boolean state variable. Shows true when user is.
  // logged in.
  const [loggedIn, setLoggedIn] = useState(false);

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
          <Route
            path="/"
            element={
              <Home
              />
            }
          />
          <Route
            path="/products"
            element={
              <Products
                username={username}
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
                hasPurchased={hasPurchased}
                setHasPurchased={setHasPurchased}
              />
            }
          />
          <Route
            path="/about"
            element={
              <About
                username={username}
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                totalPrice={totalPrice}
                hasPurchased={hasPurchased}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                username={username}
                setUsername={setUsername}
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                totalPrice={totalPrice}
                hasPurchased={hasPurchased}
                              />
            }
          />
          <Route
            path="/register"
            element={
              <Registration
                username={username}
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                totalPrice={totalPrice}
                hasPurchased={hasPurchased}

              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
