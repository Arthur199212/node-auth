import { Request, Response, NextFunction } from 'express'
import { isLoggedIn } from '../auth'
import { BadRequest, Unautherized } from '../errors'

export const guest = (req: Request, res: Response, next: NextFunction) => {
  if (isLoggedIn(req)) {
    return next(new BadRequest('You are already logged in'))
  }

  next()
}

export const auth = (req: Request, res: Response, next: NextFunction) => {
  if (!isLoggedIn(req)) {
    return next(new Unautherized('You must be logged in'))
  }

  next()
}
