import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  predictionListReducer,
  predictionListTableReducer,
  predictionDetailsReducer,
  predictionfixtureReducer,
  predictionDeleteReducer,
  predictionUpdateReducer,
  predictionCreateReducer,
  predictionNumberDetailsReducer,
  fixtureReducer,
  deleteSingleFixtureReducer,
  deleteFixtureReducer,
} from './reducers/predictionReducers.js'
import {
  predictionVipListReducer,
  predictionVipDetailsReducer,
  predictionVipfixtureReducer,
  predictionVipDeleteReducer,
  predictionVipUpdateReducer,
  predictionVipCreateReducer,
  predictionVipNumberDetailsReducer,
  fixtureVipReducer,
  deleteSingleFixtureVipReducer,
  deleteFixtureVipReducer,
} from './reducers/predictionVipReducers.js'
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userUpdateProfileMeReducer,
  userListReducer,
  userListAdminReducer,
  userListTipsterReducer,
  userListVipReducer,
  userListNotVipReducer,
  userDeleteReducer,
  userUpdateReducer,
  contactusReducer,
  paymentHistoryReducer,
  subExpireEmailReducer,
} from './reducers/userReducers'
import {
  countdownCreateReducer,
  countdownListReducer,
  countdownUpdateReducer,
  countdownDetailsReducer,
  countdownDeleteReducer,
} from './reducers/countDownReducers.js'



const reducer = combineReducers({
  countdownCreate: countdownCreateReducer,
  countdownList: countdownListReducer,
  countdownUpdate: countdownUpdateReducer,
  countdownDetails: countdownDetailsReducer,
  countdownDelete: countdownDeleteReducer,

  predictionCreate: predictionCreateReducer,
  predictionList: predictionListReducer,
  predictionListTable: predictionListTableReducer,
  predictionDetails: predictionDetailsReducer,
  predictionfixture: predictionfixtureReducer,
  predictionNumberDetails: predictionNumberDetailsReducer,
  predictionDelete: predictionDeleteReducer,
  predictionUpdate: predictionUpdateReducer,
  fixture: fixtureReducer,
  deleteFixture: deleteFixtureReducer,
  deleteSingleFixture: deleteSingleFixtureReducer,

  predictionVipCreate: predictionVipCreateReducer,
  predictionVipList: predictionVipListReducer,
  predictionVipDetails: predictionVipDetailsReducer,
  predictionVipfixture: predictionVipfixtureReducer,
  predictionVipNumberDetails: predictionVipNumberDetailsReducer,
  predictionVipDelete: predictionVipDeleteReducer,
  predictionVipUpdate: predictionVipUpdateReducer,
  fixtureVip: fixtureVipReducer,
  deleteFixtureVip: deleteFixtureVipReducer,
  deleteSingleFixtureVip: deleteSingleFixtureVipReducer,

  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userUpdateProfileMe: userUpdateProfileMeReducer,
  userList: userListReducer,
  userListAdmin: userListAdminReducer,
  userListTipster: userListTipsterReducer,
  userListVip: userListVipReducer,
  userListNotVip: userListNotVipReducer,
  userDelete: userDeleteReducer,
  contactus: contactusReducer,
  subExpireEmail: subExpireEmailReducer,
  userUpdate: userUpdateReducer,
  paymentHistory: paymentHistoryReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
