#!/usr/bin/env node
import app from './config/custom-express'
import { NextFunction, Request, Response } from 'express'
import AppError from './app/middleWare/error/AppError'
import requireJsonContent from './app/middleWare/request/requireJsonContent'
import requestLogger from './app/middleWare/request/requestLogger'
import errorHttp from './app/middleWare/error/errorHttp'
import taskMiddleWare from './app/middleWare/TaskMiddleWare'
import appMiddleWare from './app/middleWare/AppMiddleWare'
import MongoDB from './config/mongodb-connect'
;(async () => {
  MongoDB.getInstance().getConnectDB()

  const PORT = process.env.PORT || 3000

  appMiddleWare(app)

  app.use(requireJsonContent)
  app.use(requestLogger)
  app.use(taskMiddleWare())

  app.all('*', (req: Request, _res: Response, next: NextFunction) => {
    next(
      new AppError(400, `Could not find resource ${req.originalUrl} on server`)
    )
  })

  app.use(errorHttp)

  app.listen(PORT, () => console.log(`Server running: ${process.env.BASE_URL}`))
})()