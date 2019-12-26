import { Router } from 'express'
import { registerSchema } from '../validation'
import { User } from '../models'
import { logIn } from '../auth'
import { guest } from '../middleware'

const router = Router()

router.post('/register', guest, async (req, res) => {
  try {
    await registerSchema.validateAsync(req.body, { abortEarly: false })
  
    const { email, name, password } = req.body
  
    const found = await User.exists({ email })
  
    if (found) throw new Error('Invalid email')
  
    const user = await User.create({
      email, name, password
    })
  
    logIn(req, user.id)

    res.json({ message: 'Ok' })
  } catch ({ message }) {
    res.json({ message })
  }
})

export default router
