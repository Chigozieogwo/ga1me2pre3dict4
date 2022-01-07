import express from 'express'
const router = express.Router()

import {
  getPredictions,
  getPredictionsTable,
  createPrediction,
  getPredictionsKeyword,
  getPredictionById,
  deletePrediction,
  updatePrediction,
  createFixture,
  deletePredictionFixture,
  deletePredictionSingleFixture,
} from '../controller/predictionController.js'
import { protect, admin, tipster } from '../middleware/authMiddleware.js'

router.route('/').get(getPredictions)
router.route('/predict').get(getPredictionsTable)
router.route('/admin/unicode/create').post(protect, tipster, createPrediction)
router.route('/admin/predictions').get(getPredictionsKeyword)

router
  .route('/:id')
  .get(protect, tipster, getPredictionById)
  .delete(protect, tipster, deletePrediction)
  .put(protect, tipster, updatePrediction)
  .post(createFixture)

router.route('/:id/delete').delete(deletePredictionFixture)
router.route('/:fix_id/fixture/delete').delete(deletePredictionSingleFixture)

export default router
