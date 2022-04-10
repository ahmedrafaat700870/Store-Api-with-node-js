import { Pool } from 'pg'
import config from '../config'
const DB = new Pool({
  port: parseInt(config.PGPORT as string, 10),
  host: config.PGHOST,
  database: config.PGDATABASE_TEST,
  password: config.PGPASSWORD,
  user: config.PGUSER,
})
DB.on('error', (err) => {
  throw new Error(`${err}`)
})
export default DB
