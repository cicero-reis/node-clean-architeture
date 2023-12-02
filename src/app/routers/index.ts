import taskRouter from './taskRouter'
import { Express } from 'express'

const routes = (app: Express) => {
  app.use(taskRouter)
}

export default routes
