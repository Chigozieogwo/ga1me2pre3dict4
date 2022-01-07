// eslint-disable-next-line

import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Home from './pages/HomePage/Home'
import Services from './pages/Services/Services'
import Products from './pages/Products/Products'
import SignUp from './pages/SignUp/SignUp'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import PredictionListScreen from './screens/PredictionListScreen.js'
import PredictionCreateScreen from './screens/PredictionCreateScreen.js'
import PredictionDetailScreen from './screens/PredictionDetailScreen.js'
import PredictionEditScreen from './screens/PredictionEditScreen.js'

// import CountdownListScreen from './screens/CountdownListScreen.js'
import CountdownCreateScreen from './screens/CountdownCreateScreen.js'
// import CountdownDetailScreen from './screens/CountdownDetailScreen.js'
import CountdownEditScreen from './screens/CountdownEditScreen.js'

import PredictionVipListScreen from './screens/PredictionVipListScreen.js'
import PredictionVipCreateScreen from './screens/PredictionVipCreateScreen.js'
// import PredictionVipDetailScreen from './screens/PredictionVipDetailScreen.js'
import PredictionVipEditScreen from './screens/PredictionVipEditScreen.js'

import UserListScreen from './screens/UserListScreen.js'
import UserListAdminScreen from './screens/UserListAdminScreen.js'
import UserListNotVipScreen from './screens/UserListNotVipScreen.js'
import UserListVipScreen from './screens/UserListVipScreen.js'
import UserListTipsterScreen from './screens/UserListTipsterScreen.js'
import UserEditScreen from './screens/UserEditScreen.js'

import HomeScreen from './screens/HomeScreen.js'
import DashboardScreen from './screens/DashboardScreen.js'
import ProfileScreen from './screens/ProfileScreen.js'

import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import PageNotFoundScreen from './screens/PageNotFoundScreen'
import AboutUsScreen from './screens/AboutUsScreen.js'
import RefundPolicyScreen from './screens/RefundPolicyScreen.js'
import DisclaimerScreen from './screens/DisclaimerScreen.js'
import TandCScreen from './screens/TandCScreen.js'
import ContactUsScreen from './screens/ContactUsScreen.js'

import ScrollToTop from './components/ScrollToTop'
import GlobalStyle from './globalStyles.js'
// import  Footer  from './components/Footer/Footer.js'

import { useDispatch, useSelector } from 'react-redux'

const user = JSON.parse(localStorage.getItem('userInfo'))
// console.log(user.name + 'Erreemmmmm')
// console.log(user.isAdmin + 'Erreemmmmm')
// console.log(user + 'Erreemmmmm')

function App() {
  return (
    <Router>
      {/* <GlobalStyle />
      <ScrollToTop /> */}

      {/* <Navbar /> */}
      <Header />
      <main>
        <Switch>
          <Route path="/register" component={RegisterScreen} exact />
          <Route path="/login" component={LoginScreen} exact />
          <Route path="/profile" component={ProfileScreen} exact />
          <Route path="/admin-dashboard" component={DashboardScreen} exact />

          <Route
            path="/admin/countdown/create"
            component={CountdownCreateScreen}
            exact
          />
          <Route
            path="/admin/countdown/:id/edit"
            component={CountdownEditScreen}
            exact
          />
          <Route
            path="/admin/Predictions/create"
            component={PredictionCreateScreen}
            exact
          />
          <Route
            path="/admin/Prediction/:id/edit"
            component={PredictionEditScreen}
            exact
          />
          {/* <Route
            path="/search/:keyword"
            component={PredictionDetailScreen}
            exact
          /> */}
          <Route
            path="/predict/admin/predictionlist/:pageNumber"
            component={PredictionListScreen}
            exact
          />
          <Route
            path="/predict/admin/predictionlist"
            component={PredictionListScreen}
            exact
          />

          <Route
            path="/vip/admin/predictions/create"
            component={PredictionVipCreateScreen}
            exact
          />
          <Route
            path="/vip/admin/Prediction/:id/edit"
            component={PredictionVipEditScreen}
            exact
          />
          {/* <Route
            path="/search/:keyword"
            component={PredictionVipDetailScreen}
          /> */}
          <Route
            path="/vip/admin/predictionviplist/:pageNumber"
            component={PredictionVipListScreen}
            exact
          />
          <Route
            path="/vip/admin/predictionviplist"
            component={PredictionVipListScreen}
            exact
          />

          <Route
            path="/admin/userlist/:pageNumber"
            component={UserListScreen}
            exact
          />
          <Route path="/search/:keyword" component={UserListScreen} exact />
          <Route path="/page/:pageNumber" component={UserListScreen} exact />
          <Route
            path="/search/:keyword/page/:pageNumber"
            component={UserListScreen}
            exact
          />
          <Route path="/admin/userlist" component={UserListScreen} exact />
          <Route path="/admin/viplist" component={UserListVipScreen} exact />
          <Route
            path="/admin/notviplist"
            component={UserListNotVipScreen}
            exact
          />
          <Route
            path="/admin/notviplist/:pageNumber"
            component={UserListNotVipScreen}
            exact
          />
          {/* <Route path="/vip/search/:keyword" component={UserListVipScreen} exact />
          <Route
            path="/vip/search/:keyword/page/:pageNumber"
            component={UserListVipScreen}
            exact
          /> */}
          <Route
            path="/admin/tipsterlist"
            component={UserListTipsterScreen}
            exact
          />
          <Route
            path="/admin/adminlist"
            component={UserListAdminScreen}
            exact
          />
          <Route path="/admin/user/:id/edit" component={UserEditScreen} exact />

          <Route path="/prediction" component={HomeScreen} exact />

          <Route path="/about-us" component={AboutUsScreen} exact />
          <Route path="/refund-policy" component={RefundPolicyScreen} exact />
          <Route path="/disclaimer" component={DisclaimerScreen} exact />
          <Route path="/terms-and-condition" component={TandCScreen} exact />
          <Route path="/contact-us" component={ContactUsScreen} exact />

          <Route path="/" component={HomeScreen} exact />
          <Route component={PageNotFoundScreen} />
        </Switch>
      </main>

      <Footer />
    </Router>
  )
}

export default App
