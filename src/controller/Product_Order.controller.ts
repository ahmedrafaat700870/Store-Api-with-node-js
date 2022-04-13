import Prodcut_Order_Store from '../model/Product_Order.model'
import { Request, Response, NextFunction } from 'express'
const ProdcutOrderModel = new Prodcut_Order_Store()
export const GetOne = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const Product_Order = await ProdcutOrderModel.GetOrder(
      req.params.id as unknown as number
    )
    res.status(200).json({
      status: 'Success',
      data: Product_Order,
      message: 'Get One',
    })
  } catch (error) {
    next(error)
  }
}
export const GetAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const Product_Orders = await ProdcutOrderModel.GetAllOrders()
    res.status(200).json({
      status: 'Success',
      data: Product_Orders,
      message: 'Get All',
    })
  } catch (error) {
    next(error)
  }
}
export const CreateOne = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const Product_Order = await ProdcutOrderModel.Create(req.body)
    res.status(200).json({
      status: 'Success',
      data: Product_Order,
      message: 'create One',
    })
  } catch (error) {
    next(error)
  }
}
export const Update = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const Product_Order = await ProdcutOrderModel.Update(req.body)
    res.status(200).json({
      status: 'Success',
      data: Product_Order,
      message: 'Update One',
    })
  } catch (error) {
    next(error)
  }
}
export const Delete = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const Product_Order = await ProdcutOrderModel.Delete(req.body.id)
    res.status(200).json({
      status: 'Success',
      data: Product_Order,
      message: 'Delete One',
    })
  } catch (error) {
    next(error)
  }
}
