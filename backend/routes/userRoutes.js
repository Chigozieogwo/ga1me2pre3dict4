import express from 'express'
const router = express.Router()
import {
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
} from '../controller/userController.js'
import { protect, admin, tipster } from '../middleware/authMiddleware.js'

router.route('/register').post(registerUser)
// remember to add get users protect ,admin
router.route('/').get(protect,admin,getUsers)
// router.route('/send').post(sendMail)
router.route('/tipster').get(protect, tipster, getUsersTipster)
router.route('/admin').get(protect, admin, getUsersAdmin)
router.route('/vip').get(protect, admin,getUsersVip)
router.route('/notvip').get(protect, admin, getUsersNotVip)

router.post('/login', authUser)

router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)
  .post(sendEmailExpire)
router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser)
  .post(createpaymentHistory)

router.route('/:user_id/:plan_id/plan').delete(deletePlan)

export default router
