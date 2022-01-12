import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Button,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap'
import { FaMagento } from 'react-icons/fa'
import { logout } from '../actions/userActions'
import './navStyle.css'
import SearchBox from './SearchBox'
const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>RITEPREDICT</Navbar.Brand>
          </LinkContainer>
          {/* <Route render={({ history }) => <SearchBox history={history} />} /> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Affiliates" id="username">
                <LinkContainer to="/affiliates">
                  <NavDropdown.Item>Affiliate Registration</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/affiliates">
                  <NavDropdown.Item>Affiliate Dashboard</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/affiliates">
                  <NavDropdown.Item>Affiliate Earnings</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

              <LinkContainer to="/about-us">
                <Nav.Link>About Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/disclaimer">
                <Nav.Link>Disclaimer</Nav.Link>
              </LinkContainer>

              <LinkContainer
                onClick={() =>
                  window.open(
                    'https://refpa.top/L?tag=d_1256913m_97c_&site=1256913&ad=97',
                    '_blank'
                  )
                }
                to="">
                <Nav.Link>How To Pay</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact-us">
                <Nav.Link>Contact Us</Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <>
                  <NavDropdown
                    // style={{ color: 'white', fontWeight: 'bold' }}
                    className="ps-3 pe-3 sign   rounded"
                    title={userInfo.name}
                    id="username">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    {userInfo && userInfo.isTipster ? (
                      <LinkContainer to="/admin-dashboard">
                        <NavDropdown.Item>Dashboard</NavDropdown.Item>
                      </LinkContainer>
                    ) : null}
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <LinkContainer to="/register?redirect=/profile">
                    <Nav.Link>
                      <span className="ps-4 pe-4 pt-2 pb-2 register text-white  rounded">
                        Register
                      </span>
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <Nav.Link>
                      <span className="ps-4 pe-4 pt-2 pb-2 sign2 text-white  rounded">
                        Sign In
                      </span>
                    </Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
