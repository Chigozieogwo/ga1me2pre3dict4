import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Form, Button } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import '../tableStyling.css'
import { useDispatch, useSelector } from 'react-redux'
import { contactus } from '../actions/userActions'

const ContactUsScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')

  const dispatch = useDispatch()
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(contactus(name, email, phone, company, message))
    console.log(name, email, phone, company, message)
  }
  return (
    <FormContainer>
      <Row>
        <h1
          className="bg-primary pt-1  mt-4 pb-1 ps-3 pe-3 text-white bolder rounded"
          style={{ textAlign: 'center' }}>
          CONTACT US
        </h1>
        <Col md={12}>
          {' '}
          <div className="ps-4 pe-4">
            <p style={{ fontSize: '1.0em' }}>
              You can reach to us by sending us a message and we will get in
              touch with you as soon as possible. For general enquiries, please
              reach us
            </p>
            <p style={{ fontSize: '1em' }}>Calls Only : +2347036688048</p>
            <p style={{ fontSize: '1em' }}>WhatsApp Only : +2347036688048</p>
            <p style={{ fontSize: '1em' }}>Email Us : contact@xcesswin.com</p>
            <p style={{ fontSize: '1em' }}>For Adverts : advert@xcesswin.com</p>
            <p style={{ fontSize: '1em' }}>
              Working Hours : 9:00AM - 5:00PM WAT
            </p>
          </div>
        </Col>
        {/* <Col className="ps-5 pe-5 contactme" md={5}>
          <Form onClick={submitHandler}>
            <h3>Email Us</h3>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Fullname</Form.Label>
                <Form.Control type="name" placeholder="" value={name}
            onChange={(e) => setName(e.target.value)} />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Company</Form.Label>
                <Form.Control type="company" placeholder="" value={company}
            onChange={(e) => setCompany(e.target.value)}/>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="" value={email}
            onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="phone" placeholder="" value={phone}
            onChange={(e) => setPhone(e.target.value)} />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} value={message}
            onChange={(e) => setMessage(e.target.value)} />
            </Form.Group>
          </Form>
          <Button className="mt-3 mb-4" type="submit" variant="primary">
            Submit
          </Button>
        </Col>
       */}
      </Row>
    </FormContainer>
  )
}

export default ContactUsScreen
