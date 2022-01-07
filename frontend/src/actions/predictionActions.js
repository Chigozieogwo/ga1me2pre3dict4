import axios from 'axios'
import {
  PREDICTION_LIST_SUCCESS,
  PREDICTION_LIST_REQUEST,
  PREDICTION_LIST_FAIL,
  PREDICTION_LIST_TABLE_SUCCESS,
  PREDICTION_LIST_TABLE_REQUEST,
  PREDICTION_LIST_TABLE_FAIL,
  PREDICTION_DELETE_SUCCESS,
  PREDICTION_DELETE_FAIL,
  PREDICTION_DELETE_REQUEST,
  PREDICTION_FIXTURE_REQUEST,
  PREDICTION_FIXTURE_SUCCESS,
  PREDICTION_FIXTURE_FAIL,
  PREDICTION_FIXTURE_RESET,
  PREDICTION_DETAILS_REQUEST,
  PREDICTION_DETAILS_SUCCESS,
  PREDICTION_DETAILS_FAIL,
  PREDICTION_UPDATE_REQUEST,
  PREDICTION_UPDATE_SUCCESS,
  PREDICTION_UPDATE_FAIL,
  PREDICTION_CREATE_REQUEST,
  PREDICTION_CREATE_SUCCESS,
  PREDICTION_CREATE_FAIL,
  PREDICTION_NUMBER_DETAILS_REQUEST,
  PREDICTION_NUMBER_DETAILS_SUCCESS,
  PREDICTION_NUMBER_DETAILS_FAIL,
  FIXTURE_REQUEST,
  FIXTURE_SUCCESS,
  FIXTURE_FAIL,
  FIXTURE_SINGLE_DELETE_REQUEST,
  FIXTURE_SINGLE_DELETE_SUCCESS,
  FIXTURE_SINGLE_DELETE_FAIL,
  FIXTURE_DELETE_REQUEST,
  FIXTURE_DELETE_SUCCESS,
  FIXTURE_DELETE_FAIL,
} from '../constants/predictionConstants'

export const predictionCreateAction = (title) => async (dispatch, getState) => {
  try {
    dispatch({ type: PREDICTION_CREATE_REQUEST })
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
      `/api/predictions/admin/unicode/create`,
      {
        title,
      },
      config
    )

    dispatch({
      type: PREDICTION_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PREDICTION_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const fixtureAction = (league, home, away, tipsOdds) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: FIXTURE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()
    const {
      predictionDetails: { prediction },
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
      `/api/predictions/${prediction._id}`,
      league,
      home,
      away,
      tipsOdds,
      config
    )
    // console.log(JSON.stringify(data))

    // console.log(JSON.stringify(data) + 'the history data')
    // console.log(data + 'the history data')
    // console.log(data + 'the history data')
    // console.log(data + 'the history data')

    dispatch({
      type: FIXTURE_SUCCESS,
      payload: data,
    })
    //  dispatch({ type: TRACK_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message

    dispatch({
      type: FIXTURE_FAIL,
      payload: message,
    })
  }
}

export const predictionListAction = (pageNumber = '') => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: PREDICTION_LIST_REQUEST })

    // const {
    //   userLogin: { userInfo },
    // } = getState()

    // const config = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // }

    const { data } = await axios.get(
      `/api/predictions?pageNumber=${pageNumber}`
    )
    //const { data } = await axios.get('/api/tracks')

    // console.log(data)

    dispatch({
      type: PREDICTION_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PREDICTION_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const predictionListTableAction = (pageNumber = '') => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: PREDICTION_LIST_TABLE_REQUEST })

    // const {
    //   userLogin: { userInfo },
    // } = getState()

    // const config = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // }

    const { data } = await axios.get(
      `/api/predictions/predict?pageNumber=${pageNumber}`
    )
    //const { data } = await axios.get('/api/tracks')

    console.log(data)

    dispatch({
      type: PREDICTION_LIST_TABLE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PREDICTION_LIST_TABLE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const predictionNumberDetailsAction = (trackNumber = '') => async (
  dispatch
) => {
  try {
    dispatch({ type: PREDICTION_NUMBER_DETAILS_REQUEST })
    const { data } = await axios.get(
      `/api/predictions/admin/predictions?trackNumber=${trackNumber}`
    )

    console.log(data)

    dispatch({
      type: PREDICTION_NUMBER_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PREDICTION_NUMBER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const predictionDetailsAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PREDICTION_DETAILS_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/predictions/${id}`, config)

    console.log(
      JSON.stringify(data.fixture) + '>>>>>>>>>>>123<<<<<<<<<<<<<<<<<<<<<<<'
    )

    dispatch({
      type: PREDICTION_DETAILS_SUCCESS,
      payload: data,
    })
    localStorage.setItem('prediction_Details', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: PREDICTION_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const predictionfixtureAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PREDICTION_FIXTURE_REQUEST })

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
    } = await axios.get(`/api/predictions/${id}`, config)

    console.log(
      JSON.stringify(fixture) + '>>>>>>>>>>>123<<<<<<<<<<<<<<<<<<<<<<<'
    )
    console.log(
      JSON.stringify(fixture) + '>>>>>>>>>>>123<<<<<<<<<<<<<<<<<<<<<<<'
    )
    console.log(
      JSON.stringify(fixture) + '>>>>>>>>>>>123<<<<<<<<<<<<<<<<<<<<<<<'
    )

    dispatch({
      type: PREDICTION_FIXTURE_SUCCESS,
      payload: fixture,
    })
    // localStorage.setItem('prediction_Details', JSON.stringify(fixture))
  } catch (error) {
    dispatch({
      type: PREDICTION_FIXTURE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const updatePredictionAction = (prediction) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: PREDICTION_UPDATE_REQUEST,
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
      `/api/predictions/${prediction._id}`,
      prediction,
      config
    )

    dispatch({
      type: PREDICTION_UPDATE_SUCCESS,
      payload: data,
    })
    dispatch({ type: PREDICTION_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message

    dispatch({
      type: PREDICTION_UPDATE_FAIL,
      payload: message,
    })
  }
}

export const deletePredictionAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PREDICTION_DELETE_REQUEST,
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

    await axios.delete(`/api/predictions/${id}`, config)

    dispatch({
      type: PREDICTION_DELETE_SUCCESS,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message

    dispatch({
      type: PREDICTION_DELETE_FAIL,
      payload: message,
    })
  }
}

export const deleteSingleFixtureAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: FIXTURE_SINGLE_DELETE_REQUEST,
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
      type: FIXTURE_SINGLE_DELETE_SUCCESS,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message

    dispatch({
      type: FIXTURE_SINGLE_DELETE_FAIL,
      payload: message,
    })
  }
}

export const deleteFixtureAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: FIXTURE_DELETE_REQUEST,
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

    await axios.delete(`/api/predictions/${id}/delete`, config)

    dispatch({
      type: FIXTURE_DELETE_SUCCESS,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message

    dispatch({
      type: FIXTURE_DELETE_FAIL,
      payload: message,
    })
  }
}
