import axios from 'axios'
import {
  PREDICTION_VIP_LIST_SUCCESS,
  PREDICTION_VIP_LIST_REQUEST,
  PREDICTION_VIP_LIST_FAIL,
  PREDICTION_VIP_DELETE_SUCCESS,
  PREDICTION_VIP_DELETE_FAIL,
  PREDICTION_VIP_DELETE_REQUEST,
  PREDICTION_VIP_FIXTURE_REQUEST,
  PREDICTION_VIP_FIXTURE_SUCCESS,
  PREDICTION_VIP_FIXTURE_FAIL,
  PREDICTION_VIP_FIXTURE_RESET,
  PREDICTION_VIP_DETAILS_REQUEST,
  PREDICTION_VIP_DETAILS_SUCCESS,
  PREDICTION_VIP_DETAILS_FAIL,
  PREDICTION_VIP_UPDATE_REQUEST,
  PREDICTION_VIP_UPDATE_SUCCESS,
  PREDICTION_VIP_UPDATE_FAIL,
  PREDICTION_VIP_CREATE_REQUEST,
  PREDICTION_VIP_CREATE_SUCCESS,
  PREDICTION_VIP_CREATE_FAIL,
  PREDICTION_VIP_NUMBER_DETAILS_REQUEST,
  PREDICTION_VIP_NUMBER_DETAILS_SUCCESS,
  PREDICTION_VIP_NUMBER_DETAILS_FAIL,
  FIXTURE_VIP_REQUEST,
  FIXTURE_VIP_SUCCESS,
  FIXTURE_VIP_FAIL,
  FIXTURE_VIP_SINGLE_DELETE_REQUEST,
  FIXTURE_VIP_SINGLE_DELETE_SUCCESS,
  FIXTURE_VIP_SINGLE_DELETE_FAIL,
  FIXTURE_VIP_DELETE_REQUEST,
  FIXTURE_VIP_DELETE_SUCCESS,
  FIXTURE_VIP_DELETE_FAIL,
} from '../constants/predictionVipConstants'

export const predictionVipCreateAction = (title) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: PREDICTION_VIP_CREATE_REQUEST })
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
      `/api/predictions/vip/admin/unicode/create`,
      {
        title,
      },
      config
    )

    dispatch({
      type: PREDICTION_VIP_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PREDICTION_VIP_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const fixtureVipAction = (league, home, away, tipsOdds) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: FIXTURE_VIP_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()
    const {
      predictionVipDetails: { prediction },
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
      `/api/predictions/vip/${prediction._id}`,
      league,
      home,
      away,
      tipsOdds,
      config
    )
    // console.log(JSON.stringify(data))

    console.log(JSON.stringify(data) + 'vip fixture action history data')
    // console.log(data + 'the history data')
    // console.log(data + 'the history data')
    // console.log(data + 'the history data')

    dispatch({
      type: FIXTURE_VIP_SUCCESS,
      payload: data,
    })
    //  dispatch({ type: TRACK_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message

    dispatch({
      type: FIXTURE_VIP_FAIL,
      payload: message,
    })
  }
}

export const predictionVipListAction = (pageNumber = '') => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: PREDICTION_VIP_LIST_REQUEST })

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
      `/api/predictions/vip/game?pageNumber=${pageNumber}`,
      config
    )
    // const { data } = await axios.get('/api/predictions/vip/game', config)

    // console.log(JSON.stringify(data) + 'Action data')

    dispatch({
      type: PREDICTION_VIP_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PREDICTION_VIP_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const predictionVipNumberDetailsAction = (trackNumber = '') => async (
  dispatch
) => {
  try {
    dispatch({ type: PREDICTION_VIP_NUMBER_DETAILS_REQUEST })
    const { data } = await axios.get(
      `/api/predictions/admin/predictions?trackNumber=${trackNumber}`
    )

    console.log(data)

    dispatch({
      type: PREDICTION_VIP_NUMBER_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PREDICTION_VIP_NUMBER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const predictionVipDetailsAction = (id) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: PREDICTION_VIP_DETAILS_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/predictions/vip/${id}`, config)

    console.log(
      JSON.stringify(data.fixture) + '>>>>>>>>>>>123 vip<<<<<<<<<<<<<<<<<<<<<<<'
    )

    dispatch({
      type: PREDICTION_VIP_DETAILS_SUCCESS,
      payload: data,
    })
    localStorage.setItem('predictionvip_Details', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: PREDICTION_VIP_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const predictionVipfixtureAction = (id) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: PREDICTION_VIP_FIXTURE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const {
      data: { fixture },
    } = await axios.get(`/api/predictions/vip/${id}`, config)

    console.log(
      JSON.stringify(fixture) + '>>>>>>>>>>>123 fix 2<<<<<<<<<<<<<<<<<<<<<<<'
    )
    console.log(
      JSON.stringify(fixture) + '>>>>>>>>>>>123<<<<<<<<<<<<<<<<<<<<<<<'
    )
    console.log(
      JSON.stringify(fixture) + '>>>>>>>>>>>123<<<<<<<<<<<<<<<<<<<<<<<'
    )

    dispatch({
      type: PREDICTION_VIP_FIXTURE_SUCCESS,
      payload: fixture,
    })
    // localStorage.setItem('prediction_Details', JSON.stringify(fixture))
  } catch (error) {
    dispatch({
      type: PREDICTION_VIP_FIXTURE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const updatePredictionVipAction = (prediction) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: PREDICTION_VIP_UPDATE_REQUEST,
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
      `/api/predictions/vip/${prediction._id}`,
      prediction,
      config
    )

    dispatch({
      type: PREDICTION_VIP_UPDATE_SUCCESS,
      payload: data,
    })
    dispatch({ type: PREDICTION_VIP_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message

    dispatch({
      type: PREDICTION_VIP_UPDATE_FAIL,
      payload: message,
    })
  }
}

export const deletePredictionVipAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PREDICTION_VIP_DELETE_REQUEST,
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

    await axios.delete(`/api/predictions/vip/${id}`, config)

    dispatch({
      type: PREDICTION_VIP_DELETE_SUCCESS,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message

    dispatch({
      type: PREDICTION_VIP_DELETE_FAIL,
      payload: message,
    })
  }
}

export const deleteSingleFixtureVipAction = (id) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: FIXTURE_VIP_SINGLE_DELETE_REQUEST,
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

    await axios.delete(`/api/predictions/${id}/fixture/delete`, config)

    dispatch({
      type: FIXTURE_VIP_SINGLE_DELETE_SUCCESS,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message

    dispatch({
      type: FIXTURE_VIP_SINGLE_DELETE_FAIL,
      payload: message,
    })
  }
}

export const deleteFixtureVipAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: FIXTURE_VIP_DELETE_REQUEST,
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

    await axios.delete(`/api/predictions/vip/${id}/delete`, config)

    dispatch({
      type: FIXTURE_VIP_DELETE_SUCCESS,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message

    dispatch({
      type: FIXTURE_VIP_DELETE_FAIL,
      payload: message,
    })
  }
}
