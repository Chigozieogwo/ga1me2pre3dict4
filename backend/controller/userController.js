import asyncHandler from 'express-async-handler'
import sendEmail, { sendEmailRegister } from './sendEmail.js'
import generateToken from '../utils/generateToken.js'
import User from '../model/userModel.js'
import nodemailer from 'nodemailer'

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      isTipster: user.isTipster,
      isVip: user.isVip,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    name,
    email,
    password,
  })
  sendEmailRegister(email, name)
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      isTipster: user.isTipster,
      isVip: user.isVip,
      token: generateToken(user._id),
      paymentHistory: user.paymentHistory,
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      isTipster: user.isTipster,
      isVip: user.isVip,
      paymentHistory: user.paymentHistory,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const sendEmailExpire = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)
  console.log(user + '+++++++')

  if (user.isVip) {
    sendEmail(user.email, user.name)
  }
})

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    user.isVip = req.body.isVip
    if (req.body.password) {
      user.password = req.body.password
    }
    const updatedUser = await user.save()

    // if (user.isVip ) {
    //   sendEmail(user.email, user.name)
    // }

    if (!user.isVip && user.paymentHistory.length === 0) {
      // sendEmail2(user.email, user.name)
      console.log('please do subscribe')
      // res.render('Subscribe', { msg: 'Please do Subscribe' })
      // res.json({ msg: 'please do subscribe' })
    }
    if (!user.isVip && user.paymentHistory[0]) {
      sendEmail(user.email, user.name)
    }

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      isTipster: updatedUser.isTipster,
      isVip: updatedUser.isVip,
      token: generateToken(updatedUser._id),
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers1 = asyncHandler(async (req, res) => {
  const users = await User.find({})
  res.json(users)
})

// @desc    Get all tracks
// @route   GET /api/tracks
// @access  Private/Admin

const getUsers = asyncHandler(async (req, res) => {
  const pageSize = 50
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword
    ? {
        email: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

  const count = await User.countDocuments()
  const users = await User.find({ ...keyword })
    .limit(pageSize)
    .sort('-createdAt')
    .skip(pageSize * (page - 1))
  // users.map(user => sendEmail(user.email,user.name))
  res.json({ count, users, page, pages: Math.ceil(count / pageSize) })
})

// @desc    Get all tracks
// @route   GET /api/tracks
// @access  Private/Admin

const getUsersVip = asyncHandler(async (req, res) => {
  const pageSize = 50
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

  const users = await User.find({ isVip: true })
    .limit(pageSize)
    .sort('-createdAt')
    .skip(pageSize * (page - 1))

  // const count = await User.countDocuments()
  const count = users.length

  res.json({ count, users, page, pages: Math.ceil(count / pageSize) })
})

// @desc    Get all tracks
// @route   GET /api/tracks
// @access  Private/Admin

const getUsersNotVip = asyncHandler(async (req, res) => {
  const pageSize = 50
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

  // const count = await User.countDocuments()
  const users = await User.find({ isVip: false })
    .limit(pageSize)
    .sort('-createdAt')
    .skip(pageSize * (page - 1))
  const count = users.length
  res.json({ count, users, page, pages: Math.ceil(count / pageSize) })
})
// @desc    Get all tracks
// @route   GET /api/tracks
// @access  Private/Admin

const getUsersTipster = asyncHandler(async (req, res) => {
  const pageSize = 50
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

  const count = await User.countDocuments()
  const users = await User.find({ isTipster: true })
    .limit(pageSize)
    .sort('-createdAt')
    .skip(pageSize * (page - 1))

  res.json({ users, page, pages: Math.ceil(count / pageSize) })
})
// @desc    Get all tracks
// @route   GET /api/tracks
// @access  Private/Admin

const getUsersAdmin = asyncHandler(async (req, res) => {
  const pageSize = 50
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

  const count = await User.countDocuments()
  const users = await User.find({ isAdmin: true })
    .limit(pageSize)
    .sort('-createdAt')
    .skip(pageSize * (page - 1))

  res.json({ users, page, pages: Math.ceil(count / pageSize) })
})

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    await user.remove()
    res.json({ message: 'User removed' })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password')

  if (user) {
    res.json(user)
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    user.isAdmin = req.body.isAdmin
    user.isTipster = req.body.isTipster
    user.isVip = req.body.isVip

    const updatedUser = await user.save()
    if (updatedUser.isVip) {
      sendEmail(updatedUser.email, updatedUser.name)
    }
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      isTipster: updatedUser.isTipster,
      isVip: updatedUser.isVip,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

const createpaymentHistory = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  const newPaymentHistory = {
    amountPayment: req.body.amountPayment,
    statusPayment: req.body.statusPayment,
    commentPayment: req.body.commentPayment,
  }

  if (req.body.amountPayment !== null) {
    user.paymentHistory.unshift(newPaymentHistory)
    console.log(newPaymentHistory)
    console.log(newPaymentHistory + 'the game over')
    user.save().then((user) => res.json(user))
  } else {
    res.json({ msg: 'Amount Needed' })
  }
})

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deletePlan = asyncHandler(async (req, res) => {
  // const user = await User.findById(req.params.id)

  // if (user) {
  //   const plan = await User.paymentHistory.findById(req.params.id)
  //   console.log(plan)
  //   await plan.remove()
  //   res.json({ message: 'Payment History removed', plan })
  // } else {
  //   res.status(404)
  //   throw new Error('Plan not found')
  // }

  const plan_id = req.params.plan_id
  const user_id = req.params.user_id
  const plan = await User.findById(plan_id)
  plan.paymentHistory.remove({ user: user_id })
  await plan.save()
  User.findById(plan_id)
    .then((result) => {
      res.json(result.paymentHistory)
    })
    .catch((error) => {
      res.status(501).json({ error })
    })
})

const sendMail = asyncHandler(async (req, res) => {
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Company: ${req.body.company}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    // host: 'mail.google.com',
    // port: 587,
    // secure: false, // true for 465, false for other ports
    service: 'gmail',
    auth: {
      user: 'janehiggins42@gmail.com', // generated ethereal user
      pass: 'mantex123', // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  })

  // setup email data with unicode symbols
  let mailOptions = {
    to: '"Nodemailer Contact" <janehiggins42@gmail.com>', // sender address
    from: req.body.email, // list of receivers
    subject: 'Enquiry', // Subject line
    // text: 'please renew your subscription', // plain text body
    html: output, // html body
  }

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error)
    }
    console.log('Message sent: %s', info.messageId)
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))

    res.render('contact', { msg: 'Email has been sent' })
  })
})

export {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUsersTipster,
  getUsersAdmin,
  getUsersVip,
  getUsersNotVip,
  deleteUser,
  getUserById,
  updateUser,
  createpaymentHistory,
  deletePlan,
  sendMail,
  sendEmailExpire,
}
