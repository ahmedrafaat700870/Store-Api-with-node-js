import * as controller from '../../controller/user.controller'
import { Router } from 'express'
import authanticateUser from '../../middleware/authanticate.middleware'
const User = Router()
User.get('/GetOne/:id', authanticateUser, controller.GetOne)
  .get('/GetAll', authanticateUser, controller.GetAll)
  .get('/GetOrderByUserId', authanticateUser, controller.GetOrderByUserID)
  .get('/GetProductByUserId', authanticateUser, controller.GetProductByUserId)
  .post('/CreateUser', controller.CreateUser)
  .patch('/UpdateOne', authanticateUser, controller.UpdateOne)
  .delete('/DeleteOne', authanticateUser, controller.DeleteOne)
  .post('/authanticated', controller.authanticate)
export default User
