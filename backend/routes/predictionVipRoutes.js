import express from 'express'
const router = express.Router()

import {
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
} from '../controller/predictionVipController.js'
import { protect, admin, tipster, vip } from '../middleware/authMiddleware.js'

router.route('/game').get(protect,vip,getPredictionsVip)
router.route('/admin/unicode/create').post(createPredictionVip)
router.route('/admin/predictions').get(getPredictionsKeyword)

router
  .route('/:id')
  .get(protect,  getPredictionVipById)
  .delete(protect, deletePredictionVip)
  .put( updatePredictionVip)
  .post(createVipFixture)

router.route('/:id/delete').delete(protect, deletePredictionVipFixture)
router.route('/:fix_id/fixture/delete').delete(deletePredictionVipSingleFixture)

export default router
