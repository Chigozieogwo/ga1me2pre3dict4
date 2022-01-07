import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Modal, Row, Col, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import {
  getUserDetails,
  updateUser,
  paymentHistoryAction,
} from '../actions/userActions'
import { USER_UPDATE_RESET } from '../constants/userConstants'
// import Countdown from 'react-countdown'
import { ReactComponent as DateIcon } from '../components/svgs/date.svg'
import moment from 'moment'
import Countdown, { zeroPad } from 'react-countdown'

const UserEditScreen = ({ match, history }) => {
  const userId = match.params.id

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)
  const [isVip, setIsVip] = useState(false)
  const [isTipster, setIsTipster] = useState(false)

  const [amountPayment, setAmountPayment] = useState(0)
  const [statusPayment, setStatusPayment] = useState('Paid')
  const [commentPayment, setCommentPayment] = useState('')

  const [show, setShow] = useState(false)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  // console.log(JSON.parse(localStorage.getItem('payment')) + 'mmmm')
  //  const user = JSON.stringify(user)
  console.log(JSON.stringify(user) + 'my own')
  console.log(JSON.stringify(user) + 'my own')
  console.log(JSON.stringify(user) + 'my own')

  const userUpdate = useSelector((state) => state.userUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET })
      history.push('/admin/userlist')
    } else {
      if (!user.name || user._id !== userId) {
        dispatch(getUserDetails(userId))
      } else {
        setName(user.name)
        setEmail(user.email)
        setIsAdmin(user.isAdmin)
        setIsVip(user.isVip)
        setIsTipster(user.isTipster)
      }
    }
  }, [dispatch, history, userId, user, successUpdate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateUser({ _id: userId, name, email, isAdmin, isVip, isTipster })
    )
  }

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  const submitHistoryHandler = (e) => {
    e.preventDefault()

    dispatch(
      paymentHistoryAction({ amountPayment, statusPayment, commentPayment })
    )
    setShow(false)
    //countdown1(amountPayment)
  }

  const resetHandler = (e) => {
    e.preventDefault()
    // dispatch({ type: TRACK_DETAILS_RESET })
    localStorage.removeItem('user_Details')
    history.push('/admin/userlist')
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
    // if (user.paymentHistory[0] && user.isVip && completed) {
    //   setIsVip(false)
    //   if (isVip) {
    //     dispatch(
    //       updateUser({ _id: userId, name, email, isAdmin, isVip, isTipster })
    //     )
    //     // dispatch({ type: USER_UPDATE_RESET })
    //     history.push('/admin/userlist')
    //   }
    //   return <Completionist />
    // }
    if (completed) {
      // Render a completed state
      // dispatch(updateUser({ _id: userId, isVip }))
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
        show={show}
        onHide={handleClose}
        animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>
            {' '}
            <h4>
              <span
                style={{ fontWeight: 'bolder' }}
                className=" text-primary text-center">
                {' '}
                PAYMENT PACKAGE{' '}
              </span>
            </h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row
            className="mt-3 mb-3 pb-4 pt-4"
            // style={{ border: '.5px  solid #2C3E50', borderRadius: '15px' }}
          >
            <Col md={4} sm={4}>
              <Form.Group controlId="amountPayment">
                <Form.Label>No of Days</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="No of Days"
                  value={amountPayment}
                  onChange={(e) =>
                    setAmountPayment(e.target.value)
                  }></Form.Control>
              </Form.Group>
            </Col>
            <Col md={4} sm={4}>
              <Form.Group controlId="status2">
                <Form.Label>Active</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Status"
                  value={statusPayment}
                  onChange={(e) =>
                    setStatusPayment(e.target.value)
                  }></Form.Control>
              </Form.Group>
            </Col>
            <Col md={4} sm={4}>
              <Form.Group controlId="comment">
                <Form.Label>Package Plan</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Package Plan"
                  value={commentPayment}
                  onChange={(e) =>
                    setCommentPayment(e.target.value)
                  }></Form.Control>
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submitHistoryHandler}>
            Add Payment Package
          </Button>
        </Modal.Footer>
      </Modal>

      <div
        className="p-2 ms-3 me-3 mt-4 mb-5"
        style={{ border: '3px  solid #2C3E50' }}>
        <div className="d-flex justify-content-sm-between ">
          <Link
            onClick={resetHandler}
            to="/admin/userlist"
            className="btn btn-primary me-2 my-3">
            {' '}
            Go Back{' '}
          </Link>
          <Link onClick={handleShow} className="btn btn-primary  my-3">
            {' '}
            Add Payment Package{' '}
          </Link>
          {/* <Button className="ms-5"  variant="primary" onClick={handleShow}>
        Add History
      </Button> */}
        </div>
        {/* <Countdown
          date={user.paymentHistory.paymentHistory.date[0] + 10000000}
        /> */}

        <FormContainer>
          <h1 style={{ textAlign: 'center' }}>Edit User</h1>
          {loadingUpdate && <Loader />}
          {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <Form onSubmit={submitHandler}>
              <Form.Group className="mt-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}></Form.Control>
              </Form.Group>

              <Form.Group className="mt-3" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}></Form.Control>
              </Form.Group>

              <Form.Group className="mt-3 " controlId="isadmin">
                <Form.Check
                  type="checkbox"
                  label="Is Admin"
                  checked={isAdmin}
                  onChange={(e) => setIsAdmin(e.target.checked)}></Form.Check>
              </Form.Group>
              <Form.Group className="mt-3 " controlId="istipster">
                <Form.Check
                  type="checkbox"
                  label="Is Tipster"
                  checked={isTipster}
                  onChange={(e) => setIsTipster(e.target.checked)}></Form.Check>
              </Form.Group>
              <Form.Group className="mt-3 " controlId="isvip">
                <Form.Check
                  type="checkbox"
                  label="Is Vip"
                  checked={isVip}
                  onChange={(e) => setIsVip(e.target.checked)}></Form.Check>
              </Form.Group>

              <Button className="mt-3 mb-4" type="submit" variant="primary">
                Update
              </Button>
            </Form>
          )}

          <Row>
            <Col md={12}>
              <div className="bg-primary text-white p-4" variant="light">
                {' '}
                PACKAGE PLAN PAYMENT HISTORY
              </div>
              <div
                style={{
                  marginLeft: '3em',
                  marginRight: '3em',
                }}></div>

              <Table striped bordered hover>
                <thead className="bg-primary">
                  <tr>
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
                      DUE DATE
                    </th>
                    <th
                      style={{
                        textAlign: 'center',
                        verticalAlign: 'middle',
                      }}>
                      {' '}
                      EXPIRE COUNTDOWN
                    </th>
                    <th
                      style={{
                        textAlign: 'center',
                        verticalAlign: 'middle',
                      }}>
                      ACTIVE
                    </th>
                    <th
                      style={{
                        textAlign: 'center',
                        verticalAlign: 'middle',
                      }}>
                      NO OF DAYS{' '}
                    </th>
                    <th
                      style={{
                        textAlign: 'center',
                        verticalAlign: 'middle',
                      }}>
                      PACKAGE PLAN
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {/* {user.paymentHistory.length === 0 ? (<Message variant="info">
                    Await Subscription from user
                  </Message>) : null} */}
                  {user.paymentHistory === undefined ? (
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
                        <div style={{ fontSize: '0.5rem', marginTop: '-6px' }}>
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
                        <div style={{ fontSize: '0.5rem', marginTop: '-6px' }}>
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
                        <div style={{ fontSize: '0.5rem', marginTop: '-6px' }}>
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
                        <div style={{ fontSize: '0.5rem', marginTop: '-6px' }}>
                          secs
                        </div>
                      </span>
                      <br />
                      <span
                        style={{ fontSize: '0.5rem', marginTop: '-6px' }}
                        className="bg-primary pt-1 pb-1 ps-3 pe-3 text-white rounded">
                        Await Subscription
                      </span>
                    </span>
                  ) : (
                    user.paymentHistory
                      .slice(0, 10)
                      .map((paymentHistory, index) => (
                        <tr key={paymentHistory._id}>
                          <td
                            style={{
                              textAlign: 'center',
                              verticalAlign: 'middle',
                            }}>
                            {' '}
                            <p className="mb-2">
                              <DateIcon /> -
                              {moment(paymentHistory.date).format(
                                'Do MMMM, YYYY'
                              )}
                            </p>
                          </td>
                          <td
                            style={{
                              textAlign: 'center',
                              verticalAlign: 'middle',
                            }}>
                            <DateIcon /> -
                            {moment(
                              moment(paymentHistory.date).add(
                                paymentHistory.amountPayment,
                                'days'
                              )
                            ).format('Do MMMM, YYYY')}
                          </td>
                          <td
                            style={{
                              textAlign: 'center',
                              verticalAlign: 'middle',
                            }}>
                            {
                              <Countdown
                                date={moment(
                                  moment(paymentHistory.date).add(
                                    paymentHistory.amountPayment,
                                    'days'
                                  )
                                ).valueOf()}
                                renderer={renderer}></Countdown>
                            }
                          </td>

                          <td
                            style={{
                              textAlign: 'center',
                              verticalAlign: 'middle',
                            }}>
                            {paymentHistory.statusPayment}
                          </td>
                          <td
                            style={{
                              textAlign: 'center',
                              verticalAlign: 'middle',
                            }}>
                            {paymentHistory.amountPayment}
                          </td>

                          <td
                            style={{
                              textAlign: 'center',
                              verticalAlign: 'middle',
                            }}>
                            {paymentHistory.commentPayment}
                          </td>
                        </tr>
                      ))
                  )}
                </tbody>
              </Table>
            </Col>
          </Row>
        </FormContainer>
      </div>
    </>
  )
}

export default UserEditScreen
