import * as controller from '../../controller/user.controller'
import { Router } from 'express'
import authanticateUser from '../../middleware/authanticate.middleware'
const User = Router()
User.get('/GetOne', authanticateUser, controller.GetOne)
  .get('/GetAll', authanticateUser, controller.GetAll)
  .post('/CreateUser', controller.CreateUser)
  .patch('/UpdateOne', authanticateUser, controller.UpdateOne)
  .delete('/DeleteOne', authanticateUser, controller.DeleteOne)
  .post('/authanticated', controller.authanticate)
export default User
