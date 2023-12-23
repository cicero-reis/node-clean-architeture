import { Express } from 'express'
import loginRouter from './loginRouter'
import taskRouter from './taskRouter'
import userRouter from './userRouter'

const routes = (app: Express) => {
  app.use(loginRouter)
  app.use(userRouter)
  app.use(taskRouter)
}

export default routes
