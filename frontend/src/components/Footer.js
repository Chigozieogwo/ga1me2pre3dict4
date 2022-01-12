import React from 'react'
import { Nav, Container, Row, Col } from 'react-bootstrap'
import FormContainer from './FormContainer.js'
// import { NavBtnLink } from '../components/Navbar/Navbar.elements'
// import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import './navStyle.css'
const Footer = () => {
  return (
    <footer>
      <Container fluid className="bg-primary text-white">
        <FormContainer>
          <Row>
            <Col md={4}>
              <h1 className="mt-4 ps-4"> RITEPREDICT</h1>
              <p className="ps-4 pe-4">
                Our expert team works tirelessly to make Ritepredict the best
                prediction site in the world by providing its users with the
                best and assured football predictions and basketball predictions
                tips & Algorithm-based Research.
              </p>
            </Col>
            <Col md={2}>
              <LinkContainer to="/">
                <Nav.Link>
                  <div className="border-bottom pb-2">
                    <h5 className="mt-4 bold "> Quick Links</h5>
                  </div>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/">
                <Nav.Link className="footer">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/affiliates">
                <Nav.Link className="footer">Affiliates</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/disclaimer">
                <Nav.Link className="footer">Disclaimer</Nav.Link>
              </LinkContainer>
              <LinkContainer
                onClick={() =>
                  window.open(
                    'https://refpa.top/L?tag=d_1256913m_97c_&site=1256913&ad=97',
                    '_blank'
                  )
                }
                to="">
                <Nav.Link className="footer">How To Pay</Nav.Link>
              </LinkContainer>
            </Col>
            <Col md={2}>
              <LinkContainer to="/">
                <Nav.Link>
                  <div className="border-bottom pb-2">
                    <h5 className="mt-4 bolder  "> Information</h5>
                  </div>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/terms-and-condition">
                <Nav.Link className="footer">Terms and Condition</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/refund-policy">
                <Nav.Link className="footer">Refund Policy</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact-us">
                <Nav.Link className="footer">Contact Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about-us">
                <Nav.Link className="footer">About Us</Nav.Link>
              </LinkContainer>
            </Col>

            <Col md={4}>
              {' '}
              <LinkContainer to="/">
                <Nav.Link>
                  <div className="">
                    <h5 className="mt-4 footer-contact bolder p-2 ">
                      {' '}
                      Contact Us
                    </h5>
                  </div>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="">
                <Nav.Link>
                  <span className="text-success">Calls Only :</span>{' '}
                  +2347036688048
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="">
                <Nav.Link>
                  <span className="text-success">WhatsApp Only :</span>{' '}
                  +2347036688048
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="www.gmail.com">
                <Nav.Link>
                  <span className="text-success">Email Us :</span>{' '}
                  contact@ritepredict.com
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="">
                <Nav.Link>
                  <span className="text-success">For Adverts :</span>{' '}
                  advert@ritepredict.com
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="">
                <Nav.Link>
                  <span className="text-success">Working Hours :</span> 9:00AM -
                  5:00PM WAT
                </Nav.Link>
              </LinkContainer>
            </Col>
          </Row>

          <Row>
            <Col className="text-center py-3">Copyright @ Ritepredict</Col>
          </Row>
        </FormContainer>
      </Container>
    </footer>
  )
}

export default Footer
