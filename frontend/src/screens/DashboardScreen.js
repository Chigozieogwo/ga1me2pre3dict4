import React, { useState, useEffect } from 'react'
import { Button, Row, Col, Card } from 'react-bootstrap'
import { NavBtnLink } from '../components/Navbar/Navbar.elements'
import FormContainer from '../components/FormContainer'
import Message from '../components/Message'

const DashboardScreen = ({ location, history }) => {
  const redirect = location.search ? location.search.split('=')[1] : '/login'

  const userInfo = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : redirect

  useEffect(() => {
    if (!userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])
  return (
    <FormContainer>
      <div
        className="p-2 ms-3 me-3 mt-4 mb-5"
        style={{ border: '3px  solid #2C3E50' }}>
        <h1
          className="bg-primary pt-1 pb-1 ps-3 pe-3 text-white"
          style={{ textAlign: 'center' }}>
          DASHBOARD
        </h1>
        {/* {userInfo === null ? (
          <Message variant="danger">Not Authorized User</Message>
        ) : null} */}
        {userInfo.isTipster ? (
          <Row className="mt-5 mb-4">
            <Col md={6}>
              <Card className="m-1">
                <h3
                  className="bg-info pt-1 pb-1 ps-3 pe-3 text-white"
                  style={{ textAlign: 'center' }}>
                  FREE PREDICTIONS
                </h3>
                <Card.Body>
                  <NavBtnLink to="/admin/predictions/create">
                    <Button style={{ width: '25em' }} primary>
                      CREATE PREDICTION
                    </Button>
                  </NavBtnLink>
                  <NavBtnLink to="/predict/admin/predictionlist">
                    <Button style={{ width: '25em' }} primary>
                      PREDICTION LIST
                    </Button>
                  </NavBtnLink>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="m-1">
                <h3
                  className="bg-info pt-1 pb-1 ps-3 pe-3 text-white"
                  style={{ textAlign: 'center' }}>
                  VIP PREDICTIONS
                </h3>
                <Card.Body>
                  <NavBtnLink to="vip/admin/predictions/create">
                    <Button style={{ width: '25em' }} primary>
                      CREATE VIP PREDICTION
                    </Button>
                  </NavBtnLink>

                  <NavBtnLink to="vip/admin/predictionviplist">
                    <Button style={{ width: '25em' }} primary>
                      VIP PREDICTION LIST
                    </Button>
                  </NavBtnLink>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ) : (
          <Message variant="danger">Not Authorized User</Message>
        )}
        {userInfo.isAdmin ? (
          <Row>
            <Col md={6}>
              <Card className="m-1">
                <h3
                  className="bg-info pt-1 pb-1 ps-3 pe-3 text-white"
                  style={{ textAlign: 'center' }}>
                  USERS
                </h3>
                <Card.Body>
                  <NavBtnLink to="/admin/userlist">
                    <Button style={{ width: '25em' }} primary>
                      USER LIST
                    </Button>
                  </NavBtnLink>
                  <NavBtnLink to="/admin/adminlist">
                    <Button style={{ width: '25em' }} primary>
                      ADMIN LIST
                    </Button>
                  </NavBtnLink>
                  <NavBtnLink to="/admin/tipsterlist">
                    <Button style={{ width: '25em' }} primary>
                      TIPSTER LIST
                    </Button>
                  </NavBtnLink>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="m-1">
                <h3
                  className="bg-info pt-1 pb-1 ps-3 pe-3 text-white"
                  style={{ textAlign: 'center' }}>
                  VIP - NON_VIP
                </h3>
                <Card.Body>
                  <NavBtnLink to="/admin/viplist">
                    <Button style={{ width: '25em' }} primary>
                      VIP LIST
                    </Button>
                  </NavBtnLink>
                  <NavBtnLink to="/admin/notviplist">
                    <Button style={{ width: '25em' }} primary>
                      NONE VIP LIST
                    </Button>
                  </NavBtnLink>
                  <NavBtnLink to="/admin/countdown/create">
                    <Button style={{ width: '25em' }} primary>
                     PROMO COUNTDOWN
                    </Button>
                  </NavBtnLink>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ) : null}
      </div>
    </FormContainer>
  )
}

export default DashboardScreen
