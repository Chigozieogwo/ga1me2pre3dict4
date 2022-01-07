import {
  PREDICTION_LIST_REQUEST,
  PREDICTION_LIST_SUCCESS,
  PREDICTION_LIST_FAIL,
  PREDICTION_LIST_TABLE_REQUEST,
  PREDICTION_LIST_TABLE_SUCCESS,
  PREDICTION_LIST_TABLE_FAIL,
  PREDICTION_DELETE_REQUEST,
  PREDICTION_DELETE_SUCCESS,
  PREDICTION_DELETE_FAIL,
  PREDICTION_DETAILS_REQUEST,
  PREDICTION_DETAILS_SUCCESS,
  PREDICTION_DETAILS_FAIL,
  PREDICTION_FIXTURE_REQUEST,
  PREDICTION_FIXTURE_SUCCESS,
  PREDICTION_FIXTURE_FAIL,
  PREDICTION_FIXTURE_RESET,
  PREDICTION_UPDATE_REQUEST,
  PREDICTION_UPDATE_SUCCESS,
  PREDICTION_UPDATE_FAIL,
  PREDICTION_UPDATE_RESET,
  PREDICTION_CREATE_REQUEST,
  PREDICTION_CREATE_SUCCESS,
  PREDICTION_CREATE_FAIL,
  PREDICTION_NUMBER_DETAILS_REQUEST,
  PREDICTION_NUMBER_DETAILS_SUCCESS,
  PREDICTION_NUMBER_DETAILS_FAIL,
  PREDICTION_DETAILS_RESET,
  FIXTURE_REQUEST,
  FIXTURE_SUCCESS,
  FIXTURE_FAIL,
  FIXTURE_DELETE_REQUEST,
  FIXTURE_DELETE_SUCCESS,
  FIXTURE_DELETE_FAIL,
  FIXTURE_SINGLE_DELETE_REQUEST,
  FIXTURE_SINGLE_DELETE_SUCCESS,
  FIXTURE_SINGLE_DELETE_FAIL,
} from '../constants/predictionConstants.js'

export const predictionCreateReducer = (state = {}, action) => {
  //   const { type, payload } = action
  switch (action.type) {
    case PREDICTION_CREATE_REQUEST:
      return { loading: true }
    case PREDICTION_CREATE_SUCCESS:
      return { loading: false, prediction: action.payload, success: true }
    case PREDICTION_CREATE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const fixtureReducer = (state = { fixture: [] }, action) => {
  //   const { type, payload } = action
  switch (action.type) {
    case FIXTURE_REQUEST:
      return { loading: true }
    case FIXTURE_SUCCESS:
      return { loading: false, fixture: action.payload, success: true }
    case FIXTURE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const predictionListReducer = (state = { predictions: [] }, action) => {
  //   const { type, payload } = action
  switch (action.type) {
    case PREDICTION_LIST_REQUEST:
      return { loading: true }
    case PREDICTION_LIST_SUCCESS:
      if (action.payload === undefined) {
        action.payload = {}
      }
      return {
        loading: false,
        predictions: action.payload,
        pages: action.payload.pages,
        page: action.payload.page,
      }

    // return {
    //   loading: false,
    //   predictions: action.payload.predictions,
    //   pages: action.payload.pages,
    //   page: action.payload.page,
    // }
    case PREDICTION_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const predictionListTableReducer = (
  state = { predictions: [] },
  action
) => {
  //   const { type, payload } = action
  switch (action.type) {
    case PREDICTION_LIST_TABLE_REQUEST:
      return { loading: true }
    case PREDICTION_LIST_TABLE_SUCCESS:
      if (action.payload === undefined) {
        action.payload = {}
      }
      return {
        loading: false,
        predictions: action.payload.predictions,
        pages: action.payload.pages,
        page: action.payload.page,
      }

    // return {
    //   loading: false,
    //   predictions: action.payload.predictions,
    //   pages: action.payload.pages,
    //   page: action.payload.page,
    // }
    case PREDICTION_LIST_TABLE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const predictionDetailsReducer = (state = {}, action) => {
  //   const { type, payload } = action
  switch (action.type) {
    case PREDICTION_DETAILS_REQUEST:
      return { ...state, loading: true }
    case PREDICTION_DETAILS_SUCCESS:
      if (action.payload === undefined) {
        action.payload = {}
      }
      return { loading: false, prediction: action.payload }

    case PREDICTION_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    case PREDICTION_DETAILS_RESET:
      return { prediction: {} }
    default:
      return state
  }
}
export const predictionfixtureReducer = (state = [], action) => {
  //   const { type, payload } = action
  switch (action.type) {
    case PREDICTION_FIXTURE_REQUEST:
      return { ...state, loading: true }
    case PREDICTION_FIXTURE_SUCCESS:
      // if (action.payload === undefined) {
      //   action.payload = []
      // }
      return { loading: false, fixture: action.payload }

    case PREDICTION_FIXTURE_FAIL:
      return { loading: false, error: action.payload }
    case PREDICTION_FIXTURE_RESET:
      return { fixture: [] }
    default:
      return state
  }
}

export const predictionNumberDetailsReducer = (state = {}, action) => {
  //   const { type, payload } = action
  switch (action.type) {
    case PREDICTION_NUMBER_DETAILS_REQUEST:
      return { ...state, loading: true }
    case PREDICTION_NUMBER_DETAILS_SUCCESS:
      return { loading: false, prediction: action.payload }
    case PREDICTION_NUMBER_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const predictionUpdateReducer = (state = { prediction: {} }, action) => {
  switch (action.type) {
    case PREDICTION_UPDATE_REQUEST:
      return { loading: true }
    case PREDICTION_UPDATE_SUCCESS:
      return { loading: false, success: true, prediction: action.payload }
    case PREDICTION_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case PREDICTION_UPDATE_RESET:
      return { prediction: {} }
    default:
      return state
  }
}

export const predictionDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PREDICTION_DELETE_REQUEST:
      return { loading: true }
    case PREDICTION_DELETE_SUCCESS:
      return { loading: false, success: true }
    case PREDICTION_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const deleteFixtureReducer = (state = [], action) => {
  switch (action.type) {
    case FIXTURE_DELETE_REQUEST:
      return { loading: true }
    case FIXTURE_DELETE_SUCCESS:
      return { loading: false, success: true }
    case FIXTURE_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const deleteSingleFixtureReducer = (state = {}, action) => {
  switch (action.type) {
    case FIXTURE_SINGLE_DELETE_REQUEST:
      return { loading: true }
    case FIXTURE_SINGLE_DELETE_SUCCESS:
      return { loading: false, success: true }
    case FIXTURE_SINGLE_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
