import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Button } from '../../globalStyles'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink,
} from './Navbar.elements'

import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

import { logout } from '../../actions/userActions'

function Navbar() {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const user = JSON.parse(localStorage.getItem('userInfo'))

  const logoutHandler = () => {
    dispatch(logout())
  }

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton)

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavIcon />
              XCESSWIN
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/" onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/login" onClick={closeMobileMenu}>
                  <Button primary>Login</Button>
                </NavLinks>
              </NavItem>

              {userInfo ? (
                <NavItem>
                  <NavLinks onClick={logoutHandler}>
                    <Button>Logout</Button>
                  </NavLinks>
                </NavItem>
              ) : null}
              {/* <NavItem>
                <NavLinks to="/track" onClick={closeMobileMenu}>
                  Track
                </NavLinks>
              </NavItem> */}
              {/* <NavItem>
                <NavLinks to="/admin/tracklist" onClick={closeMobileMenu}>
                  Tracks List
                </NavLinks>
              </NavItem> */}
              {/* <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/track">
                    <Button primary>Track</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/track">
                    <Button onClick={closeMobileMenu} fontBig primary>
                      Track
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn> */}
              {/* {userInfo ? (
                <DropdownButton id="dropdown-item-button" title={userInfo.name}>
                  <Dropdown.Item to="/admin/tracks/create" as={Link}>
                    Create
                  </Dropdown.Item>
                  <Dropdown.Item to="/admin/tracklist" as={Link}>
                    Track List
                  </Dropdown.Item>
                  <Dropdown.Item to="/admin/userlist" as={Link}>
                    User List
                  </Dropdown.Item>
                </DropdownButton>
              ) : null} */}
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
