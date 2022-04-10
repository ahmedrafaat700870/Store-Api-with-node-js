import { NextFunction, Request, Response } from 'express'
import Jwt from 'jsonwebtoken'
import config from '../config'
import Error from '../interface/Error.interface'
const hendleAuthorizedError = (next: NextFunction) => {
  const err: Error = new Error('Login Error please train again !')
  err.status = 401
  next(err)
}
const authanticateUser = (req: Request, res: Response, Next: NextFunction) => {
  try {
    const AuthHeader: string = req.get('Authorization') as unknown as string
    const autherduser = Jwt.verify(
      AuthHeader,
      config.Tocken_Secret as unknown as string
    )
    if (autherduser) {
      Next()
    } else {
      hendleAuthorizedError(Next)
    }
  } catch (error) {
    hendleAuthorizedError(Next)
  }
}
export default authanticateUser
