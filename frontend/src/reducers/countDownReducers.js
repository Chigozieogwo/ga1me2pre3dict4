import {
  COUNTDOWN_CREATE_SUCCESS,
  COUNTDOWN_CREATE_REQUEST,
  COUNTDOWN_CREATE_FAIL,
  COUNTDOWN_LIST_REQUEST,
  COUNTDOWN_LIST_SUCCESS,
  COUNTDOWN_LIST_FAIL,
  COUNTDOWN_DELETE_REQUEST,
  COUNTDOWN_DELETE_SUCCESS,
  COUNTDOWN_DELETE_FAIL,
  COUNTDOWN_UPDATE_REQUEST,
  COUNTDOWN_UPDATE_SUCCESS,
  COUNTDOWN_UPDATE_FAIL,
  COUNTDOWN_UPDATE_RESET,
  COUNTDOWN_DETAILS_REQUEST,
  COUNTDOWN_DETAILS_SUCCESS,
  COUNTDOWN_DETAILS_FAIL,
  COUNTDOWN_DETAILS_RESET,
} from '../constants/countDownConstants'

export const countdownCreateReducer = (state = {}, action) => {
  //   const { type, payload } = action
  switch (action.type) {
    case COUNTDOWN_CREATE_REQUEST:
      return { loading: true }
    case COUNTDOWN_CREATE_SUCCESS:
      return { loading: false, countdown: action.payload, success: true }
    case COUNTDOWN_CREATE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const countdownListReducer = (state = { countdowns: [] }, action) => {
  //   const { type, payload } = action
  switch (action.type) {
    case COUNTDOWN_LIST_REQUEST:
      return { loading: true, countdowns: [] }
    case COUNTDOWN_LIST_SUCCESS:
      if (action.payload === undefined) {
        action.payload = []
      }
      return { countdowns: action.payload.countdowns}

    case COUNTDOWN_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const countdownDetailsReducer = (state = {}, action) => {
  //   const { type, payload } = action
  switch (action.type) {
    case COUNTDOWN_DETAILS_REQUEST:
      return { ...state, loading: true }
    case COUNTDOWN_DETAILS_SUCCESS:
      if (action.payload === undefined) {
        action.payload = {}
      }
      return { loading: false, countdown: action.payload }

    case COUNTDOWN_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    case COUNTDOWN_DETAILS_RESET:
      return { countdown: {} }
    default:
      return state
  }
}

export const countdownUpdateReducer = (state = { countdown: {} }, action) => {
  switch (action.type) {
    case COUNTDOWN_UPDATE_REQUEST:
      return { loading: true }
    case COUNTDOWN_UPDATE_SUCCESS:
      return { loading: false, success: true, countdown: action.payload }
    case COUNTDOWN_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case COUNTDOWN_UPDATE_RESET:
      return { countdown: {} }
    default:
      return state
  }
}

export const countdownDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case COUNTDOWN_DELETE_REQUEST:
      return { loading: true }
    case COUNTDOWN_DELETE_SUCCESS:
      return { loading: false, success: true }
    case COUNTDOWN_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
