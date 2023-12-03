import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import { Express, NextFunction, Request, Response } from 'express'

const appMiddleWare = (app: Express): void => {
  if (process.env.NODE_ENV == 'development') {
    console.log('######################## Development ########################')
    app.use(morgan('dev'))
  }

  if (process.env.NODE_ENV == 'production') {
    console.log('######################## Production ########################')
  }

  app.use(cors())
  app.use(helmet())

  app.use((_req: Request, _res: Response, next: NextFunction) => {
    _req.headers['content-type'] = 'application/json'
    console.log('App Middleware')
    next()
  })
}

export default appMiddleWare
