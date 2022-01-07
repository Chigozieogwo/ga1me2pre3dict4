import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { predictionVipCreateAction } from '../actions/predictionVipActions.js'

const PredictionVipCreateScreen = ({ location, history }) => {
  const [title, setTitle] = useState('')
  // const [isPublished, setIsPublished] = useState(false)

  const dispatch = useDispatch()

  const predictionVipCreate = useSelector((state) => state.predictionVipCreate)
  const { loading, error } = predictionVipCreate

  const redirect = location.search
    ? location.search.split('=')[1]
    : '/vip/admin/predictionviplist'

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(predictionVipCreateAction(title))
    history.push(redirect)
  }

  return (
    <>
      <div
        className="ms-3 me-3 mb-4 mt-4 p-4"
        style={{ border: '2px  solid #2C3E50' }}>
        <Link to="/admin-dashboard" className="btn btn-primary my-3">
          Go Back
        </Link>
        <FormContainer>
          <h1 style={{ textAlign: 'center' }}>Create Vip Prediction</h1>
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
                </Col>
              </Row>

              <div className="d-grid gap-2">
                <Button
                  className="mt-4"
                  size="lg"
                  type="submit"
                  variant="primary">
                  Create Vip Prediction
                </Button>
              </div>
            </Form>
          )}
        </FormContainer>
      </div>
    </>
  )
}

export default PredictionVipCreateScreen
