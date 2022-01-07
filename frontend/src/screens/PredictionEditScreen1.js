import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Modal, Row, Col, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import {
  predictionDetailsAction,
  updatePredictionAction,
  fixtureAction,
} from '../actions/predictionActions.js'
import {
  PREDICTION_UPDATE_RESET,
  // PREDICTION_DETAILS_RESET,
} from '../constants/predictionConstants'

import { ReactComponent as DateIcon } from '../components/svgs/date.svg'
import moment from 'moment'
import Countdown, { zeroPad } from 'react-countdown'

const PredictionEditScreen1 = ({ match, history }) => {
  const predictionId = match.params.id

  const [title, setTitle] = useState('')
  const [isPublished, setIsPublished] = useState(false)

  const [league, setLeague] = useState('')
  const [home, setHome] = useState('')
  const [away, setAway] = useState('')
  const [tipsOdds, setTipsOdds] = useState('')

  const [show, setShow] = useState(false)

  const dispatch = useDispatch()

  const predictionDetails = useSelector((state) => state.predictionDetails)

  // console.log(trackDetails + '............................')
  const { prediction, loading, error } = predictionDetails

  console.log(prediction)
  console.log(prediction)
  console.log(prediction)
  // console.log(track)
  // console.log(track)
  // console.log(track)

  const predictionUpdate = useSelector((state) => state.predictionUpdate)

  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = predictionUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PREDICTION_UPDATE_RESET })
      history.push('/admin/predictionlist')
    } else {
      if (!prediction) {
        console.log(prediction)
        dispatch(predictionDetailsAction(predictionId))
      } else {
        setTitle(prediction.title)
        setIsPublished(prediction.isPublished)
      }
    }
  }, [dispatch, history, predictionId, prediction, successUpdate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updatePredictionAction({ _id: predictionId, title, isPublished }))
  }

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  const submitFixtureHandler = (e) => {
    e.preventDefault()

    dispatch(fixtureAction({ league, home, away, tipsOdds }))
    setShow(false)
  }

  const resetHandler = (e) => {
    e.preventDefault()
    // dispatch({ type: PREDICTION_DETAILS_RESET })
    localStorage.removeItem('prediction_Details')
    history.push('/admin/predictionlist')
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
                FIXTURE{' '}
              </span>
            </h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row
            className="mt-3 mb-3 pb-4 pt-4"
            // style={{ border: '.5px  solid #2C3E50', borderRadius: '15px' }}
          >
            <Col md={6} sm={12}>
              <Form.Group controlId="home">
                <Form.Label>Home</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Home"
                  value={home}
                  onChange={(e) => setHome(e.target.value)}></Form.Control>
              </Form.Group>
            </Col>
            <Col md={6} sm={12}>
              <Form.Group controlId="away">
                <Form.Label>Away</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Away"
                  value={away}
                  onChange={(e) => setAway(e.target.value)}></Form.Control>
              </Form.Group>
            </Col>

            <Col md={6} sm={12}>
              <Form.Group controlId="tipsOdds">
                <Form.Label>TipsOdds</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Tips/Odds"
                  value={tipsOdds}
                  onChange={(e) => setTipsOdds(e.target.value)}></Form.Control>
              </Form.Group>
            </Col>
            <Col md={6} sm={12}>
              <Form.Group controlId="league">
                <Form.Label>League</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="League"
                  value={league}
                  onChange={(e) => setLeague(e.target.value)}></Form.Control>
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submitFixtureHandler}>
            Add Fixture
          </Button>
        </Modal.Footer>
      </Modal>

      <div
        className="ms-3 me-3 mb-5 mt-5 p-4"
        style={{ border: '2px  solid #2C3E50' }}>
        <div className="d-flex justify-content-sm-between ">
          <Link
            onClick={resetHandler}
            to="/admin/predictionlist"
            className="btn btn-primary me-2 my-3">
            {' '}
            Go Back{' '}
          </Link>
          <Link onClick={handleShow} className="btn btn-primary  my-3">
            {' '}
            Add Fixture{' '}
          </Link>

          {/* <Button className="ms-5"  variant="primary" onClick={handleShow}>
        Add History
      </Button> */}
        </div>

        <FormContainer>
          <h1 style={{ textAlign: 'center' }}>Edit Track</h1>
          {loadingUpdate && <Loader />}
          {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <Form onSubmit={submitHandler}>
              <Row
                className="mt-3 mb-3 pb-4 pt-4"
                style={{ border: '.5px  solid #2C3E50', borderRadius: '15px' }}>
                <Col sm={6}>
                  <h6 style={{ textAlign: 'center' }}>
                    <span
                      style={{ fontWeight: 'bolder' }}
                      className=" text-primary">
                      {' '}
                      PREDICTION{' '}
                    </span>
                  </h6>
                  <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}></Form.Control>
                  </Form.Group>
                  <Form.Group className="mt-3 " controlId="isPublished">
                    <Form.Check
                      type="checkbox"
                      label="Is Published"
                      checked={isPublished}
                      onChange={(e) =>
                        setIsPublished(e.target.checked)
                      }></Form.Check>
                  </Form.Group>
                </Col>
              </Row>

              <div className="d-grid gap-2">
                <Button
                  className="mt-4 mb-5 "
                  size="lg"
                  type="submit"
                  variant="primary">
                  Update Prediction
                </Button>
              </div>
            </Form>
          )}

          <Row>
            <Col md={12}>
              <div className="bg-primary text-white mt-2 p-4" variant="light">
                {' '}
                PREDICTION HISTORY
              </div>
              <div
                style={{
                  marginLeft: '3em',
                  marginRight: '3em',
                }}></div>

              {prediction.fixture.fixture === undefined ? (
                <Message variant="danger">Await Prediction Games</Message>
              ) : (
                'hello'
              )}

              {/* <Table striped bordered hover>
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
                  </tr>
                </thead>

                <tbody>
                  {prediction.fixture === undefined ? (
                    <Message variant="danger">Await Prediction Games</Message>
                  ) : (
                    prediction.fixture.slice(0, 10).map((fixture, index) => (
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
                          {' '}
                          <p className="mb-2">
                            <DateIcon /> -
                            {moment(fixture.date).format('Do MMMM, YYYY')}
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
                    ))
                  )}
                </tbody>
              </Table>
            
             */}
            </Col>
          </Row>
       
       
        </FormContainer>
      </div>
    </>
  )
}

export default PredictionEditScreen1
