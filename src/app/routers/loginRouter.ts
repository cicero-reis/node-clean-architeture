import express, { Request, Response, NextFunction, Router } from 'express'

const loginRouter = () => {
  const router: Router = express.Router()

  router.post(
    '/login',
    async (_req: Request, res: Response, next: NextFunction) => {
      try {
        res.status(200).json({
          token: 'jdcdsddsvsdvkdsdk'
        })
      } catch (err) {
        next()
      }
    }
  )

  return router
}

export default loginRouter
