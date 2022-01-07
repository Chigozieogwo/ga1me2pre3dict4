import asyncHandler from 'express-async-handler'
import PredictionVip from '../model/predictionVipModel.js'

// @desc    Create a track
// @route   POST /api/predictions
// @access  Private/Admin
const createPredictionVip = asyncHandler(async (req, res) => {
  const { title } = req.body

  const predictionVip = new PredictionVip({
    title,
  })
  const createdPredictionVip = await predictionVip.save()

  res.status(201).json(createdPredictionVip)
})

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getPredictionsVip1 = asyncHandler(async (req, res) => {
  const predictionsVip = await PredictionVip.find({})
  res.json(predictionsVip)
})

// @desc    Get all predictions
// @route   GET /api/predictions
// @access  Private/Admin

const getPredictionsVip = asyncHandler(async (req, res) => {
  const pageSize = 25
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

  const count = await PredictionVip.countDocuments()
  const predictionsVip = await PredictionVip.find()
    .limit(pageSize)
    .sort('-createdAt')
    .skip(pageSize * (page - 1))

  res.json({ predictionsVip, page, pages: Math.ceil(count / pageSize) })
})
// // @desc    Get all tracks
// // @route   GET /api/tracks
// // @access  Private/Admin

const getPredictionsKeyword = asyncHandler(async (req, res) => {
  // const searchField = req.query.trackNumber
  // // Track.find({ trackNumber: { $regex: searchField, $options: '$i' } }).then(
  // //   (data) => {
  // //     res.send(data)
  // //   }
  // // )
  // const track = await Track.find({ trackNumber: searchField })
  // if (track.length === 0) {
  //   res.status(404).json({ msg: 'Track not Found' })
  // } else {
  //   res.json(track)
  // }
})

// @desc    Fetch single track record
// @route   GET /api/tracks/:track-number
// @access  Public
// const getTracks1 = asyncHandler(async (req, res) => {
//   const track = await Track.find().sort('-createdAt')

//   if (track) {
//     res.json(track)
//   } else {
//     res.status(404)
//     throw new Error('Track Records not found')
//   }
// })
// @desc    Fetch single track record
// @route   GET /api/tracks/:track-number
// @access  Public
const getPredictionByNumber = asyncHandler(async (req, res) => {
  // const track = await Prediction.findOne({ trackNumber: req.body.trackNumber })
  // if (track) {
  //   res.json(track)
  // } else {
  //   res.status(404)
  //   throw new Error('Track Number Record not found')
  // }
})

// @desc    Fetch single Track Record
// @route   GET /api/tracks/:id
// @access  Public
const getPredictionVipById = asyncHandler(async (req, res) => {
  const predictionVip = await PredictionVip.findById(req.params.id)

  if (predictionVip) {
    res.json(predictionVip)
  } else {
    res.status(404)
    throw new Error(' Vip Prediction  Record not found')
  }
})

const createVipFixture = asyncHandler(async (req, res) => {
  const predictionVip = await PredictionVip.findById(req.params.id)

  const newVipFixture = {
    league: req.body.league,
    home: req.body.home,
    away: req.body.away,
    tipsOdds: req.body.tipsOdds,
    result: req.body.result,
  }

  if (req.body.away !== '') {
    predictionVip.fixture.unshift(newVipFixture)
    predictionVip.save().then((predictionVip) => res.json(predictionVip))
  } else {
    res.json(predictionVip)
  }
})

// @desc    Update a Track Record
// @route   PUT /api/tracks/:id
// @access  Private/Admin
const updatePredictionVip = asyncHandler(async (req, res) => {
  const { title, isPublished } = req.body

  const predictionVip = await PredictionVip.findById(req.params.id)

  if (predictionVip) {
    predictionVip.title = title
    predictionVip.isPublished = isPublished

    const updatedPredictionVip = await predictionVip.save()
    res.json(updatedPredictionVip)
  } else {
    res.status(404)
    throw new Error('Vip Prediction Record not found')
  }
})

// @desc    Delete a delete
// @route   DELETE /api/tracks/:id
// @access  Private/Admin
const deletePredictionVip = asyncHandler(async (req, res) => {
  const predictionVip = await PredictionVip.findById(req.params.id)

  if (predictionVip) {
    await predictionVip.remove()
    res.json({ message: ' Vip Prediction Record removed' })
  } else {
    res.status(404)
    throw new Error('Vip Prediction not found')
  }
})

// @desc    Delete a delete
// @route   DELETE /api/tracks/:id
// @access  Private/Admin
const deletePredictionVipFixture = asyncHandler(async (req, res) => {
  PredictionVip.updateOne(
    { _id: req.params.id },
    { $set: { fixture: [] } },
    function (err) {
      if (err) {
        res.status(404)
        throw new Error('Fixture not found')
      } else {
        res.json({ message: 'Fixture Record removed' })
      }
    }
  )

  // if (prediction) {
  //   await prediction.fixture.remove()
  //   res.json({ prediction, message: 'Fixture Record removed' })
  //   console.log(prediction)
  // } else {
  //   res.status(404)
  //   throw new Error('Fixture not found')
  // }
})
// @desc    Delete a delete
// @route   DELETE /api/tracks/:id
// @access  Private/Admin
const deletePredictionVipSingleFixture = asyncHandler(async (req, res) => {
  // const fix_id = req.params.fix_id
  const predictionVip = await PredictionVip.findById(req.predictionVip.id)
  //   { _id: req.prediction.id },
  //   { $pull: { fixture: { _id: req.params.fix_id } } },
  //   { new: true }
  // )
  //   .then((fixture) => console.log(fixture))
  //   .catch((err) => console.log(err))
  console.log(predictionVip + 'dee')

  // if (prediction) {
  //   const fixture = Prediction.fixture.findById(req.params.id)
  //   console.log(fixture)
  // }
  // if (prediction) {
  var index = predictionVip.indexOf(predictionVip.fixture._id)
  //   const index = prediction.fixture
  //     .map((fixture = fixture._id))
  //     .indexOf(fixture._id)
  const fixture = predictionVip.fixture.slice(index, 1)
  predictionVip.save().then((predictionVip) => res.json(predictionVip))
  console.log(predictionVip)
  //   console.log(index)
  // } else {
  //   res.status(404)
  //   throw new Error('Fixture not found')
  // }
})

export {
  createPredictionVip,
  getPredictionsVip,
  deletePredictionVipFixture,
  deletePredictionVipSingleFixture,
  getPredictionsKeyword,
  getPredictionVipById,
  getPredictionByNumber,
  updatePredictionVip,
  deletePredictionVip,
  createVipFixture,
}
