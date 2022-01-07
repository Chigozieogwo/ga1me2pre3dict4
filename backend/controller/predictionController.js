import asyncHandler from 'express-async-handler'
import Prediction from '../model/predictionModel.js'

// @desc    Create a track
// @route   POST /api/predictions
// @access  Private/Admin
const createPrediction = asyncHandler(async (req, res) => {
  const { title } = req.body

  const prediction = new Prediction({
    title,
  })

  const createdPrediction = await prediction.save()

  res.status(201).json(createdPrediction)
})

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getPredictions = asyncHandler(async (req, res) => {
  const predictions = await Prediction.find().sort('-createdAt')
  res.json(predictions)
})
// @desc    Get all predictions
// @route   GET /api/predictions
// @access  Private/Admin

const getPredictionst = asyncHandler(async (req, res) => {
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

  const count = await Prediction.countDocuments()
  const predictions = await Prediction.find()
    .limit(pageSize)
    .sort('-createdAt')
    .skip(pageSize * (page - 1))

  res.json({ predictions, page, pages: Math.ceil(count / pageSize) })
})
const getPredictionsTable = asyncHandler(async (req, res) => {
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

  const count = await Prediction.countDocuments()
  const predictions = await Prediction.find()
    .limit(pageSize)
    .sort('-createdAt')
    .skip(pageSize * (page - 1))

  res.json({ predictions, page, pages: Math.ceil(count / pageSize) })
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
const getPredictionById = asyncHandler(async (req, res) => {
  const prediction = await Prediction.findById(req.params.id)

  if (prediction) {
    res.json(prediction)
  } else {
    res.status(404)
    throw new Error('Prediction Record not found')
  }
})

const createFixture = asyncHandler(async (req, res) => {
  const prediction = await Prediction.findById(req.params.id)

  const newFixture = {
    league: req.body.league,
    home: req.body.home,
    away: req.body.away,
    tipsOdds: req.body.tipsOdds,
    result: req.body.result,
  }

  if (req.body.away !== '') {
    prediction.fixture.unshift(newFixture)
    prediction.save().then((prediction) => res.json(prediction))
  } else {
    res.json(prediction)
  }
})

// @desc    Update a Track Record
// @route   PUT /api/tracks/:id
// @access  Private/Admin
const updatePrediction = asyncHandler(async (req, res) => {
  const { title, isPublished } = req.body

  const prediction = await Prediction.findById(req.params.id)

  if (prediction) {
    prediction.title = title
    prediction.isPublished = isPublished

    const updatedPrediction = await prediction.save()
    res.json(updatedPrediction)
  } else {
    res.status(404)
    throw new Error('Prediction Record not found')
  }
})

// @desc    Delete a delete
// @route   DELETE /api/tracks/:id
// @access  Private/Admin
const deletePrediction = asyncHandler(async (req, res) => {
  const prediction = await Prediction.findById(req.params.id)

  if (prediction) {
    await prediction.remove()
    res.json({ message: 'Prediction Record removed' })
  } else {
    res.status(404)
    throw new Error('Prediction not found')
  }
})

// @desc    Delete a delete
// @route   DELETE /api/tracks/:id
// @access  Private/Admin
const deletePredictionFixture = asyncHandler(async (req, res) => {
  Prediction.updateOne(
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
const deletePredictionSingleFixture = asyncHandler(async (req, res) => {
  // const fix_id = req.params.fix_id
  const prediction = await Prediction.findById(req.prediction.id)
  //   { _id: req.prediction.id },
  //   { $pull: { fixture: { _id: req.params.fix_id } } },
  //   { new: true }
  // )
  //   .then((fixture) => console.log(fixture))
  //   .catch((err) => console.log(err))
  console.log(prediction + 'dee')

  // if (prediction) {
  //   const fixture = Prediction.fixture.findById(req.params.id)
  //   console.log(fixture)
  // }
  // if (prediction) {
  var index = prediction.indexOf(prediction.fixture._id)
  //   const index = prediction.fixture
  //     .map((fixture = fixture._id))
  //     .indexOf(fixture._id)
  const fixture = prediction.fixture.slice(index, 1)
  prediction.save().then((prediction) => res.json(prediction))
  console.log(prediction)
  //   console.log(index)
  // } else {
  //   res.status(404)
  //   throw new Error('Fixture not found')
  // }
})

export {
  createPrediction,
  getPredictions,
  getPredictionsTable,
  deletePredictionFixture,
  deletePredictionSingleFixture,
  getPredictionsKeyword,
  getPredictionById,
  getPredictionByNumber,
  updatePrediction,
  deletePrediction,
  createFixture,
}
