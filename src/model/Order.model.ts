import DB from '../database'
import Order from '../types/Order.type'
import sql from '../database/querys/Order.qyery'
class OrderStore {
  async GetOne(id: number): Promise<Order> {
    try {
      const conn = await DB.connect()
      const res = await conn.query(sql.GetOne, [id])
      conn.release()
      return res.rows[0]
    } catch (error) {
      throw new Error(`${error}`)
    }
  }
  async GetALLProduct(): Promise<Order[]> {
    try {
      const conn = await DB.connect()
      const res = await conn.query(sql.GetAll)
      conn.release()
      return res.rows
    } catch (error) {
      throw new Error(`${error}`)
    }
  }
  async Create(o: Order): Promise<Order> {
    try {
      const conn = await DB.connect()
      const res = await conn.query(sql.Create, [
        o.user_id,
        o._status,
        o.quantity,
      ])
      conn.release()
      return res.rows[0]
    } catch (error) {
      throw new Error(`${error}`)
    }
  }
  async UpdateOne(o: Order): Promise<Order> {
    try {
      const conn = await DB.connect()
      const res = await conn.query(sql.UpdateOne, [o._status, o.quantity, o.id])
      conn.release()
      return res.rows[0]
    } catch (error) {
      throw new Error(`${error}`)
    }
  }
  async DeleteOne(id: number): Promise<Order> {
    try {
      const conn = await DB.connect()
      const res = await conn.query(sql.DeleteOne, [id])
      conn.release()
      return res.rows[0]
    } catch (error) {
      throw new Error(`${error}`)
    }
  }
}
export default OrderStore
