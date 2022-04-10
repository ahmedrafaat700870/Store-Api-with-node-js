import dotenv from 'dotenv'
dotenv.config()
const {
  PORT,
  PGHOST,
  PGUSER,
  PGDATABASE,
  PGDATABASE_TEST,
  PGPASSWORD,
  PGPORT,
  bycript_Password,
  salt_Rounds,
  Tocken_Secret,
} = process.env
export default {
  PORT,
  PGHOST,
  PGUSER,
  PGDATABASE,
  PGDATABASE_TEST,
  PGPASSWORD,
  PGPORT,
  bycript_Password,
  salt_Rounds,
  Tocken_Secret,
}
