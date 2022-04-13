import { NextFunction, Request, Response } from 'express'
import { UserStore } from '../model/User.model'
import Jwt from 'jsonwebtoken'
import config from '../config'
import User from '../types/user.type'
const UserModel = new UserStore()
export const CreateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const Create: User = await UserModel.Create(req.body)
    res.status(200).json(Create)
  } catch (err) {
    next(err)
  }
}
export const GetOne = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const User: User = await UserModel.GetOne(
      parseInt(req.params.id as unknown as string, 10)
    )
    res.status(200).json({
      status: 'Success',
      data: User,
      message: 'Get User',
    })
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
    const Users: User[] = await UserModel.GetAll()
    res.status(200).json({
      status: 'Success',
      data: Users,
      message: 'Get All Users',
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
    const User: User = await UserModel.UpdateOne(req.body)
    res.status(200).json({
      status: 'Success',
      data: User,
      message: 'Updated User',
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
    const User: User = await UserModel.DeleteOne(req.body.id)
    res.status(200).json({
      status: 'Success',
      data: User,
      message: 'Delete User',
    })
  } catch (error) {
    next(error)
  }
}
export const authanticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await UserModel.authanticate(
      req.body._password,
      req.body._gmail
    )
    const token = Jwt.sign({ user }, config.Tocken_Secret as unknown as string)
    if (!user) {
      return res.status(401).json('faild to login')
    }
    return res.status(200).json({ User: user, token: token })
  } catch (error) {
    next(error)
  }
}
export const GetOrderByUserID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await UserModel.GetOrderByUserId(req.body.id)
    res.status(200).json({
      data: data,
    })
  } catch (error) {
    next(error)
  }
}
export const GetProductByUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await UserModel.GetProductByUserId(req.body.id)
    res.status(200).json({
      data: data,
    })
  } catch (error) {
    next(error)
  }
}
