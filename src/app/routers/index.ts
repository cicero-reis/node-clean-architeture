import taskRouter from './taskRouter'
import userRouter from './userRouter'
import { Express } from 'express'

const routes = (app: Express) => {
  app.use(userRouter)
  app.use(taskRouter)
}

export default routes
