import * as controlller from '../../controller/Order.controller'
import { Router } from 'express'
const OrderRoutes = Router()
import authanticateUser from '../../middleware/authanticate.middleware'
OrderRoutes.get('/GetOne/:id', authanticateUser, controlller.GetOne)
  .get('/GetAll', authanticateUser, controlller.GetAll)
  .post('/create', authanticateUser, controlller.CreateOne)
  .patch('/updateOne', authanticateUser, controlller.UpdateOne)
  .delete('/deleteOne', authanticateUser, controlller.DeleteOne)

export default OrderRoutes
