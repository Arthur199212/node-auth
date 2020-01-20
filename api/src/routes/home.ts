import { Router } from 'express'
import { User } from '../models'
import { auth, catchAsync } from '../middleware'

const router = Router()

router.get('/home', auth, catchAsync(async (req, res) => {
  const { userId } = req.session!

  const user = await User.findById(userId)

  res.json(user)
}))

export default router
