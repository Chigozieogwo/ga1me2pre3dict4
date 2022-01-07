import axios from 'axios'
import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_ME_FAIL,
  USER_UPDATE_PROFILE_ME_REQUEST,
  USER_UPDATE_PROFILE_ME_SUCCESS,
  USER_DETAILS_RESET,
  USER_LIST_FAIL,
  USER_LIST_SUCCESS,
  USER_LIST_REQUEST,
  USER_LIST_RESET,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_UPDATE_FAIL,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_REQUEST,
  PAYMENT_HISTORY_REQUEST,
  PAYMENT_HISTORY_SUCCESS,
  PAYMENT_HISTORY_FAIL,
  USER_LIST_NOTVIP_FAIL,
  USER_LIST_NOTVIP_SUCCESS,
  USER_LIST_NOTVIP_REQUEST,
  USER_LIST_VIP_FAIL,
  USER_LIST_VIP_SUCCESS,
  USER_LIST_VIP_REQUEST,
  SENDEMAIL_FAIL,
  SENDEMAIL_SUCCESS,
  SENDEMAIL_REQUEST,
  USER_LIST_TIPSTER_FAIL,
  USER_LIST_TIPSTER_SUCCESS,
  USER_LIST_TIPSTER_REQUEST,
  USER_LIST_ADMIN_FAIL,
  USER_LIST_ADMIN_SUCCESS,
  USER_LIST_ADMIN_REQUEST,
  SEND_SUB_EXPIRE_EMAIL_FAIL,
  SEND_SUB_EXPIRE_EMAIL_SUCCESS,
  SEND_SUB_EXPIRE_EMAIL_REQUEST,
} from '../constants/userConstants'
import moment from 'moment'

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      '/api/users/login',
      { email, password },
      config
    )

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo')

  dispatch({ type: USER_LOGOUT })
  dispatch({ type: USER_DETAILS_RESET })

  dispatch({ type: USER_LIST_RESET })
  document.location.href = '/login'
}

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      '/api/users/register',
      { name, email, password },
      config
    )

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    })

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const contactus = (name, email, phone, company, message) => async (
  dispatch
) => {
  try {
    dispatch({
      type: SENDEMAIL_REQUEST,
    })

    // const config = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // }

    const { data } = await axios.post(
      '/contact-us',
      { name, email, phone, company, message },
      // config
    )

    dispatch({
      type: SENDEMAIL_SUCCESS,
      payload: data,
    })
console.log(data)
    dispatch({
      type: SENDEMAIL_SUCCESS,
      payload: data,
    })

    
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/users/${id}`, config)
    // console.log(JSON.stringify(data) + '++++++')
    // console.log(JSON.stringify(data) + '++++++')
    // console.log(JSON.stringify(data) + '++++++')
    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: message,
    })
  }
}

export const sendSubExpireEmail = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: SEND_SUB_EXPIRE_EMAIL_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.post(`/api/users/${userInfo._id}`, userInfo, config)
    dispatch({ type: SEND_SUB_EXPIRE_EMAIL_SUCCESS })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: SEND_SUB_EXPIRE_EMAIL_FAIL,
      payload: message,
    })
  }
}

export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_PROFILE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(`/api/users/profile`, user, config)

    dispatch({
      type: USER_UPDATE_PROFILE_SUCCESS,
      payload: data,
    })
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,
      payload: message,
    })
  }
}

export const updateUserProfileMe = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_PROFILE_ME_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(`/api/users/profile`, user, config)

    dispatch({
      type: USER_UPDATE_PROFILE_ME_SUCCESS,
      payload: data,
    })
    // dispatch({
    //   type: USER_LOGIN_SUCCESS,
    //   payload: data,
    // })
    // localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: USER_UPDATE_PROFILE_ME_FAIL,
      payload: message,
    })
  }
}

export const listUsers1 = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_LIST_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/users`, config)

    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: USER_LIST_FAIL,
      payload: message,
    })
  }
}

// export const listUsers = (pageNumber = '') => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: USER_LIST_REQUEST,
//     })

//     const {
//       userLogin: { userInfo },
//     } = getState()

//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     }

//     const { data } = await axios.get(
//       `/api/users?pageNumber=${pageNumber}`,
//       config
//     )
//     // const { data } = await axios.get('/api/users')

//     // console.log(data)

//     dispatch({
//       type: USER_LIST_SUCCESS,
//       payload: data,
//     })
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message
//     if (message === 'Not authorized, token failed') {
//       dispatch(logout())
//     }
//     dispatch({
//       type: USER_LIST_FAIL,
//       payload: message,
//     })
//   }
// }

export const listUsers = (keyword = '', pageNumber = '') => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: USER_LIST_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    // const { data } = await axios.get(
    //   `/api/users?pageNumber=${pageNumber}`,
    //   config
    // )
    const { data } = await axios.get(
      `/api/users?keyword=${keyword}&pageNumber=${pageNumber}`,
      config
    )
    // const { data } = await axios.get('/api/users')

    // console.log(data)

    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: USER_LIST_FAIL,
      payload: message,
    })
  }
}

export const listUsersAdmin = (keyword = '', pageNumber = '') => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: USER_LIST_ADMIN_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(
      `/api/users/admin?keyword=${keyword}&pageNumber=${pageNumber}`,
      config
    )
    // const { data } = await axios.get('/api/users')

    console.log(data)

    dispatch({
      type: USER_LIST_ADMIN_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: USER_LIST_ADMIN_FAIL,
      payload: message,
    })
  }
}

export const listUsersTipster = (keyword = ' ', pageNumber = '') => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: USER_LIST_TIPSTER_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(
      `/api/users/tipster?keyword=${keyword}&pageNumber=${pageNumber}`,
      config
    )
    // const { data } = await axios.get('/api/users')

    // console.log(data)

    dispatch({
      type: USER_LIST_TIPSTER_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: USER_LIST_TIPSTER_FAIL,
      payload: message,
    })
  }
}

export const listUsersVip = (keyword = '', pageNumber = '') => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: USER_LIST_VIP_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.get(
      `/api/users/vip?keyword=${keyword}&pageNumber=${pageNumber}`,
      config
    )
    // const { data } = await axios.get('/api/users')
    console.log(keyword + '  nnnmmbbnnnm')
    console.log(JSON.stringify(data) + '  datannnmmbbnnnm')

    // console.log(data)

    dispatch({
      type: USER_LIST_VIP_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: USER_LIST_VIP_FAIL,
      payload: message,
    })
  }
}

export const listUsersNotVip = (keyword = '', pageNumber = '') => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: USER_LIST_NOTVIP_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(
      `/api/users/notvip?keyword=${keyword}&pageNumber=${pageNumber}`,
      config
    )
    // const { data } = await axios.get('/api/users')

    // console.log(data)

    dispatch({
      type: USER_LIST_NOTVIP_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: USER_LIST_NOTVIP_FAIL,
      payload: message,
    })
  }
}
export const deleteUser = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DELETE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.delete(`/api/users/${id}`, config)

    dispatch({ type: USER_DELETE_SUCCESS })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: USER_DELETE_FAIL,
      payload: message,
    })
  }
}

export const updateUser = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(`/api/users/${user._id}`, user, config)

    dispatch({ type: USER_UPDATE_SUCCESS })

    dispatch({ type: USER_DETAILS_SUCCESS, payload: data })

    dispatch({ type: USER_DETAILS_RESET })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: USER_UPDATE_FAIL,
      payload: message,
    })
  }
}

export const paymentHistoryAction = (
  amountPayment,
  statusPayment,
  commentPayment
) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PAYMENT_HISTORY_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const {
      userDetails: { user },
    } = getState()
    // const {

    //   trackDetails:{ track }
    // } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(
      `/api/users/${user._id}`,
      amountPayment,
      statusPayment,

      commentPayment,
      config
    )
    // console.log(JSON.stringify(data))
    localStorage.setItem('payment', JSON.stringify(data))
    // console.log(JSON.stringify(data) + 'the history data')
    // console.log(data + 'the history data')
    // console.log(data + 'the history data')
    // console.log(data + 'the history data')

    dispatch({
      type: PAYMENT_HISTORY_SUCCESS,
      payload: data,
    })
    //  dispatch({ type: TRACK_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message

    dispatch({
      type: PAYMENT_HISTORY_FAIL,
      payload: message,
    })
  }
}
