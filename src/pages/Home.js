// Import useState, UseEffect, useRef
import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/loginState";


// Home component with props to allow for setting or retrieval of states
export default function Home() {
  // Retrieve the userList state from the store
  const username = useSelector((state) => state.login.username);
  const loggedIn = useSelector((state) => state.login.loggedIn);

  const dispatch = useDispatch();

  // for use when user inputs "" into the name field.
  // used for auto focus on name input element.
  const inputRef = useRef(null);

  // Auto focus to input field but only when available via the if statement
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [loggedIn]);

  // Handles the click for the login button and sets Username, LoggedIn and
  // noUsername depending on value of input ref.

  // Handles the click for the log out button and sets Username and LoggedIn
  // status to allow for a new log in to occur.
  const handleLogOutClick = () => {
    dispatch(logout());
  };

  return (
    <div>
      {!loggedIn ? (
        <div className="App full-height">
          <h2>Welcome to the homepage!</h2>
          <hr />
        </div>
      ) : (
        <div className="App full-height">
          <h2>Welcome, {username}.</h2>
          <hr />
          <br />
          <button onClick={handleLogOutClick}>Logout</button>
        </div>
      )}
    </div>
  );
}
