import { Router } from 'express'
import User from './api/user.routes'
import ProductRoutes from './api/Product.routes'
import OrderRoutes from './api/Order.routes'
import ProductOrderRoutes from './api/Product_Order.routes'
import authanticateUser from '../middleware/authanticate.middleware'
const route = Router()
route
  .use('/user', User)
  .use('/Product', ProductRoutes)
  .use('/Order', authanticateUser, OrderRoutes)
  .use('/Prodcut_Order', authanticateUser, ProductOrderRoutes)
export default route
