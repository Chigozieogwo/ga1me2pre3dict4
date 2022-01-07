import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import  Paginate from '../components/Paginate'
import { listUsersNotVip, deleteUser } from '../actions/userActions.js'
import Countdown, { zeroPad } from 'react-countdown'
import moment from 'moment'
// import { SearchBox } from '../components/SearchBox.js'

const UserListNotVipScreen = ({ history, match }) => {
  const keyword = match.params.keyword
  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const userListNotVip = useSelector((state) => state.userListNotVip)

  const { loading, error, users, count, page, pages } = userListNotVip
  // console.log(users + 'ccccccttttttt')
  // console.log(JSON.stringify(users) + 'ccccccttttttt')
  // console.log(users.paymentHistory + 'ccccccttttttt')

  useEffect(() => {
    dispatch(listUsersNotVip(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteUser(id))
      dispatch(listUsersNotVip(keyword, pageNumber))
    }
    // console.log('deleted....')
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
    if (completed) {
      // Render a completed state
      return <Completionist />
    } else {
      // Render a countdown
      return (
        <span>
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
      <div
        className="p-2 ms-3 me-3 mt-4 mb-5"
        style={{ border: '3px  solid #2C3E50' }}>
        <Link to="/admin-dashboard" className="btn btn-primary my-3">
          {' '}
          Dashboard{' '}
        </Link>
        <div className="mt-4  d-flex justify-content-center">
          <Paginate pages={pages} page={page} />
        </div>
        {/* <SearchBox history={history} /> */}
        <h1
          className="bg-primary pt-2 pb-2 ps-3 pe-3 text-white rounded"
          style={{ textAlign: 'center', marginTop: '.7em' }}>
          NONE VIP LIST
          <span>
            <em
              style={{ fontSize: '0.8rem' }}
              className="bg-primary text-white p-2 rounded">
              ( {count} ) vip users
            </em>
          </span>
        </h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <div style={{ marginLeft: '', marginRight: '' }}>
            <Table striped bordered hover responsive className="table-sm">
              <thead>
                <tr>
                  <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                    Id
                  </th>
                  <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                    Name
                  </th>
                  <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                    Email
                  </th>
                  <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                    Admin
                  </th>
                  <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                    Tipster
                  </th>
                  <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                    Expire Countdown
                  </th>
                  <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                    Vip
                  </th>
                  <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                    Edit
                  </th>
                  <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <td
                      style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                      {index + 1}
                    </td>
                    {/* {user.isVip ? ('nn') : ('mm')} */}
                    <td
                      style={{
                        textAlign: 'center',
                        verticalAlign: 'middle',
                        fontWeight: 'bold',
                      }}
                      className="text-primary">
                      {user.name}
                    </td>
                    <td
                      style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                      {user.email}
                    </td>
                    <td
                      style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                      {
                        <div className="pt-2 ms-2 mx-auto">
                          <div class="custom-control custom-switch">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              value={user.isAdmin}
                              checked={user.isAdmin}
                              id="1"></input>
                          </div>
                        </div>
                      }
                    </td>
                    <td
                      style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                      {
                        <div className="pt-2 ms-2 mx-auto">
                          <div class="custom-control custom-switch">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              value={user.isTipster}
                              checked={user.isTipster}
                              id="1"></input>
                          </div>
                        </div>
                      }
                    </td>

                    <td
                      style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                      {user.paymentHistory.length === 0 ? (
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
                              style={{ fontSize: '0.5rem', marginTop: '-6px' }}>
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
                              style={{ fontSize: '0.5rem', marginTop: '-6px' }}>
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
                              style={{ fontSize: '0.5rem', marginTop: '-6px' }}>
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
                              style={{ fontSize: '0.5rem', marginTop: '-6px' }}>
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
                    </td>

                    <td
                      style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                      {
                        <div className="pt-2 ms-2 mx-auto">
                          <div class="custom-control custom-switch">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              value={user.isVip}
                              checked={user.isVip}
                              id="1"></input>
                          </div>
                        </div>
                      }
                    </td>

                    <td
                      style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                      <a href={`/admin/user/${user._id}/edit`}>
                        <Button variant="light" className="btn-sm">
                          <i className="fas fa-edit"></i>
                        </Button>
                      </a>
                    </td>
                    <td
                      style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                      <Button
                        variant="danger"
                        className="btn-sm"
                        onClick={() => deleteHandler(user._id)}>
                        <i className="fas fa-trash"></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
        
        <div className="mt-4  d-flex justify-content-center">
          <Paginate pages={pages} page={page} />
        </div>
      </div>
    </>
  )
}

export default UserListNotVipScreen
