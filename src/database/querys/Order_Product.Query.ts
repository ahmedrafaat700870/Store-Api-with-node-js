import Order_Product from '../../interface/Order_Product.interface'
const sql: Order_Product = {
  InsertOrder:
    'INSERT INTO Porduct_Order (Oreder ,Product) VALUES ($1,$2) RETURNING *',
  GetAllOrders: 'SELECT Oreder ,Product FROM  porduct_order',
  GetOrderByOrderId: 'SELECT * FROM Porduct_Order WHERE Oreder = $1 ',
  UpdateOrderByOrderId:
    'UPDATE Porduct_Order SET Product =$1 WHERE Oreder = $2 RETURNING *',
  DeleteOrderByOrderId:
    'DELETE FROM Porduct_Order WHERE Oreder = $1 RETURNING *',
}
export default sql
