import express, { Application } from 'express'
// My middleWare
import morgan from 'morgan'
import RateLimit from './middleware/config.rateLimit'
import helmet from 'helmet'
// My routes
import route from './routes'
// My configration
import config from './config'
// hendling Errors
import HendleError from './middleware/HendleError.middleware'
// hendle notfound page
import Not_Found from './middleware/LastMeddile'
const app: Application = express()
app.use(express.json())
app.use(morgan('common'))
app.use(RateLimit)
app.use(helmet())
app.use(route)
app.use(HendleError)
app.use(Not_Found)
const PORT: number = parseInt(config.PORT as string, 10)

app.listen(PORT, () =>
  // eslint-disable-next-line no-console
  console.log('SERVER IS RUNING..')
)
export default app
