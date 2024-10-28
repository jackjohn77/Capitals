// Import react components
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { add } from "../store/registrationState";
import { showModal } from "../store/reusableModalState";
import "bootstrap-icons/font/bootstrap-icons.css";

// Import child components

import ReusableModal from "../components/ReusableModal";

// function expression to validate all form input fields.
const validate = (values) => {
  const errors = {};

  // if statement validates the email input conform to an email string.
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  /* if statement validates the password input conforms to 8 characters or 
  more, at least one uppercase and lowercase letter, a number, and a special
  character.*/
  if (!values.password) {
    errors.password = "Required";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&()])[A-Za-z\d@$!%*?&()]{8,}$/.test(
      values.password
    )
  ) {
    errors.password =
      "Must contain 8 characters or more, at least one uppercase and lowercase letter, a number, and a special character";
  }

  // if statement confirms the passwords match before submitting.
  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Does not match password";
  }

  // if statement check the name field is not let blank
  if (!values.name) {
    errors.name = "Required";
  }

  // if statement check the surname field is not let blank
  if (!values.surname) {
    errors.surname = "Required";
  }
  return errors;
};

// function expression will many props to allow for setting or retrieval of states
const Registration = () => {
  // Retrieve the userList state from the store
  const userList = useSelector((state) => state.register.list);
  const loggedIn = useSelector((state) => state.login.loggedIn);
  

  const dispatch = useDispatch();

  {
    /* initializes the formik hook values */
  }
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate,

    // On submit the new user details are added to the userList state
    onSubmit: (values, { resetForm }) => {
      dispatch(add(values));
      dispatch(
        showModal(
          `${values.name} you are now registered! Please login to continue.`
        )
      );
      resetForm();
    },
  });

  // boolean variable which looks for any remaining errors. If no errors then
  // true is returned. Used to enable/disabled the submit button.
  const isFormValid = !Object.keys(formik.errors).length;

  return (
    <Form className="full-height" onSubmit={formik.handleSubmit}>
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col className="text-start">
            <h2>Registration Page</h2>
          </Col>
          <hr />
        </Row>
        <Row className="">
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="name">First Name</Form.Label>
              <Form.Control
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={
                  formik.values.name.charAt(0).toUpperCase() +
                  formik.values.name.slice(1)
                }
                maxLength="15"
                disabled={loggedIn}
              />
              <div className="error">
                {formik.errors.name && formik.touched.name
                  ? formik.errors.name
                  : ""}
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="surname">Surname</Form.Label>
              <Form.Control
                id="surname"
                name="surname"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={
                  formik.values.surname.charAt(0).toUpperCase() +
                  formik.values.surname.slice(1)
                }
                maxLength="20"
                disabled={loggedIn}
              />
              <div className="error">
                {formik.errors.surname && formik.touched.surname
                  ? formik.errors.surname
                  : ""}
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="email">Email Address</Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                disabled={loggedIn}
              />
              <div className="error">
                {formik.errors.email && formik.touched.email
                  ? formik.errors.email
                  : ""}
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                disabled={loggedIn}
              />
              <div className="error">
                {formik.errors.password && formik.touched.password
                  ? formik.errors.password
                  : ""}
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="confirmPassword">
                Confirm Password
              </Form.Label>
              <Form.Control
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
                disabled={loggedIn}
              />
              <div className="error">
                {formik.errors.confirmPassword && formik.touched.confirmPassword
                  ? formik.errors.confirmPassword
                  : ""}
              </div>
            </Form.Group>
            <Button type="submit" disabled={!isFormValid || loggedIn}>
              Submit
            </Button>
          </Col>
        </Row>
        <ReusableModal/>
      </Container>
    </Form>
  );
};

export default Registration;
