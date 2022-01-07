import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../model/userModel.js'

const protect = asyncHandler(async (req, res, next) => {
  let token
  // console.log(req.headers.authorization + 'Zmmmmmmmmmmmmmnnnnnnnnn')
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]

      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // console.log(decoded + 'Ymmmmmmmmmmmmmnnnnnnnnn')
      req.user = await User.findById(decoded.id).select('-password')
      // console.log(req.user + 'pmmmmmmmmmmmmmnnnnnnnnn')
      next()
    } catch (error) {
      console.error(error)
      res.status(401)
      throw new Error('Not authorized, token failed')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next()
  } else {
    res.status(401)
    throw new Error('Not authorized as an admin')
  }
}

const tipster = (req, res, next) => {
  if (req.user && req.user.isTipster) {
    next()
  } else {
    res.status(401)
    throw new Error('Not authorized as a Tipster')
  }
}


const vip = (req, res, next) => {
  if (req.user && req.user.isVip) {
    next()
  } else {
    res.status(401)
    throw new Error('Not authorized as a Vip')
  }
}

export { protect, admin, tipster ,vip }
