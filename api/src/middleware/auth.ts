import { Request, Response, NextFunction } from 'express'
import { isLoggedIn } from '../auth'

export const guest = (req: Request, res: Response, next: NextFunction) => {
  if (isLoggedIn(req)) {
    console.log('HEY!')
    return next(new Error('You are already logged in'))
  }

  next()
}
