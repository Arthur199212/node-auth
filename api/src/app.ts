import express from 'express'
import session, { Store } from 'express-session'
import { SESSION_OPTIONS } from './config'
import { register } from './routes'

export const createApp = (store: Store) => {
  const app = express()

  app.use(express.json())

  app.use(
    session({
      store,
      ...SESSION_OPTIONS
    })
  )

  app.use(register)

  return app
}
