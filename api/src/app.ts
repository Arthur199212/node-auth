import express from 'express'
import session, { Store } from 'express-session'
import { SESSION_OPTIONS } from './config'
import { register, login } from './routes'
import { serverError, notFound } from './middleware'

export const createApp = (store: Store) => {
  const app = express()

  app.use(express.json())

  app.use(
    session({
      store,
      ...SESSION_OPTIONS
    })
  )

  app.use(login)

  app.use(register)

  app.use(notFound)

  app.use(serverError)

  return app
}
