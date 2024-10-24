import React from "react";

// Import react components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";

// Import images
import logo_lrg from "../images/logo_lrg.png";
import store_front from "../images/store_front.jpg";
import store_inside from "../images/store_inside.jpg";

// Import child components
import TotalPrice from "../components/TotalPrice";

// About page component with props received from App.js
export default function About({ totalPrice,
  hasPurchased }) {
    // Retrieve the userList state from the store

  
    return (
      <div className="App full-height">
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col className="text-start">
              <h2>About Page</h2>
            </Col>
            <Col className="text-end">
              {/* Responsive element shows when user has clicked any buy button */}
              {hasPurchased && <TotalPrice totalPrice={totalPrice} />}
            </Col>
            <hr />
          </Row>
          <Row>
            <Col>
              <Figure>
                <Figure.Image width={200} alt="Main Logo" src={logo_lrg} />
                <Figure.Caption className="justify text-white">
                  Cap Haven: Your ultimate destination for trendy headgear.
                  Discover a vast array of caps, from sporty snapbacks to
                  stylish fitted hats, all designed to add flair to your
                  everyday look. Whether you’re seeking bold colors or classic
                  designs, Cap Haven has the perfect cap for every personality.
                  Top off your style with us!
                </Figure.Caption>
              </Figure>
            </Col>
            <Col>
              <Figure>
                <Figure.Image width={400} alt="Store Front" src={store_front} />
                <Figure.Caption className="text-white">
                  Come visit our London Store.
                </Figure.Caption>
              </Figure>
            </Col>
            <Col>
              <Figure>
                <Figure.Image
                  width={400}
                  alt="Inside Store"
                  src={store_inside}
                />
                <Figure.Caption className="text-white">
                  We have a huge selection of cap from around the world.
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>
          <hr />
          <Row>
            <div className="container">
              <h2 id="contact" className="head-marg">
                Contact Details
              </h2>
              <p>
                <b>Address:</b> 9 Queensway, Knutsford, Cheshire, WA16 0NJ,
                United Kingdom
              </p>
              <p>
                <b>Tel:</b> 079278791301
              </p>
              <p>
                <b>Email:</b> jackjohn77@msn.com{" "}
                <a
                  href="mailto:jackjohn77@msn.com"
                  style={{ marginLeft: "0px" }}
                >
                  Here
                </a>
              </p>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
