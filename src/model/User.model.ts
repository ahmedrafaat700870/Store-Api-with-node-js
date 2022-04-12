import User from '../types/user.type'
import Product from '../types/Product.type'
import DB from '../database'
import bcrypt from 'bcrypt'
import config from '../config'
import sql from '../database/querys/User.query'
const salt = parseInt(config.salt_Rounds as string, 10)
const hashPassword = (password: string) =>
  bcrypt.hashSync(password + config.bycript_Password, salt)
export class UserStore {
  async Create(u: User): Promise<User> {
    try {
      const con = await DB.connect()
      const values = [
        u._name,
        u._first_name,
        u._last_name,
        u._gmail,
        hashPassword(u._password as string),
      ]
      const res = await con.query(sql.Create, values)
      con.release()
      return res.rows[0]
    } catch (err) {
      throw new Error(`${err}`)
    }
  }
  async GetAll(): Promise<User[]> {
    try {
      const conn = await DB.connect()
      const RES = await conn.query(sql.GetAll)
      conn.release()
      return RES.rows
    } catch (error) {
      throw new Error(`${error}`)
    }
  }
  async GetOne(id: number): Promise<User> {
    try {
      const conn = await DB.connect()
      const RES = await conn.query(sql.GetOne, [id])
      conn.release()
      return RES.rows[0]
    } catch (error) {
      throw new Error(`${error}`)
    }
  }
  async UpdateOne(u: User): Promise<User> {
    try {
      const conn = await DB.connect()
      const RES = await conn.query(sql.UpdateOne, [
        u._name,
        u._first_name,
        u._last_name,
        u._gmail,
        u._password,
        u._id,
      ])
      conn.release()
      return RES.rows[0]
    } catch (error) {
      throw new Error(`${error}`)
    }
  }
  async DeleteOne(id: number): Promise<User> {
    try {
      const conn = await DB.connect()
      const RES = await conn.query(sql.DeleteOne, [id])
      conn.release()
      return RES.rows[0]
    } catch (error) {
      throw new Error(`${error}`)
    }
  }
  async authanticate(password: string, gmail: string): Promise<User | null> {
    try {
      const conn = await DB.connect()
      const sql = 'SELECT _password FROM _user WHERE _gmail=$1'
      const RES = await conn.query(sql, [gmail])

      if (RES.rows.length) {
        const { _password } = RES.rows[0]
        const isvalidate = bcrypt.compareSync(
          password + config.bycript_Password,
          _password
        )
        if (isvalidate) {
          const sql = 'SELECT * FROM _user WHERE _gmail = ($1)'
          const data = await conn.query(sql, [gmail])
          const user: User = data.rows[0]
          return user
        }
      }
      conn.release()
      return null
    } catch (error) {
      throw new Error(`${error}`)
    }
  }
  async GetOrderByUserId(User_id: number): Promise<User> {
    try {
      const conn = await DB.connect()
      const res = await conn.query(sql.Where.TowTables, [User_id])
      conn.release()
      return res.rows[0]
    } catch (error) {
      throw new Error(`${error}`)
    }
  }
  async GetProductByUserId(User_id: number): Promise<Product> {
    try {
      const conn = await DB.connect()
      const res = await conn.query(sql.Where.ThreeTables, [User_id])
      conn.release()
      return res.rows[0]
    } catch (error) {
      throw new Error(`${error}`)
    }
  }
}
export default UserStore
