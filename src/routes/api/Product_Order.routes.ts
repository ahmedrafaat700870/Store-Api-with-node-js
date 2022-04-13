import * as controller from '../../controller/Product_Order.controller'
import { Router } from 'express'
const ProductOrderRoutes = Router()
ProductOrderRoutes.get('/getOne/:id', controller.GetOne)
  .get('/GetOrders', controller.GetAll)
  .get('/GetOrder', controller.GetAll)
  .post('/CreateOrder', controller.CreateOne)
  .patch('/UpdateOrder', controller.Update)
  .delete('/DeleteOrder', controller.Delete)
export default ProductOrderRoutes
