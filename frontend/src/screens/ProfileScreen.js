import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Table, Form, Button, Modal, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {
  getUserDetails,
  updateUserProfile,
  updateUserProfileMe,
  paymentHistoryAction,
  updateUser,
  logout,
  sendSubExpireEmail,
} from '../actions/userActions'
// import { listMyOrders } from '../actions/orderActions'
import {
  USER_UPDATE_PROFILE_RESET,
  USER_UPDATE_PROFILE_ME_RESET,
} from '../constants/userConstants'
import FormContainer from '../components/FormContainer'
import Countdown, { zeroPad } from 'react-countdown'
import moment from 'moment'

import { Link } from 'react-router-dom'

import Paginate from '../components/Paginate.js'
import Pricing from '../components/Pricing/Pricing.js'
import { predictionVipListAction } from '../actions/predictionVipActions.js'
import { ReactComponent as DateIcon } from '../components/svgs/date.svg'
import { countdownListAction } from '../actions/countdownActions.js'
import imageLogo from '../images/profile.jpg'
import { NavItemBtn, NavBtnLink } from '../components/Navbar/Navbar.elements'
// import { Carousel, CardDeck, Card } from 'react-bootstrap'

import image1 from '../images/1xbet.png'

import imagegif from '../images/1xbet2.gif'
import promo from '../images/promo.gif'
import promo1 from '../images/promo1.gif'
import promo6 from '../images/promo6.gif'

import promo7 from '../images/promo7.gif'
import pic1 from '../images/image/pic-1.png'
import pic2 from '../images/image/pic-2.png'
import pic3 from '../images/image/pic-3.png'
import pic4 from '../images/image/pic-4.png'
import pic5 from '../images/image/pic-5.png'
import pic6 from '../images/image/pic-6.png'

import '../tableStyling.css'
import {
  COUNTDOWN_LIST_SUCCESS,
  COUNTDOWN_LIST_FAIL,
  COUNTDOWN_LIST_REQUEST,
} from '../constants/countDownConstants'

const ProfileScreen = ({ location, history, match }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isVip, setIsVip] = useState(false)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const [countdownTimer, setCountdownTimer] = useState([])
  // const [show, setShow] = useState(false)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

  // const userUpdateProfileMe = useSelector((state) => state.userUpdateProfileMe)
  // const { success: successMe } = userUpdateProfileMe

  // const subExpireEmail = useSelector((state) => state.subExpireEmail)
  // const { loading: loadingSub, success: successSub } = subExpireEmail

  const predictionVipList = useSelector((state) => state.predictionVipList)
  const {
    loading: loadingVip,
    error: errorVip,
    predictions,
    page,
    pages,
  } = predictionVipList

  const countdownList = useSelector((state) => state.countdownList)
  const {
    loading: loadingCountdown,
    error: errorCountdown,
    countdowns,
  } = countdownList

  const pageNumber = match.params.pageNumber || 1

  // console.log(userInfo.paymentHistory + '2  Profile vip prediction Screen ')
  //  const countdowns1 = JSON.parse(countdowns)
  // var countdownString = JSON.stringify(countdowns[0])
  // var countdowns1 = JSON.parse(countdownString)
  countdowns.map((p, i) => {
    console.log('PROPS ID: ' + p.id)
  })

  console.log(countdowns + '  Profile vip prediction Screen ')
  // console.log(loadingCountdown + '  Profile vip prediction Screen ')
  console
    .log
    // JSON.stringify(countdowns[0]) + '  1  Profile vip prediction Screen '
    ()
  // console.log(JSON.stringify(countdowns) + '  Profile vip prediction Screen ')
  // const handleShow = () => setShow(true)
  // const handleClose = () => setShow(false)

  const predictionVipfixture = useSelector(
    (state) => state.predictionVipfixture
  )
  const {
    loading: loadingFixture,
    error: errorFixture,
    fixture,
  } = predictionVipfixture

  useEffect(() => {
    // const getCountdownTimer = () => {
    //   try {
    //     axios.get('http://localhost:5000/api/countdown').then((response) => {
    //       console.log(response + ' data response')
    //       const myCountdownTimer = response.data
    //       setCountdownTimer(myCountdownTimer)
    //     })
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
    // getCountdownTimer()
    if (!userInfo) {
      history.push('/login')
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET })
        dispatch(getUserDetails('profile'))
        // dispatch(listMyOrders())
        dispatch(predictionVipListAction(pageNumber))
        // dispatch(predictionVipListAction())
      } else {
        setName(user.name)
        setEmail(user.email)
        setIsVip(user.isVip)
      }
    }
    // dispatch({type :COUNTDOWN_LIST_SUCCESS})
    dispatch(countdownListAction())
    // setCountdownTimer(countdowns)
  }, [dispatch, history, userInfo, user, success, pageNumber])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(
        updateUserProfile({ id: user._id, name, email, password, isVip })
      )
    }
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
    // console.log(days + 'days')
    // console.log(user.email + ' email')
    if (days === 6 && hours === 23 && minutes === 57 && seconds === 0) {
      dispatch(
        sendSubExpireEmail({ id: userInfo._id, name, email, password, isVip })
      )
    }
    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      if (user.isVip) {
        setIsVip(false)
        dispatch(
          updateUserProfile({ id: user._id, name, email, password, isVip })
        )
        localStorage.removeItem('userInfo')
        dispatch(getUserDetails('profile'))

        dispatch(logout())
      }
    }

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

  // Random component
  const CompletionistPromo = () => (
    <span className="span1">
          <span
            style={{
              display: 'table-cell',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '70px',
              width: '70px',
              borderRadius: '50%',
              backgroundColor: '#E74C3C',
              // color: '#32CD32',
              // border: '3px solid #32CD32',
            }}
            className=" m-1 text-white  font-weight-bold ">
            <span
              style={{
                fontSize: '2rem',
                fontWeight: 'bolder',
              }}>
              00
            </span>
            <br />
            <div style={{ fontSize: '0.6rem', marginTop: '-6px' }}>days</div>
          </span>
          <span
            style={{
              display: 'table-cell',
              verticalAlign: 'middle',
              textAlign: 'center',
              fontWeight: 'bolder',
              fontSize: '1.5rem',
              color: 'gray',
              width: '10px',
            }}>
            :
          </span>
          <span
            style={{
              display: 'table-cell',
              verticalAlign: 'middle',
              textAlign: 'center',
              backgroundColor: '#E74C3C',
              height: '70px',
              width: '70px',
              borderRadius: '50%',
              // color: '#32CD32',
              // border: '3px solid #32CD32',
            }}
            className=" m-1 text-white  font-weight-bold ">
            <span
              style={{
                fontSize: '2rem',
                fontWeight: 'bolder',
              }}>
              00
            </span>
            <br />
            <div style={{ fontSize: '0.6rem', marginTop: '-6px' }}>hours</div>
          </span>
          <span
            style={{
              display: 'table-cell',
              verticalAlign: 'middle',
              textAlign: 'center',
              fontWeight: 'bolder',
              fontSize: '1.5rem',
              color: 'gray',
              width: '10px',
            }}>
            :
          </span>
          <span
            style={{
              display: 'table-cell',
              verticalAlign: 'middle',
              textAlign: 'center',
              // color: '#32CD32',
              // border: '3px solid #32CD32',
              height: '70px',
              width: '70px',
              borderRadius: '50%',
              backgroundColor: '#E74C3C',
            }}
            className=" m-1 text-white font-weight-bold ">
            <span
              style={{
                fontSize: '2rem',
                fontWeight: 'bolder',
              }}>
              00
            </span>
            <br />
            <div style={{ fontSize: '0.6rem', marginTop: '-6px' }}>mins</div>
          </span>
          <span
            style={{
              display: 'table-cell',
              verticalAlign: 'middle',
              textAlign: 'center',
              fontWeight: 'bolder',
              fontSize: '1.5rem',
              color: 'gray',
              width: '10px',
            }}>
            :
          </span>
          <span
            style={{
              display: 'table-cell',
              verticalAlign: 'middle',
              textAlign: 'center',
              // color: '#32CD32',
              // border: '3px solid #ffff',
              height: '70px',
              width: '70px',
              borderRadius: '50%',
              backgroundColor: '#E74C3C',
            }}
            className=" m-1 text-white  font-weight-bold ">
            <span
              style={{
                fontSize: '2rem',
                fontWeight: 'bolder',
              }}>
              00
            </span>
            <br />
            <div style={{ fontSize: '0.6rem', marginTop: '-6px' }}>secs</div>
          </span>
          <br />
          {/* <span
            style={{
              fontSize: '0.5rem',
              marginTop: '-6px',
              backgroundColor: '#32CD32',
            }}
            className=" pt-1 pb-1 ps-3 pe-3 text-white rounded">
            Countdown ( Expires In )
          </span> */}
        </span>
     
  )

  // Renderer callback with condition
  const rendererPromo = ({ days, hours, minutes, seconds, completed }) => {
    // if (days === 5 && hours === 23 && minutes === 25 && seconds === 0) {
    //   dispatch(listUsers(pageNumber))
    // }

    if (completed) {
      // Render a completed state

      return <CompletionistPromo />
    } else {
      // Render a countdown
      return (
        <span className="span1">
          <span
            style={{
              display: 'table-cell',
              verticalAlign: 'middle',
              textAlign: 'center',
              height: '70px',
              width: '70px',
              borderRadius: '50%',
              backgroundColor: '#32CD32',
              // color: '#32CD32',
              // border: '3px solid #32CD32',
            }}
            className=" m-1 text-white  font-weight-bold ">
            <span
              style={{
                fontSize: '2rem',
                fontWeight: 'bolder',
              }}>
              {zeroPad(days)}
            </span>
            <br />
            <div style={{ fontSize: '0.6rem', marginTop: '-6px' }}>days</div>
          </span>
          <span
            style={{
              display: 'table-cell',
              verticalAlign: 'middle',
              textAlign: 'center',
              fontWeight: 'bolder',
              fontSize: '1.5rem',
              color: 'gray',
              width: '10px',
            }}>
            :
          </span>
          <span
            style={{
              display: 'table-cell',
              verticalAlign: 'middle',
              textAlign: 'center',
              backgroundColor: '#32CD32',
              height: '70px',
              width: '70px',
              borderRadius: '50%',
              // color: '#32CD32',
              // border: '3px solid #32CD32',
            }}
            className=" m-1 text-white  font-weight-bold ">
            <span
              style={{
                fontSize: '2rem',
                fontWeight: 'bolder',
              }}>
              {zeroPad(hours)}
            </span>
            <br />
            <div style={{ fontSize: '0.6rem', marginTop: '-6px' }}>hours</div>
          </span>
          <span
            style={{
              display: 'table-cell',
              verticalAlign: 'middle',
              textAlign: 'center',
              fontWeight: 'bolder',
              fontSize: '1.5rem',
              color: 'gray',
              width: '10px',
            }}>
            :
          </span>
          <span
            style={{
              display: 'table-cell',
              verticalAlign: 'middle',
              textAlign: 'center',
              // color: '#32CD32',
              // border: '3px solid #32CD32',
              height: '70px',
              width: '70px',
              borderRadius: '50%',
              backgroundColor: '#32CD32',
            }}
            className=" m-1 text-white font-weight-bold ">
            <span
              style={{
                fontSize: '2rem',
                fontWeight: 'bolder',
              }}>
              {zeroPad(minutes)}
            </span>
            <br />
            <div style={{ fontSize: '0.6rem', marginTop: '-6px' }}>mins</div>
          </span>
          <span
            style={{
              display: 'table-cell',
              verticalAlign: 'middle',
              textAlign: 'center',
              fontWeight: 'bolder',
              fontSize: '1.5rem',
              color: 'gray',
              width: '10px',
            }}>
            :
          </span>
          <span
            style={{
              display: 'table-cell',
              verticalAlign: 'middle',
              textAlign: 'center',
              // color: '#32CD32',
              // border: '3px solid #ffff',
              height: '70px',
              width: '70px',
              borderRadius: '50%',
              backgroundColor: '#32CD32',
            }}
            className=" m-1 text-white  font-weight-bold ">
            <span
              style={{
                fontSize: '2rem',
                fontWeight: 'bolder',
              }}>
              {zeroPad(seconds)}
            </span>
            <br />
            <div style={{ fontSize: '0.6rem', marginTop: '-6px' }}>secs</div>
          </span>
          <br />
          {/* <span
            style={{
              fontSize: '0.5rem',
              marginTop: '-6px',
              backgroundColor: '#32CD32',
            }}
            className=" pt-1 pb-1 ps-3 pe-3 text-white rounded">
            Countdown ( Expires In )
          </span> */}
        </span>
     
     )
    }
  }
  return (
    <>
      {/* <Modal
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
       <h1> modal expire</h1>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal> */}

      <FormContainer>
        <Row className="p-3">
          <Col lg={3}>
            <div
              style={{ border: '2.5px  solid #2C3E50' }}
              className="p-4 mb-4">
              {/* <h2>User Profile</h2> */}
              {/* <p
                style={{
                  textAlign: 'center',
                  verticalAlign: 'middle',
                  fontSize: '0.6rem',
                }}>
                {' '}
                Countdown <span className="font-italic">( Expires In )</span>
              </p> */}
              <p
                style={{
                  textAlign: 'center',
                  verticalAlign: 'middle',
                  marginTop: '0.5rem',
                }}>
                {user.paymentHistory === undefined ? null : user.paymentHistory
                    .length === 0 ? (
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
                  <Countdown
                    date={moment(
                      moment(user.paymentHistory[0].date).add(
                        user.paymentHistory[0].amountPayment,
                        'days'
                      )
                    ).valueOf()}
                    renderer={renderer}></Countdown>
                )}
              </p>
              {message && <Message variant="danger">{message}</Message>}
              {}
              {success && <Message variant="success">Profile Updated</Message>}
              {loading ? (
                <Loader />
              ) : error ? (
                <Message variant="danger">{error}</Message>
              ) : (
                <div>
                  <Form onSubmit={submitHandler}>
                    <Form.Group controlId="name">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="name"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) =>
                          setName(e.target.value)
                        }></Form.Control>
                    </Form.Group>

                    <Form.Group className="mt-2" controlId="email">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) =>
                          setEmail(e.target.value)
                        }></Form.Control>
                    </Form.Group>

                    <Form.Group className="mt-2" controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) =>
                          setPassword(e.target.value)
                        }></Form.Control>
                    </Form.Group>

                    <Form.Group className="mt-2" controlId="confirmPassword">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={(e) =>
                          setConfirmPassword(e.target.value)
                        }></Form.Control>
                    </Form.Group>

                    <Button className="mt-3 bg-primary" type="submit">
                      Update
                    </Button>
                  </Form>
                </div>
              )}
            </div>
            <div className="hideme">
              <div
                onClick={() =>
                  window.open(
                    'https://refpa.top/L?tag=d_1256913m_97c_&site=1256913&ad=97',
                    '_blank'
                  )
                }
                className="text-center  promo mt-4  "
                style={{
                  border: '2px solid #32CD32',
                  borderRadius: '15px',
                  cursor: 'pointer',
                  // backgroundColor: 'rgba(181, 185, 190, 0.102)',
                }}>
                <div className="p-1 h-50">
                  <img
                    class="img-fluid w-25 mt-3 rounded-circle"
                    src={image1}
                    alt=""></img>
                  <br></br>
                  <h6 className=" text-primary pt-1 bolder">
                    Up To #100,000 to grab
                  </h6>
                  <img class="img-fluid w-75" src={imagegif} alt=""></img>
                  <br></br>
                  <NavBtnLink>
                    <Button
                      className="promobutton "
                      style={{ width: '25em', backgroundColor: '#32CD32' }}>
                      GET 200% BONUS
                    </Button>
                  </NavBtnLink>
                </div>
              </div>
              <div
                style={{ display: 'flex', justifyContent: 'center' }}
                className="pt-4 mt-2  pb-2">
                <img
                  style={{ cursor: 'pointer' }}
                  onClick={() =>
                    window.open(
                      'https://refpa.top/L?tag=d_1256913m_97c_&site=1256913&ad=97',
                      '_blank'
                    )
                  }
                  className="promo2 img-fluid  h-75"
                  src={promo6}
                  alt=""></img>
              </div>
              <div
                style={{ display: 'flex', justifyContent: 'center' }}
                className="pt-2  pb-2">
                <img
                  style={{ cursor: 'pointer' }}
                  onClick={() =>
                    window.open(
                      'https://refpa.top/L?tag=d_1256913m_97c_&site=1256913&ad=97',
                      '_blank'
                    )
                  }
                  className="promo2 img-fluid  h-75"
                  src={promo7}
                  alt=""></img>
              </div>
            </div>
          </Col>
          <Col className=" ps-4 pe-4 " lg={9}>
            {user.isVip ? (
              <div>
                <div className="pb-4">
                  <img
                    style={{ cursor: 'pointer' }}
                    onClick={() =>
                      window.open(
                        'https://refpa.top/L?tag=d_1256913m_97c_&site=1256913&ad=97',
                        '_blank'
                      )
                    }
                    className=" promo2 img-fluid w-100"
                    src={promo}
                    alt=""></img>
                </div>

                <p
                  className="italics rounded"
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: '.7em',
                  }}>
                  Consistency is the key to Success. And right now, the only way
                  for you to actually take action is to believe the process
                </p>
                <h1
                  className="bg-primary pb-2 pt-2 mb-4 ps-3 pe-3 text-white rounded"
                  style={{ textAlign: 'center' }}>
                  <i class="fas fa-lock-open"></i> VIP GAMES
                </h1>
                {loadingVip ? (
                  <Loader />
                ) : errorVip ? (
                  <Message variant="danger">{errorVip}</Message>
                ) : (
                  //  (predictions[0].prediction.title )
                  // <p style={{ textAlign: 'center', marginTop: '.7em' }}>
                  //         {prediction.title}
                  //       </p>
                  predictions.slice(0, 5).map((prediction, index) =>
                    prediction.isPublished ? (
                      <Table striped bordered hover size="sm">
                        {prediction.fixture.length === 0 ? (
                          <p
                            className="p-3 text-bold mt-3 mb-3 rounded"
                            style={{
                              backgroundColor: '#32CD32',
                              fontSize: '1rem',
                            }}>
                            <DateIcon /> -
                            {moment(prediction.date).format('DD/MM/YYYY')}
                            <span
                              style={{ fontWeight: 'bold' }}
                              className="ms-5">
                              {prediction.title}
                            </span>
                          </p>
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
                                LEAGUE
                              </th>
                              <th
                                style={{
                                  textAlign: 'center',
                                  verticalAlign: 'middle',
                                }}>
                                {' '}
                                HOME
                              </th>
                              <th
                                style={{
                                  textAlign: 'center',
                                  verticalAlign: 'middle',
                                }}>
                                AWAY
                              </th>
                              <th
                                style={{
                                  textAlign: 'center',
                                  verticalAlign: 'middle',
                                }}>
                                TIPS / ODDS
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

                        {prediction.fixture.map((fixture, index) => (
                          <tbody>
                            <tr key={fixture._id}>
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
                                  {moment(fixture.date).format('DD/MM/YYYY')}
                                </p>
                              </td>

                              <td
                                style={{
                                  textAlign: 'center',
                                  verticalAlign: 'middle',
                                }}>
                                {fixture.league}
                              </td>
                              <td
                                style={{
                                  textAlign: 'center',
                                  verticalAlign: 'middle',
                                }}>
                                {fixture.home}
                              </td>
                              <td
                                style={{
                                  textAlign: 'center',
                                  verticalAlign: 'middle',
                                }}>
                                {fixture.away}
                              </td>
                              <td
                                style={{
                                  textAlign: 'center',
                                  verticalAlign: 'middle',
                                }}>
                                {fixture.tipsOdds}
                              </td>
                              {/* <td
                style={{
                  textAlign: 'center',
                  verticalAlign: 'middle',
                }}>
                <Button
                  variant="danger"
                  className="btn-sm"
                  onClick={() => deleteHandler(fixture._id)}>
                  <i className="fas fa-trash"></i>
                </Button>
              </td> */}
                            </tr>
                          </tbody>
                        ))}
                      </Table>
                    ) : null
                  )
                )}
                <div className="pb-4">
                  <img
                    style={{ cursor: 'pointer' }}
                    onClick={() =>
                      window.open(
                        'https://refpa.top/L?tag=d_1256913m_97c_&site=1256913&ad=97',
                        '_blank'
                      )
                    }
                    className="promo2 img-fluid w-100"
                    src={promo1}
                    alt=""></img>
                </div>
                {loadingVip ? (
                  <Loader />
                ) : errorVip ? (
                  <Message variant="danger">{errorVip}</Message>
                ) : (
                  //  (predictions[0].prediction.title )
                  // <p style={{ textAlign: 'center', marginTop: '.7em' }}>
                  //         {prediction.title}
                  //       </p>
                  predictions.slice(5, 10).map((prediction, index) =>
                    prediction.isPublished ? (
                      <Table striped bordered hover size="sm">
                        {prediction.fixture.length === 0 ? (
                          <p
                            className="p-3 text-bold mt-3 mb-3 rounded"
                            style={{
                              backgroundColor: '#32CD32',
                              fontSize: '1rem',
                            }}>
                            <DateIcon /> -
                            {moment(prediction.date).format('DD/MM/YYYY')}
                            <span
                              style={{ fontWeight: 'bold' }}
                              className="ms-5">
                              {prediction.title}
                            </span>
                          </p>
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
                                LEAGUE
                              </th>
                              <th
                                style={{
                                  textAlign: 'center',
                                  verticalAlign: 'middle',
                                }}>
                                {' '}
                                HOME
                              </th>
                              <th
                                style={{
                                  textAlign: 'center',
                                  verticalAlign: 'middle',
                                }}>
                                AWAY
                              </th>
                              <th
                                style={{
                                  textAlign: 'center',
                                  verticalAlign: 'middle',
                                }}>
                                TIPS / ODDS
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

                        {prediction.fixture.map((fixture, index) => (
                          <tbody>
                            <tr key={fixture._id}>
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
                                  {moment(fixture.date).format('DD/MM/YYYY')}
                                </p>
                              </td>

                              <td
                                style={{
                                  textAlign: 'center',
                                  verticalAlign: 'middle',
                                }}>
                                {fixture.league}
                              </td>
                              <td
                                style={{
                                  textAlign: 'center',
                                  verticalAlign: 'middle',
                                }}>
                                {fixture.home}
                              </td>
                              <td
                                style={{
                                  textAlign: 'center',
                                  verticalAlign: 'middle',
                                }}>
                                {fixture.away}
                              </td>
                              <td
                                style={{
                                  textAlign: 'center',
                                  verticalAlign: 'middle',
                                }}>
                                {fixture.tipsOdds}
                              </td>
                            </tr>
                          </tbody>
                        ))}
                      </Table>
                    ) : null
                  )
                )}
                <div className="pb-4">
                  <img
                    style={{ cursor: 'pointer' }}
                    onClick={() =>
                      window.open(
                        'https://refpa.top/L?tag=d_1256913m_97c_&site=1256913&ad=97',
                        '_blank'
                      )
                    }
                    className="promo2 img-fluid w-100"
                    src={promo}
                    alt=""></img>
                </div>
                {loadingVip ? (
                  <Loader />
                ) : errorVip ? (
                  <Message variant="danger">{errorVip}</Message>
                ) : (
                  //  (predictions[0].prediction.title )
                  // <p style={{ textAlign: 'center', marginTop: '.7em' }}>
                  //         {prediction.title}
                  //       </p>
                  predictions.slice(10, 15).map((prediction, index) =>
                    prediction.isPublished ? (
                      <Table striped bordered hover size="sm">
                        {prediction.fixture.length === 0 ? (
                          <p
                            className="p-3 text-bold mt-3 mb-3 rounded"
                            style={{
                              backgroundColor: '#32CD32',
                              fontSize: '1rem',
                            }}>
                            <DateIcon /> -
                            {moment(prediction.date).format('DD/MM/YYYY')}
                            <span
                              style={{ fontWeight: 'bold' }}
                              className="ms-5">
                              {prediction.title}
                            </span>
                          </p>
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
                                LEAGUE
                              </th>
                              <th
                                style={{
                                  textAlign: 'center',
                                  verticalAlign: 'middle',
                                }}>
                                {' '}
                                HOME
                              </th>
                              <th
                                style={{
                                  textAlign: 'center',
                                  verticalAlign: 'middle',
                                }}>
                                AWAY
                              </th>
                              <th
                                style={{
                                  textAlign: 'center',
                                  verticalAlign: 'middle',
                                }}>
                                TIPS / ODDS
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

                        {prediction.fixture.map((fixture, index) => (
                          <tbody>
                            <tr key={fixture._id}>
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
                                  {moment(fixture.date).format('DD/MM/YYYY')}
                                </p>
                              </td>

                              <td
                                style={{
                                  textAlign: 'center',
                                  verticalAlign: 'middle',
                                }}>
                                {fixture.league}
                              </td>
                              <td
                                style={{
                                  textAlign: 'center',
                                  verticalAlign: 'middle',
                                }}>
                                {fixture.home}
                              </td>
                              <td
                                style={{
                                  textAlign: 'center',
                                  verticalAlign: 'middle',
                                }}>
                                {fixture.away}
                              </td>
                              <td
                                style={{
                                  textAlign: 'center',
                                  verticalAlign: 'middle',
                                }}>
                                {fixture.tipsOdds}
                              </td>
                              {/* <td
                style={{
                  textAlign: 'center',
                  verticalAlign: 'middle',
                }}>
                <Button
                  variant="danger"
                  className="btn-sm"
                  onClick={() => deleteHandler(fixture._id)}>
                  <i className="fas fa-trash"></i>
                </Button>
              </td> */}
                            </tr>
                          </tbody>
                        ))}
                      </Table>
                    ) : null
                  )
                )}
              </div>
            ) : (
              <div>
                <h1
                  className="bg-danger pb-2 pt-2 mb-4 ps-3 pe-3 text-white rounded"
                  style={{ textAlign: 'center' }}>
                  <i className="fas fa-lock pe-2"></i>
                  VIP GAMES LOCKED
                </h1>

                <div>
                  <div>
                    <p>
                      {' '}
                      how much would you win if you Didnt Lose A Single Stake?
                    </p>
                    <h3
                      className="bg-info pb-3 pt-3 mb-4 ps-3 pe-3 text-white rounded"
                      style={{ textAlign: 'center' }}>
                      Under 7 weeks This Season I have made Over{' '}
                      <span style={{ color: '' }}> #3,000,000 PURE PROFIT</span>
                    </h3>
                    <p>
                      can you believe how many punters place their bets ans walk
                      away losing at the end of the days i cannot believe they
                      are so lazy as to do this
                    </p>
                    <p>
                      its your hard earned cash you are putting on and you are
                      willing to just let it flutter away into the bookies
                      pockets
                    </p>

                    {countdowns
                      ? countdowns.slice(0, 1).map((inf, i) => (
                          <div className="text-center mt-2">
                            <h4 style={{ marginBottom: '30px' }}>
                              <span
                                style={{
                                  color: '#3498DB',
                                  fontWeight: 'bolder',
                                }}>
                                Mega Deal
                              </span>
                              <span style={{ color: '#E74C3C' }}>
                                -Subscribe Before The Offer Ends
                              </span>{' '}
                            </h4>
                            <Countdown
                              className="mt-4 mb-4"
                              key={i}
                              date={moment(
                                moment(inf.date).add(inf.amountOfDays, 'days')
                              ).valueOf()}
                              renderer={rendererPromo}></Countdown>

                            <h5
                              style={{
                                marginTop: '30px',

                                fontWeight: 'bold',
                                fontStyle: 'italic',
                              }}
                              className="font-italic">
                              👉{' '}
                              <span
                                style={{
                                  color: '#3498DB',
                                }}>
                                {inf.statusDisplay}
                              </span>
                              👈
                            </h5>
                          </div>
                        ))
                      : null}

                    <NavBtnLink>
                      <Button
                        onClick={() =>
                          window.open(
                            'https://refpa.top/L?tag=d_1256913m_97c_&site=1256913&ad=97',
                            '_blank'
                          )
                        }
                        className="promobutton pt-3 pb-3 mb-3"
                        style={{ width: '25em', backgroundColor: '#32CD32' }}>
                        CLICK TO SUBSCRIBE FOR VIP NOW
                      </Button>
                    </NavBtnLink>
                    <h5> Unbelieveable</h5>
                    <p>
                      if you are one of these punters don't worry ,First off its
                      NOT your fault .
                    </p>
                    <p>
                      This is the way you have been told to bet ,this is the way
                      may tipster,who have deals withe the bookies will tell you
                      to bet
                    </p>
                    <p>
                      The more you loose the bigger their payout from a bookie
                      gets Even when they are not getting paid out from the
                      bookies
                    </p>
                    <p>
                      They are too lazy to help you win,why would they you are
                      already paying them their fee ,they send you some tips and
                      their work is done
                    </p>
                    <p>
                      I bet 90% of them dont follow their own advice. But today
                      all this can change...
                    </p>
                    <h4
                      style={{}}
                      className=" pb-5 pt-5 mb-4 ps-3 pe-3 text-white bg-primary rounded">
                      {' '}
                      PLACE BETS FOR THE REST OF THE FOOTBALL SEASON AND NEVER
                      LOSE A SINGLE STAKE TO THE BOOKIE
                    </h4>
                    <p> No matter what your level of experience.</p>
                    <p>
                      You can order today, RISK FREE and get access to my DAILY
                      Low Risk Profit Selections direct to your inbox.
                    </p>
                    <p>And the BEST part is...</p>
                    <p>
                      You can see REAL PROFITS within just a few days of
                      starting!
                    </p>
                    {countdowns
                      ? countdowns.slice(0, 1).map((inf, i) => (
                          <div className="text-center mt-2">
                            <h4 style={{ marginBottom: '30px' }}>
                              <span
                                style={{
                                  color: '#3498DB',
                                  fontWeight: 'bolder',
                                }}>
                                Mega Deal
                              </span>
                              <span style={{ color: '#E74C3C' }}>
                                -Subscribe Before The Offer Ends
                              </span>{' '}
                            </h4>
                            <Countdown
                              className="mt-4 mb-4"
                              key={i}
                              date={moment(
                                moment(inf.date).add(inf.amountOfDays, 'days')
                              ).valueOf()}
                              renderer={rendererPromo}></Countdown>

                            <h5
                              style={{
                                marginTop: '30px',

                                fontWeight: 'bold',
                                fontStyle: 'italic',
                              }}
                              className="font-italic">
                              👉{' '}
                              <span
                                style={{
                                  color: '#3498DB',
                                }}>
                                {inf.statusDisplay}
                              </span>
                              👈
                            </h5>
                          </div>
                        ))
                      : null}
                    <NavBtnLink>
                      <Button
                        onClick={() =>
                          window.open(
                            'https://refpa.top/L?tag=d_1256913m_97c_&site=1256913&ad=97',
                            '_blank'
                          )
                        }
                        className="promobutton pt-3 pb-3 mb-3"
                        style={{ width: '25em', backgroundColor: '#32CD32' }}>
                        CLICK TO SUBSCRIBE FOR VIP NOW
                      </Button>
                    </NavBtnLink>
                    <p>
                      The ordering system runs 24 hours a day - even if it's
                      3am.
                    </p>
                    <p>I look forward to making you some low risk profits.</p>
                    <p>Your partner in success</p>
                    <section class="icons-container">
                      <Row>
                        <Col md={6}>
                          <div
                            class="icons"
                            onClick={() =>
                              window.open(
                                'https://refpa.top/L?tag=d_1256913m_97c_&site=1256913&ad=97',
                                '_blank'
                              )
                            }>
                            <i class="fas fa-home"></i>
                            <div class="content">
                              <h3>500,000 +</h3>
                              <p>Organic Visitors</p>
                            </div>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div
                            class="icons"
                            onClick={() =>
                              window.open(
                                'https://refpa.top/L?tag=d_1256913m_97c_&site=1256913&ad=97',
                                '_blank'
                              )
                            }>
                            <i class="fas fa-user-tie"></i>
                            <div class="content">
                              <h3>50,000 +</h3>
                              <p>Vip Users</p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <div
                            class="icons"
                            onClick={() =>
                              window.open(
                                'https://refpa.top/L?tag=d_1256913m_97c_&site=1256913&ad=97',
                                '_blank'
                              )
                            }>
                            <i class="fas fa-users"></i>
                            <div class="content">
                              <h3>800,000 +</h3>
                              <p>Registered Users</p>
                            </div>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div
                            class="icons"
                            onClick={() =>
                              window.open(
                                'https://refpa.top/L?tag=d_1256913m_97c_&site=1256913&ad=97',
                                '_blank'
                              )
                            }>
                            <i class="fas fa-address-book"></i>
                            <div class="content">
                              <h3>1 Million +</h3>
                              <p>Active Users</p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </section>
                    {countdowns
                      ? countdowns.slice(0, 1).map((inf, i) => (
                          <div className="text-center mt-2">
                            <h4 style={{ marginBottom: '30px' }}>
                              <span
                                style={{
                                  color: '#3498DB',
                                  fontWeight: 'bolder',
                                }}>
                                Mega Deal
                              </span>
                              <span style={{ color: '#E74C3C' }}>
                                -Subscribe Before The Offer Ends
                              </span>{' '}
                            </h4>
                            <Countdown
                              className="mt-4 mb-4"
                              key={i}
                              date={moment(
                                moment(inf.date).add(inf.amountOfDays, 'days')
                              ).valueOf()}
                              renderer={rendererPromo}></Countdown>

                            <h5
                              style={{
                                marginTop: '30px',

                                fontWeight: 'bold',
                                fontStyle: 'italic',
                              }}
                              className="font-italic">
                              👉{' '}
                              <span
                                style={{
                                  color: '#3498DB',
                                }}>
                                {inf.statusDisplay}
                              </span>
                              👈
                            </h5>
                          </div>
                        ))
                      : null}
                    <NavBtnLink>
                      <Button
                        onClick={() =>
                          window.open(
                            'https://refpa.top/L?tag=d_1256913m_97c_&site=1256913&ad=97',
                            '_blank'
                          )
                        }
                        className="promobutton pt-3 pb-3 mt-3"
                        style={{ width: '25em', backgroundColor: '#32CD32' }}>
                        CLICK TO SUBSCRIBE FOR VIP NOW
                      </Button>
                    </NavBtnLink>
                    <div
                      style={{ border: '2.5px  solid #E74C3C' }}
                      className="p-5 mt-2 mb-2">
                      <h3 className="text-center">Common Betting Errors...</h3>
                      <p>
                        <i
                          style={{ color: '#E74C3C' }}
                          className="fas fa-times-circle pe-3 "></i>
                        Backing the team you support regardless of current form
                        or odds
                      </p>
                      <p>
                        <i
                          style={{ color: '#E74C3C' }}
                          className="fas fa-times-circle pe-3 "></i>
                        Backing Backing a team just because you happen to be
                        watching a game
                      </p>
                      <p>
                        <i
                          style={{ color: '#E74C3C' }}
                          className="fas fa-times-circle pe-3 "></i>
                        Backing Chasing your losing bet with in-play betting
                      </p>
                      <p>
                        <i
                          style={{ color: '#E74C3C' }}
                          className="fas fa-times-circle pe-3 "></i>
                        Backing Cashing Out your bet before it has had time to
                        play out and win
                      </p>
                      <p>
                        <i
                          style={{ color: '#E74C3C' }}
                          className="fas fa-times-circle pe-3 "></i>
                        Backing Ignoring the odds and just going for an in-form
                        team
                      </p>
                      <p>
                        <i
                          style={{ color: '#E74C3C' }}
                          className="fas fa-times-circle pe-3 "></i>
                        Backing Not analysing statistics and team news before
                        betting
                      </p>
                      <p>
                        <i
                          style={{ color: '#E74C3C' }}
                          className="fas fa-times-circle pe-3 "></i>
                        Backing Betting at poor odds
                      </p>
                      <p>
                        <i
                          style={{ color: '#E74C3C' }}
                          className="fas fa-times-circle pe-3 "></i>
                        Backing Even on the best market it's still a minefield
                        beating the bookies.
                      </p>
                    </div>
                    <h4
                      className=" pb-2 pt-2 mb-4 ps-3 pe-3 text-white text-uppercase rounded"
                      style={{
                        textAlign: 'center',
                        backgroundColor: '#008080',
                      }}>
                      From today you can start betting and winning ,and when we
                      don't win ,we make sure we get our money back too ...
                    </h4>
                    <p> If you want the NO LOSS approach, then yes...</p>
                    <p>
                      As the name of the strategy suggests, half time is either
                      when we cash in or make sure we get our money back from
                      the bets. This will mean you need to be able to place bets
                      at half time when necessary.
                    </p>
                    <p>
                      You don't need to wait for an email from me, all advice is
                      covered in the initial email with every scenario covered.
                    </p>
                    <p>
                      People who are not willing to do this are the same ones
                      that are happy enough to fill the bookies pockets and
                      follow bad tipsters for way longer than they should.
                    </p>
                    <p>
                      This method is about making money and I take it seriously,
                      you should too.
                    </p>
                    <p>
                      If you are not able to place bets at half time some days,
                      simply do not place those bets. Maybe you're ok for the
                      3pm kick offs but not the early or late game, simple avoid
                      the bets for the kick offs you cannot make bets during
                      half time.
                    </p>
                    {countdowns
                      ? countdowns.slice(0, 1).map((inf, i) => (
                          <div className="text-center mt-2">
                            <h4 style={{ marginBottom: '30px' }}>
                              <span
                                style={{
                                  color: '#3498DB',
                                  fontWeight: 'bolder',
                                }}>
                                Mega Deal
                              </span>
                              <span style={{ color: '#E74C3C' }}>
                                -Subscribe Before The Offer Ends
                              </span>{' '}
                            </h4>
                            <Countdown
                              className="mt-4 mb-4"
                              key={i}
                              date={moment(
                                moment(inf.date).add(inf.amountOfDays, 'days')
                              ).valueOf()}
                              renderer={rendererPromo}></Countdown>

                            <h5
                              style={{
                                marginTop: '30px',

                                fontWeight: 'bold',
                                fontStyle: 'italic',
                              }}
                              className="font-italic">
                              👉{' '}
                              <span
                                style={{
                                  color: '#3498DB',
                                }}>
                                {inf.statusDisplay}
                              </span>
                              👈
                            </h5>
                          </div>
                        ))
                      : null}
                    <NavBtnLink>
                      <Button
                        onClick={() =>
                          window.open(
                            'https://refpa.top/L?tag=d_1256913m_97c_&site=1256913&ad=97',
                            '_blank'
                          )
                        }
                        className="promobutton pt-3 pb-3 mb-3"
                        style={{ width: '25em', backgroundColor: '#32CD32' }}>
                        CLICK TO SUBSCRIBE FOR VIP NOW
                      </Button>
                    </NavBtnLink>
                    <p>
                      Even placing half the bets this season will still see a
                      return of £10,000 profit by the end of the season.
                    </p>
                    <p>
                      Now with that said, my bets are also very profitable to
                      level stake betting, meaning even without placing the half
                      time bets you can make a lot of profit, some members just
                      prefer this way of betting, its easy and simple and while
                      it is profitable, you will have losing bets and your
                      profits won't increase as fast.
                    </p>

                    <p></p>
                  </div>
                </div>
                <div>
                  <h3
                    className=" pb-4 pt-4 mb-4 ps-3 pe-3 text-white"
                    style={{ backgroundColor: '#013220' }}>
                    Here's What you get
                  </h3>
                  <p>
                    <i
                      style={{ color: 'white', backgroundColor: '#013220' }}
                      className="fas fa-sign-out-alt  p-3 me-3 rounded-circle "></i>
                    30 days access to the vip games .log in anytime and turn
                    your first profit in minutes .Everything you need to make
                    multiple daily 24 hours a day ,will be at your fingertips
                  </p>
                  <p>
                    <i
                      style={{ color: 'white', backgroundColor: '#013220' }}
                      className="fas fa-sign-out-alt  p-3 me-3 rounded-circle "></i>
                    My risk free 30 day guarantee -if for any reason you are not
                    100% elated with the profits you have made and the support
                    you received -let me know at anytime in the first 30 days
                    and i will refund you -no questins asked .please note the 30
                    day refund does not apply if you choose the 14 day trial
                  </p>

                  <p>
                    <i
                      style={{ color: 'white', backgroundColor: '#013220' }}
                      className="fas fa-sign-out-alt  p-3 me-3 rounded-circle "></i>
                    Backing the team you support regardless of current form or
                    odds
                  </p>
                </div>
                {/* <Pricing /> */}
              </div>
            )}
          </Col>
        </Row>
      </FormContainer>
      {/* <div className="mt-4  d-flex justify-content-center">
        <Paginate pages={pages} page={page} />
      </div> */}
    </>
  )
}

export default ProfileScreen
