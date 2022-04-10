import { Request, Response, NextFunction } from 'express'
import Error from '../interface/Error.interface'
const HendleError = (
  err: Error,
  _: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  const status = err.status || 404
  const message = err.message || 'ohh you can not viste this site'
  res.status(status).json({ message: message })
}
export default HendleError
