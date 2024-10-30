// Import frameworks and library's
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

// Import store Slice reducers.
import { logout } from "../store/loginState";

// Import image
import Logo_menu from "../images/Logo_menu.png";

/* Menu bar component displayed on every page at the top containing company
logo, login status and navigation links. The link change  */

export default function Menu() {
  // Retrieve the loginState from the Redux store.
  const username = useSelector((state) => state.login.username);
  const loggedIn = useSelector((state) => state.login.loggedIn);

  // Retrieve the basketState from the Redux store.
  const basketQuantity = useSelector((state) => state.basket.quantity);
  const dispatch = useDispatch();

  // Local state and handle functions that hide the menu once a link is clicked
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" expanded={expanded}>
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo_menu} alt="Brand logo - Capitals" height="100" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleToggle}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-lg-flex text-end">
            <NavLink to="/" end className="nav-link" onClick={handleLinkClick}>
              Home
            </NavLink>
            <NavLink
              to="/products"
              className="nav-link"
              onClick={handleLinkClick}
            >
              Products
            </NavLink>
            <NavLink to="/about" className="nav-link" onClick={handleLinkClick}>
              About
            </NavLink>
            <NavLink to="/login" className="nav-link" onClick={handleLinkClick}>
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="nav-link"
              onClick={handleLinkClick}
            >
              Register
            </NavLink>
            <NavLink
              to="/basket"
              className="nav-link"
              onClick={handleLinkClick}
            >
              {/*Shows the basket quantity when an item is added */}
              Basket {basketQuantity === 0 ? "" : `(${basketQuantity})`}
            </NavLink>
          </Nav>
          {loggedIn ? (
            <Nav className="ms-auto w-100 justify-content-end text-end">
              <Navbar.Text className="text-white">
                Logged in as {username}
                <button
                  style={{
                    background: "none",
                    border: "none",
                    padding: "0",
                    color: "inherit",
                    cursor: "pointer",
                  }}
                  className="text-white"
                  onClick={() => dispatch(logout())}
                >
                  (Logout)
                </button>
              </Navbar.Text>
            </Nav>
          ) : (
            <Navbar.Text className="ms-auto w-100 justify-content-end text-end">
              You are not logged in
            </Navbar.Text>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
