import axios from 'axios'
import { COUNTDOWN_CREATE_REQUEST, COUNTDOWN_CREATE_SUCCESS, COUNTDOWN_CREATE_FAIL, COUNTDOWN_LIST_FAIL, COUNTDOWN_LIST_SUCCESS, COUNTDOWN_LIST_REQUEST, COUNTDOWN_DETAILS_REQUEST, COUNTDOWN_DETAILS_SUCCESS, COUNTDOWN_DETAILS_FAIL, COUNTDOWN_UPDATE_REQUEST, COUNTDOWN_UPDATE_SUCCESS, COUNTDOWN_UPDATE_FAIL, COUNTDOWN_DELETE_REQUEST, COUNTDOWN_DELETE_SUCCESS, COUNTDOWN_DELETE_FAIL } from '../constants/countDownConstants'


export const countdownCreateAction = (amountOfDays,statusDisplay,toDisplay) => async (dispatch, getState) => {
  try {
    dispatch({ type: COUNTDOWN_CREATE_REQUEST })
    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(
      `/api/countdown/admin/count/create`,
      {
        amountOfDays,statusDisplay,toDisplay
      },
      config
    )

    dispatch({
      type: COUNTDOWN_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: COUNTDOWN_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}


export const countdownListAction = () => async (
    dispatch
  ) => {
    try {
      dispatch({ type: COUNTDOWN_LIST_REQUEST })
  
      // const {
      //   userLogin: { userInfo },
      // } = getState()
  
      // const config = {
      //   headers: {
      //     'Content-Type': 'application/json',
      //     Authorization: `Bearer ${userInfo.token}`,
      //   },
      // }
  
    //   const { data } = await axios.get(
    //     `/api/predictions?pageNumber=${pageNumber}`
    //   )
      const { data } = await axios.get('/api/countdown')
  
       console.log(data)
  
      dispatch({
        type: COUNTDOWN_LIST_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: COUNTDOWN_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

  
export const countdownDetailsAction = (id) => async (dispatch, getState) => {
    try {
      dispatch({ type: COUNTDOWN_DETAILS_REQUEST })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.get(`/api/countdown/${id}`, config)
  
    //   console.log(
    //     JSON.stringify(data.fixture) + '>>>>>>>>>>>123<<<<<<<<<<<<<<<<<<<<<<<'
    //   )
  
      dispatch({
        type: COUNTDOWN_DETAILS_SUCCESS,
        payload: data,
      })
      localStorage.setItem('countdown_Details', JSON.stringify(data))
    } catch (error) {
      dispatch({
        type: COUNTDOWN_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

  
export const updateCountdownAction = (countdown) => async (
    dispatch,
    getState
  ) => {
    try {
      dispatch({
        type: COUNTDOWN_UPDATE_REQUEST,
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
  
      const { data } = await axios.put(
        `/api/countdown/${countdown._id}`,
        countdown,
        config
      )
  
      dispatch({
        type: COUNTDOWN_UPDATE_SUCCESS,
        payload: data,
      })
      dispatch({ type: COUNTDOWN_DETAILS_SUCCESS, payload: data })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
  
      dispatch({
        type: COUNTDOWN_UPDATE_FAIL,
        payload: message,
      })
    }
  }
  
  export const deleteCountdownAction = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: COUNTDOWN_DELETE_REQUEST,
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
  
      await axios.delete(`/api/countdown/${id}`, config)
  
      dispatch({
        type: COUNTDOWN_DELETE_SUCCESS,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
  
      dispatch({
        type: COUNTDOWN_DELETE_FAIL,
        payload: message,
      })
    }
  }