import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
  USER_DETAILS_SUCCESS,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_RESET,
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
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_UPDATE_RESET,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_PROFILE_RESET,
  USER_UPDATE_PROFILE_ME_RESET,
  PAYMENT_HISTORY_REQUEST,
  PAYMENT_HISTORY_SUCCESS,
  PAYMENT_HISTORY_FAIL,
  USER_LIST_NOTVIP_REQUEST,
  USER_LIST_NOTVIP_SUCCESS,
  USER_LIST_NOTVIP_FAIL,
  USER_LIST_VIP_REQUEST,
  USER_LIST_VIP_SUCCESS,
  USER_LIST_VIP_FAIL,
  USER_LIST_TIPSTER_REQUEST,
  USER_LIST_TIPSTER_SUCCESS,
  USER_LIST_TIPSTER_FAIL,
  USER_LIST_ADMIN_REQUEST,
  USER_LIST_ADMIN_SUCCESS,
  USER_LIST_ADMIN_FAIL,
  SEND_SUB_EXPIRE_EMAIL_REQUEST,
  SEND_SUB_EXPIRE_EMAIL_SUCCESS,
  SEND_SUB_EXPIRE_EMAIL_FAIL,
} from '../constants/userConstants'

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true }
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }
    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}
export const subExpireEmailReducer = (state = {}, action) => {
  switch (action.type) {
    case SEND_SUB_EXPIRE_EMAIL_REQUEST:
      return { loading: true }
    case SEND_SUB_EXPIRE_EMAIL_SUCCESS:
      return { loading: false, success: true }
    case SEND_SUB_EXPIRE_EMAIL_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true }
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload }
    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}
export const contactusReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true }
    case USER_REGISTER_SUCCESS:
      return { loading: false, sendMessage: action.payload }
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload }
    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}

export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true }
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload }
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    case USER_DETAILS_RESET:
      return { user: {} }
    default:
      return state
  }
}

export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return { loading: true }
    case USER_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload }
    case USER_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload }
    case USER_UPDATE_PROFILE_RESET:
      return {}
    default:
      return state
  }
}
export const userUpdateProfileMeReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_ME_REQUEST:
      return { loading: true }
    case USER_UPDATE_PROFILE_ME_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload }
    case USER_UPDATE_PROFILE_ME_FAIL:
      return { loading: false, error: action.payload }
    case USER_UPDATE_PROFILE_ME_RESET:
      return {}
    default:
      return state
  }
}

export const userListReducer1 = (state = { users: [] }, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loading: true }
    case USER_LIST_SUCCESS:
      return { loading: false, users: action.payload }
    case USER_LIST_FAIL:
      return { loading: false, error: action.payload }
    case USER_LIST_RESET:
      return { users: [] }
    default:
      return state
  }
}

export const userListReducer = (state = { users: [] }, action) => {
  //   const { type, payload } = action
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loading: true }
    case USER_LIST_SUCCESS:
      return {
        loading: false,
        users: action.payload.users,
        count: action.payload.count,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case USER_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const userListAdminReducer = (state = { users: [] }, action) => {
  //   const { type, payload } = action
  switch (action.type) {
    case USER_LIST_ADMIN_REQUEST:
      return { loading: true }
    case USER_LIST_ADMIN_SUCCESS:
      return {
        loading: false,
        users: action.payload.users,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case USER_LIST_ADMIN_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const userListTipsterReducer = (state = { users: [] }, action) => {
  //   const { type, payload } = action
  switch (action.type) {
    case USER_LIST_TIPSTER_REQUEST:
      return { loading: true }
    case USER_LIST_TIPSTER_SUCCESS:
      return {
        loading: false,
        users: action.payload.users,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case USER_LIST_TIPSTER_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const userListVipReducer = (state = { users: [] }, action) => {
  //   const { type, payload } = action
  switch (action.type) {
    case USER_LIST_VIP_REQUEST:
      return { loading: true }
    case USER_LIST_VIP_SUCCESS:
      return {
        loading: false,
        users: action.payload.users,
        count: action.payload.count,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case USER_LIST_VIP_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const userListNotVipReducer = (state = { users: [] }, action) => {
  //   const { type, payload } = action
  switch (action.type) {
    case USER_LIST_NOTVIP_REQUEST:
      return { loading: true }
    case USER_LIST_NOTVIP_SUCCESS:
      return {
        loading: false,
        users: action.payload.users,
        pages: action.payload.pages,
        page: action.payload.page,
        count: action.payload.count,
      }
    case USER_LIST_NOTVIP_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DELETE_REQUEST:
      return { loading: true }
    case USER_DELETE_SUCCESS:
      return { loading: false, success: true }
    case USER_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const userUpdateReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return { loading: true }
    case USER_UPDATE_SUCCESS:
      return { loading: false, success: true }
    case USER_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case USER_UPDATE_RESET:
      return {
        user: {},
      }
    default:
      return state
  }
}

export const paymentHistoryReducer = (
  state = { paymentHistory: [] },
  action
) => {
  //   const { type, payload } = action
  switch (action.type) {
    case PAYMENT_HISTORY_REQUEST:
      return { loading: true }
    case PAYMENT_HISTORY_SUCCESS:
      return { loading: false, paymentHistory: action.payload, success: true }
    case PAYMENT_HISTORY_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
