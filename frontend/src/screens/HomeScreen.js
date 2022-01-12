import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Carousel, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate.js'
import {
  predictionListAction,
  deletePredictionAction,
} from '../actions/predictionActions.js'
import { ReactComponent as DateIcon } from '../components/svgs/date.svg'
import moment from 'moment'
import FormContainer from '../components/FormContainer'
import imageLogo from '../images/profile.jpg'
import image1 from '../images/1xbet.png'
import imagelogo from '../images/1xbetlogo2.png'
import imagegif from '../images/1xbet2.gif'
import promo from '../images/promo.gif'
import promo1 from '../images/promo1.gif'
import promo2 from '../images/promo2.gif'
import promo3 from '../images/promo3.gif'
import promo4 from '../images/promo4.gif'
import promo5 from '../images/promo5.gif'
import promo6 from '../images/promo6.gif'
import promo7 from '../images/promo7.gif'
import '../tableStyling.css'

import { NavItemBtn, NavBtnLink } from '../components/Navbar/Navbar.elements'
// import { Carousel, CardDeck, Card } from 'react-bootstrap'
import '../components/navStyle.css'
// import{PromoCard} from '../promo-element.js'
const HomeScreen = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const predictionList = useSelector((state) => state.predictionList)
  const { loading, error, predictions, page, pages } = predictionList
  console.log(JSON.stringify(predictions) + 'jjj')

  const predictionfixture = useSelector((state) => state.predictionfixture)
  const {
    loading: loadingFixture,
    error: errorFixture,
    fixture,
  } = predictionfixture

  useEffect(() => {
    dispatch(predictionListAction(pageNumber))
  }, [dispatch, pageNumber])

  // const handleClick1xbet = () => {
  //   window.open('https://refpa.top/L?tag=d_1256913m_97c_&site=1256913&ad=97')
  // }
  return (
    <>
      <Carousel indicators={false}>
        <Carousel.Item interval={2000}>
          <img
            onClick={() =>
              window.open(
                'https://refpa.top/L?tag=d_1256913m_97c_&site=1256913&ad=97',
                '_blank'
              )
            }
            style={{ cursor: 'pointer' }}
            className="d-block w-100"
            src="https://res.cloudinary.com/diapyzzws/image/upload/v1616690355/packages/Web%20Banners%2025th%20March/double-lagos_abuja2istanbul.png"
            alt="Lagos to Istanbul"
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            onClick={() =>
              window.open(
                'https://refpa.top/L?tag=d_1256913m_97c_&site=1256913&ad=97',
                '_blank'
              )
            }
            style={{ cursor: 'pointer' }}
            className="d-block w-100"
            src="https://res.cloudinary.com/diapyzzws/image/upload/v1616690355/packages/Web%20Banners%2025th%20March/lagos2newyork-banner.png"
            alt=""
          />
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/diapyzzws/image/upload/v1615550385/website-banners/March%202021/accra.png"
            alt="Lagos to Istanbul"
          />
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            onClick={() =>
              window.open(
                'https://refpa.top/L?tag=d_1256913m_97c_&site=1256913&ad=97',
                '_blank'
              )
            }
            style={{ cursor: 'pointer' }}
            className="d-block w-100"
            src="https://res.cloudinary.com/diapyzzws/image/upload/v1616690355/packages/Web%20Banners%2025th%20March/lagos2newyork-banner.png"
            alt=""
          />
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>

      <FormContainer>
        <Row>
          <Col lg={9}>
            <div>
              <p
                className=" bg-primary pt-2 pb-2 ps-3 pe-3 text-white rounded"
                style={{ textAlign: 'center', marginTop: '.7em' }}>
                Free Daily Betting Tips by Experts
              </p>
              <h6
                style={{
                  fontSize: '.7rem',
                }}>
                Our average accuracy is as high as 90-95%, We use relevant
                statistics and trends to determine our predictions.Our main aim
                is to give and enriched our users with consistent winning
                predictions and betting tips covered from top football leagues
                like ; England premier league & championship, Spanish, France,
                Netherlands , Italy , Portugal, Scotland, Brazil, Belgium,
                Argentina, and more .
              </h6>
              {loading ? (
                <Loader />
              ) : error ? (
                <Message variant="danger">{error}</Message>
              ) : (
                predictions.slice(0, 6).map((prediction, index) =>
                  prediction.isPublished ? (
                    <Table striped bordered hover size="sm">
                      {prediction.fixture.length === 0 ? (
                        <div
                          className="p-3  text-bold mt-3 mb-3 rounded"
                          style={{
                            backgroundColor: '#32CD32',
                            fontSize: '.8rem',
                          }}>
                          {/* <span style={{
                           
                            fontSize: '.6rem',
                          }}>
      <DateIcon /> -
                          {moment(prediction.date).format('DD/MM/YYYY')}
                            </span> */}
                          📢📢📢
                          <span style={{ fontWeight: 'bold' }} className="ms-3">
                            {prediction.title}
                          </span>
                        </div>
                      ) : (
                        <thead
                          style={{
                            fontSize: '.6rem',
                          }}
                          className="bg-primary">
                          <tr>
                            {/* <th
                              style={{
                                textAlign: 'center',
                                verticalAlign: 'middle',
                              }}>
                              S/N
                            </th> */}
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
                        <tbody
                          style={{
                            fontSize: '.5rem',
                            fontWeight: 'bold',
                          }}>
                          <tr key={fixture._id}>
                            {/* <td
                              style={{
                                textAlign: 'center',
                                verticalAlign: 'middle',
                              }}>
                              {index + 1}
                            </td> */}
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
              <div>
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

                {/* <img style={{cursor:'pointer'}} onClick={() => window.open( 'https://refpa.top/L?tag=d_1256913m_97c_&site=1256913&ad=97', '_blank' ) } class="img-fluid w-100" src={promo2} alt=""></img>
                <img style={{cursor:'pointer'}} onClick={() => window.open( 'https://refpa.top/L?tag=d_1256913m_97c_&site=1256913&ad=97', '_blank' ) } class="img-fluid w-100" src={promo3} alt=""></img>
                <img style={{cursor:'pointer'}} onClick={() => window.open( 'https://refpa.top/L?tag=d_1256913m_97c_&site=1256913&ad=97', '_blank' ) } class="img-fluid w-100" src={promo4} alt=""></img> */}
              </div>
              {loading ? (
                <Loader />
              ) : error ? (
                <Message variant="danger">{error}</Message>
              ) : (
                predictions.slice(6, 13).map((prediction, index) =>
                  prediction.isPublished ? (
                    <Table striped bordered hover size="sm">
                      {prediction.fixture.length === 0 ? (
                        <div
                          className="p-3  text-bold mt-3 mb-3 rounded"
                          style={{
                            backgroundColor: '#32CD32',
                            fontSize: '.8rem',
                          }}>
                          {/* <span style={{
                         
                          fontSize: '.6rem',
                        }}>
    <DateIcon /> -
                        {moment(prediction.date).format('DD/MM/YYYY')}
                          </span> */}
                          📢📢📢
                          <span style={{ fontWeight: 'bold' }} className="ms-3">
                            {prediction.title}
                          </span>
                        </div>
                      ) : (
                        <thead
                          style={{
                            fontSize: '.6rem',
                          }}
                          className="bg-primary">
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
                        <tbody
                          style={{
                            fontSize: '.5rem',
                            fontWeight:'bold'
                          }}>
                          <tr key={fixture._id}>
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
              <div>
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

                <h4 className="text-center pt-2">
                  GUARANTEED SOCCER BETTING TIPS
                </h4>
                <h6
                  style={{
                    fontSize: '.7rem',
                  }}>
                  Gambling or betting online can be a very stimulating and fun
                  thing but it becomes more interesting when you win every bet
                  you place. It isn't always easy to win but there are ways to
                  help you go home with some cool cash in your pocket.
                  Guaranteed soccer betting tips are means of helping a bettor
                  win. Although they do not promise you 100% assurance, the key
                  to winning big is by applying the tips and playing smart.
                </h6>
                <section class="icons-container">
                  <Row
                    style={{
                      fontSize: '.8rem',
                    }}>
                    <Col
                      style={{
                        fontSize: '.6rem',
                      }}
                      md={6}>
                      <div class="icons">
                        <i class="fas fa-home"></i>
                        <div class="content">
                          <h3
                            style={{
                              fontSize: '.6rem',
                            }}>
                            500,000 +
                          </h3>
                          <p>Organic Visitors</p>
                        </div>
                      </div>
                    </Col>
                    <Col
                      style={{
                        fontSize: '.6rem',
                      }}
                      md={6}>
                      <div class="icons">
                        <i
                          style={{
                            fontSize: '.8rem',
                          }}
                          class="fas fa-user-tie"></i>
                        <div class="content">
                          <h3
                            style={{
                              fontSize: '.6rem',
                            }}>
                            50,000 +
                          </h3>
                          <p
                            style={{
                              fontSize: '.8rem',
                            }}>
                            Vip Users
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row
                    style={{
                      fontSize: '.8rem',
                    }}>
                    <Col md={6}>
                      <div class="icons">
                        <i class="fas fa-users"></i>
                        <div class="content">
                          <h3>800,000 +</h3>
                          <p>Registered Users</p>
                        </div>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div class="icons">
                        <i class="fas fa-address-book"></i>
                        <div class="content">
                          <h3>1 Million +</h3>
                          <p>Active Users</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </section>
              </div>
              {loading ? (
                <Loader />
              ) : error ? (
                <Message variant="danger">{error}</Message>
              ) : (
                predictions.slice(13, 19).map((prediction, index) =>
                  prediction.isPublished ? (
                    <Table striped bordered hover size="sm">
                      {prediction.fixture.length === 0 ? (
                        <div
                          className="p-3  text-bold mt-3 mb-3 rounded"
                          style={{
                            backgroundColor: '#32CD32',
                            fontSize: '.8rem',
                          }}>
                          {/* <span style={{
                          
                           fontSize: '.6rem',
                         }}>
     <DateIcon /> -
                         {moment(prediction.date).format('DD/MM/YYYY')}
                           </span> */}
                          📢📢📢
                          <span style={{ fontWeight: 'bold' }} className="ms-3">
                            {prediction.title}
                          </span>
                        </div>
                      ) : (
                        <thead style={{
                          
                          fontSize: '.6rem',
                        }} className="bg-primary">
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
                        <tbody style={{
                          
                          fontSize: '.5rem',
                          fontWeight:'bold'
                        }}>
                          <tr key={fixture._id}>
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
              <div className="pt-2 pb-2">
                <img
                  style={{ cursor: 'pointer' }}
                  onClick={() =>
                    window.open(
                      'https://refpa.top/L?tag=d_1256913m_97c_&site=1256913&ad=97',
                      '_blank'
                    )
                  }
                  className="promo2 img-fluid w-100"
                  src={promo5}
                  alt=""></img>
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <p
              className="  pt-2 pb-2 ps-3 pe-3 text-white rounded"
              style={{
                textAlign: 'center',
                marginTop: '.7em',
                backgroundColor: '#f8b133',
              }}>
              Promo Offers
            </p>
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
              className="text-center  promo mt-4  "
              style={{
                border: '2px solid #32CD32',
                borderRadius: '15px',
                // backgroundColor: 'rgba(181, 185, 190, 0.102)',
              }}>
              <div className="p-1 h-50">
                <img
                  class="img-fluid w-25 mt-3 rounded-circle"
                  src={imageLogo}
                  alt=""></img>
                <br></br>
                <h6 className=" mt-1 pt-2 text-primary bolder">
                  Up To 100,000 to grab
                </h6>
                <NavBtnLink to="/admin/predictionviplist">
                  <Button
                    className="promobutton "
                    style={{ width: '25em', backgroundColor: '#32CD32' }}>
                    GET BONUS
                  </Button>
                </NavBtnLink>
              </div>
            </div>

            <div
              className="text-center  promo mt-4  "
              style={{
                border: '2px solid #32CD32',
                borderRadius: '15px',
                // backgroundColor: 'rgba(181, 185, 190, 0.102)',
              }}>
              <div className="p-1 h-50">
                <img
                  class="img-fluid w-25 mt-3 rounded-circle"
                  src={imageLogo}
                  alt=""></img>
                <br></br>
                <h6 className=" mt-1 pt-2 text-primary bolder">
                  Up To 100,000 to grab
                </h6>
                <NavBtnLink to="/admin/predictionviplist">
                  <Button
                    className="promobutton "
                    style={{ width: '25em', backgroundColor: '#32CD32' }}>
                    GET BONUS
                  </Button>
                </NavBtnLink>
              </div>
            </div>

            <div
              className="text-center  promo mt-4  "
              style={{
                border: '2px solid #32CD32',
                borderRadius: '15px',
                // backgroundColor: 'rgba(181, 185, 190, 0.102)',
              }}>
              <div className="p-1 h-50">
                <img
                  class="img-fluid w-25 mt-3 rounded-circle"
                  src={imageLogo}
                  alt=""></img>
                <br></br>
                <h6 className=" mt-1 pt-2 text-primary bolder">
                  Up To 100,000 to grab
                </h6>
                <NavBtnLink to="/admin/predictionviplist">
                  <Button
                    className="promobutton "
                    style={{ width: '25em', backgroundColor: '#32CD32' }}>
                    GET BONUS
                  </Button>
                </NavBtnLink>
              </div>
            </div>

            <div
              className="text-center  promo mt-4 mb-4  "
              style={{
                border: '2px solid #32CD32',
                borderRadius: '15px',
                // backgroundColor: 'rgba(181, 185, 190, 0.102)',
              }}>
              <div className="p-1 h-50">
                <img
                  class="img-fluid w-25 mt-3 rounded-circle"
                  src={imageLogo}
                  alt=""></img>
                <br></br>
                <h6 className=" mt-1 pt-2 text-primary bolder">
                  Up To 100,000 to grab
                </h6>
                <NavBtnLink to="/admin/predictionviplist">
                  <Button
                    className="promobutton "
                    style={{ width: '25em', backgroundColor: '#32CD32' }}>
                    GET BONUS
                  </Button>
                </NavBtnLink>
              </div>
            </div>

            <div className="hideme">
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
        </Row>
        <Row>
          <Col className="ps-4 pe-4 ms-4 me-4" sm={12}>
            <h4 className="text-center text-capitalize pt-2">
              Who Is The Top Football Prediction Website?
            </h4>
            <h6>
              Top Football Prediction Site. Xcesswin.com is the Top Football
              Prediction Site. We provide extensive soccer betting tips and
              accurate football prediction for free on soccer matches Xcesswin
              is the top football prediction site in the world . Xcesswin
              provide bettors with accurate football Predictions for free as
              well, results, statistics, bet tip, betting odds, along with
              helpful information on football betting. We have over 120
              worldwide football leagues to choose from and Xcesswin offers
              visitors up to 20,000 predictions every season! We also share the
              best deals from bookmarkers in your country. As we only feature
              trusted bookmarkers and not every single one available. Football
              betting is rewarding depending on the choice you made when
              searching for, Best football prediction site, Top Football
              predictions site, Accurate football prediction Website, Site that
              predict football matches correctly, Free football prediction and
              real football prediction
            </h6>
            <h4 className="text-center text-capitalize pt-2">
              Is Xcesswin The Accurate Football Prediction Website?
            </h4>
            <h6>
              Accurate Football Prediction Website. Xcesswin is an Accurate
              Football Prediction Site For Free. Football betting has become a
              foremost and regular activities among soccer fans. An enormous
              number of punter are earning huge soccer betting when used with an
              accurate football prediction website. Xcesswin is the best
              football prediction site . We are 100% consistent in giving
              accurate football predictions and greatly outstanding tips with
              highest level of accuracy among other football prediction
              websites. we give wide variety of football match predictions and
              tips to maximize your winning potentials in bets. With our
              Website, you can enjoy 100% winning rate. We provides you with a
              wide range of accurate football predictions for free that you can
              depend on for winning. So, If you are looking for sites that
              predict football matches correctly, Xcesswin is the site that
              predict football matches correctly.
            </h6>
            <h4 className="text-center text-capitalize pt-2">
              Why Is Xcesswin The Best Football Prediction Website In The World?
            </h4>
            <h6>
              Best Football Prediction Site. Xcesswin is the best football
              prediction site in the world. Xcesswin is the best football
              prediction site When it comes to providing football betting tips
              that is making profits from sports betting. All you need is a good
              football prediction site like Xcesswin.com that predict matches
              correctly for you to stake and win. Our unique interface makes it
              easy for the users to browse easily both on desktop and mobile for
              online sports gambling. If you are looking for top soccer
              prediction sites for the purpose of reliable soccer tips and
              constitent winning, Xcesswin is the perfect site for you. So
              fortunately if you are a bettor and are searching for the best
              football prediction site of the year, accurate football prediction
              website, site that predict football matches correctly, top soccer
              prediction sites, best football prediction site in the world,
              accurate soccer prediction sites, best prediction site, accurate
              football predictions for free , accurate football prediction, best
              prediction site free, soccer prediction site, best football
              prediction site, football prediction, accurate prediction sites,
              accurate football prediction sites, best prediction site in the
              world, bet genuine, accurate soccer prediction, best soccer
              prediction site, genuine prediction, Xcesswin is capable of
              handling your request and providing the solution to your search.
              We make winning our daily culture
            </h6>
            <h6>
              Best Football Prediction Site Free Football Prediction Site Good
              Football Prediction Site Best Soccer Prediction Site Free Soccer
              Prediction Site Good Soccer Prediction Site Top Football
              Prediction Site Accurate Football Prediction Website Accurate
              Football Prediction For Free Site That Predict Football matches
              Correctly Hot Prediction Site
            </h6>
          </Col>
        </Row>
      </FormContainer>

      {/* <div className="mt-4  d-flex justify-content-center">
        <Paginate pages={pages} page={page} />
      </div> */}
    </>
  )
}

export default HomeScreen
