import express, { Request, Response, NextFunction, Router } from 'express'
import LoginController from '../../core/controller/auth/LoginController'

const loginRouter = (loginController: LoginController) => {
  const router: Router = express.Router()

  router.post(
    '/login',
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const result = await loginController.login(req.body)
        if (!result) {
          throw new Error('Oops! something went very wrong')
        }

        const resultValue = JSON.stringify(result)
        const data = JSON.parse(resultValue)

        res.set('Authorization', data.acessToken)

        res.cookie('jwt', data.acessToken, {
          expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
          httpOnly: true,
          secure: true
        })

        res.status(200).json({ refreshToken: data.refreshToken })
      } catch (err) {
        next(err)
      }
    }
  )

  return router
}

export default loginRouter
