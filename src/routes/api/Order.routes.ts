import * as controlller from '../../controller/Order.controller'
import { Router } from 'express'
const OrderRoutes = Router()
OrderRoutes.get('/GetOne/:id', controlller.GetOne)
  .get('/GetAll', controlller.GetAll)
  .post('/create', controlller.CreateOne)
  .patch('/updateOne', controlller.UpdateOne)
  .delete('/deleteOne', controlller.DeleteOne)

export default OrderRoutes
