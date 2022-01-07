// import React, { useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { trackNumberDetailsAction } from '../actions/trackActions.js'
// import { Row, Col, Table, Card } from 'react-bootstrap'
// import '../index.css'

// const TrackDetailScreen = ({ match }) => {
//   const keyword = match.params.keyword
//   const dispatch = useDispatch()
//   const trackNumberDetails = useSelector((state) => state.trackNumberDetails)
//   // const trackHistory = useSelector((state) => state.trackHistory)

//   const { track } = trackNumberDetails
//   //  const  { shipmentHistory} = trackHistory

//   // console.log(
//   //   JSON.stringify(track) + '<<<<<<<<.....Track Record Details ....>>>>>>>>'
//   // )

//   useEffect(() => {
//     dispatch(trackNumberDetailsAction(keyword))
//   }, [dispatch, keyword])

//   return (
//     <div>
//       <div>
//         {
//           <div
//             style={{
//               background: 'white',
//               marginLeft: '1.5em',
//               marginRight: '1.5em',
//             }}>
//             {!track ? (
//               <div
//                 style={{
//                   display: 'flex',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   marginTop: '10em',
//                 }}>
//                 {' '}
//                 <Card className="mt-5 bg-primary ">
//                   <Card.Body>
//                     <h2
//                       className="text-danger"
//                       style={{
//                         fontSize: '24px',
//                       }}>
//                       TRACK RECORD NOT FOUND
//                     </h2>{' '}
//                   </Card.Body>
//                 </Card>
//               </div>
//             ) : (
//               track.map((track) => (
//                 <div
//                   className="p-4 mt-4 mb-5"
//                   style={{ border: '3px  solid #2C3E50' }}
//                   key={track._id}>
//                   {
//                     <div>
//                       <h3 style={{ textAlign: 'center', marginTop: '.1em' }}>
//                         <span class="text-primary bold">
//                           {' '}
//                           CONSIGNMENT DETAILS{' '}
//                         </span>
//                       </h3>
//                       <h6
//                         style={{
//                           fontSize: '12px',
//                         }}
//                         className="mt-4 ">
//                         TRACKING NUMBER :{' '}
//                         <span
//                           style={{
//                             fontWeight: 'bolder',
//                             backgroundColor: '#2C3E50',
//                             padding: '3px 7px',
//                             borderRadius: '2px',
//                             color: 'white',
//                           }}>
//                           {track.trackNumber}
//                         </span>
//                       </h6>
//                       <div className="wrapper">
//                         <div className="left ">
//                           <i
//                             style={{
//                               fontSize: '7.5rem',
//                             }}
//                             className="fa fa-barcode image "></i>
//                         </div>
//                         <div className="right logo">
//                           <i
//                             style={{
//                               fontSize: '63px',
//                             }}
//                             className="fas fa-globe  "></i>
//                           {/* <img src={logo} width="100" height="50"></img> */}
//                         </div>
//                       </div>
//                       <Row style={{ marginTop: '-50px' }}>
//                         <Col sm={6}>
//                           <div
//                             className="bg-primary text-white p-4"
//                             variant="light">
//                             {' '}
//                             Shipper Details
//                           </div>
//                           <table class="table  table-borderless table-condensed table-hover">
//                             <tbody>
//                               <tr>
//                                 <th scope="row">Name </th>
//                                 <td>{track.name}</td>
//                               </tr>
//                               <tr>
//                                 <th scope="row">Email</th>
//                                 <td>{track.email}</td>
//                               </tr>
//                               <tr>
//                                 <th scope="row">Phone Number</th>
//                                 <td>{track.phoneNumber}</td>
//                               </tr>

//                               <tr>
//                                 <th scope="row">Address</th>
//                                 <td>{track.address}</td>
//                               </tr>
//                             </tbody>
//                           </table>
//                         </Col>
//                         <Col sm={6}>
//                           <div
//                             className="bg-primary text-white p-4"
//                             variant="light">
//                             {' '}
//                             Receiver Details
//                           </div>
//                           <table class="table  table-borderless table-condensed table-hover">
//                             <tbody>
//                               <tr>
//                                 <th scope="row">Name </th>
//                                 <td>{track.name2}</td>
//                               </tr>
//                               <tr>
//                                 <th scope="row">Email</th>
//                                 <td>{track.email2}</td>
//                               </tr>
//                               <tr>
//                                 <th scope="row">Phone Number</th>
//                                 <td>{track.phoneNumber2}</td>
//                               </tr>

//                               <tr>
//                                 <th scope="row">Address</th>
//                                 <td>{track.address2}</td>
//                               </tr>
//                             </tbody>
//                           </table>
//                         </Col>
//                       </Row>
//                       <Row>
//                         <Col md={12}>
//                           <Table>
//                             <tbody>
//                               <tr>
//                                 <td>
//                                   <div
//                                     style={{
//                                       display: 'flex',
//                                       justifyContent: 'start',
//                                     }}
//                                     className=" ps-3 pt-3 ">
//                                     <div>
//                                       {' '}
//                                       <h6
//                                         style={{
//                                           fontWeight: 'bolder',
//                                         }}
//                                         className=" text-primary">
//                                         Origin
//                                       </h6>
//                                       <p
//                                         style={{
//                                           color: 'black',
//                                           marginTop: '-8px',
//                                           fontStyle: 'italic',
//                                           fontSize: '0.8em',
//                                           fontWeight: 'bold',
//                                         }}>
//                                         {track.origin}
//                                       </p>
//                                     </div>
//                                   </div>
//                                 </td>

//                                 <td>
//                                   <div
//                                     style={{
//                                       display: 'flex',
//                                       justifyContent: 'start',
//                                     }}
//                                     className=" ps-3 pt-3 ">
//                                     <div>
//                                       {' '}
//                                       <h6
//                                         style={{
//                                           fontWeight: 'bolder',
//                                         }}
//                                         className=" text-primary">
//                                         Destination
//                                       </h6>
//                                       <p
//                                         style={{
//                                           color: 'black',
//                                           marginTop: '-8px',
//                                           fontStyle: 'italic',
//                                           fontSize: '0.8em',
//                                           fontWeight: 'bold',
//                                         }}>
//                                         {track.destination}
//                                       </p>
//                                     </div>
//                                   </div>
//                                 </td>

//                                 <td>
//                                   <div
//                                     style={{
//                                       display: 'flex',
//                                       justifyContent: 'start',
//                                     }}
//                                     className=" ps-3 pt-3 ">
//                                     <div>
//                                       {' '}
//                                       <h6
//                                         style={{
//                                           fontWeight: 'bolder',
//                                         }}
//                                         className=" text-primary">
//                                         Status
//                                       </h6>
//                                       <p
//                                         style={{
//                                           color: 'black',
//                                           marginTop: '-8px',
//                                           fontStyle: 'italic',
//                                           fontSize: '0.8em',
//                                           fontWeight: 'bold',
//                                         }}>
//                                         {track.status}
//                                       </p>
//                                     </div>
//                                   </div>
//                                 </td>
//                               </tr>

//                               <tr>
//                                 <td>
//                                   <div
//                                     style={{
//                                       display: 'flex',
//                                       justifyContent: 'start',
//                                     }}
//                                     className=" ps-3 pt-3 ">
//                                     <div>
//                                       {' '}
//                                       <h6
//                                         style={{
//                                           fontWeight: 'bolder',
//                                         }}
//                                         className=" text-primary">
//                                         Weight
//                                       </h6>
//                                       <p
//                                         style={{
//                                           color: 'black',
//                                           marginTop: '-8px',
//                                           fontStyle: 'italic',
//                                           fontSize: '0.8em',
//                                           fontWeight: 'bold',
//                                         }}>
//                                         {track.weight}
//                                       </p>
//                                     </div>
//                                   </div>
//                                 </td>

//                                 <td>
//                                   <div
//                                     style={{
//                                       display: 'flex',
//                                       justifyContent: 'start',
//                                     }}
//                                     className=" ps-3 pt-3 ">
//                                     <div>
//                                       {' '}
//                                       <h6
//                                         style={{
//                                           fontWeight: 'bolder',
//                                         }}
//                                         className=" text-primary">
//                                         Items
//                                       </h6>
//                                       <p
//                                         style={{
//                                           color: 'black',
//                                           marginTop: '-8px',
//                                           fontStyle: 'italic',
//                                           fontSize: '0.8em',
//                                           fontWeight: 'bold',
//                                         }}>
//                                         {track.items}
//                                       </p>
//                                     </div>
//                                   </div>
//                                 </td>

//                                 <td>
//                                   <div
//                                     style={{
//                                       display: 'flex',
//                                       justifyContent: 'start',
//                                     }}
//                                     className=" ps-3 pt-3 ">
//                                     <div>
//                                       {' '}
//                                       <h6
//                                         style={{
//                                           fontWeight: 'bolder',
//                                         }}
//                                         className=" text-primary">
//                                         Qty
//                                       </h6>
//                                       <p
//                                         style={{
//                                           color: 'black',
//                                           marginTop: '-8px',
//                                           fontStyle: 'italic',
//                                           fontSize: '0.8em',
//                                           fontWeight: 'bold',
//                                         }}>
//                                         {track.qty}
//                                       </p>
//                                     </div>
//                                   </div>
//                                 </td>
//                               </tr>

//                               <tr>
//                                 <td>
//                                   <div
//                                     style={{
//                                       display: 'start',
//                                       justifyContent: 'center',
//                                     }}
//                                     className=" ps-3 pt-3 ">
//                                     <div>
//                                       {' '}
//                                       <h6
//                                         style={{
//                                           fontWeight: 'bolder',
//                                         }}
//                                         className=" text-primary">
//                                         Package
//                                       </h6>
//                                       <p
//                                         style={{
//                                           color: 'black',
//                                           marginTop: '-8px',
//                                           fontStyle: 'italic',
//                                           fontSize: '0.8em',
//                                           fontWeight: 'bold',
//                                         }}>
//                                         {track.pack}
//                                       </p>
//                                     </div>
//                                   </div>
//                                 </td>

//                                 <td>
//                                   <div
//                                     style={{
//                                       display: 'flex',
//                                       justifyContent: 'start',
//                                     }}
//                                     className=" ps-3 pt-3 ">
//                                     <div>
//                                       {' '}
//                                       <h6
//                                         style={{
//                                           fontWeight: 'bolder',
//                                         }}
//                                         className=" text-primary">
//                                         Type Of Shipment
//                                       </h6>
//                                       <p
//                                         style={{
//                                           color: 'black',
//                                           marginTop: '-8px',
//                                           fontStyle: 'italic',
//                                           fontSize: '0.8em',
//                                           fontWeight: 'bold',
//                                         }}>
//                                         {track.typeOfShipment}
//                                       </p>
//                                     </div>
//                                   </div>
//                                 </td>

//                                 <td>
//                                   <div
//                                     style={{
//                                       display: 'flex',
//                                       justifyContent: 'start',
//                                     }}
//                                     className=" ps-3 pt-3 ">
//                                     <div>
//                                       {' '}
//                                       <h6
//                                         style={{
//                                           fontWeight: 'bolder',
//                                         }}
//                                         className=" text-primary">
//                                         Pick-Up-Time
//                                       </h6>
//                                       <p
//                                         style={{
//                                           color: 'black',
//                                           marginTop: '-8px',
//                                           fontStyle: 'italic',
//                                           fontSize: '0.8em',
//                                           fontWeight: 'bold',
//                                         }}>
//                                         {track.pickUpTime}
//                                       </p>
//                                     </div>
//                                   </div>
//                                 </td>
//                               </tr>

//                               <tr>
//                                 <td>
//                                   <div
//                                     style={{
//                                       display: 'flex',
//                                       justifyContent: 'start',
//                                     }}
//                                     className=" ps-3 pt-3 ">
//                                     <div>
//                                       {' '}
//                                       <h6
//                                         style={{
//                                           fontWeight: 'bolder',
//                                         }}
//                                         className=" text-primary">
//                                         Carrier Reference No.
//                                       </h6>
//                                       <p
//                                         style={{
//                                           color: 'black',
//                                           marginTop: '-8px',
//                                           fontStyle: 'italic',
//                                           fontSize: '0.8em',
//                                           fontWeight: 'bold',
//                                         }}>
//                                         {track.carrierRefNo}
//                                       </p>
//                                     </div>
//                                   </div>
//                                 </td>

//                                 <td>
//                                   <div
//                                     style={{
//                                       display: 'flex',
//                                       justifyContent: 'start',
//                                     }}
//                                     className=" ps-3 pt-3 ">
//                                     <div>
//                                       {' '}
//                                       <h6
//                                         style={{
//                                           fontWeight: 'bolder',
//                                         }}
//                                         className=" text-primary">
//                                         Departure Time
//                                       </h6>
//                                       <p
//                                         style={{
//                                           color: 'black',
//                                           marginTop: '-8px',
//                                           fontStyle: 'italic',
//                                           fontSize: '0.8em',
//                                           fontWeight: 'bold',
//                                         }}>
//                                         {track.departureTime}
//                                       </p>
//                                     </div>
//                                   </div>
//                                 </td>

//                                 <td>
//                                   <div
//                                     style={{
//                                       display: 'flex',
//                                       justifyContent: 'start',
//                                     }}
//                                     className=" ps-3 pt-3 ">
//                                     <div>
//                                       {' '}
//                                       <h6
//                                         style={{
//                                           fontWeight: 'bolder',
//                                         }}
//                                         className=" text-primary">
//                                         Pick-Up-Date
//                                       </h6>
//                                       <p
//                                         style={{
//                                           color: 'black',
//                                           marginTop: '-8px',
//                                           fontStyle: 'italic',
//                                           fontSize: '0.8em',
//                                           fontWeight: 'bold',
//                                         }}>
//                                         {track.pickUpDate}
//                                       </p>
//                                     </div>
//                                   </div>
//                                 </td>
//                               </tr>
//                             </tbody>
//                           </Table>
//                         </Col>
//                       </Row>

//                       <Row>
//                         <Col sm={12}></Col>
//                       </Row>

//                       <Row>
//                         <Col md={12}>
//                           <div
//                             className="bg-primary text-white p-4"
//                             variant="light">
//                             {' '}
//                             Shipment History
//                           </div>
//                           <div
//                             style={{
//                               marginLeft: '3em',
//                               marginRight: '3em',
//                             }}></div>

//                           <Table striped bordered hover>
//                             <thead className="bg-primary">
//                               <tr>
//                                 <th>DATE</th>
//                                 <th>LOCATION</th>
//                                 <th>STATUS</th>
//                                 <th>REMARK</th>
//                               </tr>
//                             </thead>

//                             <tbody>
//                               {track.shipmentHistory.map(
//                                 (shipmentHistory, index) => (
//                                   <tr key={shipmentHistory._id}>
//                                     <td>{shipmentHistory.data_history}</td>
//                                     <td>{shipmentHistory.location_history}</td>

//                                     <td>{shipmentHistory.status_history}</td>
//                                     <td>{shipmentHistory.comment}</td>
//                                   </tr>
//                                 )
//                               )}
//                             </tbody>
//                           </Table>
//                         </Col>
//                       </Row>
//                     </div>
//                   }
//                 </div>
//               ))
//             )}
//           </div>
//         }
//       </div>
//     </div>
//   )
// }

// export default TrackDetailScreen
import React from 'react'

const PredictionDetailScreen = () => {
    return (
        <div>
            Prediction Details
        </div>
    )
}

export default PredictionDetailScreen
