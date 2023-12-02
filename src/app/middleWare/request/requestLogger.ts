import { NextFunction, Request, Response } from 'express'

const requestLogger = (req: Request, _res: Response, next: NextFunction) => {
  console.log(`LOGGER - Method:: ${req.method} url:: ${req.url}`)
  next()
}

export default requestLogger
