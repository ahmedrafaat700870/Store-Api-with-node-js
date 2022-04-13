import OrderStore from '../model/Order.model'
import { Request, Response, NextFunction } from 'express'
const OrderModel = new OrderStore()
export const GetOne = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const Order = await OrderModel.GetOne(req.params.id as unknown as number)
    res.status(200).json({
      status: 'Success',
      data: Order,
      message: 'Get Order',
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
    const Orders = await OrderModel.GetALLProduct()
    res.status(200).json({
      status: 'Success',
      data: Orders,
      message: 'GET All Orders',
    })
  } catch (error) {
    next(error)
  }
}
export const UpdateOne = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const Order_updated = await OrderModel.UpdateOne(req.body)
    res.status(200).json({
      status: 'Success',
      data: Order_updated,
      message: 'Updated Order',
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
    const Order_updated = await OrderModel.Create(req.body)
    res.status(200).json({
      status: 'Success',
      data: Order_updated,
      message: 'Created Order',
    })
  } catch (error) {
    next(error)
  }
}
export const DeleteOne = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const Order_updated = await OrderModel.DeleteOne(req.body.User_id)
    res.status(200).json({
      status: 'Success',
      data: Order_updated,
      message: 'Delted Order',
    })
  } catch (error) {
    next(error)
  }
}
