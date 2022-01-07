import asyncHandler from 'express-async-handler'
import Countdown from '../model/countdownModel.js'

const createCountdown = asyncHandler(async (req, res) => {
    const { amountOfDays,statusDisplay,toDisplay } = req.body
  
    const countdown = new Countdown({
        amountOfDays,statusDisplay,toDisplay
    })
  
    const createdCountdown = await countdown.save()
  
    res.status(201).json(createdCountdown)
  })


// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getCountdowns = asyncHandler(async (req, res) => {
    const countdowns = await Countdown.find().sort('-createdAt')
    res.json({countdowns})
  })


  // @desc    Fetch single Track Record
// @route   GET /api/tracks/:id
// @access  Public
  const getCountdownById = asyncHandler(async (req, res) => {
    const countdown = await Countdown.findById(req.params.id)
  
    if (countdown) {
      res.json(countdown)
    } else {
      res.status(404)
      throw new Error('Countdown Record not found')
    }
  })


  // @desc    Update a Track Record
// @route   PUT /api/tracks/:id
// @access  Private/Admin
const updateCountdown = asyncHandler(async (req, res) => {
    const { amountOfDays,statusDisplay,toDisplay } = req.body
  
    const countdown = await Countdown.findById(req.params.id)
  
    if (countdown) {
      countdown.amountOfDays = amountOfDays
      countdown.toDisplay = toDisplay
      countdown.statusDisplay = statusDisplay
  
      const updatedCountdown = await countdown.save()
      res.json(updatedCountdown)
    } else {
      res.status(404)
      throw new Error('Countdown Record not found')
    }
  })

// @desc    Delete a delete
// @route   DELETE /api/tracks/:id
// @access  Private/Admin
const deleteCountdown = asyncHandler(async (req, res) => {
    const countdown = await Countdown.findById(req.params.id)
  
    if (countdown) {
      await countdown.remove()
      res.json({ message: 'Countdown Record removed' })
    } else {
      res.status(404)
      throw new Error('Countdown not found')
    }
  })



  export {
    createCountdown,
    getCountdowns,
   
    getCountdownById,
    
    updateCountdown,
    deleteCountdown,
}