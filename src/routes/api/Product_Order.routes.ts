import * as controller from '../../controller/Product_Order.controller'
import authanticateUser from '../../middleware/authanticate.middleware'
import { Router } from 'express'
const ProductOrderRoutes = Router()
ProductOrderRoutes.get('/getOne/:id', authanticateUser, controller.GetOne)
  .get('/GetOrders', authanticateUser, controller.GetAll)
  .post('/CreateOrder', authanticateUser, controller.CreateOne)
  .patch('/UpdateOrder', authanticateUser, controller.Update)
  .delete('/DeleteOrder', authanticateUser, controller.Delete)
export default ProductOrderRoutes
