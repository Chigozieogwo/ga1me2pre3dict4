import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Modal, Row, Col, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import {
  countdownDetailsAction,
  updateCountdownAction,
} from '../actions/countdownActions.js'
import {
  COUNTDOWN_UPDATE_RESET,
  // PREDICTION_DETAILS_RESET,
} from '../constants/countDownConstants'

import { ReactComponent as DateIcon } from '../components/svgs/date.svg'
import moment from 'moment'
import Countdown, { zeroPad } from 'react-countdown'

const CountdownEditScreen = ({ match, history }) => {
  const countdownId = match.params.id

  const [amountOfDays, setAmountOfDays] = useState(0)
  const [statusDisplay, setStatusDisplay] = useState('Start')
  const [toDisplay, setToDisplay] = useState(false)

  const dispatch = useDispatch()

  const countdownDetails = useSelector((state) => state.countdownDetails)
  const { loading, error, countdown } = countdownDetails

  console.log(JSON.stringify(countdown) + 'my own')

  const countdownUpdate = useSelector((state) => state.countdownUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
    // countdown: countdownUpdate,
  } = countdownUpdate

  const user = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

  // console.log(JSON.stringify(user) + 'Prediction Edit User')
  // console.log(JSON.stringify(user) + 'Prediction Edit User')

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: COUNTDOWN_UPDATE_RESET })
      history.push('/admin-dashboard')
    } else {
      if (!countdown) {
        console.log(countdown)
        dispatch(countdownDetailsAction(countdownId))
      } else {
        setAmountOfDays(countdown.amountOfDays)
        setStatusDisplay(countdown.statusDisplay)
        setToDisplay(countdown.toDisplay)
      }
    }
  }, [dispatch, history, countdownId, countdown, successUpdate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateCountdownAction({
        _id: countdownId,
        amountOfDays,
        statusDisplay,
        toDisplay,
      })
    )
  }

  // const deleteHandler = (id) => {
  //   if (window.confirm('Are you sure')) {
  //     dispatch(deleteSingleFixtureAction(id))
  //     dispatch(predictionfixtureAction(predictionId))
  //   }
  // }

  const resetHandler = (e) => {
    e.preventDefault()
    // dispatch({ type: PREDICTION_DETAILS_RESET })
    // localStorage.removeItem('prediction_Details')
    history.push('/admin-dashboard')
  }

  return (
    <>
      <div
        className="ms-3 me-3 mb-5 mt-5 p-4"
        style={{ border: '2px  solid #2C3E50' }}>
        <div className="d-flex justify-content-sm-between ">
          <Link
            style={{ textAlign: 'center', verticalAlign: 'middle' }}
            onClick={resetHandler}
            to="/admin-dashboard"
            className="btn btn-primary me-2 my-3">
            {' '}
            Go Back{' '}
          </Link>

          {/* <Button className="ms-5"  variant="primary" onClick={handleShow}>
      Add History
    </Button> */}
        </div>
        <FormContainer>
          <h1 style={{ textAlign: 'center' }}>Edit Countdown</h1>
          {loading && <Loader />}
          {error && <Message variant="danger">{error}</Message>}
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <Form onSubmit={submitHandler}>
              <Row
                className="mt-3 mb-3 pb-4 pt-4"
                style={{ border: '.5px  solid #2C3E50', borderRadius: '15px' }}>
                <Col sm={12}>
                  <h6 style={{ textAlign: 'center' }}>
                    <span
                      style={{ fontWeight: 'bolder' }}
                      className=" text-primary">
                      {' '}
                      COUNTDOWN{' '}
                    </span>
                  </h6>

                  <Form.Group controlId="amountOfDays">
                    <Form.Label>Countdown</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Countdown"
                      value={amountOfDays}
                      onChange={(e) =>
                        setAmountOfDays(e.target.value)
                      }></Form.Control>
                  </Form.Group>
                  <Form.Group className="mt-3 " controlId="toDisplay">
                    <Form.Check
                      type="checkbox"
                      label="Display"
                      checked={toDisplay}
                      onChange={(e) =>
                        setToDisplay(e.target.checked)
                      }></Form.Check>
                  </Form.Group>
                  <Form.Group controlId="statusDisplay">
                    <Form.Label>status Display</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="statusDisplay"
                      value={statusDisplay}
                      onChange={(e) =>
                        setStatusDisplay(e.target.value)
                      }></Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              <div className="d-grid gap-2">
                <Button
                  className="mt-4"
                  size="lg"
                  type="submit"
                  variant="primary">
                  Update Countdown
                </Button>
              </div>
            </Form>
          )}
        </FormContainer>
      </div>
    </>
  )
}

export default CountdownEditScreen
