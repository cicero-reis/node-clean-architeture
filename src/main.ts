#!/usr/bin/env node
import app from './config/custom-express'
import { NextFunction, Request, Response } from 'express'
import AppError from './app/middleWare/error/AppError'
import requireJsonContent from './app/middleWare/request/requireJsonContent'
import requestLogger from './app/middleWare/request/requestLogger'
import errorHttp from './app/middleWare/error/errorHttp'
import taskMiddleWare from './app/middleWare/TaskMiddleWare'
import userMiddleWare from './app/middleWare/UserMiddleWare'
import appMiddleWare from './app/middleWare/AppMiddleWare'
import MongoDB from './config/mongodb-connect'
import swaggerUi from 'swagger-ui-express'
import * as swaggerDocument from './config/swagger.json'
import { initFileLogs, successLogger } from './config/logs'
;(async () => {
  MongoDB.getInstance().getConnectDB()

  initFileLogs()

  const PORT = process.env.PORT || 3000

  appMiddleWare(app)

  app.use(requireJsonContent)
  app.use(requestLogger)

  app.use((_req, res, next) => {
    res.on('finish', () => {
      if (res.statusCode == 200 && res.statusCode <= 226) {
        successLogger.info(
          JSON.stringify({
            stausCode: res.statusCode,
            statusMessage: res.statusMessage
          })
        )
      }
    })
    next()
  })

  app.use(userMiddleWare())
  app.use(taskMiddleWare())

  app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

  app.all('*', (req: Request, _res: Response, next: NextFunction) => {
    next(
      new AppError(400, `Could not find resource ${req.originalUrl} on server`)
    )
  })

  app.use(errorHttp)

  app.listen(PORT, () => console.log(`Server running: ${process.env.BASE_URL}`))
})()
