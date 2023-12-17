import { NextFunction, Request, Response } from 'express'
import AppError from './AppError'
import { errorLogger } from '../../../config/logs'

const errorHttp = (
  error: AppError,
  _request: Request,
  response: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction
) => {
  response.header('Content-Type', 'application/json')
  const status = error.statusCode || 400

  if (process.env.NODE_ENV == 'development') {
    response.status(status).json({
      name: error.name,
      error: error,
      message: error.message,
      stack: error.stack
    })

    errorLogger.error(
      JSON.stringify({
        name: error.name,
        error: error,
        message: error.message,
        stack: error.stack
      })
    )
  }

  if (process.env.NODE_ENV == 'production') {
    response.status(status).json({
      name: error.name,
      error: error.message
    })

    response.status(500).json({
      status: 'error',
      message: 'Oops! something went very wrong'
    })
  }
}

export default errorHttp
