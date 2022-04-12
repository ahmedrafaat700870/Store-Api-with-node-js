import DB from '../database'
import Product from '../types/Product.type'
import sql from '../database/querys/Product.query'
class ProductStore {
  async Create(p: Product): Promise<Product> {
    try {
      const conn = await DB.connect()
      const res = await conn.query(sql.Create as string, [
        p._name,
        p.descount,
        p.brand,
        p.price,
        p.category,
      ])
      conn.release()
      return res.rows[0]
    } catch (error) {
      throw new Error(`${error}`)
    }
  }
  async GetOne(id: number): Promise<Product> {
    try {
      const conn = await DB.connect()
      const res = await conn.query(sql.GetOne as string, [id])
      conn.release()
      return res.rows[0]
    } catch (error) {
      throw new Error(`${error}`)
    }
  }
  async GetAll(): Promise<Product[]> {
    try {
      const conn = await DB.connect()
      const res = await conn.query(sql.GetAll as string)
      conn.release()
      return res.rows
    } catch (error) {
      throw new Error(`${error}`)
    }
  }
  async DelteOne(id: number): Promise<Product> {
    try {
      const conn = await DB.connect()
      const res = await conn.query(sql.DeleteOne as string, [id])
      conn.release()
      return res.rows[0]
    } catch (error) {
      throw new Error(`${error}`)
    }
  }
  async UpdateOne(p: Product): Promise<Product> {
    try {
      const conn = await DB.connect()
      const res = await conn.query(sql.UpdateOne as string, [
        p._name,
        p.descount,
        p.brand,
        p.price,
        p.category,
        p.id,
      ])
      conn.release()
      return res.rows[0]
    } catch (error) {
      throw new Error(`${error}`)
    }
  }
}
export default ProductStore
