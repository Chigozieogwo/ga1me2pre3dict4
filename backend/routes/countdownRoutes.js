import express from 'express'
const router = express.Router()

import {
  createCountdown,
  getCountdowns,
  getCountdownById,
  updateCountdown,
  deleteCountdown,
} from '../controller/countdownController.js'
import { protect, admin, tipster } from '../middleware/authMiddleware.js'

router.route('/').get(getCountdowns)

router.route('/admin/count/create').post(protect, admin, createCountdown)

router
  .route('/:id')
  .get(protect, admin, getCountdownById)
  .delete(protect, admin, deleteCountdown)
  .put(protect, admin, updateCountdown)

export default router
