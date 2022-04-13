import ProductStore from '../model/Product.model'
import { Request, Response, NextFunction } from 'express'
const ProductModel = new ProductStore()
export const GetOne = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const Product = await ProductModel.GetOne(
      req.params.id as unknown as number
    )
    res
      .status(200)
      .json({ status: 'Success', data: Product, message: 'get one' })
  } catch (error) {
    next(error)
  }
}
export const GetAll = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const Product = await ProductModel.GetAll()
    res
      .status(200)
      .json({ status: 'Success', data: Product, message: 'get all' })
  } catch (error) {
    next(error)
  }
}
export const UpdataOne = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const Product = await ProductModel.UpdateOne(req.body)
    res
      .status(200)
      .json({ status: 'Success', data: Product, message: 'Update one' })
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
    const Product = await ProductModel.DelteOne(req.body.id)
    res
      .status(200)
      .json({ status: 'Success', data: Product, message: 'Delete one' })
  } catch (error) {
    next(error)
  }
}
export const Create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const Product = await ProductModel.Create(req.body)
    res.status(200).json({
      status: 'Success',
      data: Product,
      message: 'Create new Product',
    })
  } catch (error) {
    next(error)
  }
}
