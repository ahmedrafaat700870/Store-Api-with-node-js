import { Request, Response, NextFunction } from 'express'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Not_Found = (_: Request, res: Response, next: NextFunction) => {
  res.status(404).json('this site not founded')
}
export default Not_Found
