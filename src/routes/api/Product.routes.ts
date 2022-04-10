import * as controller from '../../controller/Product.controller'
import authanticateUser from '../../middleware/authanticate.middleware'
import { Router } from 'express'
const ProductRoutes = Router()
ProductRoutes.get('/getone', controller.GetOne)
  .get('/GetAll', authanticateUser, controller.GetAll)
  .get('/GetOne', authanticateUser, controller.GetOne)
  .post('/Create', authanticateUser, controller.Create)
  .delete('/Delete', authanticateUser, controller.DeleteOne)
  .patch('/UpdateOne', authanticateUser, controller.UpdataOne)

export default ProductRoutes
