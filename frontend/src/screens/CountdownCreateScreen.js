import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Modal, Row, Col, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import {
  countdownCreateAction,
  countdownListAction,
  deleteCountdownAction,
} from '../actions/countdownActions.js'
import { ReactComponent as DateIcon } from '../components/svgs/date.svg'
import moment from 'moment'
import Countdown, { zeroPad } from 'react-countdown'

const CountdownCreateScreen = ({ location, history }) => {
  //amountOfDays,statusDisplay,toDisplay
  const [amountOfDays, setAmountOfDays] = useState(0)
  const [statusDisplay, setStatusDisplay] = useState('')
  const [toDisplay, setToDisplay] = useState(false)

  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  const dispatch = useDispatch()

  const countdownCreate = useSelector((state) => state.countdownCreate)
  const { loading, error } = countdownCreate

  const countdownList = useSelector((state) => state.countdownList)
  const {
    loading: loadingCountdown,
    error: errorCountdown,
    countdowns,
  } = countdownList

  console.log(countdowns)
  console.log(countdowns)
  console.log(countdowns)

  useEffect(() => {
    dispatch(countdownListAction())
  }, [dispatch])

  const redirect = location.search
    ? location.search.split('=')[1]
    : '/admin-dashboard'

  const handleShow2 = () => {
    dispatch(countdownListAction())
    setShow2(true)
  }
  const handleClose2 = () => setShow2(false)

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteCountdownAction(id))
      dispatch(countdownListAction())
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(countdownCreateAction(amountOfDays, statusDisplay, toDisplay))
    history.push(redirect)
  }

  // Random component
  const Completionist = () => (
    <span>
      <span
        style={{
          display: 'table-cell',
          verticalAlign: 'middle',
          textAlign: 'center',
        }}
        className="bg-danger m-1 text-white p-2 font-weight-bold rounded">
        <span>00</span>
        <br />
        <div style={{ fontSize: '0.5rem', marginTop: '-6px' }}>days</div>
      </span>
      :
      <span
        style={{
          display: 'table-cell',
          verticalAlign: 'middle',
          textAlign: 'center',
        }}
        className="bg-danger m-1 text-white p-2 font-weight-bold rounded">
        <span>00</span>
        <br />
        <div style={{ fontSize: '0.5rem', marginTop: '-6px' }}>hours</div>
      </span>
      :
      <span
        style={{
          display: 'table-cell',
          verticalAlign: 'middle',
          textAlign: 'center',
        }}
        className="bg-danger m-1 text-white p-2 font-weight-bold rounded">
        <span>00</span>
        <br />
        <div style={{ fontSize: '0.5rem', marginTop: '-6px' }}>mins</div>
      </span>
      :
      <span
        style={{
          display: 'table-cell',
          verticalAlign: 'middle',
          textAlign: 'center',
        }}
        className="bg-danger m-1 text-white p-2 font-weight-bold rounded">
        <span>00</span>
        <br />
        <div style={{ fontSize: '0.5rem', marginTop: '-6px' }}>secs</div>
      </span>
      <br />
      <span
        style={{ fontSize: '0.5rem', marginTop: '-6px' }}
        className="bg-danger pt-1 pb-1 ps-3 pe-3 text-white rounded">
        Expired Subscription
      </span>
    </span>
  )

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    // if (days === 5 && hours === 23 && minutes === 25 && seconds === 0) {
    //   dispatch(listUsers(pageNumber))
    // }

    if (completed) {
      // Render a completed state

      return <Completionist />
    } else {
      // Render a countdown
      return (
        <span className="span1">
          <span
            style={{
              display: 'table-cell',
              verticalAlign: 'middle',
              textAlign: 'center',
              backgroundColor: '#32CD32',
            }}
            className=" m-1 text-white p-2 font-weight-bold rounded">
            <span>{zeroPad(days)}</span>
            <br />
            <div style={{ fontSize: '0.5rem', marginTop: '-6px' }}>days</div>
          </span>
          :
          <span
            style={{
              display: 'table-cell',
              verticalAlign: 'middle',
              textAlign: 'center',
              backgroundColor: '#32CD32',
            }}
            className=" m-1 text-white p-2 font-weight-bold rounded">
            <span>{zeroPad(hours)}</span>
            <br />
            <div style={{ fontSize: '0.5rem', marginTop: '-6px' }}>hours</div>
          </span>
          :
          <span
            style={{
              display: 'table-cell',
              verticalAlign: 'middle',
              textAlign: 'center',
              backgroundColor: '#32CD32',
            }}
            className=" m-1 text-white p-2 font-weight-bold rounded">
            <span>{zeroPad(minutes)}</span>
            <br />
            <div style={{ fontSize: '0.5rem', marginTop: '-6px' }}>mins</div>
          </span>
          :
          <span
            style={{
              display: 'table-cell',
              verticalAlign: 'middle',
              textAlign: 'center',
              backgroundColor: '#32CD32',
            }}
            className=" m-1 text-white p-2 font-weight-bold rounded">
            <span>{zeroPad(seconds)}</span>
            <br />
            <div style={{ fontSize: '0.5rem', marginTop: '-6px' }}>secs</div>
          </span>
          <br />
          <span
            style={{
              fontSize: '0.5rem',
              marginTop: '-6px',
              backgroundColor: '#32CD32',
            }}
            className=" pt-1 pb-1 ps-3 pe-3 text-white rounded">
            Countdown ( Expires In )
          </span>
        </span>
      )
    }
  }

  return (
    <>
      <Modal
        size="lg"
        centered
        show={show2}
        onHide={handleClose2}
        animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>
            {' '}
            <h4>
              <span
                style={{ fontWeight: 'bolder' }}
                className=" text-primary text-center">
                {' '}
                COUNTDOWN
              </span>
            </h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={12}>
              {/* { fixture === undefined ? null : fixture.length === 0 ? null : null} */}
              {countdowns === undefined ? null : countdowns.length ===
                0 ? null : (
                <div className="bg-primary text-white mt-2 p-4" variant="light">
                  {' '}
                  COUNTDOWN
                </div>
              )}

              {/* <div
                style={{
                  marginLeft: '3em',
                  marginRight: '3em',
                }}></div> */}

              <Table striped bordered hover>
                {countdowns === undefined ? (
                  <Message variant="danger">Await Promo Countdown</Message>
                ) : countdowns.length === 0 ? (
                  <Message variant="danger">Await Promo Countdown</Message>
                ) : (
                  <thead className="bg-primary">
                    <tr>
                      <th
                        style={{
                          textAlign: 'center',
                          verticalAlign: 'middle',
                        }}>
                        S/N
                      </th>
                      <th
                        style={{
                          textAlign: 'center',
                          verticalAlign: 'middle',
                        }}>
                        DATE
                      </th>
                      <th
                        style={{
                          textAlign: 'center',
                          verticalAlign: 'middle',
                        }}>
                        NUMBER OF DAYS
                      </th>
                      <th
                        style={{
                          textAlign: 'center',
                          verticalAlign: 'middle',
                        }}>
                        COUNTDOWN
                      </th>
                      {/* <th
                        style={{
                          textAlign: 'center',
                          verticalAlign: 'middle',
                        }}>
                        {' '}
                        DISPLAY
                      </th> */}
                      <th
                        style={{
                          textAlign: 'center',
                          verticalAlign: 'middle',
                        }}>
                        {' '}
                        DISPLAY
                      </th>

                      <th
                        style={{
                          textAlign: 'center',
                          verticalAlign: 'middle',
                        }}>
                        EDIT
                      </th>
                      <th
                        style={{
                          textAlign: 'center',
                          verticalAlign: 'middle',
                        }}>
                        DELETE
                      </th>
                      {/* <th
                        style={{
                          textAlign: 'center',
                          verticalAlign: 'middle',
                        }}>
                        DELETE
                      </th> */}
                    </tr>
                  </thead>
                )}

                <tbody>
                  {countdowns === undefined ? (
                    <Message variant="danger">Await Promo Countdown</Message>
                  ) : (
                    countdowns.slice(0, 10).map((countdown, index) => (
                      <tr key={countdown._id}>
                        <td
                          style={{
                            textAlign: 'center',
                            verticalAlign: 'middle',
                          }}>
                          {index + 1}
                        </td>
                        <td
                          style={{
                            textAlign: 'center',
                            verticalAlign: 'middle',
                          }}>
                          <p className="mb-2">
                            <DateIcon /> -
                            {moment(countdown.date).format('DD/MM/YYYY')}
                          </p>
                        </td>

                        <td
                          style={{
                            textAlign: 'center',
                            verticalAlign: 'middle',
                          }}>
                          {countdown.amountOfDays}
                        </td>
                        <td
                          style={{
                            textAlign: 'center',
                            verticalAlign: 'middle',
                          }}>
                          {countdowns.length === 0 ? (
                            <span>
                              <span
                                style={{
                                  display: 'table-cell',
                                  verticalAlign: 'middle',
                                  textAlign: 'center',
                                }}
                                className="bg-primary m-1 text-white p-2 font-weight-bold rounded">
                                <span>00</span>
                                <br />
                                <div
                                  style={{
                                    fontSize: '0.5rem',
                                    marginTop: '-6px',
                                  }}>
                                  days
                                </div>
                              </span>
                              :
                              <span
                                style={{
                                  display: 'table-cell',
                                  verticalAlign: 'middle',
                                  textAlign: 'center',
                                }}
                                className="bg-primary m-1 text-white p-2 font-weight-bold rounded">
                                <span>00</span>
                                <br />
                                <div
                                  style={{
                                    fontSize: '0.5rem',
                                    marginTop: '-6px',
                                  }}>
                                  hours
                                </div>
                              </span>
                              :
                              <span
                                style={{
                                  display: 'table-cell',
                                  verticalAlign: 'middle',
                                  textAlign: 'center',
                                }}
                                className="bg-primary m-1 text-white p-2 font-weight-bold rounded">
                                <span>00</span>
                                <br />
                                <div
                                  style={{
                                    fontSize: '0.5rem',
                                    marginTop: '-6px',
                                  }}>
                                  mins
                                </div>
                              </span>
                              :
                              <span
                                style={{
                                  display: 'table-cell',
                                  verticalAlign: 'middle',
                                  textAlign: 'center',
                                }}
                                className="bg-primary m-1 text-white p-2 font-weight-bold rounded">
                                <span>00</span>
                                <br />
                                <div
                                  style={{
                                    fontSize: '0.5rem',
                                    marginTop: '-6px',
                                  }}>
                                  secs
                                </div>
                              </span>
                              <br />
                              <span
                                style={{
                                  fontSize: '0.5rem',
                                  marginTop: '-6px',
                                }}
                                className="bg-primary pt-1 pb-1 ps-3 pe-3 text-white rounded">
                                Await Subscription
                              </span>
                            </span>
                          ) : (
                            <Countdown
                              date={moment(
                                moment(countdown.date).add(
                                  countdown.amountOfDays,
                                  'days'
                                )
                              ).valueOf()}
                              renderer={renderer}></Countdown>
                          )}
                        </td>
                        {/* <td
                          style={{
                            textAlign: 'center',
                            verticalAlign: 'middle',
                          }}>
                          {countdown.statusDisplay}
                        </td> */}
                        <td
                          style={{
                            textAlign: 'center',
                            verticalAlign: 'middle',
                          }}>
                          {
                            <div className="pt-2 ms-2 mx-auto">
                              <div class="custom-control custom-switch">
                                <input
                                  readOnly
                                  type="checkbox"
                                  class="custom-control-input"
                                  value={countdown.toDisplay}
                                  checked={countdown.toDisplay}
                                  id="1"></input>
                              </div>
                            </div>
                          }
                        </td>
                        <td
                          style={{
                            textAlign: 'center',
                            verticalAlign: 'middle',
                          }}>
                          <a href={`/admin/countdown/${countdown._id}/edit`}>
                            <Button variant="light" className="btn-sm">
                              <i className="fas fa-edit"></i>
                            </Button>
                          </a>
                        </td>
                        <td
                          style={{
                            textAlign: 'center',
                            verticalAlign: 'middle',
                          }}>
                          <Button
                            variant="danger"
                            className="btn-sm"
                            onClick={() => deleteHandler(countdown._id)}>
                            <i className="fas fa-trash"></i>
                          </Button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          {/* {prediction.fixture === undefined ? 'hello' : 'am fine'} */}
          {/* {isPublished ? (
            <Button variant="secondary" onClick={handleClose2}>
              Delete All
            </Button>
          ) : (
            <Button
              variant="danger"
              className="btn-sm"
              onClick={() => deleteHandler2(prediction._id)}>
              <i className="fas fa-trash"> Delete All</i>
            </Button>
          )} */}
        </Modal.Footer>
      </Modal>

      <div
        className="ms-3 me-3 mb-4 mt-4 p-4"
        style={{ border: '2px  solid #2C3E50' }}>
        <div className="d-flex justify-content-sm-between ">
          <Link
            style={{ textAlign: 'center', verticalAlign: 'middle' }}
            // onClick={resetHandler}
            to="/admin-dashboard"
            className="btn btn-primary me-2 my-3">
            {' '}
            Go Back{' '}
          </Link>
          <Link
            style={{ textAlign: 'center', verticalAlign: 'middle' }}
            onClick={handleShow2}
            className="btn btn-primary me-2 my-3">
            {' '}
            Check Countdown{' '}
          </Link>
          {/* <Link
            style={{ textAlign: 'center', verticalAlign: 'middle' }}
            onClick={handleShow}
            className="btn btn-primary  my-3">
            {' '}
            Add Fixture{' '}
          </Link> */}
        </div>
        <FormContainer>
          <h1 style={{ textAlign: 'center' }}>Create Countdown</h1>
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

                  <Form.Group className="mt-2" controlId="amountOfDays">
                    <Form.Label>Countdown</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Countdown"
                      value={amountOfDays}
                      onChange={(e) =>
                        setAmountOfDays(e.target.value)
                      }></Form.Control>
                  </Form.Group>
                  <Form.Group className="mt-2" controlId="statusDisplay">
                    <Form.Label>Display Caption</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Status Display Caption"
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
                  Create Countdown
                </Button>
              </div>
            </Form>
          )}
        </FormContainer>
      </div>
    </>
  )
}

export default CountdownCreateScreen
