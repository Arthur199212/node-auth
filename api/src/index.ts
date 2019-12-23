import express from 'express'
import session from 'express-session'
import Redis from 'ioredis'
import connectRedis from 'connect-redis'
import { APP_PORT } from './config'

const app = express()

const RedisStore = connectRedis(session)
const client = new Redis()

app.use(
  session({
    store: new RedisStore({ client }),
    secret: 'keyboard cat',
    resave: false,
  })
)

app.get('/', (req, res) => {
  res.json({ message: 'Hey' })
})

app.listen(APP_PORT, () => console.log(`http://localhost:${APP_PORT}/`))
