import DB from '../database'
import Product_Order from '../types/Prodcut_Order.tyes'
import sql from '../database/querys/Order_Product.Query'
class Prodcut_Order_Store {
  async Create(o: Product_Order): Promise<Product_Order> {
    try {
      const conn = await DB.connect()
      const res = await conn.query(sql.InsertOrder, [o.Order, o.Product])
      conn.release()
      return res.rows[0]
    } catch (error) {
      throw new Error(`${error}`)
    }
  }
  async GetOrder(id: number): Promise<Product_Order> {
    try {
      const conn = await DB.connect()
      const res = await conn.query(sql.GetOrderByOrderId, [id])
      conn.release()
      return res.rows[0]
    } catch (error) {
      throw new Error(`${error}`)
    }
  }
  async GetAllOrders(): Promise<Product_Order[]> {
    try {
      const conn = await DB.connect()
      const res = await conn.query(sql.GetAllOrders)
      conn.release()
      return res.rows
    } catch (error) {
      throw new Error(`${error}`)
    }
  }
  async Delete(id: number): Promise<Product_Order> {
    try {
      const conn = await DB.connect()
      const res = await conn.query(sql.DeleteOrderByOrderId, [id])
      conn.release()
      return res.rows[0]
    } catch (error) {
      throw new Error(`${error}`)
    }
  }
  async Update(o: Product_Order): Promise<Product_Order> {
    try {
      const conn = await DB.connect()
      const res = await conn.query(sql.UpdateOrderByOrderId, [
        o.Product,
        o.Order,
      ])
      conn.release()
      return res.rows[0]
    } catch (error) {
      throw new Error(`${error}`)
    }
  }
}
export default Prodcut_Order_Store
