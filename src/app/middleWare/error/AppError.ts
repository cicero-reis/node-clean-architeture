export default class AppError extends Error {
  statusCode: number
  isOperational: true

  constructor(statusCode: number, message: string) {
    super(message)
    this.name = Error.name
    this.statusCode = statusCode
    this.isOperational = true
    Error.captureStackTrace(this, this.constructor)
  }
}
