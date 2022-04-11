import { Pool } from 'pg'
import config from '../config'
let DATABASE: string
if (config.NODE_ENV == 'test') {
  DATABASE = config.PGDATABASE_TEST as unknown as string
} else {
  DATABASE = config.PGDATABASE as unknown as string
}
const DB = new Pool({
  port: parseInt(config.PGPORT as string, 10),
  host: config.PGHOST,
  database: DATABASE,
  password: config.PGPASSWORD,
  user: config.PGUSER,
})
DB.on('error', (err) => {
  throw new Error(`${err}`)
})
export default DB
