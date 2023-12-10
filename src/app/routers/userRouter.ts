import express, { Request, Response, NextFunction } from 'express'
import UserController from '../../core/controller/UserController'

const userRouter = (userController: UserController) => {
  const router = express.Router()

  router.get(
    '/users',
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const users = await userController.index(req)
        res.status(200).json(users)
      } catch (err) {
        next(err)
      }
    }
  )

  router.get(
    '/users/:id',
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const user = await userController.show(req.params.id)
        res.status(200).json(user)
      } catch (err) {
        next(err)
      }
    }
  )

  router.post(
    '/users',
    async (req: Request, res: Response, next: NextFunction) => {
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
    }
  )

  router.put(
    '/users/:id',
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        await userController.update(req.params.id, req.body)
        res.status(201).json({
          status: 'success',
          message: 'User updated successfully'
        })
      } catch (err) {
        next(err)
      }
    }
  )

  router.delete(
    '/users/:id',
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const user = await userController.destroy(req.params.id)
        const message = user ? 'User deleted successfully' : 'Not found'
        const status = user ? 200 : 404
        res.status(status).json({
          status: 'success',
          message: message
        })
      } catch (err) {
        next(err)
      }
    }
  )

  return router
}

export default userRouter
