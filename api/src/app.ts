import express from 'express'
import session, { Store } from 'express-session'
import { SESSION_OPTIONS } from './config'
import { home, login, register } from './routes'
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

  app.disable('x-powered-by')

  app.use(home)

  app.use(login)

  app.use(register)

  app.use(notFound)

  app.use(serverError)

  return app
}
