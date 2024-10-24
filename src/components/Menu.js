import React from "react";

// Import react components
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/loginState";
import { } from "../store/basketState";

// Import images
import Logo_menu from "../images/Logo_menu.png";

// Menu function used responsive elements to change the style of NavLinks 
// dependent on if active.
export default function Menu() {

  const username = useSelector((state) => state.login.username);
  const loggedIn = useSelector((state) => state.login.loggedIn);
  const basketTotal = useSelector((state) => state.basket.total);

  const dispatch = useDispatch();

  return (
    <div className="blue-background App">
      <Container>
        <Row className="align-items-center">
          <Col xs={2} className="text-start">
            <img src={Logo_menu} alt="logo" height="80px" />
          </Col>
          <Col xs={8} className="text-center">
            <nav>
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Home
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Products
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                About
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Register
              </NavLink>
            </nav>
          </Col>
          <Col xs={2} className="text-start">
            {/* Responsive element shows when user is logged in */}
            {loggedIn ? (
              <p>
                Logged in as {username}{" "}
                <a href="#" onClick={() => dispatch(logout())}>
                  (Logout)
                </a>
              </p>
            ) : (
              <p>You are not logged in</p>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
