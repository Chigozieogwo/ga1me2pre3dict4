import {
  PREDICTION_VIP_LIST_REQUEST,
  PREDICTION_VIP_LIST_SUCCESS,
  PREDICTION_VIP_LIST_FAIL,
  PREDICTION_VIP_DELETE_REQUEST,
  PREDICTION_VIP_DELETE_SUCCESS,
  PREDICTION_VIP_DELETE_FAIL,
  PREDICTION_VIP_DETAILS_REQUEST,
  PREDICTION_VIP_DETAILS_SUCCESS,
  PREDICTION_VIP_DETAILS_FAIL,
  PREDICTION_VIP_FIXTURE_REQUEST,
  PREDICTION_VIP_FIXTURE_SUCCESS,
  PREDICTION_VIP_FIXTURE_FAIL,
  PREDICTION_VIP_FIXTURE_RESET,
  PREDICTION_VIP_UPDATE_REQUEST,
  PREDICTION_VIP_UPDATE_SUCCESS,
  PREDICTION_VIP_UPDATE_FAIL,
  PREDICTION_VIP_UPDATE_RESET,
  PREDICTION_VIP_CREATE_REQUEST,
  PREDICTION_VIP_CREATE_SUCCESS,
  PREDICTION_VIP_CREATE_FAIL,
  PREDICTION_VIP_NUMBER_DETAILS_REQUEST,
  PREDICTION_VIP_NUMBER_DETAILS_SUCCESS,
  PREDICTION_VIP_NUMBER_DETAILS_FAIL,
  PREDICTION_VIP_DETAILS_RESET,
  FIXTURE_VIP_REQUEST,
  FIXTURE_VIP_SUCCESS,
  FIXTURE_VIP_FAIL,
  FIXTURE_VIP_DELETE_REQUEST,
  FIXTURE_VIP_DELETE_SUCCESS,
  FIXTURE_VIP_DELETE_FAIL,
  FIXTURE_VIP_SINGLE_DELETE_REQUEST,
  FIXTURE_VIP_SINGLE_DELETE_SUCCESS,
  FIXTURE_VIP_SINGLE_DELETE_FAIL,
} from '../constants/predictionVipConstants.js'

export const predictionVipCreateReducer = (state = {}, action) => {
  //   const { type, payload } = action
  switch (action.type) {
    case PREDICTION_VIP_CREATE_REQUEST:
      return { loading: true }
    case PREDICTION_VIP_CREATE_SUCCESS:
      return { loading: false, prediction: action.payload, success: true }
    case PREDICTION_VIP_CREATE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const fixtureVipReducer = (state = { fixture: [] }, action) => {
  //   const { type, payload } = action
  switch (action.type) {
    case FIXTURE_VIP_REQUEST:
      return { loading: true }
    case FIXTURE_VIP_SUCCESS:
      return { loading: false, fixture: action.payload, success: true }
    case FIXTURE_VIP_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const predictionVipListReducer = (
  state = { predictions: [] },
  action
) => {
  //   const { type, payload } = action
  switch (action.type) {
    case PREDICTION_VIP_LIST_REQUEST:
      return { loading: true }
    case PREDICTION_VIP_LIST_SUCCESS:
      return {
        loading: false,
        predictions: action.payload.predictionsVip,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case PREDICTION_VIP_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const predictionVipListReducer1 = (
  state = { predictions: [] },
  action
) => {
  //   const { type, payload } = action
  switch (action.type) {
    case PREDICTION_VIP_LIST_REQUEST:
      return { loading: true }
    case PREDICTION_VIP_LIST_SUCCESS:
      return {
        loading: false,
        predictions: action.payload,
      }
    case PREDICTION_VIP_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const predictionVipDetailsReducer = (state = {}, action) => {
  //   const { type, payload } = action
  switch (action.type) {
    case PREDICTION_VIP_DETAILS_REQUEST:
      return { ...state, loading: true }
    case PREDICTION_VIP_DETAILS_SUCCESS:
      if (action.payload === undefined) {
        action.payload = {}
      }
      return { loading: false, prediction: action.payload }

    case PREDICTION_VIP_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    case PREDICTION_VIP_DETAILS_RESET:
      return { prediction: {} }
    default:
      return state
  }
}
export const predictionVipfixtureReducer = (state = [], action) => {
  //   const { type, payload } = action
  switch (action.type) {
    case PREDICTION_VIP_FIXTURE_REQUEST:
      return { ...state, loading: true }
    case PREDICTION_VIP_FIXTURE_SUCCESS:
      // if (action.payload === undefined) {
      //   action.payload = []
      // }
      return { loading: false, fixture: action.payload }

    case PREDICTION_VIP_FIXTURE_FAIL:
      return { loading: false, error: action.payload }
    case PREDICTION_VIP_FIXTURE_RESET:
      return { fixture: [] }
    default:
      return state
  }
}

export const predictionVipNumberDetailsReducer = (state = {}, action) => {
  //   const { type, payload } = action
  switch (action.type) {
    case PREDICTION_VIP_NUMBER_DETAILS_REQUEST:
      return { ...state, loading: true }
    case PREDICTION_VIP_NUMBER_DETAILS_SUCCESS:
      return { loading: false, prediction: action.payload }
    case PREDICTION_VIP_NUMBER_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const predictionVipUpdateReducer = (
  state = { prediction: {} },
  action
) => {
  switch (action.type) {
    case PREDICTION_VIP_UPDATE_REQUEST:
      return { loading: true }
    case PREDICTION_VIP_UPDATE_SUCCESS:
      return { loading: false, success: true, prediction: action.payload }
    case PREDICTION_VIP_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case PREDICTION_VIP_UPDATE_RESET:
      return { prediction: {} }
    default:
      return state
  }
}

export const predictionVipDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PREDICTION_VIP_DELETE_REQUEST:
      return { loading: true }
    case PREDICTION_VIP_DELETE_SUCCESS:
      return { loading: false, success: true }
    case PREDICTION_VIP_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const deleteFixtureVipReducer = (state = [], action) => {
  switch (action.type) {
    case FIXTURE_VIP_DELETE_REQUEST:
      return { loading: true }
    case FIXTURE_VIP_DELETE_SUCCESS:
      return { loading: false, success: true }
    case FIXTURE_VIP_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const deleteSingleFixtureVipReducer = (state = {}, action) => {
  switch (action.type) {
    case FIXTURE_VIP_SINGLE_DELETE_REQUEST:
      return { loading: true }
    case FIXTURE_VIP_SINGLE_DELETE_SUCCESS:
      return { loading: false, success: true }
    case FIXTURE_VIP_SINGLE_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
