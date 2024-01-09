import express, { Request, Response, NextFunction, Router } from 'express'
import UserController from '../../core/controller/user/UserController'
import AuthMiddleWare from '../middleWare/AuthMiddleWare'

const userRouter = (userController: UserController) => {
  const router: Router = express.Router()

  router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await userController.index(req)
      res.status(200).json(users)
    } catch (err) {
      next(err)
    }
  })

  router.get(
    '/:id',
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const user = await userController.show(req.params.id)
        if (user) res.status(200).json(user)
        res.status(400).json({
          status: 'error',
          message: 'Not Found'
        })
      } catch (err) {
        next(err)
      }
    }
  )

  router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await userController.store(req.body)

      res.status(201).json({
        status: 'success',
        message: 'User created successfully',
        data: user
      })
    } catch (err) {
      next(err)
    }
  })

  router.put(
    '/:id',
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const user = await userController.update(req.params.id, req.body)
        const status = user ? 201 : 400
        res.status(status).json({
          status: user ? 'success' : 'error',
          message: user ? 'User updated successfully' : 'Not found'
        })
      } catch (err) {
        next(err)
      }
    }
  )

  router.delete(
    '/:id',
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const user = await userController.destroy(req.params.id)
        const status = user ? 200 : 404
        res.status(status).json({
          status: user ? 'success' : 'error',
          message: user ? 'User deleted successfully' : 'Not found'
        })
      } catch (err) {
        next(err)
      }
    }
  )

  const routerUserGroup: Router = express.Router()

  routerUserGroup.use((_req: Request, _res: Response, next: NextFunction) => {
    next()
  })

  routerUserGroup.use('/users', AuthMiddleWare.auth, router)

  return routerUserGroup
}

export default userRouter
