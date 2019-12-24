import mongoose from 'mongoose'
import express from 'express'
import session from 'express-session'
import Redis from 'ioredis'
import connectRedis from 'connect-redis'
import {
  APP_PORT,
  REDIS_OPTIONS,
  SESSION_OPTIONS,
  MONGO_URI,
  MONGO_OPTIONS
} from './config'

;(async () => {
  try {
    await mongoose.connect(MONGO_URI, MONGO_OPTIONS)
  
    const RedisStore = connectRedis(session)
    
    const client = new Redis(REDIS_OPTIONS)
  
    const app = express()
  
    app.use(
      session({
        store: new RedisStore({ client }),
        ...SESSION_OPTIONS
      })
    )
  
    app.get('/', (req, res) => {
      res.json({ message: 'Hey' })
    })
  
    app.listen(APP_PORT, () => console.log(`http://localhost:${APP_PORT}/`))
  } catch (err) {
    console.log(err)
  }
})()
