// Import frameworks and library's
import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

// Import store Slice reducers.
import { logout } from "../store/loginState";

// Import image
import Logo_menu from "../images/Logo_menu.png";

export default function Menu() {
  const username = useSelector((state) => state.login.username);
  const loggedIn = useSelector((state) => state.login.loggedIn);
  const basketQuantity = useSelector((state) => state.basket.quantity);
  const dispatch = useDispatch();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo_menu} alt="logo" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" end className="nav-link">
              Home
            </NavLink>
            <NavLink to="/products" className="nav-link">
              Products
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
            <NavLink to="/register" className="nav-link">
              Register
            </NavLink>
            <NavLink to="/basket" className="nav-link">
              Basket {basketQuantity === 0 ? "" : `(${basketQuantity})`}
            </NavLink>
          </Nav>
          {loggedIn ? (
            <Nav className="ml-auto">
              <Navbar.Text className="text-white">
                Logged in as {username}{" "}
                <a
                  href="#"
                  className="text-white"
                  onClick={() => dispatch(logout())}
                >
                  (Logout)
                </a>
              </Navbar.Text>
            </Nav>
          ) : (
            <Navbar.Text className="text-white">
              You are not logged in
            </Navbar.Text>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
