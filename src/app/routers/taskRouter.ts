import express, { Request, Response, NextFunction, Router } from 'express'
import TaskController from '../../core/controller/task/TaskController'
import AuthMiddleWare from '../middleWare/AuthMiddleWare'

const taskRouter = (taskController: TaskController) => {
  const router: Router = express.Router()

  router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const tasks = await taskController.index(req)
      res.status(200).json(tasks)
    } catch (err) {
      next(err)
    }
  })

  router.get(
    '/:id',
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const task = await taskController.show(req.params.id)
        res.status(200).json(task)
      } catch (err) {
        next(err)
      }
    }
  )

  router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const task = await taskController.store(req.body)

      res.status(201).json({
        status: 'success',
        message: 'Task created successfully',
        data: task
      })
    } catch (err) {
      next(err)
    }
  })

  router.put(
    '/:id',
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        await taskController.update(req.params.id, req.body)
        res.status(201).json({
          status: 'success',
          message: 'Task updated successfully'
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
        const task = await taskController.destroy(req.params.id)
        const message = task ? 'Task deleted successfully' : 'Not found'
        const status = task ? 200 : 404
        res.status(status).json({
          status: 'success',
          message: message
        })
      } catch (err) {
        next(err)
      }
    }
  )

  router.put(
    '/completed/:id',
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        await taskController.completed(req.params.id, req.body)
        res.status(201).json({
          status: 'success',
          message: 'Task completed successfully'
        })
      } catch (err) {
        next(err)
      }
    }
  )

  router.put(
    '/active/:id',
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        await taskController.active(req.params.id, req.body)
        res.status(201).json({
          status: 'success',
          message: 'Task active successfully'
        })
      } catch (err) {
        next(err)
      }
    }
  )

  const routerTaskGroup: Router = express.Router()

  routerTaskGroup.use((_req: Request, _res: Response, next: NextFunction) => {
    next()
  })

  routerTaskGroup.use('/tasks', AuthMiddleWare.auth, router)

  return routerTaskGroup
}

export default taskRouter
