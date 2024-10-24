// Import react components
import { Container, Row, Col, Form, Button } from "react-bootstrap";

// Import formik state
import { useFormik } from "formik";

import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../store/loginState";
import { add } from "../store/registrationState";

import TotalPrice from "./TotalPrice";


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
const Login = ({


  totalPrice,
  hasPurchased,

}) => {
  // Retrieve the userList state from the store
  const username = useSelector((state) => state.login.username);
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
        alert("Invalid login credentials.");
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
          <Col className="text-end">
            {/* Responsive element shows when user has clicked any buy button */}
            {hasPurchased && <TotalPrice totalPrice={totalPrice} />}
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
      </Container>
    </Form>
  );
};

export default Login;
