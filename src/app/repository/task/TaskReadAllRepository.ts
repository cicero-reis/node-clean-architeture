import Task from '../../schema/taskShema'
import { ITaskEntity } from '../../../core/entity/task'
import { Request } from 'express'
import TaskFilter from './TaskFilter'

export class TaskReadAllRepository {
  static async findAll(req: Request): Promise<ITaskEntity[]> {
    try {
      const query = Task.find()
      return new TaskFilter(query, req).filter().sort().paginate().exec()
    } catch (err) {
      throw new Error(err)
    }
  }
}
