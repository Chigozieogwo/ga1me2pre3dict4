import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Form, Check } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate2 from '../components/Paginate2.js'
import {
  predictionVipListAction,
  deletePredictionVipAction,
} from '../actions/predictionVipActions.js'
import { ReactComponent as DateIcon } from '../components/svgs/date.svg'
import moment from 'moment'

const PredictionVipListScreen = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const predictionVipList = useSelector((state) => state.predictionVipList)
  const { loading, error, predictions, page, pages } = predictionVipList
  console.log(predictions + 'ccccccttttttt')

  useEffect(() => {
    dispatch(predictionVipListAction(pageNumber))
  }, [dispatch, pageNumber])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deletePredictionVipAction(id))
      dispatch(predictionVipListAction('', pageNumber))
    }
  }

  const userInfo = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

  return (
    <>
      <div
        className="p-2 ms-3 me-3 mt-4 mb-5"
        style={{ border: '3px  solid #2C3E50' }}>
        <Link to="/admin-dashboard" className="btn btn-primary my-3">
          {' '}
          Dashboard{' '}
        </Link>

        <h1
          className="bg-primary pt-1 pb-1 ps-3 mb-3 pe-3 text-white"
          style={{ textAlign: 'center', marginTop: '.7em' }}>
          PREDICTION VIP LIST
        </h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <div style={{ marginLeft: '.2em', marginRight: '.2em' }}>
            <Table striped bordered hover responsive className="table-sm">
              <thead className="tablehead">
                <tr>
                  <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                    Id
                  </th>
                  <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                    Date
                  </th>
                  <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                    Title
                  </th>
                  <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                    No of Games
                  </th>
                  <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                    IsPublished
                  </th>
                  <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                    Edit
                  </th>
                  <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="tablebody">
                {predictions.map((prediction, index) => (
                  <tr key={prediction._id}>
                    <td
                      style={{ textAlign: 'center', verticalAlign: 'middle' }}>
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
                        {moment(prediction.date).format('   ddd  - DD/MM/YYYY')}
                      </p>
                    </td>
                    <td
                      style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                      {prediction.title}
                    </td>
                    <td
                      style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                      {prediction.fixture.length}
                    </td>
                    <td
                      style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                      {
                        <div className="pt-2 ms-2 mx-auto">
                          <div class="custom-control custom-switch">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              value={prediction.isPublished}
                              checked={prediction.isPublished}
                              id="1"></input>
                          </div>
                        </div>
                      }
                    </td>
                    <td
                      style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                      <a href={`/vip/admin/prediction/${prediction._id}/edit`}>
                        <Button variant="light" className="btn-sm">
                          <i className="fas fa-edit"></i>
                        </Button>
                      </a>
                    </td>
                    <td
                      style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                      {prediction.isPublished &&
                      userInfo.isTipster &&
                      !userInfo.isAdmin ? (
                        <Button variant="secondary" className="btn-sm">
                          <i className="fas fa-trash"></i>
                        </Button>
                      ) : (
                        <Button
                          variant="danger"
                          className="btn-sm"
                          onClick={() => deleteHandler(prediction._id)}>
                          <i className="fas fa-trash"></i>
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
        <div className="mt-4  d-flex justify-content-center">
          <Paginate2 pages={pages} page={page} />
        </div>
      </div>
    </>
  )
}

export default PredictionVipListScreen
