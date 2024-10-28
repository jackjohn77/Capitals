// Import react components
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import React, { useState } from "react";
// Import formik state
import { useFormik } from "formik";

import { useSelector, useDispatch } from "react-redux";
import { login} from "../store/loginState";
import { } from "../store/registrationState";
import { } from "../store/registrationState";
import { showModal } from "../store/reusableModalState";

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

  // if statement check the password field is not let blank
  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};

// function expression will many props to allow for setting or retrieval of states
const Login = () => {
  // Retrieve the userList state from the store
  const loggedIn = useSelector((state) => state.login.loggedIn);
  const userList = useSelector((state) => state.register.list);

  const dispatch = useDispatch();

  {
    /* initializes the formik hook values */
  }
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,

    // On submit the form details are checked against the existing userList
    // if they match then the username is state is set, the loggedIn state is
    // set and the form is reset.
    onSubmit: (values, { resetForm }) => {
      const user = userList.find(
        (user) =>
          user.email === values.email && user.password === values.password
      );
      if (user) {

        dispatch(login(user.name));
        resetForm();
      } else {
     
        dispatch(showModal("Invalid login credentials."));
      }
    },
  });

  // boolean variable which looks for any remaining errors. If no errors then
  // true is returned. Used to enable/disabled the login button.
  const isFormValid = !Object.keys(formik.errors).length;

  return (
    <Form className="full-height" onSubmit={formik.handleSubmit}>
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col className="text-start">
            <h2>Login Page</h2>
          </Col>
          <hr />
        </Row>
        <Row>
          <Col md={6}>
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
            <Button type="submit" disabled={!isFormValid || loggedIn}>
              Login
            </Button>
          </Col>
        </Row>
        <ReusableModal />
      </Container>
    </Form>
  );
};

export default Login;
